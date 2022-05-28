'use strict'

import mongoose from 'mongoose';
import 'dotenv/config'
import { userInfo } from 'os';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
);

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
})
const Exercise = mongoose.model("Exercise", exerciseSchema)

const createExercise = async (name, reps, weight, unit, date) => {
    const newExercise = new Exercise({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date
    })
    return newExercise.save();
}

const retrieveExercises = async () => {
    const query = Exercise.find()
    return query.exec();
}

const retrieveExerciseById = async (id) => {
    return Exercise.find(id).exec()
}

const updateExercise = async (id, updates) => {
    return Exercise.findByIdAndUpdate(id, updates)
}

const deleteExercise = async (id) => {
    return Exercise.findByIdAndDelete(id)
}

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB with Mongoose... :)")
})

export {createExercise, retrieveExercises, retrieveExerciseById, updateExercise, deleteExercise }