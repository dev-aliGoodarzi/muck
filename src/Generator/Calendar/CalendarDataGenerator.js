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
        total: {
            time: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 500),
            distance: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 500),
            TSS: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 500),
            calories: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 500),
            heartRate: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 500),
            totalHeartRateCount: 22,
        },
        desired: {
            time: (0, randomNumberGenerator_1.randomNumberGenerator)(600, 900),
            distance: (0, randomNumberGenerator_1.randomNumberGenerator)(600, 900),
            TSS: (0, randomNumberGenerator_1.randomNumberGenerator)(600, 900),
            calories: (0, randomNumberGenerator_1.randomNumberGenerator)(600, 900),
            heartRate: (0, randomNumberGenerator_1.randomNumberGenerator)(600, 900),
        },
        avg: {
            averageHeartRate: 90,
        },
        training_metrics: {
            atl: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 55),
            tsb: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 55),
            ctl: (0, randomNumberGenerator_1.randomNumberGenerator)(1, 55),
        },
        type: {
            x: {
                distance: 122,
                duration: 13,
                tss: 34,
                work: 34,
            },
        },
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
                                value: 112,
                            },
                            name: `name ${i}`,
                            openDuration: i % 2 === 0,
                            targets: [],
                            type: "fe",
                        },
                    ],
                    type: "2",
                },
                {
                    begin: 12,
                    end: 22,
                    length: {
                        unit: "km",
                        value: 122,
                    },
                    steps: [
                        {
                            intensityClass: "",
                            length: {
                                unit: "km",
                                value: 68,
                            },
                            name: `name ${i}`,
                            openDuration: i % 2 === 0,
                            targets: [],
                            type: "fe",
                        },
                    ],
                    type: "2",
                },
                {
                    begin: 12,
                    end: 22,
                    length: {
                        unit: "km",
                        value: 422,
                    },
                    steps: [
                        {
                            intensityClass: "",
                            length: {
                                unit: "km",
                                value: 50,
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
            reaction: {
                reactionType: 1,
                reactionNumber: i,
                reactionIcon: "https://picsum.photos/16",
            },
        });
        if (i % 2 !== 0) {
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
                                    value: 242,
                                },
                                name: `name ${i}`,
                                openDuration: i % 2 === 0,
                                targets: [],
                                type: "fe",
                            },
                        ],
                        type: "2",
                    },
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
                                    value: 55,
                                },
                                name: `name ${i}`,
                                openDuration: i % 2 === 0,
                                targets: [],
                                type: "fe",
                            },
                        ],
                        type: "2",
                    },
                    {
                        begin: 12,
                        end: 22,
                        length: {
                            unit: "km",
                            value: 122,
                        },
                        steps: [
                            {
                                intensityClass: "",
                                length: {
                                    unit: "km",
                                    value: 68,
                                },
                                name: `name ${i}`,
                                openDuration: i % 2 === 0,
                                targets: [],
                                type: "fe",
                            },
                        ],
                        type: "2",
                    },
                    {
                        begin: 12,
                        end: 22,
                        length: {
                            unit: "km",
                            value: 112,
                        },
                        steps: [
                            {
                                intensityClass: "",
                                length: {
                                    unit: "km",
                                    value: 50,
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
                reaction: {
                    reactionType: 1,
                    reactionNumber: i,
                    reactionIcon: "https://picsum.photos/16",
                },
            });
        }
    }
    for (let i = 0; i < Object.keys(days).length; i++) {
        events.push({
            id: i,
            user: {
                id: i,
                full_name: `test user ${i}`,
                profile_image: "https://picsum.photos/16",
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
                sportIcon: "https://picsum.photos/16",
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
        userMetrics.push((0, constants_1.metricType)(i, String(days[Object.keys(days)[i]])));
        if (i % 2 === 0) {
            userMetrics.push((0, constants_1.metricType)(i + (Object.keys(days).length - 1), String(days[Object.keys(days)[i]])));
            userMetrics.push((0, constants_1.metricType)((i + (Object.keys(days).length - 1)) * 2, String(days[Object.keys(days)[i]])));
        }
    }
    return { activities, events, userMetrics, summary, start, end };
};
exports.CalendarDataGenerator = CalendarDataGenerator;
