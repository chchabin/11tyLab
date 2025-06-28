---
layout : "layouts/docs.njk"
title : "Affichage Simple"
description : "Entrainement"
group : "exercices-javascript"
section : "exercices-et-challenges"
toc : true
date : "2024-05-29T06:20:45+02:00"
draft : false
---
## 1 - Hello World
### Prérequis
[addEventListener]({% aref "docs/javascript/manipuler-le-dom/les-evenements/#a---addeventlistener"%})

[e.target]({% aref "docs/javascript/manipuler-le-dom/les-evenements/#b---eventtarget"%})

[querySelector]({% aref "docs/javascript/manipuler-le-dom/objet-dom/#e---queryselector-et-queryselectorall"%})

### Le code
Voici une page HTML qui affiche HELLO
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
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
```javascript
// Sélection de l'id entete
const oH1Entete=document.querySelector('#entete')

// capture de l'évènement click et appel de la fonction onClick
oH1Entete.addEventListener('click',onClick)

/**
 * fonction de capture d'évènement
 * l'évènement est passé en paramètre
 * @param e
 */
function onClick(e){
    //annule l'événement par default
    e.preventDefault() 
    // Regardez ce que renvoie e.target dans la console
    console.log('evenement',e.target)
    //Modifie l'affichage
    e.target.textContent=" WORLD"
}
```
{% callout %}
 #### Recette
1. La page affiche HELLO
2. L'utilisateur click sur HELLO
3. La page affiche WORLD
{% endcallout %}

{%questions %}
Étape 1 :

Vérifiez que `e.target`  vous renvoie dans la console 
`<h1 id="heading">HELLO</h1>`

Étape 2 :

1. Cliquez sur `HELLO` vous devez voir apparaitre `WORLD`
2. Vérifiez que `e.target`  vous renvoie dans la console 
`<h1 id="heading">WORLD</h1>`

Étape 3 :

Modifier le code pour afficher non plus `WORLD` mais `HELLO WORLD`, sans modifier le texte existant.
{% endquestions %}

