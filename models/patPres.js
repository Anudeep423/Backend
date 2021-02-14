const { TooManyRequests } = require("http-errors");
const mongoose = require("mongoose");   
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
//const patSchema = require('./patientModel').patientSchema;

const patPresMod = new Schema ({

    UID: {
        type: String,
        required : true
    },

    medDetails:{
        type : Object,
        required : true
    }}, {timestamps: true});

const patPresModel = mongoose.model('prescriptions', patPresMod);

module.exports = patPresModel;