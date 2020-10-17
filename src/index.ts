/* tslint:disable */
import express from "express";
import mongoose from "mongoose";
import { mongoConnectionUri } from "./assets/mongoassets";


const midterm = new mongoose.Schema({
    time: {
        type: mongoose.Schema.Types.String
        },
    score: {
        type: mongoose.Schema.Types.String
        },
});

const Midterm = mongoose.model('Midterm', midterm);

const app = express();
const port: number = 8080; // default port to listen
app.use(express.json())
app.use(express.urlencoded({extended: true }))

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

app.post( "/newPerson", ( req, res ) => {
    console.log(req.body)
    const mid = new Midterm(req.body)
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
    console.log( `server started at http://localhost:${ port }` );
} );