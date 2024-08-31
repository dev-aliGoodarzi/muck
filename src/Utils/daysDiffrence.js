"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysDifference = void 0;
const daysDifference = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const time1 = date1.getTime();
    const time2 = date2.getTime();
    const daysDifference = (time2 - time1) / (1000 * 60 * 60 * 24) + 1;
    const res = {};
    for (let i = 0; i < daysDifference; i++) {
        const currentDate = new Date(date1);
        currentDate.setDate(date1.getDate() + i);
        res[`day${i + 1}`] = currentDate.toDateString();
    }
    return res;
};
exports.daysDifference = daysDifference;
