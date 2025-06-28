const path = require('path');
// _includes/shortcodes/imageCard.js
module.exports = function (link, alt = "", width = 0, height = 0,  site = {}) {
    // Récupérer l'URL de base du site
   // console.log("Site parameter:", site);
    const baseURL = site.baseURL || 'http://localhost:8080/';

    // Vérifier si le lien est déjà une URL absolue
    let abslink;
    try {
        // Si new URL() ne génère pas d'erreur, c'est une URL valide
        new URL(link);
        abslink = link; // Utiliser l'URL telle quelle
    } catch (e) {
        // Si ce n'est pas une URL valide, la combiner avec l'URL de base
        abslink = new URL(path.join(baseURL, link)).href;
    }

    const w = String(width || "").trim();
    const h = String(height || "").trim();
    // Vérifier si title est valide et le nettoyer
    let cleanTitle = "";
   /* if (title && typeof title === "string" && title.trim() !== "" && title !== "[object Object]") {
        cleanTitle = title.trim();
    } else if (title && typeof title === "object") {
        // Si c'est un objet, on ignore complètement
        cleanTitle = "";
    }*/

    const widthAttr = w ? ` width="${w}"` : "";
    const heightAttr = h ? ` height="${h}"` : "";


    // Générer le HTML
    return `
<figure>
    <div class="card card-body">
        <img src="${abslink}" alt="${alt}"${widthAttr}${heightAttr} 
        />
    </div>
    <figcaption>
        <h4>${cleanTitle}</h4>
    </figcaption>
</figure>
    `;
};