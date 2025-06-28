---
layout : "layouts/docs.njk"
title : "Architecture Mvc"
description : ""
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T10:03:02+02:00"
draft : false
---
{% callout %}
#### Les codes sur github
[gsb-nodejs-express-mysql](https://github.com/chchabin/gsb-nodejs-express-mysql)
{% endcallout %}
{% callout %}
#### Création et accès à la page accueil (1/3)
Vous allez récrire l'application [Lafleur](https://github.com/chchabin/Lafleur-2021-php-MVC), initialement écrite enPHP, en javascript.
{% endcallout %}
{% callout warning%}
#### Prérequis
Vous devez :

1. créez un répertoire : `node-lafleur`,
2. initialiser un projet nodejs avec [un fichier vierge]({% aref "docs/javascript/nodejs-et-expressjs/installation"%}),
3. télécharger les [modules](1{% aref "docs/javascript/nodejs-et-expressjs/installation"%}) : nodemon et express.
4. créer un fichier index.js selon le [modèle]({% aref "docs/javascript/nodejs-et-expressjs/commencer-et-afficher"%}) (supprimer la partie création de la route),
{% endcallout %}
## 1 - Création de la structure des routes
{% callout warning%}
#### Prérequis
Créez un répertoire routes.
Créez un fichier routes.js.
{% endcallout %}
Vous avez créé un fichier indépendant qui contiendra les routes. Dans ce fichier, vous allez ajouter ce code :
```javascript
const express = require('express');
const router = express.Router();
//code des routes à ajouter ici


module.exports = router;
```

Dans le fichier `index.js` rajoutez au niveau des constantes :
```javascript
const router=require('./routes/routes')
```
Vous allez maintenant activer la route. Ajoutez avant // Gestion des erreurs HTTP :
```javascript
app.use ('/',router);
```

Copiez maintenant la partie du code qui correspond à la route dans le fichier route.js.
{% questions%}
#### Lancez de nouveau l'application (si besoin)
Vous ne devez pas avoir d'erreurs !
{% endquestions %}
## 2 - Création de la structure des vues
{% callout warning%}
#### Prérequis
Téléchargez les modules `ejs` et `express-layout`.
Créez un répertoire `public`

- Ce sera le répertoire d'ouverture de l'application. Il contiendra les fichiers nécessaires à la présentation des vues : 
css, javascript, images, etc.

Créez un répertoire `views`  
Créez les fichiers suivants :

- `layout.ejs` : il contient la structure de la page html
- `bandeau.ejs` : il contient un menu
- `accueil.ejs` : il contient la page d'accueil
{% endcallout %}
### a - Création du middleware
La gestion des vues nous oblige à créer un middleware (ensemble de paquet nécessaire au bon fonctionnement de l'application) 
dans le fichier `index.js`. Vous allez ajouter le code suivant entre les lignes c`onst router ...` et `app.use ('/',router);` :
```javascript
// module de gestion de chemin
const path = require('path');

// module pour la création de la page layout
const layout = require('express-layout');

// code pour la mise en place des vues
app.set('views', path.join(_._dirname, 'views'));
app.set('view engine', 'ejs');

const middlewares = [
    layout()
    // paramétrage du lien sur le répertoire public
    , express.static(path.join(_._dirname, 'public'))
    ];

// exécution du tableau middlewares

app.use(middlewares);
```
### b - création de la vue layout
{% callout %}
#### Infos
Le code pour l'insertion de variables est équivalent à celui de blade, ou des raccourcis PHP.

- `<%` pour exécuter du code
- `<%=` pour afficher un résultat
- `<%-` pour afficher du code (équivalent à la balise HTML pre)
  {% endcallout %}
Passons à la création des vues :
La vue layout est la vue de présentation, c'est dans cette vue que seront insérées toutes les vues qui seront appelées par le contrôleur. Elles seront insérées au niveau de la balise body. Voilà pourquoi, La vue layout rassemble les vues v\_entete.php et v\_pied.php :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Lafleur</title>
    <link rel="stylesheet" href="/cssGeneral.css" type="text/css" />
    <link rel="icon" type="image/png" href="/images/favicon.ico">
</head>
<body>
<%- body %>
</body>
</html>
```
### c - création de la vue bandeau
La vue bandeau est la même, il suffit de faire un copier collé du code. Néanmoins, l'appel des routes est différent de celui du PHP
```html
<div id="bandeau">
    <!-- Images En-tête -->
    <!--<img src="images/menuGauche.gif"	alt="Choisir" title :"Choisir"/>-->
    <img src="images/lafleur.gif"	alt="Lafleur" title :"Lafleur"/>
</div>
    <!--  Menu haut-->
    <ul id="menu">
        <li><a href="/">;Accueil </a></li>
        <li><a href="/voirProduits">;Voir le catalogue de fleurs </a></li>
        <li><a href="#">;Voir son panier </a></li>
        <li><a href="#">;Administrer </a></li>
    </ul>
```
### d - création de la vue accueil
Pour la vue accueil est un peu différente. Il faut y inclure la vue bandeau.
```html
<%- include ('bandeau')%>
<div id="accueil">
    Lafleur, le prince des fleurs sur internet
</div>
```
La balise <%- est spécifique à ejs. Elle permet d'écrire du code qui sea interprété par ejs. Ici, nous allons inclure la vue bandeau dans la vue accueil.
#### v - création de la route
Enfin, il faut appeler la route qui ouvre la vue accueil :
```javascript
// création de la Route vers accueil
router.get('/', (req, res) => {
    res.render('accueil');
});
```
### e - Mise en place de css et des images
- Copiez le fichier cssGeneral.css dans le répertoire public.
- Copiez le répertoire image dans le répertoire public.
- {% questions %}
#### Rafraichissez ou Lancez de nouveau l'application (si besoin)
Vous devez retrouver la vue d'accueil de Lafleur
{% endquestions %}
## 3 - Création du contrôleur
{% callout warning%}
#### Prérequis
Créez un répertoire `controller`.
Créez dans ce répertoire, un fichier `voirProduits.js`.
Créez les fichiers suivants dans le répertoire views :

- `categories.ejs` : il contient la liste des catégories
- `produits.ejs` : il contient la liste des produits pour une catégorie
{% endcallout %}
### a - créer les fonctions du contrôleur
Avant de faire une connexion à la base de données, nous allons tester notre application avec, une valeur de catégorie et une valeur de produit. 
Comme la base de données renvoie un tableau d'objets, nous auront les valeurs suivantes :

- lesCategories : `[{id:'com',libelle:'Composition'}]`
- lesProduits : `[{id:"c01",description:"Panier de fleurs variées",prix:53,"image":"images/compo/aniwa.gif",idCategorie:"com"}]`

Nous construisons les fonctions d'appel de façon à les convertir quand vous vous connecterez à la base de données.
Copiez ce code dans le fichier voirProduits.js :
```javascript
module.exports = {
    voirCategories:async (req, res) => {
        const lesCategories=[{id:'com',libelle:'Composition'}]
        //Appel de la vue produit et envoie des données
        res.status(200).render('categories',{
            lesCategories:lesCategories
        });
    },
    voirProduit:async (req, res) => {
        const num=1;
        const lesCategories=[{id:'com',libelle:'Composition'}]
        const getLesProduitsDeCategorie=[{id:"c01",description:"Panier de fleurs variées",prix:53,"image":"images/compo/aniwa.gif",idCategorie:"com"}]
        res.status(200).render('produits',{
            lesCategories:lesCategories,
            lesProduits:getLesProduitsDeCategorie,
            categorie:num
        });
    }
}
```
### b - lier le contrôleur à la route
Dans le fichier `routes.js` vous allez ajouter ce code au niveau des modules :
```javascript
const voirProduits = require('../controller/voirProduits');
```
Ainsi le module du contrôleur est chargé avec celui de la route.

Il vous reste maintenant à créer les routes qui font appel au contrôleur. Lorsque l'utilisateur clic sur le lien, 
l'URL est composée de `/voirProduit` ou `/voirProduitIdcategorie`. Il faut donc retrouver cette information. En suivant le détail de l'[URL](120express_affichage.html#lecture), vous allez rajouter une route. Pour l'instant les fonctions ne font qu'afficher des valeurs, voilà pourquoi la méthode d'envoi est GET.
Copiez ce code :
```javascript
router.get('/voirProduits',voirProduits.voirCategories);
router.get('/voirProduits:num',voirProduits.voirProduit);
```
### c - Création des vues
Le contrôleur appel deux vues : `categories` et `produits`  
Pour catégorie, copiez ce code :
```express
<%- include ('bandeau')%>
<ul id="categories">
    <% for(uneCategorie of lesCategories )
    {
	    const idCategorie = uneCategorie['id'];
	    const libCategorie = uneCategorie['libelle'];
	%>
    <li>
        <a href="/voirProduits<%= idCategorie%>"><%= libCategorie %></a>
    </li>
<% }%>
</ul>
```

Pour la vue `produits` copiez ce code :
```express
<%- include ('categories')%>
<div id="produits">
<% for( unProduit of lesProduits)
{
	id = unProduit['id'];
	description : unProduit['description'];
	prix=unProduit['prix'];
	image = unProduit['image'];
    %>
    <ul>
        <li><img src="<%= image%>" alt=image /></li>
        <li><%=description%></li>
        <li>;: <%= prix %>;Euros</li>
        <li><a href="/ajouterAuPanier<%= categorie%>&<%= id%>">
                <img src="images/mettrepanier.png" title :"Ajouter au panier">;</a></li>
    </ul>
<%}%>
</div>
``` 
{% questions %}
#### Rafraichissez ou Lancez de nouveau l'application (si besoin)
En cliquant sur `Voir le catalogue de fleur` et `Composition`, vous devez, voire apparaitre un produit.

Il nous reste maintenant à lier la base de données à notre application !
{% endquestions %}
