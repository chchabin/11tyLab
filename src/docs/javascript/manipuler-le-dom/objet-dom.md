---
layout : "layouts/docs.njk"
title : "Objet Dom"
description : ""
group : "manipuler-le-dom"
section : "javascript"
toc : true
date : "2022-08-18T09:39:29+02:00"
draft : false
---
## **1 - L’objet document**
{%callout %}
#### **Résumé**
Pour sélectionner un élément, le couteau suisse est la méthode `querySelector`, elle fait les mêmes choses que 
`getElementById`, `getElementsByName`, `getElementsByClassName` ou `getElementsByTagName` . Avec un bémol, `querySelector` 
sélectionne que le premier élément, s’il y en a plusieurs de même type.

Pour sélectionner plusieurs éléments, il faut préférer `querySelectorAll` et `getElementsByName` à `getElementsByClassName` ou `getElementsByTagName`, 
car ils renvoient un tableau d’objets, qui est plus facile à itérer avec un forEach, par exemple.
{%endcallout %}
L’objet global document est l’objet principal d’un document HTML. Il contient les méthodes de ciblage d’éléments.
### a - `getElementById`
L’instruction getElementById permet de cibler un élément particulier de notre document en utilisant son id. Ainsi, si notre code HTML contient ceci
```html
<input type="radio" id="section1" name="language" value="JavaScript">
```
Nous pourrons le sélectionner de cette façon
```javascript
const section = document.getElementById("section1")
```
La variable section contiendra l’objet correspondant à la balise `input`.

La valeur de `section.value` sera `Ma section`.
### b - `getElementsByName`
L’instruction getElementByName permet de cibler un élément particulier de notre document en utilisant son attibut name.
```html
<input type="radio" id="section1" name="language" value="JavaScript">
```
Nous pourrons le sélectionner de cette façon
```javascript
const language = document.getElementByName("language")
```
La valeur de `language.value` sera `JavaScript`.
{%callout %}
**Le retour peut être un tableau d’objet**
Si le name fait référence à plusieurs balises, le retour sera un tableau d’objet :
{% endcallout %}
{% bt-collapse "notes1" %}
```html
<input type="radio" name="rate" value="Very poor"> <!--Very poor-->
<input type="radio" name="rate" value="Poor"> <!--Poor-->
<input type="radio" name="rate" value="OK"><!--OK-->
<input type="radio" name="rate" value="Good"><!--Good-->
<input type="radio" name="rate" value="Very Good"><!--Very Good-->
```
{% endbt-collapse  %}
L’appel
{% bt-collapse notes2 %}
```javascript
const rates = document.getElementsByName("rate")
```
{% endbt-collapse %}
renverra un **tableau** d’objets (une nodelist pour être plus précis) qu’il faudra itérer avec un `forEach` par exemple.
### c - `getElementsByClassName`
L’instruction `getElementsByClassName` permet de cibler tous les éléments de notre document portant une 
classe précise.
Ainsi, si notre code HTML contient ceci
```html
<div class="row"></div>
<section class="row"></section>
<footer class="row"></footer>
```
Nous pourrons les sélectionner de cette façon :
```javascript
let lignes = document.getElementsByClassName("row")
```
La variable `lignes` contiendra une **collection** d’objets correspondant aux 3 balises portant la classe "row".
### d - `getElementsByTagName`
L’instruction getElementsByTagName permet de cibler tous les éléments de notre document portant une balise précise.
Nous pourrons les sélectionner de cette façon
```javascript
let balisesDiv = document.getElementsByTagName("div")
```
La variable `balisesDiv` contiendra une **collection** d’objets correspondant à toutes les balises `div` de notre document.
### e - `querySelector` et `querySelectorAll`
Avec `querySelector` et `querySelectorAll`, nous avons la possibilité d’effectuer des sélections en utilisant des sélecteurs CSS, beaucoup plus précis et détaillés que les simples ID, classes et balises.
Cette fonctionnalité était avant implantée dans Jquery. Elle est maintenant disponible dans javascript.
La différence entre les deux méthodes est la suivante :

- `querySelector` : retourne la première occurrence répondant au sélecteur
- `querySelectorAll` : retourne toutes les occurrences répondant au sélecteur sous forme de tableau d’objet

