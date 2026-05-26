module.exports = function(content) {
    // Charger Prism pour la coloration syntaxique
    const Prism = require("prismjs");
    require("prismjs/components/prism-csharp");

    const md = require('markdown-it')({
        html: true,
        breaks: false,
        linkify: true,
        typographer: true,
        highlight: (code, lang) => {
            if (lang && Prism.languages[lang]) {
                try {
                    return Prism.highlight(code, Prism.languages[lang], lang);
                } catch (__) {
                    return code;
                }
            }
            return code;
        }
    });

    // Nettoyer le contenu
    let cleanContent = content.trim();

    // Diviser par le séparateur <---> en gérant les espaces autour
    const columns = cleanContent.split(/\n\s*<-{3,}>\s*\n/);

    // Créer les divs colonnes
    const columnDivs = columns.map(column => {
        let trimmedColumn = column.trim();

        if (trimmedColumn) {
            // Convertir le Markdown en HTML
            let htmlColumn = md.render(trimmedColumn);

            // Supprimer les <p> et <br> autour de tous les éléments de bloc
            htmlColumn = htmlColumn.replace(/<p>\s*(<(?:h[1-6]|pre|ul|ol|table|div)[^>]*>)/g, '$1');
            htmlColumn = htmlColumn.replace(/(<\/(?:h[1-6]|pre|ul|ol|table|div)>)\s*<\/p>/g, '$1');
            htmlColumn = htmlColumn.replace(/<p>\s*<\/p>/g, '');
            htmlColumn = htmlColumn.replace(/<br\s*\/?>/gi, '');

            // Ajouter la classe language-* détectée à la balise <pre>
            htmlColumn = htmlColumn.replace(/<pre><code class="language-([^"]+)"/g, '<pre class="language-$1"><code class="language-$1"');

            return `<div class="col">${htmlColumn}</div>`;
        }
        return '';
    }).filter(div => div !== '').join('');

    // Retourner la structure avec Bootstrap
    return `<div class="row align-items-start">
${columnDivs}
</div>`;
}