---
layout : "layouts/docs.njk"
title : "Maquettage"
description : ""
group : "htmlcss"
section : "commencer"
toc : true
date : "2022-09-03T22:47:04+02:00"
draft : false
---
## 1 - Introduction
Comment changer le design (le template en HTML) d’une page sans changer les informations de la page HTML
Voir le site de [zen garden](http://www.csszengarden.com/tr/francais/) à cette adresse

La mise en page est quelque chose de difficile à dominer, car il existe de nombreux formats de visionnement, du smartphone au grand écran 4k. Voilà pourquoi nous allons suivre quelques principes introductifs. Il faut tenir compte des menus et des encarts publicitaires ou autres. Pour ne pas mélanger les approches, nous allons utiliser une technologie qui est récente, mais aussi présente dans tous les navigateurs. On peut s’attendre à ce que les anciens navigateurs disparaissent à terme, car ils ne seront utilisés que sur les PC.
## 2 - Structure de la maquette
Le format standard d’une page web peut être présenté selon l’image ci-dessous

{% figure-abs "images/htmlcss/html5_structure.png" "layoutWeb" %}

Avant le HTML 5 toutes les balises portaient le nom div. Depuis ont été rajoutées les balises sémantiques que nous avons dans l’image

Pour des écrans plus petits l’organisation change, comme le montre l’image suivante :

{% figure-abs "images/htmlcss/HolyGrailLayout.png", "layoutWebResponsive" %}

## 3 - Le template flexbox
{% callout%}
**Documentation sur la technique flex :**  
[Résumé](https://flexbox.malven.co/)  
[Alacréation](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)  
[Documentation flex](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)  
[Bac à sable (sandbox) Flex](https://flexbox.help/)  
[Résultat final de l'exemple](https://codepen.io/binosor/pen/MWJdpQv)
{% endcallout%}
Nous allons modifier le code HTML de façon à obtenir le template suivant :

{% figure-abs "images/htmlcss/flexTemplate.png" "template" %}

Vous copiez le code suivant dans le body.
{% bt-collapse "ida" %}
```html
<div class="container">
   <header class="header item">Header</header>
   <nav class="menuLeft item">Menu</nav>
   <div class="flexrow">
      <nav class="menuLeft item">Menu colonne</nav>
      <section class="content item">
         <p>Body</p>
      </section>
   </div>
   <footer class="footer item">Footer</footer>
</div>
```
{% endbt-collapse %}

Dans la page css, ajoutez le code suivant :
{% bt-collapse "idb" %}
```css
/************* Gestion des styles *************/
/* Style de la boite */
* { margin: 0;} /* initialisation de l'affichage */
.item{  font-size:2em;  margin:5px;  padding:5px;  border:solid 2px black;  text-align:center;}
/* style des conteneurs */
.header{ background-color: #9900FF;}
.menuLeft{ background-color: #00FFFF;}
.content{ background-color:#DDDDDD;}
.footer{ background-color:#FF00FF;}
/************* Gestion de la présentation (layout) *************/
   .container {
      display: flex; /* crée un contexte flex pour ses enfants (Header,Menu,div,footer)*/
      flex-direction: column; /* affichage des enfants vertical */
   }
   .flexrow {
      display: flex; /* crée un contexte flex pour ses enfants (Body,Menu)  */
      flex-grow: 1; /* Espacement identique entre les blocs enfants  */
      flex-direction: row; /* affichage des enfants horinzontal (par défaut) */
   }
   .content {
      flex: 1; /* cet élément enfant va occuper tout l'espace disponible sur l'axe horizontal*/
   }
```
{% endbt-collapse %}
## 4 - Le template grid
{% callout%}
**Documentation sur la technique grid :**  
[Résumé](https://grid.malven.co/)  
[Documentation grid](https://www.alsacreations.com/outils/lire/1763-grid-layout-cheat-sheet-pense-bete.html)  
[La version mozilla](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Grids)  
[Résultat final de l'exemple](https://codepen.io/binosor/pen/bGZBLgW)
{% endcallout%}
Nous allons modifier le code HTML de façon à obtenir le template suivant :

{% figure-abs "images/htmlcss/maquetteGrid.png" "maquetteGrid" %}

Vous copiez le code suivant dans le body.
{% bt-collapse "idc" %}
```html
<div class="layout">
    <header class="header item">Header</header>
    <nav class="menuLeft item">Menu</nav>
    <section class="content item">Body</section>
    <footer class="footer item">Footer</footer>
</div>
```
{% endbt-collapse %}

Dans la page css, ajoutez le code suivant :
{% bt-collapse "id1" %}
```css
* { margin: 0;} /* initialisation de l'affichage */

.layout {
    display: grid; /* type d'affichage */
    min-height: 100vh;
    grid-template: /* structure de la maquette */
            "gheader gheader" min-content /* emplacement de header sur 2 colonnes */
            "gmenuleft gcontent" 1fr /* emplacement de menuleft sur 1 colonne et content sur l'autre */
            "gfooter gfooter" min-content; /* emplacement de footer sur 2 colonnes */
    grid-template-columns: 200px 1fr; /* Première colonnes 200px + "largeur restante" pour l'autre */
}

.header {
    grid-area: gheader;  /* placement de la classe header dans l'emplacement "gheader" */
    background-color: rgba(255, 107, 107, 0.2); /*  */
    border: 2px solid salmon; /*  */
    color: salmon; /*  */
}

.menuLeft {
    grid-area: gmenuleft; /* placement de la classe menuleft dans l'emplacement "gmenuleft" */
    background-color: #00cc00;
    border: 2px solid greenyellow;
    color: greenyellow;
}

.content {
    grid-area: gcontent; /* placement de la classe content dans l'emplacement "gcontent" */
    background-color: #0aa2c0;
    border: 2px solid #0aa2c0;
    color: blue;
}
.footer{
    grid-area: gfooter;
    background-color: #9a6e3a;
    border: #9a6e3a;
    color: maroon;
}
.item{
    font-size:2em;
    margin:5px;
    padding:5px;
    border:solid 2px black;
}
```
{% endbt-collapse %}

## 5 - Le template grid avec colonnes nommées
{% callout%}
**Documentation sur la technique grid :**  
[Résumé](https://grid.malven.co/)  
[Documentation grid](https://www.alsacreations.com/outils/lire/1763-grid-layout-cheat-sheet-pense-bete.html)  
[La version mozilla](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Grids)  
[Résultat final de l'exemple](https://codepen.io/binosor/pen/VwRmEyL)
{% endcallout%}

Lorsqu'on définit une grille avec grid-template-rows et grid-template-columns, on peut donner des noms aux lignes 
(toutes ou seulement quelques unes).

Le résultat obtenu est équivalent au résultat précédent.

Vous copiez le code suivant dans le body.
{% bt-collapse "idcl" %}
```html
    <header class="header item">Header</header>
    <nav class="menuLeft item">Menu</nav>
    <section class="content item">Body</section>
    <footer class="footer item">Footer</footer>
```
{% endbt-collapse %}

Dans la page css, ajoutez le code suivant :
{% bt-collapse "id1l" %}
```css
* { margin: 0;} /* initialisation de l'affichage */

body{
   display: grid;
   grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
   grid-template-rows: 100px 100px 100px ;
}
.header {
   grid-column:main;
   background-color: rgba(255, 107, 107, 0.2);
   border: 2px solid salmon;
   color: salmon;
}

.menuLeft {
   grid-column:main-start/content-start;
   background-color: #00cc00;
   border: 2px solid greenyellow;
   color: greenyellow;
}

.content {
   grid-column:content-start/main-end;
   background-color: #0aa2c0;
   border: 2px solid #0aa2c0;
   color: blue;
}
.footer{
   grid-column:main;
   background-color: #9a6e3a;
   border: #9a6e3a;
   color: maroon;
}
.item{
   font-size:2em;
   margin:5px;
   padding:5px;
   border:solid 2px black;
}
```
{% endbt-collapse %}


## 6 - Quelle technologie css choisir ?
{% callout %}
**la bonne pratique**
1. Faire la structure avec du Grid
2. Améliorer la présentation à l'intérieur des blocs avec du flex
3. Finaliser si besoin avec du float
   {% endcallout %}

### a - Quand utiliser le float ?
La propriété float indique qu'un élément doit être retiré du flux normal et doit être placé du côté droit ou du côté 
gauche de son conteneur. Le texte et les autres éléments en ligne (inline) entourerons l'élément flottant. L'élément est 
retiré du flux normal de la page, mais s'inscrit toujours dans le flux (contrairement à l'élément absolu).

Typiquement le float s'utilise avec un **positionnement d'image** : [comme ceci]({% aref "examples/examplefloat.html"  %})
### b - Quand utiliser le flex
Avec la propriété flex ce sont les enfants qui vont specifier comment ils vont se placer.

Dans cet exemple, [une page de vignette](https://codepen.io/binosor/pen/NWdVveb), la classe produit défini l'espace et les enfants, la classe `product-card`, se placent dans ce cadre.

Il faut donc prévoir la taille des enfants, avant de coder, ce qui est fastidieux dans le cas d'une présentation responsive.
Le display flex s'adapte bien dans le cadre de carte pour aligner les element sur un même ligne : des boutons par exemple.
### c - Quand utiliser le grid ?
C'est la technique recommandée pour mettre en forme une page.  
Le pilotage des enfants se fait par le parent. Voici un [exemple]({% aref "examples/examplegrid.html"  %}).

La gestion du responsive est plus facile, car il faut juste changer les caractéristiques du père.
