import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";

import { DataLog, Facility, User } from "./model/model";

mongoose.set('useFindAndModify', false);

const app = express();
const port: number = 8080; // default port to listen

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

app.get("/facility/:facilityKey", (req, res) => {
    const facilityKey = req.params.facilityKey;
    let facilityID: mongoose.Types.ObjectId;

    // if this facility exists, then find key
    // otherwise make a facility
    Facility.findOne({
        key: facilityKey
    }).exec((err, result) => {
        if (err) {
            facilityID = new mongoose.Types.ObjectId();
            const newFacility = new Facility({
                _id: facilityID,
                key: facilityKey,
                address: {
                    streetNumber: 1,
                    streetName: "Yemen St",
                    postalCode: "Y3M 3NS",
                    province: "YM",
                    country: "Yemen"
                },
                isCapacitySet: false,
                isValidatingQR: false,
                isValidatingMask: false,
                isValidatingTemperature: false,
                isValidatingCovidApp: false,
                currentCapacity: 0,
            });

            newFacility.save((error) => {
                if (err) throw err;
                console.log("New facility created with key " + facilityKey);
            });
        }
        else {
            facilityID = result._id;
        }
    });
    // create new person
    const userID = new mongoose.Types.ObjectId()
    const user = new User({
        _id: userID,
        name: {
            firstName: "New",
            lastName: "User"
        },
        isEmployee: false,
        isAdmin: false,
        facility: facilityID
    });

    // create data log
    const dataLog = new DataLog({
        _id: new mongoose.Types.ObjectId(),
        person: userID,
        facility: facilityID,
        isQRAuth: false,
        isMasked: false,
        isCovidAppTraced: false
    });

    dataLog.save((err) => {
        if (err) throw err;
        Facility.findOneAndUpdate({
            _id: facilityID,
            key: facilityKey
        }, { $inc: { currentCapacity: 1 } }).exec();
    })
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );