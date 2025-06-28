
const markdownIt = require('markdown-it');
const md = new markdownIt();

module.exports = function(content, cssClass = "table") {
        // Convert markdown content to HTML
        let htmlTable = md.render(content);

        // Replace opening table tag with responsive wrapper and classes
        htmlTable = htmlTable.replace(
            '<table>',
            `<div class="table-responsive"><table class="${cssClass}">`
        );

        // Replace closing table tag
        htmlTable = htmlTable.replace(
            '</table>',
            '</table></div>'
        );

        return htmlTable;
    };
