"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWorkouts = void 0;
// Express
const express_1 = require("express");
// Express
// Data Generator
const WorkoutDataGenerator_1 = require("../../../Generator/Workouts/WorkoutDataGenerator");
// Data Generator
exports.getAllWorkouts = (0, express_1.Router)();
exports.getAllWorkouts.get("/", (_, res) => {
    const workouts = (0, WorkoutDataGenerator_1.WorkoutDataGenerator)(10);
    res.status(200).send(workouts);
});
