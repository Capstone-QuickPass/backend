import { Schema } from "mongoose";

const mongoose = require("mongoose");

const dataLog = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    createdAt: {
        type: Schema.Types.Date,
        immutable: true,
        required: true
    },
    updatedAt: {
        type: Schema.Types.Date,
        immutable: true,
        required: true
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: 'Facility',
        required: true
    },
    isQRAuth: {
        type: Schema.Types.Boolean,
        required: true
    },
    isMasked: {
        type: Schema.Types.Boolean,
        required: true
    },
    temperature: {
        type: Schema.Types.Boolean,
        required: true
    },
    isCovidAppTraced: {
        type: Schema.Types.Boolean,
        required: true
    }
}, { timestamps: true });

export default dataLog;