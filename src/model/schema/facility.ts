import { Schema } from "mongoose";
import mongoose from "mongoose";

const facility = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    key: {
        type: Schema.Types.Number,
        required: true,
        validate: {
            validator(num: Schema.Types.Number) {
                return Number.isInteger(num);
            },
            message: "Invalid key!"
        }
    },
    address: {
        streetNumber: {
            type: Schema.Types.Number,
            required: true,
            validate: {
                validator(num: Schema.Types.Number) {
                    return Number.isInteger(num);
                },
                message: "Invalid street number!"
            }
        },
        unitNumber:  {
            type: Schema.Types.Number,
            validate: {
                validator(num: Schema.Types.Number) {
                    return Number.isInteger(num);
                },
                message: "Invalid unit number!"
            }
        },
        streetName: {
            type: Schema.Types.String,
            required: true
        },
        postalCode: {
            type: Schema.Types.String,
            required: true
        },
        province: {
            type: Schema.Types.String,
            required: true
        },
        country: {
            type: Schema.Types.String,
            required: true
        }
    },
    isCapacitySet: {
        type: Schema.Types.Boolean,
        required: true
    },
    isValidatingQR: {
        type: Schema.Types.Boolean,
        required: true
    },
    isValidatingMask: {
        type: Schema.Types.Boolean,
        required: true
    },
    isValidatingTemperature: {
        type: Schema.Types.Boolean,
        required: true
    },
    isValidatingCovidApp: {
        type: Schema.Types.Boolean,
        required: true
    },
    capacity: {
        type: Schema.Types.Number,
        validate: {
            validator(num: Schema.Types.Number) {
                return Number.isInteger(num);
            },
            message: "Invalid capacity number!"
        }
    },
    currentCapacity: {
        type: Schema.Types.Number,
        required: true,
        validate: {
            validator(num: Schema.Types.Number) {
                return Number.isInteger(num);
            },
            message: "Invalid capacity number!"
        }
    },
    employees: [
        {
            employee: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            isAdmin: {
                type: Schema.Types.Boolean,
                required: true
            }
        }
    ]
});

export default facility;