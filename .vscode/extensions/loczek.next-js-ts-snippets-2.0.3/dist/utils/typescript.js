"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = exports.tsType = exports.tsSpace = exports.tsImport = exports.tsString = exports.changeLang = exports.isTs = void 0;
exports.isTs = false;
const changeLang = (lang) => {
    exports.isTs = lang === "js" ? false : true;
};
exports.changeLang = changeLang;
// these functions only return something in typescript
const tsString = (s) => (exports.isTs ? s : "");
exports.tsString = tsString;
const tsImport = (s) => (exports.isTs ? s : null);
exports.tsImport = tsImport;
const tsSpace = () => (exports.isTs ? "" : null);
exports.tsSpace = tsSpace;
const tsType = (s) => (exports.isTs ? ": " + s : "");
exports.tsType = tsType;
const template = (s) => s.split("\n");
exports.template = template;
