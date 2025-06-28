---
layout : "layouts/docs.njk"
title : "Css"
description : " Séparer la structure d’un document de ses styles de présentation"
group : "htmlcss"
section : "commencer"
toc : true
date : "2024-01-13T14:58:06+01:00"
draft : false
---

{% callout warning %}
#### Documentation :
[HTML documentation Mdn](https://developer.mozilla.org/fr/docs/Web/HTML/Reference)   
[CSS documentation Mdn](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)  
[memento html]({% aref "download/memento.pdf"%})  
[memento css]({% aref "download/memento_css21.pdf"%})
{% endcallout %}

## 1 - Les sélecteurs (attributs)
Une feuille de style de CSS est composée d'un ensemble de règles. Une règle est composée de trois notions différentes :

* Sélecteur : Indique le ou les éléments sur lesquels la mise en forme va s'appliquer.
* Propriété : Précise la propriété CSS, nous allons les découvrir au fur et à mesure.
* Valeur : Détermine la valeur de la propriété à appliquer sur le sélecteur.

{% figure-abs "images/htmlcss/css-declaration-small.png" "css" "50%" "50%" %}

Les autres éléments importants de la syntaxe sont :

* chaque ensemble de règles, à l'exception du sélecteur, doit être entre accolades (`{ }`).
* pour chaque déclaration, il faut utiliser deux points (`:`) pour séparer la propriété de ses valeurs.
* pour chaque ensemble de règles, il faut utiliser un point-virgule (`;`) pour séparer les déclarations entre elles.

{% bs-table %}

| **Motif**                | **Signification**                                                                                                                                                          | **Exemple...**                                                                                  |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| *                        | Correspond à tout élément.                                                                                                                                                 |                                                                                                 |
| E                        | Correspond à tout élément E (c.à.d.,un élément de type E).                                                                                                                 | p sélectionne tous les \<p\>                                                                    |
| #my-id                   | L'élément d'une page qui possède l'ID fourni (pour une page HTML donné, on ne peut avoir qu'un seul élément pour un ID donné).                                             | \<p id="my-id"\> ou \<a id="my-id"\>                                                            |
| E#myid	                  | Correspond à tout élément E dont l'ID est "myid".                                                                                                                          | p.id sélectionne  \<p id="my-id"\>                                                              | 
| .my-class                | Les éléments d'une page qui sont de la classe donnée (pour une page donnée, il est possible d'avoir plusieurs éléments qui partagent une même classe).                     | \<p class="my-class"\> et \<a class="my-class!"\>                                               |
| E.my-class               | Correspond à tout élément E dont la classe est "my-class"                                                                                                                  | p#my-class sélectionne \<p class="my-class"\>                                                   |
| E:hover                  | Les éléments donnés mais uniquement dans un certain état (par exemple quand on passe la souris dessus).                                                                    | a:hover sélectionne \<a\> mais uniquement quand le pointeur de la souris est au-dessus du lien. |
| E,F                      | Correspond à tout élément E et F                                                                                                                                           | ul,p                                                                                            |
| E F                      | Correspond à tout élément F qui est un descendant de l'élément E.                                                                                                          | ul li sélectionne tous les li dans ul                                                           |
| E > F                    | Correspond à tout élément F aussi un enfant de l'élément E.                                                                                                                | Séléctionne tous les \<p\> dont les parents sont \<div\>                                        |
| E:last-child             | Correspond à un élément E aussi le dernier enfant de son élément parent.                                                                                                   | Séléctionne tous les élémentsnqui sont le dernier enfant de  \<p\>                              |
| E:link E:visited         | Correspond à un élément E qui est une ancre dans la source dont le lien n'a pas été visité (:link) ou bien l'a déjà été (:visited).                                        |                                                                                                 |   
| E:active E:hover E:focus | Correspond à l'élément E au cours de certaines actions de l'utilisateur.                                                                                                   |                                                                                                 |
| E:lang(c)                | Correspond à l'élément de type E qui emploie une langue c (la détermination de cette langue est spécifique au langage du document).                                        |                                                                                                 |
| E + F                    | Correspond à tout élément F immédiatement précédé par un élément adjacents E.                                                                                              | Séléctionne le premier \<p\> immédiatement aprés \<div\>                                        |
| E[foo]                   | Correspond à tout élément E avec l'attribut "foo" (quelles qu'en soient les valeurs).                                                                                      |                                                                                                 |
| [foo]                    | Correspond à tout les attribut "foo" (quelles qu'en soient les valeurs).                                                                                                   |                                                                                                 |
| E[foo="warning"]         | Correspond à tout élément E dont l'attribut "foo" a exactement la   d'attribut valeur "warning".                                                                           |                                                                                                 |
| E[foo~="warning"]        | Correspond à tout élément E dont l'attribut "foo" a pour valeur une d'attribut liste de valeurs séparées par des caractères blancs et dont une de celles-ci est "warning". |                                                                                                 |
| E[lang ="en"]            | Correspond à tout élément E dont l'attribut "lang" a pour valeur d'attribut une liste de valeurs séparées par des tirets, cette liste commençant (à gauche) par "en".      |                                                                                                 |
| DIV.warning              | Seulement en HTML. Identique à DIV[class~="warning"].                                                                                                                      |                                                                                                 |
| E::after                 | Insert quelque chose aprés chaque selecteur E                                                                                                                              | p::after                                                                                        |

{% endbs-table %}
[plus de détails](https://www.w3schools.com/cssref/css_selectors.php)

## 2 - Poids des sélecteurs
En CSS, les sélecteurs ont un poids. En effet, comme nous venons de le voir, les deux derniers paragraphes sont en bleu 
car le sélecteur de classe a un poids supérieur au poids du sélecteur d'élément. La notion de poids est relativement 
complexe. Le cours étant destiné à un public débutant, nous la simplifierons légèrement.

SÉLECTEUR D'IDENTIFIANT > SÉLECTEUR DE CLASSE >
SÉLECTEUR D'ÉLÉMENT OU SIMPLE > SÉLECTEUR UNIVERSEL

Il faut donc comprendre que le poids d'une déclaration avec un sélecteur d'identifiant est supérieur à celui d'une 
déclaration avec un sélecteur de classe et ainsi de suite. La déclaration avec le sélecteur qui a le poids le plus 
important l'emporte sur les autres.

## 3 - LE MODÈLE DE BOÎTE
Le modèle de boîte est essentiel en CSS. La bonne compréhension de ce modèle est indispensable pour mettre correctement 
en forme une page HTML. Pour rappel, c'est le moteur de rendu qui s'occupe de la compréhension et de l'affichage du CSS.

La règle est la suivante : dans une page HTML, chaque élément ou balise est représenté par une boîte rectangulaire. 
Cette boîte fait sens avec ce que nous avons vu dans le chapitre précédemment. Les bordures de couleur autour des 
éléments dessinaient tout simplement les extrémités de la boîte.

Le modèle de boîte peut être ajusté et modifié grâce à des propriétés particulières. Le schéma ci-après illustre 
le modèle de boîte avec les propriétés incontournables : `margin`, `border` et `padding`.

{% figure-abs "images/htmlcss/box-model.png" "box-model" "100%" "100%" %}

* padding, l'espace autour, proche du contenu (par exemple, l'espace autour du texte d'un paragraphe) (en français, on
pourrait traduire cela par du « remplissage » mais le terme padding étant communément utilisé lorsqu'on parle de CSS, 
on continuera à utiliser ce terme)
* border, la ligne qui est juste autour du padding (en français cela correspond à la bordure)
* margin, l'espace extérieur, autour de l'élément (en français cela correspond à la marge)

[Un exemple](https://codepen.io/binosor/pen/zYboRXg)

## 4 - les unités de mesure
#### Il existe plusieurs unités de longueurs absolues :

* pt, point (mesure typographique). Le point est égal à 1/72 de pouce.
* pc, pica (mesure typographique). Un pica est égal à 12 points.
* in, pouce (inch). Un pouce est égal à 2.54 cm, 6 picas est égal à pouce.
* cm, centimètre.
* mm, millimètre.

Ne nous attarderons pas ces unités qui sont plus destinées pour l'impression (`@media` de type print).
`px`, une quantité de pixels, en fonction de l'appareil de visualisation.

#### Les unités de longueurs relatives :

* ex, x-height.
* em, m-length.
* rem, root m-length.
* %, pourcentage.
* vh, viewport height.
* vw, viewport width.

#### Définition de l'unité "rem"
L'unité relative rem fonctionne sur comme "em" mais elle utilise comme valeur de référence le font-size du document et 
non la valeur de font-size du parent.

Dans le cas d'éléments imbriqués l'unité relative `rem` a toujours la même taille.

C'est l'unité la plus utilisée.

#### Tableau de conversion approximatives
[source](https://outils-css.aliasdmc.fr/convertir-unites-de-longueurs-css.php)

{% bs-table %}

| Points  | 	Pixels | 	(r)Ems  | 	Percent |
|---------|---------|----------|----------|
| 6pt	    | 8px	    | 0.5em	   | 50%      |
| 7pt	    | 9px	    | 0.55em	  | 55%      |
| 7.5pt   | 10px	   | 0.625em  | 	62.5%   |
| 8pt	    | 11px	   | 0.7em	   | 70%      |
| 9pt	    | 12px	   | 0.75em	  | 75%      |
| 10pt	   | 13px	   | 0.8em	   | 80%      |
| 10.5pt	 | 14px	   | 0.875em	 | 87.5%    |
| 11pt	   | 15px	   | 0.95em	  | 95%      |
| 12pt	   | 16px	   | 1em	     | 100%     |
| 13pt	   | 17px	   | 1.05em	  | 105%     |
| 13.5pt	 | 18px	   | 1.125em	 | 112.5%   |
| 14pt	   | 19px	   | 1.2em	   | 120%     |
| 14.5pt	 | 20px	   | 1.25em	  | 125%     |
| 15pt	   | 21px	   | 1.3em	   | 130%     |
| 16pt	   | 22px	   | 1.4em	   | 140%     |
| 17pt	   | 23px	   | 1.45em	  | 145%     |
| 18pt	   | 24px	   | 1.5em	   | 150%     |
| 20pt	   | 26px	   | 1.6em	   | 160%     |
| 22pt	   | 29px	   | 1.8em	   | 180%     |
| 24pt	   | 32px	   | 2em	     | 200%     |
| 26pt	   | 35px	   | 2.2em	   | 220%     |
| 27pt	   | 36px	   | 2.25em	  | 225%     |
| 28pt	   | 37px	   | 2.3em	   | 230%     |
| 29pt	   | 38px	   | 2.35em	  | 235%     |
| 30pt	   | 40px	   | 2.45em	  | 245%     |
| 32pt	   | 42px	   | 2.55em	  | 255%     |
| 34pt	   | 45px	   | 2.75em	  | 275%     |
| 36pt	   | 48px	   | 3em	     | 300%     |

{% endbs-table %}

#### Définition de l'unité "vw" et "vh"
L'unité de longueur CSS `vw` est relative à la largeur du bloc conteneur initial. L'unité `vw` Css est égale à 1% de cette dernière.
L'unité de longueur CSS `vh` est relative à la hauteur du bloc conteneur initial. L'unité `vh` Css est égale à 1% de cette dernière.

## 5 - Les couleurs en Css

[convertisseur de couleurs](https://web-color.aliasdmc.fr/)

#### Comment écrire des couleurs en CSS
Quelle que soit la propriété de couleur CSS (color, border-color, background-color), les formats de couleurs Css sont gérés de la même façon.
Il existe plusieurs façons de spécifier une couleur en Css :

* en la nommant.
* en spécifiant son code hexadécimal.
* en utilisant le format rgb (rvb en français).
* en utilisant le format rgba (rvba en français, nouveauté prise en compte vers 2010),
* en utilisant le format hsl et hsla (hsl en français, nouveauté prise en compte vers 2010),

#### a- nommer
Vous pouvez spécifier une couleur en css en utilisant une des 216 couleurs prédéfinies :

Exemple d'écriture d'une couleur nommée :
```css
.couleur-css { color : coral }
```

#### b- hexadécimal
Exemple d'écriture d'une couleur hexadécimale :
```css
.couleur-css { color: #FF7F50 } /* #rrggbb */
```
#### c- Les couleurs Css en rgb et rgba
Le format de couleur rgb est l'abréviation de "red, green, blue" soit en français "rouge, vert, bleu".

Le format de couleur rgba CSS est l'abréviation de "red, green, blue, alpha" soit en français "rouge, vert, bleu, transparence"

La couleur Css rgba accepte 3 valeurs entières comprises entre 0 et 255 ou 3 valeurs entières en pourcentage et une valeur entre 0 (transparent) et 1 opaque.

Si vous êtes en pourcentage 100% représente 255. Vous ne pouvez pas mélanger les unités.

```css
.couleur-css { color: rgba(255, 0, 0, 1) } /* 0 - 255 */
.couleur-css { color: rgba(100%, 0%, 0%, 0.6) }/* 0 - 100 */
```

#### c - Les couleurs Css en hsl et hlsa

La couleur Css hsl est l'abréviation de "Hue, Saturation, Lightness" soit en français "Teinte, Saturation, Luminosité".
La couleur Css hsla est l'abréviation de "Hue, Saturation, Lightness, Alpha" soit en français "Teinte, Saturation, Luminosité, Transparence".

Le format de couleur CSS hsl et hsla sont des nouveaux formats qui commencent à être interprétés vers 2010.

hsl accepte 3 valeurs entières dans l'ordre cité :
* une valeur entière comprise entre 0 et 360, l'unité est le degré, représente la teinte.
* une valeur entière comprise entre 0 et 100, l'unité est le pourcentage, représente la saturation.
* une valeur entière comprise entre 0 et 100, l'unité est le pourcentage, représente la luminosité.

  hsla accepte les 3 valeurs ci-dessus et une valeur comprise entre 0 (totalement transparent) et 1(totalement opaque).

Exemple d'écriture d'une couleur en hsl et hsla :
```css
.couleur-css { color: hsl(240, 100%, 50%) }
.couleur-css { color: hsla(240, 100%, 50%, 0.6) }
```

## 6 - Propriétés personnalisées (--*)

Les noms des propriétés qui sont préfixés par deux tirets : `--` (par exemple : `--nom-exemple`) représentent des propriétés 
personnalisées (custom properties) qui peuvent contenir une valeur qui pourra être réutilisée dans le document grâce à 
la fonction `var()`.

### la fonction var

La fonction `var()` peut être utilisée à la place d'une valeur pour n'importe quelle propriété d'un élément. Elle permet 
d'insérer la valeur d'une propriété personnalisée (custom property).

La fonction `var()` ne peut pas être utilisée pour les noms de propriété, les sélecteurs et pour tout ce qui n'est pas une 
valeur de propriété.

Le premier argument de la fonction est le nom de la propriété qu'on veut substituer. Le deuxième argument, optionnel, 
est une valeur de recours (fallback) qui est utilisée au cas où la valeur de subsitution référencée par 
la propriété est invalide.

```css
<var()> = var( <custom-property-name> , <declaration-value>? ) 
```
Exemple classique
```css
:root {
  --main-bg-color: pink;/* cette valeur est visible dans toute la page html */
}

body {
  background-color: var(--main-bg-color);
}

```
Exemple avancé
```css
/* On ajoute un paramètre de secours */
.component .header {
  color: var(--text-color, blue); /* à ce moment text-color n'est pas définie, c'est donc le bleu qui est utilisé */
}
.component .text {
    --text-color: #080; /* à ce moment text-color prendra la valeur proposée */
}
```

## 7 - typographie

### Utiliser des fontes
A l'instar de tous les logiciels de traitement de texte ou autre, le CSS permet de déterminer, pour un élément HTML, 
la police qui sera utilisée pour le texte. Ceci grâce à la propriété : font-family:. Cette propriété accepte une liste 
de polices. Il faut séparer les polices avec des virgules : `,`. En effet, si le navigateur web ne supporte pas la 
première police, il essaie la police suivante, et ainsi de suite. Les polices suivantes sont appelées des fallbacks. 

Bien évidemment, l'ordre de priorité s'effectue de la gauche vers la droite.

```css
body {
  font-family: "Times new roman", Arial;
}
```

Profitons de discuter de famille de police, pour expliquer la différence entre une `police avec et sans serif`. Plutôt 
qu'un long discours, l'image ci-dessous sera très largement explicite.

{% figure-abs "images/htmlcss/css-serif-sans-serif.png" "css-serif-sans-serif" "100%" "100%" %}

Il existe de nombreuses propriétés pour la mise en forme des polices.

### charger des fontes
{% callout warning %}
Attention en téléchargeant des polices,elles peuvent ralentir considérablement votre site.
Il est préférable d'utiliser des polices système.

[Les polices système](https://modernfontstacks.com/)

[Exemples de site avec des polices système](https://onepagelove.com/typeface/system-ui)
{% endcallout %}
#### Utiliser un service externe
l existe des services qui permettent d’ajouter très simplement une police d’écriture. Le meilleur ami des développeurs 
a réalisé le service le plus connu dans ce domaine : [google font](https://fonts.google.com/). Son utilisation est on 
ne peut plus simple.

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>

```

```css
body {
  font-family: 'Roboto', sans-serif;
}
h2 {
  font-family: 'Oswald', sans-serif;
}

```
ou pour des polices système :
```css
:root {
  --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.element {
  font-family: var(--system-ui);
}

```
#### Ajout manuel en CSS
L’ajout de la police d’écriture se fait avec la règle `@font-face`, de la manière suivante :

```css
@font-face {
  font-family: 'Roboto';
  src: url(‘/fonts/Roboto-Regular.woff2’) format(‘woff2’),
  url(‘/fonts/Robot-Regular.ttf’) format(‘truetype’)
}
body {
  font-family: 'Roboto', sans-serif;
}
```

Que se passe-t-il à l’intérieur de `@font-face` ?

* Nous commençons par nommer la police d’écriture avec font-family, afin qu’elle soit utilisable dans le CSS. 
Attention, si le nom de la police contient des espaces, ce dernier doit impérativement être placé entre des guillemets ; 
sinon, ce n’est pas obligatoire.
* Puis nous lions les fichiers de cette police d’écriture grâce à src, qui va tolérer plusieurs paramètres : 
l’url du fichier (son emplacement) et son format. 
Il existe plusieurs formats : woff, woff2, truetype pour les plus utilisés. Ils vont permettre au navigateur de savoir 
comment les interpréter. C’est surtout utile en fonction de l’OS. Notez que plus vous mettez de formats différents, 
plus il sera facile pour le navigateur de choisir le fichier qui correspond à l’OS, et moins votre police d’écriture 
aura de chance de montrer des bugs d’affichage. Bien que les navigateurs modernes soient capables de lire tous les formats, 
les formats ne sont pas tous automatisés pour l’OS et pour le navigateur.

#### La bonne pratique

Iinsérer une règle `@font-face` pour chaque cas qu’il est possible de rencontrer. 

Donc : pour chaque poids (épaisseur) utilisé, et pour chacun d’eux, une nouvelle règle si ce poids est utilisé en italique.
Pour ajouter la police d’écriture basique, nous allons alors ajouter deux règles : la première normale et la seconde pour 
l’italique.

```css
@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  src: url(‘/fonts/Roboto-Regular.woff2’) format(‘woff2’),
  url(‘/fonts/Robot-Regular.ttf’) format(‘truetype’)
}
@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  src: url(‘/fonts/Roboto-Bold.woff2’) format(‘woff2’),
  url(‘/fonts/Robot-Bold.ttf’) format(‘truetype’)
}
```
