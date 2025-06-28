// _includes/shortcodes/kbd.js
module.exports = function (text) {
    // Vérifier si du texte est fourni
    if (!text) {
        console.warn("Le shortcode <kbd> nécessite un argument (texte à afficher).");
        return "";
    }

    // Retourner la balise <kbd> avec le texte fourni
    return `<kbd>${text}</kbd>`;
};