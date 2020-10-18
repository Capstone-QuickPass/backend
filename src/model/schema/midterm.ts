import { Schema } from "mongoose";
import mongoose from "mongoose";

const midterm = new mongoose.Schema({
    time: {
        type: mongoose.Schema.Types.String
        },
    score: {
        type: mongoose.Schema.Types.String
        },
});

export default midterm;