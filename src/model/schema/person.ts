import { Schema } from "mongoose";
import mongoose from "mongoose";

const person = new mongoose.Schema({
    time: {
        type: mongoose.Schema.Types.String
        },
    score: {
        type: mongoose.Schema.Types.String
        },
    mask_status: {
            type: mongoose.Schema.Types.String
            },
    photo: {
        type: mongoose.Schema.Types.Array
        },

});

export default person;