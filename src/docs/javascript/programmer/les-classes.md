---
layout : "layouts/docs.njk"
title : "Les Classes"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T07:31:11+02:00"
draft : false
---
## 1 - Structure d’une classe en ES6
Le modèle d’héritage orienté objet de JavaScript peut dérouter les développeurs issus de langages tels que C++, C#, Java et PHP. Pour cette raison, ES6 a introduit des classes. Elles sont principalement du sucre syntaxique, mais offrent des concepts de programmation orientés objet plus familiers.
La déclaration est la suivante :
```javascript
class Produit {
    constructor( code='',  lib='',  px=0,  qte=0) {
            this.code = code;
            this.lib = lib;
            this.px = px;
            this.qte = qte;
    }
 ToString() // méthode d’affichage
    {
        return `code :  ${this.code} lib : ${this.lib} prix : ${this.px} Quantité en stock : ${this.qte}`;
    }
}
```
Cette classe dispose d’un constructeur, avec le mot réservé constructor et d’une méthode qui affiche les paramètres ToString. Comme en C# le mot clé this fait référence à une propriété, mais qui est ici public et non déclarée.
L’instanciation est relativement simple :
```javascript
const lessive = new Produit(10,lessive,12,1); //Instanciation de l’objet
console.log(lessive.ToString()); // appel et affichage de la méthode ToString
console.log(lessive.px); // appel de la propriété prix
```

{% callout success%}
#### Résultat :
```html
code : 10 lib : lessive prix : 12 Quantité en stock : 1

12
```
{% endcallout %}
Vous voyez que les propriétés ne sont pas privées, vous pouvez y accéder par appel.
{% callout danger%}
#### Ne pas confondre instanciation et initialisation
`Instancier`, c’est, créer un nouvel objet (opérateur `new`)  
`Initialiser`, c’est, donner une valeur initiale à quelque chose (opérateur `=`)
{% endcallout %}
## 2 - Constructeur
{% callout %}
#### Classe : Definition
Le constructeur est une méthode spécifique dont le rôle est de construire un objet, le plus souvent en initialisant ses attributs.
{% endcallout %}
Le constructeur précédent vous montre comment déclarer un constructeur avec des valeurs par défaut (ce qui en passant 
n’existe pas pour les fonctions).

Avec la norme ES2019, il existe une autre méthode de déclaration :
```javascript
class MyClass {
  a = 1;
  b = 2;
  c = 3;
}
```
Ceci équivaut à :
```javascript
class MyClass {

  constructor() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
  }

}
```
## 3 - Propriétés
### a - Propriété statique
La déclaration de champs statique est
```javascript
class MyClass {
  x = 1;
  y = 2;
  static z = 3;
}

console.log( MyClass.z ); // 3
```
Elle est équivalente à
```javascript
class MyClass {

  constructor() {
    this.x = 1;
    this.y = 2;
  }

}

MyClass.z = 3;

console.log( MyClass.z ); // 3
```
### b - Propriétés privées
Dans ES2019, les champs de classe privée sont définis à l’aide d’un préfixe de hachage # :
```javascript
class MyClass {
  a = 1;          // .a is public
  #b = 2;         // .#b is private
  static #c = 3;  // .#c is private and static

  incB() {
    this.#b++;
  }

}

let m = new MyClass();

m.incB(); // runs OK

m.#b = 0; // error - private property cannot be modified outside class
```
Notez qu’il n’y a aucun moyen de définir des méthodes privées, des getters ou des setters.
## 4 - Getters et Setters
{% callout %}
#### Definition
Un mutateur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en écriture
{% endcallout %}
En anglais, ils commencent par le mot clé set.

Voilà pourquoi on les appelle aussi des setters.
En javascript, ils commencent par set
{% callout %}
#### Definition
Un accesseur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en lecture
{% endcallout %}
En anglais, ils commencent par le mot clé get.

