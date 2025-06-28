---
layout : "layouts/docs.njk"
title : "Les Objets"
description : "Les objets n’ont pas de classes"
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T08:34:31+02:00"
draft : false
---
## 1 - Définition
Les objets permettent, comme pour les tableaux, de stocker des valeurs. Alors que chaque valeur d’un tableau est stockée 
dans un élément, chaque valeur d’un objet est stockée dans ce qu’on appelle une propriété. Même si chaque élément d’un 
tableau est indexé par un numéro (indice), chaque propriété d’un objet est indexé par une chaîne de caractères.
Contrairement à la manière de définir un tableau, chaque valeur de propriété stockée dans un objet doit être précédée du 
nom de cette propriété (aussi appelé clé, ou key en anglais), et suivi par : (deux points). Les objets ont donc la même 
structure qu’un tableau associatif.
```javascript
const personne = {
    nom: 'Sionne',
    prenom:'Jacques',
    age:20,
    hobbies:['sport','cinéma','musique'],
    adresse:{
        numero:136,
        voie: 'route de Mitry',
        cp:93600,
        ville:'Aulnay sous bois'
    }
}
```
Il est possible d’avoir différents types dans un objet :
- des valeurs simples comme le nom
- des tableaux comme les hobbies
- des objets comme adresse
  {% callout success%}
#### Résultat :
en faisant un console.log(personne) vous obtenez:
{% endcallout %}
{% figure-abs "images/javascript/objet.png" "objet" "50%" "50%" %}

## 2 - Accès et modification
Il est possible d’ajouter des propriétés à un objet.
```javascript
personne.email='sionne@free.fr'
```
{% callout success%}
#### Résultat :
En faisant un `console.log(personne)` vous obtenez:
{% endcallout %}
{% figure-abs "images/javascript/objet2.png" "objet2.png" %}

Pour accéder aux valeurs, plusieurs choix sont possibles :
```javascript
personne.nom //Sionne
personne.hobbies[0] // sport
personne.adresse.voie // route de Mitry
```
## 3 - L'affectation par décomposition
L’affectation par décomposition est une syntaxe spéciale qui nous permet de “décompresser” des tableaux ou des objets 
dans un ensemble de variables, ce qui est parfois plus pratique.

La décomposition fonctionne également très bien avec des fonctions complexes comportant de nombreux paramètres, valeurs 
par défaut, etc.
### a - décomposition d'objets
L'exemple suivant vous montrera l'utilisation de la déstructuration.
```javascript
const { nom, prenom:p } = personne; // Prend la propriété/méthode de l'objet

console.log(nom); // Affiche 'Sionne'
console.log(p); // Affiche 'Jacques'
```
### b - Le pattern rest “…”
La copie d'objet
```javascript
const clone = { ...personne };
```
Et si l’objet a plus de propriétés que de variables ? Peut-on en prendre puis assigner le “rest” quelque part ?
```javascript
const {nom, ...rest} = personne;

console.log(nom); // Affiche 'Sionne'
console.log(rest.prenom); // Affiche 'Jacques'
```

## 4 - Les formats proches de l’objet
### a - le tableau d’objet(s)
Les tableaux d’objets, sont souvent utilisés en javascript, par exemple :
```javascript
const bandes = [
{ genre: 'Rap', band: 'Migos', albums: 2},
{ genre: 'Pop', band: 'Coldplay', albums: 4},
{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1}
];
```
L’accès aux données est relativement simple :
```javascript
console.log(bandes[1].band)
```
donne :
{% callout success%}
#### Résultat :
Coldplay
{% endcallout %}
### b - le format JSON
Le fichier permet de charger de l’information stockée dans ce format à partir du serveur ou de transmettre au serveur de 
l’information dans un fichier de ce format, par exemple, le contenu d’un formulaire qui vient d’être rempli. Il y a donc 
trois aspects : le traitement par le navigateur, par le serveur et la transmission des données entre les deux.  
**Coté client**  
C’est particulièrement simple JSON faisant partie de la norme JavaScript. Le contenu d’un fichier JSON ou la définition 
de données dans ce format sont assignés à une variable, laquelle devient un objet du programme.  
**Coté serveur**  
Les fichiers au format JSON s’utilisent dans différents langages de programmation, notamment PHP et Java grâce à des parseurs qui permettent d’accéder au contenu, et éventuellement de le convertir en classes et attributs, dans ce langage. Le site json.org fournit un parseur en C et donne une liste de parseurs pour d’autres langages.
Reprenons notre fichier précédent :
```javascript
const bandes = [
{
      "genre":"Rap",
      "band":"Migos",
      "albums":2
},
{
      "genre":"Pop",
      "band":"Coldplay",
      "albums":4
},
{
      "genre":"Rock",
      "band":"Breaking Benjamins",
      "albums":1
}
]
```
ou encore :
```json
{
    "nom":"Sionne",
    "prenom":"Jacques",
    "age":20,
    "hobbies":[
          "sport",
          "cinéma",
          "musique"
        ],
    "adresse":{
          "numero":136,
          "voie":"route de Mitry",
          "cp":93600,
          "ville":"Aulnay sous bois"
    }
}
```
Le format JSON est très proche du format objet.  
**Vous voyez que toutes les chaines sont entourées de double quotes.**  
Il est aussi possible de convertir directement un objet au format JSON :
```javascript
const bandesJson=JSON.stringify(bands);
```
