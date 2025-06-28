const markdownIt = require('markdown-it');
const md = new markdownIt();

module.exports =  function(content, type = "info") {
    // Validate type parameter
    const validTypes = ["info", "danger", "warning"];
    const cssClass = validTypes.includes(type) ? type : "info";

    // Use the markdown filter to convert content to HTML
    const markdownContent = md.render(content);

    // Return the formatted HTML
    return `<div class="bd-callout bd-callout-${cssClass}">
       ${markdownContent}
    </div>`;
};