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

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript


{% callout %}
#### Recette
1. La page affiche une image
2. L'utilisateur click sur l'image
3. La page affiche une autre image
   {% endcallout %}

   **Résultat**
   {% figure-abs "images/gif/exo1.gif" "exo1" "100%" "100%" %}

## 3 - Changer deux images
Voici une page HTML qui affiche deux images

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

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript. 
Nous traitons l'événement `Appuyer Sur Un Bouton`.

**Résultat**
{% figure-abs "images/gif/exo2.gif", "exo2" %}

## 4 - Faire disparaitre une image
### Prérequis
[Le DOM]({% aref "docs/javascript/manipuler-le-dom/introduction/#2---les-éléments-du-dom"%})

### Le code
Voici une page HTML qui affiche une image

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

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript.
Nous traitons deux événements :
1. `Charger la page`,
2. `Appuyer Sur Un Bouton`.

{% callout %}
**Attention**  
   Les variables ont une portée qui dépasse la portée de la fonction. La constante titre est définie en dehors de la
fonction, mais elle est utilisée à l'intérieur de la fonction.
{% endcallout %}

**Résultat**
{% figure-abs "images/gif/exo3.gif", "exo3" %}

## 5 - Afficher le numéro choisi
Voici la page HTML

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

**Résultat**
{% figure-abs "images/gif/exo4.gif" "exo4" "200" "200"%}
