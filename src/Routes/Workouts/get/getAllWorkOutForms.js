"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWorkOutForms = void 0;
// Express
const express_1 = require("express");
// Data Generator
exports.getAllWorkOutForms = (0, express_1.Router)();
exports.getAllWorkOutForms.get("/forms/:workoutId", (req, res) => {
    const x = {
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
