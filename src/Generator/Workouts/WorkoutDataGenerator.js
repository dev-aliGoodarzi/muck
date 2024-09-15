"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutDataGenerator = void 0;
const WorkoutDataGenerator = (limit) => {
    const res = [];
    for (let i = 0; i <= limit - 1; i++) {
        res.push({
            id: i,
            workout_type_id: i * (limit - 1) * 2,
            user_id: i * (limit - 1) * 3,
            created_by: i * (limit - 1) * 4,
            title: "نام" + i,
            code: "code " + i,
            workout_day: "2024-06-04",
            workout_day_en: "",
            time_stamp: "2024-06-04",
            start_time: "2024-06-04",
            start_time_planned: "2024-06-04",
            completed: "",
            description: "",
            distance: "",
            distance_planned: "",
            total_time: "",
            total_time_planned: "",
            elapsed_time: "",
            power_average: "",
            heart_rate_minimum: "",
            heart_rate_maximum: "",
            heart_rate_average: "",
            work: "",
            calories: "",
            total_ascent: "",
            total_descent: "",
            calories_planned: "",
            np: "",
            tss_actual: "",
            tss_planned: "",
            atl: "",
            ctl: "",
            tsb: "",
            if_actual: "",
            vi: "",
            if_planned: "",
            rpe: "",
            feeling: "",
            tags: "",
            structure: "",
            fit_file: "",
            order_on_day: "",
            order_on_plan: "",
            created_at: "2024-06-28T10:11:25.000000Z",
            updated_at: "2024-05-28T10:11:25.000000Z",
        });
    }
    return res;
};
exports.WorkoutDataGenerator = WorkoutDataGenerator;
