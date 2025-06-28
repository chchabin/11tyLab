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
{% bt-collapse "ex1ohtml" %}
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
{% endbt-collapse %}
Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo1js" %}
```javascript
const btn = document.querySelector('#btn')
const userList = document.querySelector('#resultat');

btn.addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();
    // Objet à afficher
    const chambrePrix={
        'Chambre simple': 65,
        'Chambre double': 75,
        'Chambre triple': 90
    }

    for (const [k, v] of Object.entries(chambrePrix)) {
        const li = document.createElement('li')
        li.textContent=`${k}: ${v}`
        userList.appendChild(li);
    }
}
```
{% endbt-collapse %}

## 2 - Utiliser une API rest
Voici une page HTML qui affiche un bouton
{% bt-collapse "ex2html" %}
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
{% endbt-collapse %}

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo2js" %}
```javascript
const btn = document.querySelector('#btn')
const products = document.querySelector('#products');

btn.addEventListener('click', onClick);

async function onClick(e){
    e.preventDefault();
     //Récupération des données JSON depuis le serveur rest
    const data=await fetchData('https://api.sampleapis.com/countries/countries')

    data.forEach((country) => {
        console.log(country)
        const div = document.createElement('div')
        const img=document.createElement('img')
        const pays = document.createElement('pays')
        div.classList.add('product-card')
        pays.classList.add('product-info')
        img.src=`${country.media.flag}`
        pays.textContent=`${country.name}`
        div.appendChild(img)
        div.appendChild(pays)
        products.appendChild(div);
    })
}
const fetchData = async (link) => {
  // await response of fetch call
  const response = await fetch(link)
  if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
  }
  // récupération des données au format JSON
  return await response.json()
}
```
{% endbt-collapse %}

## 3 - Utiliser un fichier JSON
Voici une page HTML qui affiche un bouton
{% bt-collapse "ex3html" %}
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
{% endbt-collapse %}
Voici le fichier JSON `chambre.json`
{% bt-collapse "ex3json" %}
```json
{
  "Chambre simple": 65,
  "Chambre double": 75,
  "Chambre triple": 90
}
```
{% endbt-collapse %}

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo3js" %}
```javascript
const btn = document.querySelector('#btn')
const userList = document.querySelector('#resultat')

btn.addEventListener('click', onClick)

async function onClick(e){
    e.preventDefault()
    const json=await fetchDataJson('./chambre.json')

    for (const [k, v] of Object.entries(json)) {
        const li = document.createElement('li')
        li.textContent=`${k}: ${v}`
        userList.appendChild(li)
    }
}
const fetchDataJson = async (link) => {
    // await response of fetch call
    const response = await fetch(link)
    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`)
    }
    return await response.json()
}
```
{% endbt-collapse %}

## 4 - Utiliser un fichier HTML
Voici une page HTML qui affiche un bouton
{% bt-collapse "ex4html" %}
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
{% endbt-collapse %}

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse "exo4js" %}
```javascript
const btn = document.querySelector('#btn')
const userList = document.querySelector('#resultat');

btn.addEventListener('click', (e)=>onClick(e));

async function onClick(e){
    e.preventDefault();
   userList.innerHTML =await fetchDataText('./page.html')

}
const fetchDataText = async (link) => {
    // await response of fetch call
    const response = await fetch(link)
    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
    }
    // récupération des données au format texte
    return await response.text()
}
```
{% endbt-collapse %}

Voici la page HTML `page.html` à insérer
{% bt-collapse "ex4html2" %}
```html
<h1>Ma nouvelle page</h1>
<div>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet fugit maxime perspiciatis praesentium qui
    sed. A architecto autem consequatur eligendi exercitationem, expedita libero magni nesciunt nostrum quaerat sed totam.
</div>
```
{% endbt-collapse %}

## 5 - Récupérer les données d'un formulaire
Voici une page HTML qui affiche un bouton
{% bt-collapse "ex5html" %}
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
{% endbt-collapse %}

Cette page fait appel au fichier `app.js` qui contiendra notre code javascript
{% bt-collapse exo5js %}
```javascript
const myForm = document.querySelector('#my-form');
const oTextMdp = document.querySelector('#mdp');
const oTextEmail = document.querySelector('#email');
const userList = document.querySelector('#users');


// capture de l'évènement submit et appel de la fonction onSubmit
myForm.addEventListener('submit', onSubmit)

function onSubmit(e)
{
    e.preventDefault();
    console.log(e)
    console.log('email', oTextEmail.value)
    if (oTextEmail.value !== '' || oTextMdp.value !== '') {
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${oTextMdp.value}: ${oTextEmail.value}`));

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        oTextMdp.value = '';
        oTextEmail.value = '';
    }
}
```
{% endbt-collapse %}

Voici la page CSS `style.css`
{% bt-collapse ex5css %}
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
{% endbt-collapse %}
