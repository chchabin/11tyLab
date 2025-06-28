---
layout : "layouts/docs.njk"
title : "Conception Manipulation Des Composants"
description : "Faire des modifications dans une page HTML sans avoir à y écrire de code."
group : "manipuler-le-dom"
section : "javascript"
toc : true
date : "2022-08-18T09:41:02+02:00"
draft : false
---
## 1 - Principe
Les 4 étapes pour insérer un élément HTML sont les suivantes :

1. Tout d'abord créer un nœud pour l'élément avec la méthode document.createElement(),
2. Ensuite créer un nœud pour son contenu avec la méthode document.createTextNode(),
3. Puis "prendre" le nœud élément et lui accrocher son nœud contenu en utilisant la méthode appendChild(),
4. Enfin "choisir" le nœud d'un élément HTML dans l'arbre où vous voulez accrocher ce qui constitue une nouvelle branche. Accrochez là en utilisant la méthode appendChild()
## 2 - `createElement`
La méthode `createElement()` permet de créer un nouveau nœud élément (balise).
```javascript
const li = document.createElement('li');
```
Ici, c'est un nœud correspondant à la balise `<li>` qui est créé.
{% callout warning%}
**Attention**
Le fait de déclarer un nouveau nœud ne veut pas dire qu'il sera visible dans la page, car on ne l'a pas encore intégré à l'arbre HTML.
{% endcallout %}
## 3 - `createTextNode`
La méthode `createTextNode(données)` génère un nœud de texte. Le paramètre « données » est la chaîne qui spécifie le contenu du nœud de texte.
```javascript
const node=document.createTextNode(`Tille : jeantille@mail.fr`)
```
Le couple d'information `Tille : jeantille@mail.fr` est inséré dans le nœud.
## 4 - `appendChild`
La méthode `appendChild()` ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié.
```javascript
li.appendChild(node);
```
Ici, le lien est fait entre le nœud élément et le texte qui lui est associé.
```javascript
ul.appendChild(li);
```
Ici le nœud enfant est associé au nœud parent ul.
{% callout %}
**Remarque**
Avec la méthode appendChild le nœud enfant est ajouté après tous les autres nœuds enfant.
{% endcallout %}
## 5 - `insertBefore`
La méthode `insertBefore()` ajoute un nouveau nœud enfant dans l'élément parent sur lequel elle est appelé. 
Si `appendChild()` ajoute le nœud à la fin, `insertBefore` quant à elle permet de spécifier avant quel élément on veut insérer le nôtre.
## 6 - `removeChild`
La méthode `removeChild()` supprime l'enfant passé en paramètre du parent sur lequel il est appelée.
