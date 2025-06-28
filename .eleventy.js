const SITE_CONFIG = {
    baseURL: "https://chchabin.github.io/11tyLab/"
};
const siteConfigs=require('./config/');
// npm install js-yaml --save-dev
const yaml = require('js-yaml');
// construction du toc
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')
const mermaid = require('markdown-it-mermaid').default;
//shortcodes
const shortcodes = require('./_11ty/');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    const selectedConfig=siteConfigs.configFree
    const serverName = selectedConfig.server.name;
    eleventyConfig.addGlobalData("site", SITE_CONFIG);

    eleventyConfig.addPassthroughCopy({
        'src/assets':"icon",
        'src/images':"images",
        'src/css':"css",
        'src/js':"js",
        "node_modules/mermaid/dist/mermaid.min.js": "js/mermaid.min.js"
    });


    eleventyConfig.addWatchTarget('src/{css,js}');

    // Add YAML support
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    eleventyConfig.addCollection("byFolder", function(collectionApi) {
        const collections = {};

        collectionApi.getAll().forEach(item => {
            const folder = item.inputPath.split('/')[1]; // Premier dossier après src/
            if (!collections[folder]) {
                collections[folder] = [];
            }
            collections[folder].push(item);
        });

        return collections;
    });

    // Ajouter un filtre personnalisé `split`
    eleventyConfig.addFilter("split", function(value, delimiter) {
        if (typeof value === "string") {
            return value.split(delimiter);
        }
        return [];
    });
	//TOC
    // Markdown
	// Configure Markdown with shortcodes support
    let markdownLibrary = markdownIt({
        html: true,        // Enable HTML tags in source
        breaks: true,      // Convert '\n' in paragraphs into <br>
        linkify: true,      // Autoconvert URL-like text to links
        typographer: true, // Améliorations typographiques
    });

    // Add anchor links to headings
    markdownLibrary.use(markdownItAnchor);
    markdownLibrary.use(mermaid);


    // Set up the Markdown processor
    eleventyConfig.setLibrary("md", markdownLibrary);


    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
        wrapper: 'div'
    })
	//endTOC


    eleventyConfig.addPlugin(syntaxHighlight);
    //shortcodes
    // Dans.eleventy.js
    eleventyConfig.addShortcode("aref", (url, text) => shortcodes.aref(url, text, SITE_CONFIG));
    //eleventyConfig.addShortcode("aref", shortcodes.aref);
    eleventyConfig.addShortcode("figure-abs", (...args) => {
       // console.log("Arguments reçus:", args);
        //console.log("SITE_CONFIG dans shortcode:", SITE_CONFIG); // Debug
        return shortcodes.figure_abs(...args, SITE_CONFIG);
    });
    eleventyConfig.addShortcode("kbd", shortcodes.kdb);
    eleventyConfig.addShortcode("hamburger", shortcodes.hamburger);

    eleventyConfig.addPairedShortcode("questions", shortcodes.question);
    eleventyConfig.addPairedShortcode("bs-table", shortcodes.bsTable);
    eleventyConfig.addPairedShortcode("callout", shortcodes.callout);
    eleventyConfig.addPairedShortcode("bt-collapse", shortcodes.btcollapse);
    eleventyConfig.addPairedShortcode("col-n", shortcodes.coln);

    return {
        pathPrefix: "/",
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};
