---
layout : "layouts/docs.njk"
title : "Gerer Les Classes"
description : ""
group : "exercices-javascript"
section : "exercices-et-challenges"
toc : true
date : "2024-05-29T20:46:58+02:00"
draft : false
---
## 1 - Hello World
Voici une page HTML qui affiche HELLO
{% bt-collapse "exo1html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset=”utf-8">
    <meta name=”viewport” content=”width=device-width”>
    <title>Hello World</title>
</head>
<body>
<h1 id="entete">HELLO</h1>

<script src="app.js"></script>
</body>
</html>
```
{% endbt-collapse %}

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo1js" %}
```javascript
class HelloWorld {
    // attribut privé
    #oH1Entete

    constructor() {
        // Sélectionne l'id entete
        this.#oH1Entete=document.querySelector('#entete')
        // capture de l'évènement click et appel de la fonction onClick
        this.#oH1Entete.addEventListener('click',this.onClick.bind(this))
    }

    /**
     * fonction de capture d'évènement
     * async signifie que le système attend que l'événement soit réalisé pour exécuter la fonction
     *
     * l'évènement est passé en paramètre
     * @param e
     * @returns {Promise<void>}
     */
    async onClick(e){
        e.preventDefault() //annule l'événement par default
        // Regardez ce que renvoie e.target
        console.log('événement : ',e.target)
        e.target.textContent+=" WORLD"
    }
}
// création de l'objet
new HelloWorld()
```
{% endbt-collapse %}

En javascript, il n'y a pas d'effet de bord, c'est à dire que les variables sont uniquement définies dans la classe.
Une valeur extérieure à la classe ne peut pas les modifier.

