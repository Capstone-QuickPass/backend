/* tslint:disable */
import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";
import { Person } from "./model/model";

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
} );

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

app.post( "/newPerson", ( req, res ) => {
    console.log(req.body)
    const mid = new Person(req.body)
    mid.save(function(err){
        if (err) {
            throw err;
        }
        console.log('INSERTED!');
    });
    return res.send(mid._id)
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
} );