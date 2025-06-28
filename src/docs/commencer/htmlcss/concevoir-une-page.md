---
layout : "layouts/docs.njk"
title : "Concevoir Une Page"
description : "Les bases"
group : "htmlcss"
section : "commencer"
toc : true
date : "2022-08-19T07:14:48+02:00"
draft : false
---
{% callout warning %}
#### Documentation :
[HTML documentation Mdn](https://developer.mozilla.org/fr/docs/Web/HTML/Reference)   
[CSS documentation Mdn](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)  
[Documentation EMMET (raccourcis HTML)](https://docs.emmet.io/cheat-sheet/)  
[memento html]({% aref "download/memento.pdf" %})  
[memento css]({% aref "download/memento_css21.pdf" %})
{% endcallout %}
{% callout %}
#### Valider ses pages HTML et CSS :
[HTML Validator](https://validator.w3.org/#validate_by_upload)  
[CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload)  
 
[Alsacréation : un tuto HTML CSS](https://www.alsacreations.com/tuto/lire/555-design-css-complet-5-etapes.html)  
{% endcallout %}
## 1 - Comment créer une page Web ?
Pour créer une page web accessible en ligne, il faut :

- Une adresse URL
- Un serveur web pour héberger l’application
- Un code source
- (Optionnel, mais très fréquent) Une base de données

Les adresses URL sont payantes, on dit qu’il faut acheter son nom de domaine. On peut l’acheter en ligne, c’est environ
7 euros par an pour un .fr ou un .com.

Le serveur web est un serveur qui tourne en permanence, s’il s’arrête le site est inaccessible. Il gère les connexions
(requêtes) entrantes et sortantes. Sa structure va dépendre du langage utilisé.

La base de données permet de stocker l’information.

Attention la sécurité est un point important à prendre en compte pendant la programmation, notamment à cause du RGPD
si utilisation de données personnelles.
## 2 - La conception
- Définir le projet
- Définir le type de site web : E-commerce / Vitrine / Réservation
- Nombre de pages / rubriques nécessaires
- Les hyperliens à mettre en place

Pour des sites complexes, on crée des diagrammes (activité, classe, séquence) qui servent de plan, comme pour une maison.
Puis, on prévoit des tests avant publication du site.

Ici, on va se concentrer sur un site vitrine sans base de données.

Créer un site web statique est simple, il suffit de créer un répertoire au nom du site dans lequel sont insérés des fichiers html.  
L’usage veut que le nom du premier fichier soit index.html, de façon à identifier la page d’entrée du site.  
Il est nécessaire d’organiser les fichiers pour faciliter la maintenance du site. Ainsi à l’intérieur du répertoire,
il faut créer des sous répertoire en fonction des spécialités des fichiers.  
Par exemple un répertoire img contiendra tous les fichiers images, un répertoire download contiendra tous les fichiers
pdf destinés au téléchargement. Voici l’arborescence du site :

{% figure-abs "images/htmlcss/arborescenceSite.png" "arborescenceSite" "40%" "40%" "titre" %}

## 3 - les bases du code HTML
```html
<!DOCTYPE html>   → Utilisation du HTML5
<html lang="fr">  → On remarque la structure via ce qu'on appelle les balises
        <head>
                <title>ma première page</title>
        </head>   → On écrit presque toujours entre deux balises, chaque balise ouverte doit être généralement fermée
        <body>    → balise d'ouverture
        
        </body>   → balise de fermeture
</html>
```
## 4 - les balises de base
```html
Afficher un titre :
<h1>Titre de niveau 1</h1>

<h2>Titre de niveau 2</h2>

Afficher un paragraphe
<p>paragraphe</p>

Insérer une image :
<img src="https://picsum.photos/300/200" alt="image" />

Insérer un lien hypertexte
<a href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil\_principal">Wikipedia</a>

Insérer un bouton :
<button type="submit">Valider</button>

Sauter une ligne :
<br>

Insérer une ligne
<hr>
```
## 5 - Créer un fichier css
Jusqu’à présent le texte est brut, il n’y a ni couleur, ni forme, gras ou italique, toutes ces choses qui sont
facilement obtenues avec un traitement de texte. Si le HTML permet certaines mises en forme, il faut les bannir, car
il s’agit de pratiques anciennes.  
Comment faire pour écrire la phrase en rouge ? Il faut créer une feuille de style (Cascade style sheet)

- Créez une feuille de style `style.css`.
- Créez un lien avec la page HTML, configurer le head de la façon suivante :
```html
<head>

 <meta charset="utf-8">
 <link rel="stylesheet" href="style.css" >
 <title>ma première page</title>

</head>
```  
## 6 - Coder en css
Voici un exemple :
```css
body {background-color:snow;}
h1 {color: sandybrown;}
p {color: darkblue;}
button {
    background-color:sandybrown;
    color: snow;
    padding: 15px 40px;
    border-radius: 15px;
    border: 2px solid sandybrown;
}
```
[Affichez le résultat](https://codepen.io/binosor/pen/gOELvZW)
## 7 - créer d'autres pages
Le code peut être copié directement depuis la page 1.
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
             <meta charset="utf-8">
             <link rel="stylesheet" href="style.css" >
             <title>titre de l'onglet</title>

    </head>
    <body>

    </body>
</html>
```
## 8 - Créer une liste

[Affichez le résultat](https://codepen.io/binosor/pen/gOELvZW)

Code HTML
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```
Code css
```css
li {
    list-style-type: circle; /* forme de la puce */
    color: red; /* couleur du texte*/
}
```
## 9 - Le format carte
[Affichez le résultat](https://codepen.io/binosor/pen/zYboRXg)

Code HTML
```html
<div class="carte">
    <div class="carteTitre"><p>Le titre de la carte</p>
</div>
<div class="cartetexte">
    <p>Tout ce texte se trouve dans la carte,
        <br>Il peut être facilement orienté à droite ou à gauche, voir centré. Mais ce qui est le plus intéressant est son positionnement :
        <br>le texte peut avoir des marges à l’intérieur, mais le conteneur peut aussi avoir des marges avec les blocs qui l’environnement.
        <br>À l’intérieur de la carte, il faut utiliser l’instruction padding pour positionner le texte.
        <br>À l’extérieur de la carte, il faut utiliser le margin pour positionner le bloc.
        <br>Notre objectif ici est de centrer le bloc en positionnant le texte à droite.
    </p>
</div>
    </div>
```
Code css
```css
.carte p{
	color: white;
	background-color: black;
	width: 60%;
	margin: auto; /* la div se centre automatiquement */
	padding: 10px;
	border-style: solid;
	border-width: 10px;
	border-color: gold;
	}

.carteTitre{
	text-transform: uppercase;/* le texte se met en majuscules */
	letter-spacing: .09em;/* espacement entre les lettres */
	text-align: center;
	}

.carteTexte{
	text-align: justify;
	}
```
