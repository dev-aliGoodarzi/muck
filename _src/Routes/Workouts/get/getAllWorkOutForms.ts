// Express
import { Router } from "express";
// Express

// Data Generator
import { WorkoutDataGenerator } from "../../../Generator/Workouts/WorkoutDataGenerator";
import { I_FormsInterface } from "../../../Interfaces/Forms/FormsInterface";
// Data Generator

export const getAllWorkOutForms = Router();

getAllWorkOutForms.get("/forms/:workoutId", (req, res) => {
  const x: I_FormsInterface = {
    formId: 1,
    formData: [
      {
        title: {
          persian: "",
          english: "",
        },
        cssClass: "",
        description: "",
        formItemId: "1",
        value: {
          done: "10",
          planned: "50",
        },
      },
    ],
  };
});
