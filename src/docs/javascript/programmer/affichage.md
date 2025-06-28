---
layout : "layouts/docs.njk"
title : "Affichage"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T08:06:45+02:00"
draft : false
---
## 1 - L’affichage popup
C’est l’affichage le plus classique, il suffit d’écrire :
```javascript
<script>
    alerte (’hello World’)
</script>
```
Une fenêtre popup apparait avec le texte Hello world
## 2 - L’affichage dans la console
Sur le navigateur la console apparait, dans le cas de chrome (mais aussi de façon comparable sur tous les autres navigateurs) 
quand on fait un clic-droit puis `Inspecter`, il suffit d’écrire :
```javascript
<script>
    console.log(’hello World’)
</script>
```
Le texte Hello world apparait dans la console. D’autres fonctionnalités sont disponibles avec console.
```javascript
<script>
    console.error("C’est une erreur");
</script>
```
Le message C’est une erreur apparait dans la console avec la couleur rouge.
```javascript
<script>
    console.warning("C’est une alerte");
</script>
```
Le message C’est une alerte apparait dans la console avec la couleur marron.

## 3 - L’affichage direct dans le navigateur
Il suffit d’écrire :
```javascript
<script>
    document.write (’hello World’)
</script>
```
Le texte Hello world apparait dans le navigateur.
## 4 - l’affichage avec les balises
Le javascript permet de lire ou d’afficher des éléments, dont du texte, entre des balises html grâce à la propriété innerHTML. Soit l’élément suivant :
```html
<p id="balise">hello World </p>
```
On peut obtenir le contenu du paragraphe avec ce code :
```html
<script>
    const c = document.getElementById("balise"); // sélection de l’id
    document.write (c.innerHTML);  // affiche hello World
</script>
```
On peut remplacer dynamiquement le contenu du paragraphe avec ce code`&nbsp ;`:

```html
<script>
    const c = document.getElementById("balise"); // sélection de l’id
    c.innerHTML = "Bonjour le monde";  // affiche Bonjour le monde
</script>
```
La même chose peut être faite à partir d’une balise sans texte. Soit l’élément suivant :
```html
<p id="balise"></p>
```

On peut afficher dynamiquement le contenu du paragraphe avec ce code :
```html
<script>
    const c = document.getElementById("balise"); // sélection de l’id
    c.innerHTML = "hello World";  // affiche hello World
</script>
```
À partir de `document`, d’autres méthodes sont possibles, comme `querySelector`, qui lui identifie les balises. 
Vous devez connaitre les éléments du DOM pour approfondir ce domaine. 
