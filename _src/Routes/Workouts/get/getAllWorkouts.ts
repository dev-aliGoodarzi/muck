// Express
import { Router } from "express";
// Express

// Data Generator
import { WorkoutDataGenerator } from "../../../Generator/Workouts/WorkoutDataGenerator";
// Data Generator

export const getAllWorkouts = Router();

getAllWorkouts.get("/", (_, res) => {
  const workouts = WorkoutDataGenerator(10);
  res.status(200).send(workouts);
});
