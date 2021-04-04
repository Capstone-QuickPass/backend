import { Schema } from "mongoose";
import mongoose from "mongoose";

const alert = new mongoose.Schema({
    time: {
        type: mongoose.Schema.Types.String
        },
    type: {
        type: mongoose.Schema.Types.String
    }

});

export default alert;