const markdownIt = require('markdown-it');
const md = new markdownIt();
// _includes/shortcodes/callout.js
module.exports = function (content, cssClass = "warning", icon = "cone-striped", color = "black") {
    // Valider les classes CSS et les couleurs (optionnel)
    const validClasses = ["info", "danger", "warning", "success"];
    const validColors = ["black", "red", "blue", "green", "yellow"];

    // Appliquer des valeurs par défaut si les paramètres ne sont pas valides
    const finalCssClass = validClasses.includes(cssClass) ? cssClass : "warning";
    const finalColor = validColors.includes(color) ? color : "red";
    const svgColor=`--bs-red`
    // Use the Markdown filter to convert content to HTML
    const markdownContent = md.render(content);
    // Générer le HTML
    return `
<div class="bd-callout bd-callout-${finalCssClass} text-success-emphasis">
    <svg class="bi me-2 fs-2" style="color: var(${svgColor});" aria-hidden="true">
        <use xlink:href="#${icon}"></use>
    </svg>
          ${markdownContent}
</div>
    `;
};