import { Schema } from "mongoose";
import mongoose from "mongoose";

const dataLog = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    createdAt: {
        type: Schema.Types.Date,
        immutable: true
    },
    updatedAt: {
        type: Schema.Types.Date,
        immutable: true
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: 'Facility'
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
        type: Schema.Types.Number
    },
    isCovidAppTraced: {
        type: Schema.Types.Boolean,
        required: true
    }
}, { timestamps: true });

export default dataLog;