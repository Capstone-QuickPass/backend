import { Schema } from "mongoose";

const mongoose = require("mongoose");

const facility = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    address: {
        streetNumber: {
            type: Schema.Types.Number,
            required: true,
            validate: {
                validator: function(num: Schema.Types.Number) {
                    return Number.isInteger(num);
                },
                message: "Invalid street number!"
            }
        },
        unitNumber:  {
            type: Schema.Types.Number,
            validate: {
                validator: function(num: Schema.Types.Number) {
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
            required: true,
            validate: {
                validator: function(text: Schema.Types.String) {
                    const str: String = new String(text);
                    return str.length === 6 || str.length === 7;
                },
                message: "Invalid postal code!"
            }
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
            validator: function(num: Schema.Types.Number) {
                return Number.isInteger(num);
            },
            message: "Invalid capacity number!"
        }
    },
    currentCapacity: {
        type: Schema.Types.Number,
        required: true,
        validate: {
            validator: function(num: Schema.Types.Number) {
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