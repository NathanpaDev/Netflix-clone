"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNextLang = void 0;
const placeholders_1 = require("../utils/placeholders");
const typescript_1 = require("../utils/typescript");
const generateNextLang = () => {
    const NextApi = {
        prefix: "napi",
        body: [
            (0, typescript_1.tsImport)("import type { NextApiRequest, NextApiResponse } from 'next'"),
            (0, typescript_1.tsSpace)(),
            (0, typescript_1.tsImport)("interface Data {}"),
            (0, typescript_1.tsSpace)(),
            `export default async function handler(req${(0, typescript_1.tsType)("NextApiRequest")}, res${(0, typescript_1.tsType)("NextApiResponse<Data>")}) {`,
            `  ${placeholders_1.first}`,
            "}",
        ],
    };
    const NextMiddleware = {
        prefix: "nmid",
        body: [
            "import { NextResponse } from 'next/server'",
            (0, typescript_1.tsImport)("import type { NextRequest } from 'next/server'"),
            (0, typescript_1.tsSpace)(),
            `export async function middleware(request${(0, typescript_1.tsType)("NextRequest")}) {`,
            `  ${placeholders_1.first}`,
            "}",
            "",
            "export const config = {",
            "  matcher: '/about/:path*',",
            "}",
        ],
    };
    return [NextApi, NextMiddleware];
};
exports.generateNextLang = generateNextLang;
