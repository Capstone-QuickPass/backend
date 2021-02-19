/* tslint:disable */
import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";

import { DataLog, Facility, Person, User } from "./model/model";
import { DatalogRouter, FacilityRouter, MAIN_STRINGS, UserRouter } from "./routes";


const cors = require('cors');


const app = express();
const port: number = 8080; // default port to listen

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:5000000}));

const uri: string = mongoConnectionUri;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected!");
}).catch((err: any) => console.log(err));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
});

// using router for all facility endpoints
app.use(MAIN_STRINGS.FACILITY, FacilityRouter);

// using router for all user endpoints
app.use(MAIN_STRINGS.USER, UserRouter);

// using router for all datalog endpoints
app.use(MAIN_STRINGS.DATALOG, DatalogRouter);

/*
*   Get list of data logs (midterm)
*/
app.get(MAIN_STRINGS.PERSONLIST, (req, res) => {
    Person.find({}, function(err, result) {
        if (err) {
            throw err;
        }
        else {
            const resBody = {
                personList: result,
                personListSize: result.length
            };
            res.json(resBody);
        }
      });
})

/*
*   Create a data log (midterm)
*/
app.post( MAIN_STRINGS.NEWPERSON, ( req, res ) => {

    console.log(req.body)
    const mid = new Person(req.body)

    mid.save(function(err){
        if (err) {
            throw err;
        }
    });
    return res.send(mid._id)
});

/*
*   Get User List
*/
app.get(MAIN_STRINGS.USERLIST, (req, res) => {
    User.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            const resBody = {
                userList: result
            };
            res.json(resBody);
        }
    });
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
} );