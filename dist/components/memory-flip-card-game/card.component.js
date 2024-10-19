"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var Container = styled_1.CardStyled.Container;
var Card = function (_a) {
    var icon = _a.icon, color = _a.color;
    return react_1.default.createElement(Container, null, "wow");
};
exports.Card = Card;
