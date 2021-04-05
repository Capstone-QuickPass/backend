import { Schema } from 'mongoose';
import mongoose from 'mongoose';

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
    thermalPhoto: {
        type: mongoose.Schema.Types.Array
        },
    individualPhoto: {
            type: mongoose.Schema.Types.Array
        },
    tempVulnerable: {
        type: mongoose.Schema.Types.Boolean
        },
    tempValue: {
            type: mongoose.Schema.Types.String
            },

    datetime: {
            type: mongoose.Schema.Types.String
        },

});


person.set('toJSON', {
	virtuals: true,
});

export default person;
