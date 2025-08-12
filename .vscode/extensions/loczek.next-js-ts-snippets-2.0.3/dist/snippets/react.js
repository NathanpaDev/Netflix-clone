"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNextComponents = void 0;
const placeholders_1 = require("../utils/placeholders");
const typescript_1 = require("../utils/typescript");
const shared_1 = require("./shared");
const generateNextComponents = () => {
    const NextPage = {
        prefix: "np",
        body: [
            (0, typescript_1.tsImport)(shared_1.importNext),
            (0, typescript_1.tsSpace)(),
            (0, typescript_1.tsImport)(shared_1.interfaceProps),
            (0, typescript_1.tsSpace)(),
            `const ${placeholders_1.fileNameCapitalized}${(0, typescript_1.tsType)("NextPage<Props>")} = ({}) => {`,
            `  return <div>${placeholders_1.second}</div>`,
            "}",
            "",
            shared_1.exportDefault,
        ],
    };
    const NextPageServerSideProps = {
        prefix: "npssp",
        body: [
            (0, typescript_1.tsImport)((0, shared_1.importNextAndGetServerSideProps)()),
            (0, typescript_1.tsSpace)(),
            (0, typescript_1.tsImport)(shared_1.interfaceProps),
            (0, typescript_1.tsSpace)(),
            `const ${placeholders_1.fileNameCapitalized}${(0, typescript_1.tsType)("NextPage<Props>")} = ({}) => {`,
            `  return <div>${placeholders_1.second}</div>`,
            "}",
            "",
            ...(0, shared_1.getServerSideProps)(),
            "",
            shared_1.exportDefault,
        ],
    };
    const NextPageStaticProps = {
        prefix: "npsp",
        body: [
            (0, typescript_1.tsImport)((0, shared_1.importNextAndGetStaticProps)()),
            (0, typescript_1.tsSpace)(),
            (0, typescript_1.tsImport)(shared_1.interfaceProps),
            (0, typescript_1.tsSpace)(),
            `const ${placeholders_1.fileNameCapitalized}${(0, typescript_1.tsType)("NextPage<Props>")} = ({}) => {`,
            `  return <div>${placeholders_1.second}</div>`,
            "}",
            "",
            ...(0, shared_1.getStaticProps)(),
            "",
            shared_1.exportDefault,
        ],
    };
    const NextPageStaticPaths = {
        prefix: "npspth",
        body: [
            (0, typescript_1.tsImport)((0, shared_1.importNextAndGetStaticPaths)()),
            (0, typescript_1.tsSpace)(),
            (0, typescript_1.tsImport)(shared_1.interfaceProps),
            (0, typescript_1.tsSpace)(),
            `const ${placeholders_1.fileNameCapitalized}${(0, typescript_1.tsType)("NextPage<Props>")} = ({}) => {`,
            `  return <div>${placeholders_1.second}</div>`,
            "}",
            "",
            ...(0, shared_1.getStaticPaths)(),
            "",
            shared_1.exportDefault,
        ],
    };
    const NextServerSideProps = {
        prefix: "nssp",
        body: [...(0, shared_1.getServerSideProps)()],
    };
    const NextStaticProps = {
        prefix: "nsp",
        body: [...(0, shared_1.getStaticProps)()],
    };
    const NextStaticPaths = {
        prefix: "nspth",
        body: [...(0, shared_1.getStaticPaths)()],
    };
    const NextInitialProps = {
        prefix: "nip",
        body: [`${placeholders_1.fileNameCapitalized}.getInitialProps = async (ctx) => {`, "  return {", `    ${placeholders_1.second}`, "  }", "}"],
    };
    const NextImage = {
        prefix: "nimg",
        body: [`<Image src="${placeholders_1.first}" alt="${placeholders_1.second}" />`],
    };
    const NextApp = {
        prefix: "napp",
        body: [
            (0, typescript_1.tsImport)("import type { AppProps } from 'next/app'"),
            (0, typescript_1.tsSpace)(),
            `export default function MyApp({ Component, pageProps }${(0, typescript_1.tsType)("AppProps")}) {`,
            "  return <Component {...pageProps} />",
            "}",
        ],
    };
    const NextDocument = {
        prefix: "ndoc",
        body: [
            `import Document, { Html, Head, Main, NextScript${(0, typescript_1.tsString)(", DocumentContext")} } from 'next/document'`,
            "",
            "class MyDocument extends Document {",
            `  static async getInitialProps(ctx${(0, typescript_1.tsType)("DocumentContext")}) {`,
            "    const initialProps = await Document.getInitialProps(ctx)",
            "    return { ...initialProps }",
            "  }",
            "",
            "  render() {",
            "    return (",
            "      <Html>",
            "        <Head />",
            "        <body>",
            "          <Main />",
            "          <NextScript />",
            "        </body>",
            "      </Html>",
            "    );",
            "  }",
            "}",
            "",
            "export default MyDocument",
        ],
    };
    return [
        NextPage,
        NextPageServerSideProps,
        NextPageStaticProps,
        NextPageStaticPaths,
        NextServerSideProps,
        NextStaticProps,
        NextStaticPaths,
        NextInitialProps,
        NextImage,
        NextApp,
        NextDocument,
    ];
};
exports.generateNextComponents = generateNextComponents;
