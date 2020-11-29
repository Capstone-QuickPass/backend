/* tslint:disable */
import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";

import { DataLog, Facility, Person, User } from "./model/model";


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

/*
*   Get list of data logs (midterm)
*/
app.get("/personlist", (req, res) => {
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
app.post( "/newPerson", ( req, res ) => {

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
*   Get a facility by facility id
*/
app.get("/facility/:id", (req, res) => {
    Facility.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a facility
*/
app.get("/facility/new", (req, res) => {
    const newFacility = new Facility(req.body);
    newFacility.save((err) => {
        if (err) throw err;
    });
    return res.send(newFacility._id);
});

/*
*   Get a user by user id
*/
app.get("/user/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a new user
*/
app.get("/user/new", (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err) => {
        if (err) throw err;
    });
    return res.send(newUser._id);
});

/*
*   Get a data log by data log id
*/
app.get("/datalog/by/id/:id", (req, res) => {
    DataLog.findOne({ _id: req.params.id }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Get a list of data log by facility id
*/
app.get("/datalog/by/facility/:facilityId", (req, res) => {
    DataLog.find({ facility: req.params.facilityId }, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

/*
*   Create a data log
*/
app.get("/datalog/new", (req, res) => {
    const newDataLog = new DataLog(req.body);
    newDataLog.save((err) => {
        if (err) throw err;
    });
    return res.send(newDataLog._id);
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
} );