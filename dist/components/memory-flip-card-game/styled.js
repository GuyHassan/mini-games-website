"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardStyled = exports.MemoryFlipCardGameStyled = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var ContainerMemoryFlipCardGame = (0, styled_components_1.default)('div')(function (props) { return ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}); });
exports.MemoryFlipCardGameStyled = {
    Container: ContainerMemoryFlipCardGame,
};
var ContainerCard = (0, styled_components_1.default)('div')(function (props) { return ({}); });
exports.CardStyled = {
    Container: ContainerCard,
};
