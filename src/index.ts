import express from "express";
import mongoose from "mongoose";

const app = express();
const port: number = 8080; // default port to listen

const uri: string = "mongodb+srv://QuickPassBoys:bigchungus123@cluster0.jsf18.mongodb.net/QuickPass?retryWrites=true&w=majority";

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

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );