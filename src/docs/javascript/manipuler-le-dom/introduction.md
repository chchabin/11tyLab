---
layout : "layouts/docs.njk"
title : "Introduction"
description : ""
group : "manipuler-le-dom"
section : "javascript"
toc : true
date : "2022-08-18T09:37:04+02:00"
draft : false
---

## 1 - Qu’est-ce que le DOM ?
{% callout %}
 **Définition du DOM**  
Le DOM (Document Object Model) est une interface pour vos pages web. C’est une API permettant aux programmes de lire et de manipuler le contenu de la page, sa structure et ses styles.
{% endcallout %}
### a - Construire une page web
Le cheminement d’un navigateur partant d’un document source HTML pour finalement afficher une page stylée et interactive s’appelle le chemin critique du rendu (critical rendering path). Ce processus être regroupées en deux grandes étapes. La première consiste en l’analyse du document par le navigateur pour déterminer ce qui sera finalement rendu sur la page et la seconde est le rendu par le navigateur.

- le CSSOM, une représentation des styles associés aux éléments,
- le DOM, la représentation des éléments.
### b - Représentation du DOM
La structure d’objet du DOM est représentée par ce qu’on appelle une "arborescence de nœuds" (node tree). On l’appelle ainsi parce qu’il peut être considéré comme un arbre qui se ramifie en plusieurs branches enfants, chacune pouvant avoir des feuilles. Le premier parent est l’élément racine <html>, les "branches" enfants sont les éléments imbriqués et les "feuilles" sont le contenu des éléments.

{% figure-abs "images/javascript/dom-attribut.png" "dom-attribut.png" "90%" "90%" %}

### c - Ce que n’est pas le DOM
Bien que créé à partir du document source HTML, le DOM n’en est pas toujours l’exact reflet. Il peut en différer dans deux cas :

- Pendant le processus de création du DOM, le navigateur peut être amené à corriger des informations invalides.
- Lorsque le DOM est modifié par le javascript, il sera mis à jour, mais bien entendu notre document source HTML restera inchangé.

Le DOM n’est pas non plus ce que vous voyez dans le navigateur, une instruction comme `display: none` peut masquer des éléments du DOM

Le DOM n’est pas ce que vous voyez dans DevTools. Cette différence ne tient pas à grand-chose, car l’inspecteur d’éléments 
DevTools offre la meilleure approximation du DOM disponible dans le navigateur. Toutefois, DevTools inclut des informations 
qui ne sont pas dans le DOM.
Le meilleur exemple en est les pseudo-éléments CSS créées via les sélecteurs `::before` et `::after`. Ils font partie du CSSOM 
et de l’arbre de rendu, mais techniquement, ils n’appartiennent pas au DOM puisque celui-ci est construit à partir du seul document 
source HTML, qui ne comprend pas les styles appliqués aux éléments.
Pour afficher la console dans Chrome saisir `ctrl + maj + i`

{% figure-abs "images/javascript/Pseudo-element-in-devtools-inspector-compressor.png", "Pseudo-element-in-devtools-inspector-compressor.png" %}

## 2 - Les éléments du DOM
### Window
`Window` est la racine principale de l'objet JavaScript, c'est-à-dire la racine `global object` d'un navigateur, peut 
également être traitée comme la racine du modèle objet du document.
Il ne donne pas accès directement au DOM, il faut passer par `document` dans ce cas.
{% figure-abs "images/javascript/window_document.webp" "window_document.webp" "90%" "90%" %}
### a - Document
Le nœud document représente le point de départ, c’est à partir de ce nœud qu’on accède à l’ensemble des éléments du DOM. 
Il représente également l’objet Document qui fournit diverses méthodes pour accéder aux éléments. (ex : `document.querySelector('div.exemple')`).
### b - Élément
Les éléments HTML décrivent la structure d’une page HTML. Pour accéder à l’arbre DOM, commencez par rechercher des éléments via Document. Une fois que vous avez trouvé l’élément que vous voulez, alors vous pouvez accéder à ses nœuds de texte et d’attribut.
### c - Attribut
Les balises d’ouverture des éléments HTML peuvent contenir des attributs (exemple : id, class, …) et ceux-ci sont représentés par des nœuds d’attributs dans l’arbre DOM. Les nœuds d’attribut ne sont pas des enfants de l’élément qui les porte. Ils font partie de cet élément et ne peuvent eux-mêmes pas avoir d’enfant. Une fois que vous accédez à un élément, il existe des méthodes et des propriétés JavaScript spécifiques pour lire ou modifier les attributs de cet élément.
### d - Texte
Comme pour le nœud Attribut, vous pouvez accéder à un nœud texte par l’intermédiaire d’un nœud élément et comme pour le nœud attribut, les nœuds de texte ne peuvent pas avoir d’enfants.
