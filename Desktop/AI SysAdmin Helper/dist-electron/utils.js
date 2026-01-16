"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = void 0;
const electron_1 = require("electron");
exports.isDev = !electron_1.app.isPackaged;
