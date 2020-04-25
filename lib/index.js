"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function generate() {
    return uuid_1.v4();
}
exports.generate = generate;
function stringToBinary(uuidString) {
    const hex = uuidString.replace(/-/g, '');
    const buffer = Buffer.from(hex, 'hex');
    if (buffer.length !== 16) {
        throw new Error('Invalid UUID');
    }
    return buffer;
}
exports.stringToBinary = stringToBinary;
function binaryToString(uuidBuffer) {
    if (uuidBuffer.length !== 16) {
        throw new Error('Invalid UUID');
    }
    const hex = uuidBuffer.toString('hex');
    return [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20, 32),
    ].join('-');
}
exports.binaryToString = binaryToString;
