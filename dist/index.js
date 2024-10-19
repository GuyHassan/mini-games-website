"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
if (typeof window !== 'undefined') {
    react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
}
(0, reportWebVitals_1.default)(console.log);
