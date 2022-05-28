'use strict'

import express from 'express';
import 'dotenv/config';
import asynchandler from 'express-async-handler'
import * as exercises from './exercise_model.mjs'

const app = express();
app.use(express.json());
const PORT = process.env.PORT

// CODE HERE !!!
/*
    Creates a new exercise via POST request.
 */
app.post("/exercises", (req, res, next) => {
    let name = req.body.name
    let reps = req.body.reps
    let weight = req.body.weight
    let unit = req.body.unit
    let date = req.body.date

    let error = validateInput(req.body)

    if (date === undefined || !isDateValid(date) || typeof date !== 'string') {error += "Date is missing or invalid. \n"}

    if (error) {
        error = "Could not create exercise for the following reasons:\n" + error
        console.log(error)
        res.setHeader('content-type', 'application/json')
        res.status(400).send({Error: "Invalid request"})
    } else {
        exercises.createExercise(name, reps, weight, unit, date)
        .then(response => {
            res.setHeader('content-type', 'application/json')
            res.status(201).send(response)
        })
        .catch(error => res.status)
    }
})

app.get("/exercises", (req, res, next) => {
    exercises.retrieveExercises()
    .then(response => {
        res.setHeader('content-type', 'application/json')
        res.status(200).send(response)
    })
    .catch(error => next(error))
})

app.get("/exercises/:_id", (req, res, next) => {
    let id = req.params._id
    if (id) {
        let filter = {}
        filter._id = id
        exercises.retrieveExerciseById(filter)
        .then(response => {
            //console.log(`getting: ${response}`)
            if (response.length === 0) {
                res.setHeader('content-type', 'application/json')
                res.status(404).send({Error: "Not found"})
            } else {
                res.setHeader('content-type', 'application/json')
                res.status(200).send(response[0])
            }
        })
        .catch(error => console.log('yeah'))
    }
})

app.put("/exercises/:_id", (req, res, next) => {
    let error = validateInput(req.body)

    if (error) {
        res.setHeader('content-type', 'application/json')
        res.status(400).send({Error: "Invalid request"})
    }

    let id = req.params._id
    if (validateInput(req.body) === "") {
        exercises.updateExercise(id, req.body)
        .then(response => {
            res.setHeader('content-type', 'application/json')
            res.status(200).send(response)
        })
        .catch(error => console.log(error))
    } else {
        res.setHeader('content-type', 'application/json')
        res.status(404).send({Error: "Not found"})
    }
})

app.delete("/exercises/:_id", (req, res, next) => {
    let id = req.params._id
    if (id) {
        let filter = {}
        filter._id = id
        exercises.retrieveExerciseById(filter)
        .then(response => {
            console.log(response)
            if (response.length === 0) {
                res.setHeader('content-type', 'application/json')
                res.status(404).send({Error: "Not found"})
            }
        })
        .catch(error => console.log('yeah'))
    
        exercises.deleteExercise(id)
        .then(response => res.status(204).send())
        .catch(error => console.log(error))
    }
})

app.use((err, req, res, next) => {
    res.status(500).send(`There was an unhandled error: \n${err}`)
})

function validateInput(body) {
    let error = "";
    let name = body.name
    let reps = body.reps
    let weight = body.weight
    let unit = body.unit
    let date = body.date

    if (name === undefined) {error += "Name is missing. \n"}
    if (typeof name !== 'string') {error += "Name is not a string. \n"}

    if (reps === undefined) {error += "Number of reps is missing. \n"}
    if (reps <= 0 || !Number.isInteger(reps)) {error += "Reps is less than 0 or not an integer. \n"}
    
    if (weight === undefined) {error += "Weight is missing. \n"}
    if (weight <= 0 || !Number.isInteger(weight)) {error += "Weight is less than 0 or not an integer. \n"}
    
    if (unit === undefined) {error += "Units are missing. \n"}
    else if (unit !== "kgs" && unit !== "lbs") {error += "Unit is not a string or wrong type. \n"}

    if (date === undefined || !isDateValid(date) || typeof date !== 'string') {error += "Date is missing or invalid. \n"}
    
    return error
}

function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} :)...`)
})