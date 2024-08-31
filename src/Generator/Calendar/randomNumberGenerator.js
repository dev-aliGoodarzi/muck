"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberGenerator = void 0;
const randomNumberGenerator = (start = 1, end = 50) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
};
exports.randomNumberGenerator = randomNumberGenerator;
