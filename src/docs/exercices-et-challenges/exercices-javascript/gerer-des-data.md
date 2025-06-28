---
layout : "layouts/docs.njk"
title : "Gerer Des Data"
description : ""
group : "exercices-javascript"
section : "exercices-et-challenges"
toc : true
date : "2024-05-29T11:40:02+02:00"
draft : false
---
## 1 - Utiliser un objet
### Prérequis
[Object.entries()]({% aref "https://developer.mozilla.org/fr/docs/web/javascript/reference/global_objects/object/entries"%})

### code
Voici une page HTML qui affiche un bouton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>affiche objet</title>
</head>
<body>
<button type="button" id="btn">Changer</button>
<ul id="resultat"></ul>
<script src="app.js"></script>
</body>
</html>
```
Voici l'objet à utiliser
```js
 // Objet à afficher
const chambrePrix={
  'Chambre simple': 65,
  'Chambre double': 75,
  'Chambre triple': 90
}
```
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript

**Résultat**
{% figure-abs "images/gif/exo11.gif" "exo11" "200" "200" %}



## 2 - Utiliser un fichier JSON
Voici une page HTML qui affiche un bouton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fetch Json</title>
</head>
<body>
<button type="button" id="btn">Changer</button>
<ul id="resultat"></ul>
<script src="app.js"></script>
</body>
</html>
```

Voici le fichier JSON `chambre.json`

```json
{
  "Chambre simple": 65,
  "Chambre double": 75,
  "Chambre triple": 90
}
```


Cette page fait appel au fichier `app.js` qui contiendra notre code javascript

**Résultat**
{% figure-abs "images/gif/exo11.gif" "exo11" "100%" "100%" %}

## 3 - Utiliser un fichier HTML
Voici une page HTML qui affiche un bouton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fetch Page</title>
</head>
<body>
<button type="button" id="btn">Charger</button>
<div id="resultat"></div>
<script src="app.js"></script>
</body>
</html>
```


Cette page fait appel au fichier `app.js` qui contiendra notre code javascript


Voici la page HTML `page.html` à insérer

```html
<h1>Ma nouvelle page</h1>
<div>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet fugit maxime perspiciatis praesentium qui
    sed. A architecto autem consequatur eligendi exercitationem, expedita libero magni nesciunt nostrum quaerat sed totam.
</div>
```
**Résultat**
{% figure-abs "images/gif/exo13.gif" "exo13" "100%" "100%" %}

## 4 - Récupérer les données d'un formulaire
Voici une page HTML qui affiche un bouton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>formulaires</title>
</head>
<body>
<section class="container">
    <form id="my-form">
        <h1>IDENTIFICATION</h1>
        <div class="msg"></div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email">
        </div>
        <div>
            <label for="mdp">mot de passe:</label>
            <input type="text" id="mdp">
        </div>

        <input class="btn" type="submit" value="Valider">
    </form>

    <ul id="users"></ul>
</section>
<script src="app.js"></script>
</body>
</html>
```


Cette page fait appel au fichier `app.js` qui contiendra notre code javascript


Voici la page CSS `style.css`

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

ul {
    list-style: none;
}

ul li {
    padding: 5px;
    background: #f4f4f4;
    margin: 5px 0;
}

.container {
    margin: auto;
    width: 500px;
    overflow: auto;
    padding: 3rem 2rem;
}

#my-form {
    padding: 2rem;
    background: #f4f4f4;
}

#my-form label {
    display: block;
}

#my-form input[type='text'] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: 0;
    background: #333;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0;
}
.error {
    background: orangered;
    color: #fff;
    padding: 5px;
    margin: 5px;
}
```

**Résultat**
{% figure-abs "images/gif/exo14.gif" "exo14" "100%" "100%" %}

## 5 - Utiliser une API rest
Voici une page HTML qui affiche un bouton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Fetch API rest</title>
</head>
<body>
<button type="button" id="btn">Afficher</button>
<section class="products" id="products">
</section>
<div id="resultat"></div>
<script src="app.js"></script>
</body>
</html>
```

Voici le fichier css
```css
:root {
    --color1: #600;
}
.products {
    margin: 2em;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* une colonne doit avoir une largeur minimale de 200 pixels et que l'espace restant doit être réparti équitablement */
    background-color: purple;
}

.product-card {
    border: 1px solid var(--color1);
    border-radius: 5px;
    display: flex; /* crée un contexte flex pour ses enfants */
    flex-direction: column; /* affichage vertical */
    justify-content: space-between; /* alignement ici vertical en mode justifié */
    align-items: center; /* alignement des cartes sur un même axe central horizontal par colonne */
    /* flex-basis: 16%; flex-basis : 5 images x 20% =100% + padding 2% =20-4=16% */
    /* combinaison de 3 propriétés :
                       flex-grow : capacité pour un élément à s’étirer dans l’espace restant,
                       flex-shrink : capacité pour un élément à se contracter si nécessaire,
                       flex-basis : taille initiale de l’élément avant que l’espace restant ne soit distribué.
                       Ici la carte fait 16% de la dimension totale et ce qui reste est distribué entre les espaces*/
}
img{
    width : 150px;
    height : 100px;
}
```


Voici le lien rest
```html
https://api.sampleapis.com/countries/countries
```
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript

**Résultat**
{% figure-abs "images/gif/exo12.gif" "exo12" "100%" "100%" %}
