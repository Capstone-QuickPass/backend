/* tslint:disable */
import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";
import { DataLog, Facility, Midterm, User } from "./model/model";

const cors = require('cors');


const app = express();
const port: number = 8080; // default port to listen
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
    Midterm.find({}, function(err, result) {
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
    const mid = new Midterm(req.body)
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
*   Get a user by user id
*/
app.get("/userList", (req, res) => {
    User.find({}, function(err, result) {
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
})

/*
*   Create a new user
*/
app.post("/user/new", (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err) => {
        if (err) throw err;
    });
    return res.send(newUser._id);
});

/*
*   Get User List
*/
app.get("/userList", (req, res) => {
    User.find({}, function(err, result) {
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
})

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