Nous pouvons, par exemple, écrire les différentes lignes ci-dessous
```javascript
// Sélectionner la première occurrence qui correspond à une balise p
const baliseP = document.querySelector("p")

// Sélectionner toutes les occurrences qui correspondent à une balise p
const balisesP = document.querySelectorAll("p")

// Sélectionner la première occurrence qui correspond à une balise section qui a la classe "rouge"
const sectionRouge = document.querySelector("section.rouge")

// Sélectionner toutes les occurrences qui correspond à un élément ayant la classe "rouge" dans une une balise section
const classeRouge = document.querySelector("section .rouge")
```
### f- les éléments de base
les éléments de base de la page peuvent être ciblés plus facilement :
`document.documentElement` est l’élément principal du document (html)
```javascript
// Sélectionne l'élément head
document.head

// Sélectionne l'élément body
document.body
```
## 2 - Les Attributs
### a - `hasAttribute`
La méthode javascript `hasAttribute(nom)` de l’objet Element permet de savoir si un attribut existe.
```html
<div class="row" lang="fr"><div>
```
Nous pourrons les tester de cette façon :
```javascript
// Return true
document.getElementsByTagName("div").hasAttribute("lang")
```
### b - `getAttribute`
La méthode javascript `getAttribute(nom)` de l’objet Element permet de récupérer la valeur d’un attribut d’un élément par rapport à son nom
```html
<video src="pub.ogv" id="publicité"></video>
```
Nous pourrons les sélectionner de cette façon :
```javascript
// Return pub.ogv
const attribut =document.getElementById("publicite").getAttribute("src")
```
### c - `setAttribute`
La méthode javascript `setAttribute(nom,donnée)` de l’objet Element permet de spécifier la valeur d’un attribut d’un 
élément par rapport à son nom, ou d’en créer un, s’il n’existe pas dans l’élément.
```html
<div align="left">Contenu de la DIV.</div>
```
Nous pouvons aligner le texte de la "div" à droite de cette façon :
```javascript
// Alignement du texte à droite
document.getElementsByTagName("div").item(0).setAttribute("align","right");
```
### d - `removeAttribute`
```html
<div align="left">Contenu de la DIV.</div>
```
Nous pouvons supprimer l’attribut align de cette façon :
```javascript
// Alignement du texte à droite
document.getElementsByTagName("div").item(0).removeAttribute("lang");
```
## 3 - Modifier le DOM
Les propriétés principales manipulables sont les suivantes :

- **innerHTML** : le html contenu dans l’élément sélectionné,
- **textContent** : le contenu textuel uniquement,
- **style** : permet de modifier le CSS de l’élément,
- **value** : valeur des champs de formulaire,
- **attributes** : les attributs de l’élément sélectionné (href, src...) cf. supra
### a - `innerHTML`
L’attribut javascript `innerHTML` de l’objet Element permet de connaître et de modifier le contenu HTMLd’une balise
```html
<div id="contenu">Contenu de la DIV.</div>
```
Voici deux exemples d’affichage :  
**Afficher un élément**  
```html
// Return : <div id="contenu"><Contenu de la DIV.</div>
document.getElementById("contenu").innerHTML;
```
**Insérer un élément**  
```html
// Return : <div id="contenu"<h1>Contenu de la DIV.</h1></div>
document.getElementById("contenu").innerHTML="<h1>Contenu de la DIV.</h1>";
```
### b - `value`
La propriété value définit ou renvoie la valeur de l’attribut value d’un champ de texte.L
```html
<input type="text" id="myText" value="Mickey">
```
**Afficher un élément**  
```javascript
// Return : Mickey
document.getElementById("myText").value;
```
**Insérer un élément**
```javascript
// Return : ... value="Donald">
document.getElementById("myText").value="Donald";
```
### c - `textContent`
L’attribut [textContent](https://developer.mozilla.org/fr/docs/Web/API/Node/textContent) récupéré le texte d’un nœud et 
de ses descendants. Sa structure est comparable à `innerHTML`, avec des différences références dans la page mozilla. Ici, il n’est pas possible d’insérer des balises HTML qui pourront être interprétées.
```javascript
// Return : <div id="contenu">Bonjour</div>
document.getElementById("contenu").textContent="Bonjour";
```
On aura la même chose avec ceci :
```javascript
// Return : <div id="contenu">Bonjour</div>
document.getElementById("contenu").innerText="Bonjour";
```
### d - `style`
L’attribut javascript `style` de l’objet Element du Document Object Model HTML (DOM HTML) permet de connaître et de modifier l’attribut STYLE d’une balise HTML. Plus de détails dans cette [page](https://developer.mozilla.org/fr/docs/Web/API/HTMLStyleElement).
{% callout warning%}
**ATTENTION**  
La propriété style n’est pas prévues pour être lues. On ne pourra donc pas lire le CSS de l’élément par cette propriété
{% endcallout %}
