
const path = require('path');

module.exports = function(url, text, siteData) {
    // Définir l'URL de base pour les chemins relatifs
    const baseURL = siteData?.baseURL || 'http://localhost:8080/';

    // Résoudre l'URL (relative ou absolue)
    let resolvedUrl;
    try {
        // Si l'URL est absolue, l'utiliser directement
        new URL(url);
        resolvedUrl = url;
    } catch (e) {
        // Si l'URL est relative, la combiner avec l'URL de base
        resolvedUrl = new URL(path.join(baseURL, url)).href;
    }

    // Générer le HTML
    return `<a class="list-group-item list-group-item-action" href="${resolvedUrl}" target="_blank">${text}</a>`;
};