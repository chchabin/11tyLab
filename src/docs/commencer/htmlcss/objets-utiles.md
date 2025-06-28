---
layout : "layouts/docs.njk"
title : "Objets Utiles"
description : ""
group : "htmlcss"
section : "commencer"
toc : true
date : "2022-09-03T22:49:18+02:00"
draft : false
---
## 1 - Menu flex
{% callout %}
**Documentation sur la technique flex :[](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)**  
[Documentation flex](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)
{% endcallout %}
Nous allons modifier le code HTML de façon à obtenir le menu suivant :

{% figure-abs "images/htmlcss/flexMENU.png" "flexMENU" %}

Vous copiez le code suivant dans le body.
{% bt-collapse "idc" %}
```html
<nav>
    <ul class="nav">
        <li>
            <a href="#presentation">Accueil</a>
        </li>
        <li>
            <a href="#produits">nos produits</a>
        </li>
        <li>
            <a href="#contacts">Nous contacter</a>
        </li>
        <li>
            <a href="#plan">Plan d'accès</a>
        </li>
        <li>
            <a href="#quiSommesNous">Qui sommes-nous ?</a>
        </li>
    </ul>
</nav>
```
{% endbt-collapse %}

Dans la page css, ajoutez le code suivant :
{% bt-collapse "id1" %}
```css
/************* Gestion de la présentation (layout) *************/
/* Positionnement en ligne des li */
.nav{
    display: flex;
    flex-direction: row;/* */
    flex-wrap: wrap;/* */
    justify-content: flex-start;/*  */
    align-items: stretch;/* */
}
.nav a{
    display: block;/* */
}

/************* Gestion des styles *************/
.nav{
    list-style-type : none;/*  */
    margin: 0;
    padding: 0;
    background: #00c7f0;
}
.nav li a{
    text-decoration: none;/*   */
    padding: 1em;/*   */
    color: white;
    text-transform: uppercase;/*  */
    letter-spacing: .09em;/*  */
}
.nav a:hover {
    background: #00b7f5;/*   */
}
```
{% endbt-collapse %}
## 2 - Formulaire flex
{% callout %}
**Documentation sur la technique flex :[](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)**  
[Documentation flex](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)
{% endcallout %}
Nous allons modifier le code HTML de façon à obtenir le template suivant :

{% figure-abs "images/htmlcss/flexForm.png" "flexForm" %}

Vous copiez le code suivant dans le body.
{% bt-collapse "ida" %}
```html
<div class="container">
    <form  action="mailto:adresse@email.tld" method="post">
        <ul class="flex-form">
            <li>
                <label for="nom">Nom</label>
                <input type="text" id="nom" placeholder="Entrez votre nom ici">
            </li>
            <li>
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" placeholder="Entrez votre prénom ici">
            </li>
            <li>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Entrez votre email ici">
            </li>
            <li>
                <label for="telephone">Téléphone</label>
                <input type="tel" id="telephone" placeholder="Entrez votre téléphone ici">
            </li>
            <li>
                <label for="message">Message</label>
                <textarea rows="6" id="message" placeholder="Entrez votre message ici"></textarea>
            </li>
            <li>
                <button type="submit">Envoyer</button>
            </li>
        </ul>
    </form>
</div>
```
{% endbt-collapse %}
Dans la page css, ajoutez le code suivant :
{% bt-collapse "idb" %}
```css
/************* Gestion de la présentation (layout) *************/
.flex-form li{
    display: flex;
    flex-wrap: wrap; /* */
    justify-content: flex-start;/*  */
    align-items: center;/*  */
}
/* la taille du label va de 120 à 220px */
.flex-form > li > label {
    flex-grow: 1;/*  */
    flex-shrink: 0;/*  */
    flex-basis:120px;/*  */
    max-width: 220px;/*  */
}
/* la taille de la saisie est de 220px la taille totale de la ligne est de 340px*/
.flex-form > li > label + *{
    flex-grow: 1;/*  */
    flex-shrink: 0;/* */
    flex-basis:220px;/*  */
}
/************* Gestion des styles *************/
body {
    background: #f2f2f2;
}
.flex-form li button {
    margin-left: auto;
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;/*  */
    letter-spacing: .09em;/*  */
    border-radius: 2px;/*  */
    cursor: pointer;/* */
}
.flex-form li {
    padding: 8px;
    font-weight: 300;
    letter-spacing: .09em;
    text-transform: uppercase;
}
```
{% endbt-collapse %}
