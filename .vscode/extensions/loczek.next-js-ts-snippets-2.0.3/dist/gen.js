"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnippets = void 0;
const fs_1 = require("fs");
const lang_1 = require("./snippets/lang");
const react_1 = require("./snippets/react");
const placeholders_1 = require("./utils/placeholders");
const replace_1 = require("./utils/replace");
const typescript_1 = require("./utils/typescript");
const prefixToName = {
    np: "nextPage",
    npssp: "nextPageServerSideProps",
    npsp: "nextPageStaticProps",
    npspth: "nextPageStaticPaths",
    nssp: "nextServerSideProps",
    nsp: "nextStaticProps",
    nspth: "nextStaticPaths",
    nip: "nextInitialProps",
    napi: "nextApi",
    nmid: "nextMiddleware",
    nimg: "nextImage",
    napp: "nextApp",
    ndoc: "nextDocument",
};
function generateSnippets(withMarkdown = false) {
    console.time("gen");
    const nextSnippetsJs = (0, react_1.generateNextComponents)();
    const langSnippetsJs = (0, lang_1.generateNextLang)();
    (0, typescript_1.changeLang)("ts");
    const nextSnippetsTs = (0, react_1.generateNextComponents)();
    const langSnippetsTs = (0, lang_1.generateNextLang)();
    console.timeEnd("gen");
    saveSnippets(langSnippetsTs, "ts");
    saveSnippets(langSnippetsJs, "js");
    saveSnippets(nextSnippetsTs, "tsx");
    saveSnippets(nextSnippetsJs, "jsx");
    if (withMarkdown) {
        saveMarkdown([...nextSnippetsTs, ...langSnippetsTs], "ts");
        saveMarkdown([...nextSnippetsJs, ...langSnippetsJs], "js");
        saveReadme();
    }
}
exports.generateSnippets = generateSnippets;
function saveReadme() {
    const base = (0, fs_1.readFileSync)(__dirname + "/../docs/base.md");
    const ts = (0, fs_1.readFileSync)(__dirname + "/../docs/typescript-snippets.md");
    const js = (0, fs_1.readFileSync)(__dirname + "/../docs/javascript-snippets.md");
    const totalLength = base.length + ts.length + js.length;
    const combined = Buffer.concat([base, ts, js], totalLength);
    (0, fs_1.writeFile)(__dirname + "/../README.md", combined, () => {
        console.log("Generated readme");
    });
}
function saveMarkdown(data, type) {
    const typeToName = {
        js: "javascript",
        ts: "typescript",
    };
    for (const snippet of data) {
        snippet.body = snippet.body.filter((line) => line !== null);
    }
    const snippets = {};
    for (const snippet of data) {
        snippets[prefixToName[snippet.prefix]] = snippet;
    }
    const snippetString = JSON.stringify(snippets, null, 2)
        .replace(new RegExp(placeholders_1.fileName, "g"), replace_1.fileNameReplaceMd)
        .replace(new RegExp(placeholders_1.first, "g"), replace_1.firstReplaceMd)
        .replace(new RegExp(placeholders_1.second, "g"), replace_1.secondReplaceMd)
        .replace(new RegExp(placeholders_1.third, "g"), replace_1.thirdReplaceMd)
        .replace(new RegExp(placeholders_1.fileNameCapitalized, "g"), replace_1.fileNameCapitalizedReplaceMd);
    const snippetParsed = JSON.parse(snippetString);
    let md = `\n# ${typeToName[type][0].toUpperCase()}${typeToName[type].slice(1)} snippets\n\n`;
    for (const snippet in snippetParsed) {
        if (Object.prototype.hasOwnProperty.call(snippetParsed, snippet)) {
            const element = snippetParsed[snippet];
            const example = [`- \`${element.prefix}\` - ${snippet}\n`];
            md = md.concat(example.join("\n"));
        }
    }
    for (const snippet in snippetParsed) {
        if (Object.prototype.hasOwnProperty.call(snippetParsed, snippet)) {
            const element = snippetParsed[snippet];
            const example = [
                "",
                `## \`${element.prefix}\` - ${snippet}`,
                "",
                "```" + typeToName[type],
                ...element.body,
                "```",
                "",
            ];
            md = md.concat(example.join("\n"));
        }
    }
    (0, fs_1.writeFileSync)(`./docs/${typeToName[type]}-snippets.md`, md);
    console.log(`Generated ${type} markdown`);
}
function saveSnippets(data, type) {
    // remove null from body
    for (const snippet of data) {
        snippet.body = snippet.body.filter((line) => line !== null);
    }
    const snippets = {};
    for (const snippet of data) {
        snippets[prefixToName[snippet.prefix]] = snippet;
    }
    const snippetString = JSON.stringify(snippets, null, 2)
        .replace(new RegExp(placeholders_1.first, "g"), replace_1.firstReplace)
        .replace(new RegExp(placeholders_1.second, "g"), replace_1.secondReplace)
        .replace(new RegExp(placeholders_1.third, "g"), replace_1.thirdReplace)
        .replace(new RegExp(placeholders_1.fileNameCapitalized, "g"), replace_1.fileNameCapitalizedReplace);
    if (type === "js" || type === "ts") {
        if (type === "js") {
            (0, fs_1.writeFileSync)(__dirname + "/generated/javascript.json", snippetString);
            console.log("Saved js snippets");
        }
        else if (type === "ts") {
            (0, fs_1.writeFileSync)(__dirname + "/generated/typescript.json", snippetString);
            console.log("Saved ts snippets");
        }
    }
    if (type === "jsx" || type === "tsx") {
        if (type === "jsx") {
            (0, fs_1.writeFileSync)(__dirname + "/generated/javascriptreact.json", snippetString);
            console.log("Saved jsx snippets");
        }
        else if (type === "tsx") {
            (0, fs_1.writeFileSync)(__dirname + "/generated/typescriptreact.json", snippetString);
            console.log("Saved tsx snippets ");
        }
    }
}
generateSnippets(true);
