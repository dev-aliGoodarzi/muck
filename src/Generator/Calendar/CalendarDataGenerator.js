"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarDataGenerator = void 0;
// Interfaces
const constants_1 = require("../../Constants/constants");
// Interfaces
// Utils
const daysDiffrence_1 = require("../../Utils/daysDiffrence");
const randomNumberGenerator_1 = require("./randomNumberGenerator");
// Utils
const CalendarDataGenerator = (start, end) => {
    const days = (0, daysDiffrence_1.daysDifference)(start, end);
    const activities = [];
    const events = [];
    const userMetrics = [];
    const summary = {
        totalTime: 100,
        totalDistance: 100,
        totalTSS: 100,
        totalCalories: 100,
        averageHeartRate: 100,
        totalHeartRate: 100,
        training_metrics: { atl: 1, tsb: 1, ctl: 1 },
        type: {
            x: {
                distance: 122,
                duration: 13,
                tss: 34,
                work: 34,
            },
        },
        totalHeartRateCount: 100,
    };
    for (let i = 0; i < Object.keys(days).length; i++) {
        activities.push({
            id: i,
            workout_type: constants_1.sportTypes.bike,
            title: `دوچرخه سواری`,
            workout_day: `${days[Object.keys(days)[i]]} 00:00:00`,
            workout_date: `${days[Object.keys(days)[i]]}`,
            total_time: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            tss_actual: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            tss_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            total_time_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            description: `desc ${i}`,
            distance: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            calories: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            distance_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(34, 99),
            order_on_day: i,
            is_created_by_athlete: i % 2 === 0,
            structure: [
                {
                    begin: 12,
                    end: 22,
                    length: {
                        unit: "km",
                        value: 22,
                    },
                    steps: [
                        {
                            intensityClass: "",
                            length: {
                                unit: "km",
                                value: 22,
                            },
                            name: `name ${i}`,
                            openDuration: i % 2 === 0,
                            targets: [],
                            type: "fe",
                        },
                    ],
                    type: "2",
                },
            ],
            comments: i,
            css: {
                topColor: "#72bb52",
                mainBgColor: "#edf6e9",
                mainTextColor: "#4d4d4d",
                slaveTextColor: "#4d4d4d",
            },
        });
        activities.push({
            id: Object.keys(days).length * 2 + 1,
            workout_type: constants_1.sportTypes.running,
            title: `دویدن`,
            workout_day: `${days[Object.keys(days)[i]]} 00:00:00`,
            workout_date: `${days[Object.keys(days)[i]]}`,
            total_time: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            tss_actual: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            tss_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            total_time_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            description: `desc ${i}`,
            distance: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            calories: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 33),
            distance_planned: (0, randomNumberGenerator_1.randomNumberGenerator)(34, 99),
            order_on_day: i,
            is_created_by_athlete: i % 2 === 0,
            structure: [
                {
                    begin: 12,
                    end: 22,
                    length: {
                        unit: "km",
                        value: 22,
                    },
                    steps: [
                        {
                            intensityClass: "",
                            length: {
                                unit: "km",
                                value: 22,
                            },
                            name: `name ${i}`,
                            openDuration: i % 2 === 0,
                            targets: [],
                            type: "fe",
                        },
                    ],
                    type: "2",
                },
            ],
            comments: i,
            css: {
                topColor: "#ff8913",
                mainBgColor: "#fff0e1",
                mainTextColor: "#4d4d4d",
                slaveTextColor: "#4d4d4d",
            },
        });
    }
    for (let i = 0; i < Object.keys(days).length; i++) {
        events.push({
            id: i,
            user: {
                id: i,
                full_name: `test user ${i}`,
                profile_image: "https://api.vo2.ai/storage/images/1724768172.jpg",
                is_coached: false,
                is_register_completed: true,
                is_mobile_verified: true,
                account_expire_date: "2024-09-17 15:46:00",
                now: "2024-08-28 12:50:21",
            },
            sport_type_id: {
                id: 1,
                name: "cycling",
                persian_name: "دوچرخه سواری",
            },
            atp: "test Data For atp",
            atp_week_id: "test Data For atp_week_id",
            name: "harchi",
            event_date: "2024-07-09 00:00:00",
            description: `desc ${i}`,
            atp_priority: "test Data For atp_priority",
            race_type_duration: "test Data For race_type_duration",
        });
    }
    for (let i = 0; i < Object.keys(days).length; i++) {
        userMetrics.push({
            id: i,
            metric_type_id: 6,
            metric_type_name: "Blood Pressure",
            data_type: "text",
            value: "۱۲/۸",
            unique_code: "a1e3770f-16ef-4a1b-ad21-c9d852d8c412",
            date: "2024-07-23 00:00:00",
            metric_type_items: [`metric_type_items ${i}`],
            item_count: 0,
            workout_date: `${days[Object.keys(days)[i]]}`,
        });
    }
    return { activities, events, userMetrics, summary, start, end };
};
exports.CalendarDataGenerator = CalendarDataGenerator;
