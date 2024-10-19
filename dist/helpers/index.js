"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = exports.generateRandomColors = exports.MIN_NUMBER_OF_CARDS = void 0;
exports.MIN_NUMBER_OF_CARDS = 12;
var generateRandomColors = function (numberOfColors) {
    var colors = [];
    for (var i = 0; i < numberOfColors; i++) {
        var color = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
        colors.push(color);
        colors.push(color);
    }
    return colors;
};
exports.generateRandomColors = generateRandomColors;
var shuffleArray = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
exports.shuffleArray = shuffleArray;
