import { Schema } from "mongoose";
import mongoose from "mongoose";

const user = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        firstName: {
            type: Schema.Types.String
        },
        lastName: Schema.Types.String
    },
    isEmployee: {
        type: Schema.Types.Boolean
    },
    isAdmin: {
        type: Schema.Types.Boolean
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: 'Facility'
    }
});

export default user;