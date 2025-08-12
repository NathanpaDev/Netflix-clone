"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = exports.getServerSideProps = exports.importNextAndGetStaticPaths = exports.importNextAndGetStaticProps = exports.importNextAndGetServerSideProps = exports.exportDefault = exports.importNext = exports.interfaceProps = void 0;
const placeholders_1 = require("../utils/placeholders");
const typescript_1 = require("../utils/typescript");
exports.interfaceProps = "interface Props {}";
exports.importNext = "import { NextPage } from 'next'";
exports.exportDefault = `export default ${placeholders_1.fileNameCapitalized}`;
const importNextAndGetServerSideProps = () => `import { NextPage${(0, typescript_1.tsString)(", GetServerSideProps")} } from 'next'`;
exports.importNextAndGetServerSideProps = importNextAndGetServerSideProps;
const importNextAndGetStaticProps = () => `import { NextPage${(0, typescript_1.tsString)(", GetStaticProps")} } from 'next'`;
exports.importNextAndGetStaticProps = importNextAndGetStaticProps;
const importNextAndGetStaticPaths = () => `import { NextPage${(0, typescript_1.tsString)(", GetStaticPaths")} } from 'next'`;
exports.importNextAndGetStaticPaths = importNextAndGetStaticPaths;
const getServerSideProps = () => [
    `export const getServerSideProps${(0, typescript_1.tsString)(": GetServerSideProps")} = async (ctx) => {`,
    "  return {",
    "    props: {}",
    "  }",
    "}",
];
exports.getServerSideProps = getServerSideProps;
const getStaticProps = () => [
    `export const getStaticProps${(0, typescript_1.tsString)(": GetStaticProps")} = async (ctx) => {`,
    "  return {",
    "    props: {},",
    "  }",
    "}",
];
exports.getStaticProps = getStaticProps;
const getStaticPaths = () => [
    `export const getStaticPaths${(0, typescript_1.tsString)(": GetStaticPaths")} = async () => {`,
    "  return {",
    "    paths: [],",
    "    fallback: false,",
    "  }",
    "}",
];
exports.getStaticPaths = getStaticPaths;