Voilà pourquoi on les appelle aussi des getters
En javascript, ils commencent par get
Voici un exemple
```javascript
class Produit {
    // Déclaration privée des propriétés
    #code;
    #lib;
    #px;
    #qte;

    constructor( code='',  lib='',  px=0,  qte=0) {
        this.#code = code;
        this.#lib = lib;
        this.#px = px;
        this.#qte = qte;
    }

    // méthode de renvoie des informations privées
    ToString()
    {
        return `code :  ${this.#code} lib : ${this.#lib} prix : ${this.#px} Quantité en stock : ${this.#qte}`;
    }

    // accesseur
    get getCode()
    {
        return ${this.#code};
    }

    // mutateur
    set setLib(lib){
        this.#lib = lib;
    }

    // accesseur
    get getPrix()
    {
        return this.#px;
    }

    // Compare les prix entre l’objet courant et un autre
    estplusChere(p){
        let rep = true;
        if (this.#px < p.getPrix) { rep = false; }
        return rep;
    }

}
```
Nous avons les appels suivants :
```javascript
const lessive = new Produit(10,lessive,12,1);

const eau=new Produit(20,eau,5,1);

console.log(lessive.ToString()); // code :  10 lib : lessive prix : 12 Quantité en stock : 1

console.log(lessive.getPrix); // 12

lessive.setLib='lessive de qualité';

console.log(lessive.ToString()); // code :  10 lib : lessive de qualité prix : 12 Quantité en stock : 1

console.log(lessive.estplusChere(eau)) // true

```
## 5 - Méthodes et propriétés statiques
La définition d’une méthode avec le mot - clé static lui permet d’être appelée sur une classe sans créer d’instance d’objet. ES6 ne prend pas en charge les propriétés statiques de la même manière que les autres langages, mais il est possible d’ajouter des propriétés à la définition de classe elle-même.
La méthode statique est appelée de cette façon
```javascript
class Produit {
    // Déclaration privée des propriétés
    #code;
    #lib;
    #px;
    #qte;

    constructor( code='',  lib='',  px=0,  qte=0) {
        this.#code = code;
        this.#lib = lib;
        this.#px = px;
        this.#qte = qte;
    }

    // méthode de renvoie des informations privées
    ToString()
    {
        return `code :  ${this.#code} lib : ${this.#lib} prix : ${this.#px} Quantité en stock : ${this.#qte}`;
    }

    // accesseur
    get getCode()
    {
        return ${this.#code};
    }

    // mutateur
    set setLib(lib){
        this.#lib = lib;
    }

    // accesseur
    get getPrix()
    {
        return this.#px;
    }

    // Compare les prix entre l’objet courant et un autre
    estplusChere(p){
        let rep = true
        if (this.#px < p.getPrix) { rep = false; }
        return rep;
    }

        static log(text){

        document.write(text+ "<br/>");

    }

}
```
Appel affiché sur le navigateur :
```javascript
lessive.setLib='lessive pas chère';
Produit.log(lessive.ToString()); // code : 10 lib : lessive pas chère prix : 12 Quantité en stock : 1
Produit.log(lessive.getCode);    // 10
Produit.log(lessive.getPrix);    // 12
Produit.log(lessive.estplusChere(eau)); // true
```

## 6 - Les collections
Les collections ne sont pas aussi pratiques que celles qui se trouvent dans C#. Elles peuvent néanmoins être utilisées. 
En vous référant à la partie sur les tableaux, vous comprendrez pourquoi vous allez préférer la collection Set. Voici un 
exemple de ce que vous pouvez obtenir :
```javascript
const lessive = new Produit(10,lessive,12,1);

const eau = new Produit(20,eau, 1,5);

// Déclaration de la collection
const lesProduits = new Set();

// ajout des objets dans la collection Set
lesProduits.add(lessive);
lesProduits.add(eau);

 // ajout d’un produit sans déclaration préalable
lesProduits.add(new Produit(30,beurre,5,1));

// Affichage des objets
for(let unproduit of lesProduits){
    console.log(unproduit.ToString())
}

// Affichage en console
//code :  10 lib : lessive prix : 12 Quantité en stock : 1
//code :  20 lib : eau 1,5l prix : 5 Quantité en stock : 1
//code :  30 lib : beurre prix : 5 Quantité en stock : 1

// Affichage de la collection
 console.log(lesProduits)
```
{% callout sucess%}
#### Résultat de l’affichage de la collection :
Vous remarquerez que les indices ont été automatiquement ajoutés. Les éléments sont des objets.
{% endcallout %}
{% figure-abs "images/javascript/objetSet.png" "objet set" "50%" "50%" %}


