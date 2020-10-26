import { Schema } from "mongoose";
import mongoose from "mongoose";

const facility = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    key: {
        type: Schema.Types.Number,
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
            type: Schema.Types.String
        },
        postalCode: {
            type: Schema.Types.String
        },
        province: {
            type: Schema.Types.String
        },
        country: {
            type: Schema.Types.String
        }
    },
    isCapacitySet: {
        type: Schema.Types.Boolean
    },
    isValidatingQR: {
        type: Schema.Types.Boolean
    },
    isValidatingMask: {
        type: Schema.Types.Boolean
    },
    isValidatingTemperature: {
        type: Schema.Types.Boolean
    },
    isValidatingCovidApp: {
        type: Schema.Types.Boolean
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
                ref: 'User'
            },
            isAdmin: {
                type: Schema.Types.Boolean
            }
        }
    ]
});

export default facility;