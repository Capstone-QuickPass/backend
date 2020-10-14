import { Schema } from "mongoose";

const mongoose = require("mongoose");

const user = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        firstName: {
            type: Schema.Types.String,
            required: true
        },
        lastName: Schema.Types.String
    },
    isEmployee: {
        type: Schema.Types.Boolean,
        required: true
    },
    isAdmin: {
        type: Schema.Types.Boolean,
        required: true
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: 'Facility'
    }
});

export default user;