## 2 - Changer une image
### Prérequis
[L'opérateur ternaire]({% aref "docs/javascript/programmer/les-tests-et-les-boucles/#d---lopérateur-ternaire"%})

### Le code
Voici une page HTML qui affiche une image
{% bt-collapse "exo2html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset=”utf-8">
    <meta name=”viewport” content=”width=device-width”>
    <title>Image bouton</title>
</head>
<body>
<h1 id="entete">
    <img src="https://picsum.photos/id/237/200/300" alt="237">
</h1>
<script src="app.js"></script>
</body>
</html>
```
{% endbt-collapse %}
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo2js" %}
```javascript
const image=document.querySelector('img')
image.addEventListener('click', onClick)

function onClick() {
    const currentSrc = image.src
    const newSrc = (currentSrc === "https://picsum.photos/id/237/200/300") ?
        "https://picsum.photos/seed/picsum/200/300" :
        "https://picsum.photos/id/237/200/300"

    image.src = newSrc
}
```
{% endbt-collapse %}

{% callout %}
#### Recette
1. La page affiche une image
2. L'utilisateur click sur l'image
3. La page affiche une autre image
   {% endcallout %}

## 3 - Changer deux images
Voici une page HTML qui affiche deux images
{% bt-collapse "exo3html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset=”utf-8">
   <meta name=”viewport” content=”width=device-width”>
   <title>Hello World</title>
</head>
<body>
   <button type="button" id="b1" class="changerBtn" data-image="i1">changer</button>
   <br>
   <img src="https://picsum.photos/id/237/200/300" alt="237" id="i1">
   <br>
   <button type="button" id="b2" class="changerBtn" data-image="i2">changer</button>
   <br>
   <img src="https://picsum.photos/id/23/200/300" alt="237" id="i2">
<script src="app.js"></script>
</body>
</html>
```
{% endbt-collapse %}
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript. 
Nous traitons l'événement `Appuyer Sur Un Bouton`.
{% bt-collapse "exo3js" %}
```javascript
const bt1=document.querySelector('#b1')
const img1=document.querySelector('#i1')
const bt2=document.querySelector('#b2')
const img2=document.querySelector('#i2')
// capture de l'évènement click et appel de la fonction onClick
bt1.addEventListener('click',onClick)
bt2.addEventListener('click',onClick)

function onClick(e) {
    e.preventDefault() //annule l'événement par default
    if (e.target.matches('#b1')) {

        if (img1.src === "https://picsum.photos/id/237/200/300") {
            img1.src = "https://picsum.photos/seed/picsum/200/300"
        } else {
            img1.src = "https://picsum.photos/id/237/200/300"
        }
    }

    if (e.target.matches('#b2')) {
        if (img2.src === "https://picsum.photos/id/23/200/300") {
            img2.src = "https://picsum.photos/id/200/200/300"
        } else {
            img2.src = "https://picsum.photos/id/23/200/300"
        }
    }
}
```
{% endbt-collapse %}
Solution alternative
{% bt-collapse "exo3js2" %}
```javascript
// Séléction de tous les boutonw de la classe changerBtn
const changerBtns = document.querySelectorAll('.changerBtn');
const images = {
   i1: document.getElementById('i1'),
   i2: document.getElementById('i2')
};

// Identification du boutond clické
changerBtns.forEach(btn => {
   btn.addEventListener('click', onClick);
});

function onClick(e) {
   e.preventDefault();
   // récupère le numéro de l'image correspondant au bouton
   const imageId = e.target.getAttribute('data-image');
   // récupère l'id de l'image
   const image = images[imageId];
   // récupère la source de l'image
   const currentSrc = image.src;
   // afficher image correspondante
   if (currentSrc === "https://picsum.photos/id/237/200/300") {
      image.src = "https://picsum.photos/seed/picsum/200/300";
   } else {
      image.src = "https://picsum.photos/id/237/200/300";
   }
}
```
{% endbt-collapse %}
{%questions %}
Modifier le code pour afficher 3 images
{% endquestions %}

## 4 - Faire disparaitre une image
### Prérequis
[Le DOM]({% aref "docs/javascript/manipuler-le-dom/introduction/#2---les-éléments-du-dom"%})

### Le code
Voici une page HTML qui affiche une image
{% bt-collapse "exo4html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset=”utf-8">
   <meta name=”viewport” content=”width=device-width”>
   <title>Display</title>
</head>
<body>
<button type="button" id="btn">changer</button>
<h1 id="entete"></h1>
<script src="app.js"></script>
</body>
</html>
```
{% endbt-collapse %}
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript.
Nous traitons deux événements :
1. `Charger la page`,
2. `Appuyer Sur Un Bouton`.

{% bt-collapse "exo4js" %}
```javascript
const btn = document.querySelector('#btn')
const titre = document.querySelector('#entete')
let isImageVisible = true;

document.addEventListener("DOMContentLoaded", chargerImage)
btn.addEventListener('click', basculerEtatImage)

// Charge l'image
function chargerImage(e){
   e.preventDefault() //annule l'événement par default
   const image=document.createElement('img');
   image.setAttribute('src',"https://picsum.photos/id/237/200/300")
   image.setAttribute('style','display:block')
   titre.appendChild(image)
}

// Apparaitre ou disparaitre l'image
function basculerEtatImage(e) {
   e.preventDefault() //annule l'événement par default
   isImageVisible = !isImageVisible;
   const img=document.querySelector('img')
   img.style.display = isImageVisible ? 'block' : 'none';
}
```
{% endbt-collapse %}

{% callout %}
**Attention**  
   Les variables ont une portée qui dépasse la portée de la fonction. La constante titre est définie en dehors de la
fonction, mais elle est utilisée à l'intérieur de la fonction.
{% endcallout %}

## 5 - Afficher le numéro choisi
Voici la page HTML
{% bt-collapse "exo5html" %}
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Grille</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="grid">
   <div class="cell">1</div>
   <div class="cell">2</div>
   <div class="cell">3</div>
   <div class="cell">4</div>
   <div class="cell">5</div>
   <div class="cell">6</div>
   <div class="cell">7</div>
   <div class="cell">8</div>
   <div class="cell">9</div>
</div>
<p class="txt-info"></p>
<script src="app.js"></script>
</body>
</html>
```
{% endbt-collapse %}
Voici la page CSS `style.css`
{% bt-collapse "exo5css" %}
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 100px); /* Définit 3 colonnes de largeur fixe de 100px chacune */
    grid-gap: 10px; /* Espace entre les cellules */
    /* Ajoutez ces propriétés pour centrer la grille */
    justify-content: center;
    align-items: center;

}

.cell {
    width: 100px; /* Largeur fixe de la cellule */
    height: 100px; /* Hauteur fixe de la cellule */
    background-color: red; /* Couleur de fond rouge */
    //color: white; /* Couleur du texte en blanc */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em; /* Taille de la police */
}
.txt-info{
    margin: auto;
    text-align: center;
    font-size: 1.5em; /* Taille de la police */
}
```
{% endbt-collapse %}
{%questions %}
Créez la page `app.js` qui affiche le numéro de la cellule clickée dans la balise `p`.
{% endquestions %}
