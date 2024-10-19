"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryFlipCardGame = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../../helpers");
var styled_1 = require("./styled");
var Container = styled_1.MemoryFlipCardGameStyled.Container;
var MemoryFlipCardGame = function () {
    // const [colorsCard, setColorsCards] = React.useState(generateRandomColors());
    console.log({ shuffle: (0, helpers_1.shuffleArray)(['a', 'b', 'f', 'c', 't', 'z', 'w']) });
    return react_1.default.createElement(Container, null, "whattt");
};
exports.MemoryFlipCardGame = MemoryFlipCardGame;
