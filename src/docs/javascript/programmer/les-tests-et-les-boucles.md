---
layout : "layouts/docs.njk"
title : "Les Tests Et Les Boucles"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T09:13:13+02:00"
draft : false
---
## 1 - Tests et conditions
La notion de test et condition est commune à PHP ou C#. Vous aurez un petit rappel.
### a - L'instruction `if`
```javascript
if(nb1 > nb2) {
    // sera exécuté si nb1 > nb2
}else {
    // sera exécuté si nb1 <= nb2
}
```
Il est aussi possible de combiner des instructions if :
```javascript
if(nb1 > nb2) {
    // sera exécuté si nb1 > nb2
}else if (nb2 > nb1) {
    // sera exécuté si  nb1 < nb2
}
    else {
        // sera exécuté si nb1 = nb2
    }
```
### b - La notion de condition
La notion d'égalité

Une égalité laxiste == consiste à dire que deux valeurs sont vues comme équivalentes, mais pas exactement égales.
L'égalité stricte === vérifie en plus que le type des deux valeurs comparées est le même.
Exemple :
```javascript
1 == '1'; // => true
1 === `1`; // => false (car types différents)
0 == false; // => true
0 === false; // => false
null == undefined; // => true
null === undefined; // => false
```
La comparaison entre valeurs de types avancés fonctionne différemment. Ce ne sont pas les valeurs à proprement parler qui sont comparées, mais la référence vers cette valeur.
```javascript
[1,2] == [1,2]; // => false, car deux tableaux ont été créés
const monTab = [1,2];
monTab == monTab; // => true, car la variable monTab référence un seul et même tableau
monTab == [1,2]; // => false, car ce sont deux références de tableaux différents
const monTab2 = monTab;
monTab == monTab2; // => true, car monTab2 fait référence au même tableau que monTab
```

Les opérateurs de comparaison
```javascript
1 < 1; // => false
1 > 1; // => false
1 <= 1; // => true
1 >= 1; // => true
1 < 2; // => true
1 > 2; // => false
1 <= 2; // => true
1 >= 2; // => false
```
### c - L'instruction `switch`
L'instruction switch déclenche l'exécution d'un bloc d'instructions parmi plusieurs possibles. Seul le bloc correspondant à la valeur testée sera pris en compte.
```javascript
switch (nombre) {
    case 1:
    ...
        break; // break force la sortie du switch
    case 2:
    ...
        break;
    case 3:
    ...
        break;
    default:
    ...
        break;
}
```        
### d - L'opérateur ternaire
Son utilisation est comparable à celle du C# ou du PHP :
```javascript
const baseURL = config.baseURL ? config.baseURL : 'localhost';
```
### e - L'opérateur `||`
Nous avons régulièrement besoin d'attribuer une valeur par défaut à une variable si une autre variable qu'on lui affecte 
n'existe pas, pour cela, nous utilisons l'opérateur logique ||. Cette instruction simplifie l'opérateur ternaire. Soit 
l'instruction suivante :
```javascript
const hostname = config.baseURL || 'localhost';
```
La valeur `hostname` prend `localhost` si la valeur de `config.baseURL` est évaluée à `false`. Mais cet opérateur ne fait 
pas de différence entre les valeurs false et les valeurs `null` ou `undefined`.
### f - L'opérateur `??` de fusion Null
L'[ECMAScript 2020](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) propose un nouvel 
opérateur nommé le “nullish coalescing operator” qui s'écrit `??`. Celui-ci s'utilise de la même façon que l'opérateur 
`||` à la différence qu'il renvoie la première expression si celle-ci est différente de `null` ou `undefined` et la seconde 
expression dans le cas contraire. L'expression sera alors la suivante :
```javascript
const hostname = config.baseURL ?? 'localhost';
```
{% callout danger%}
#### Attention à la compatibilité !
Votre version de navigateur ou de nodejs doit être suffisamment récente pour prendre cette modification en compte
{% endcallout %}
### g - L’opérateur `?.` Chaînage optionnel (optional chaining)
L'opérateur `?.` fonctionne de manière similaire à l'opérateur de chaînage `.`, à ceci près qu'au lieu de causer une 
erreur si une référence est `null` ou `undefined`, l'expression se court-circuite avec `undefined` pour valeur de retour. 
Quand il est utilisé avec des appels de fonctions, il retourne undefined si la fonction donnée n'existe pas.
```javascript
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```
## 2 - Les boucles
### a - La boucle `while`
La boucle while permet de répéter des instructions tant qu'une condition est vérifiée.
```javascript
let i = 0;
while (i < 10) {
    console.log('ligne ${i} de la boucle while');
    i++;
} 
```
### b - La boucle `for`
La boucle for permet de répéter un bloc d'instructions un nombre défini de fois.
```javascript
for (let i=0; i < 10; i++) {
    console.log('ligne ${i} de la boucle for');
}
```
### c - La boucle `foreach`
La méthode JavaScript forEach s'applique à un tableau, une map ou un set (et pas seulement un tableau). `forEach` prend 
en paramètre une fonction callback, et l'exécute en lui passant chaque élément de la collection.
forEach n'est pas conçu pour produire une valeur de retour. La méthode retourne undefined. Elle n'est donc pas chainable 
avec d'autres méthodes JavaScript qui arriveraient après `forEach`
#### Exemple avec ARRAY
```javascript
const array = [1, 5, 10];
array.forEach(function(currentValue) {
    console.log(currentValue); // result 1 5 10

});
```
#### Exemple avec Set
```javascript
const set = new Set(['a', 'b', 'c']);
set.forEach(value => console.log(value)); // result a b c
```
#### Exemple avec Map
```javascript
const map = new Map();
const keyObject = { desc: 'an object as a key'};
map.set('key 1', 'value 1');
map.set('key 2', 'value 2');
map.set(keyObject, 'value for keyObject');
map.forEach((value, index) =>
    console.log(`at key: ${index}, value is: ${value}`));
 ``` 
{% callout success%}
#### Résultat :
at key: key 1, value is: value 1  
at key: key 2, value is: value 2  
at key: [object Object], value is: value for keyObject
{% endcallout %}
### d - la boucle `for..in`
Une boucle for in est l'équivalent du foreach de PHP et autres langages, elle assigne directement les éléments du tableau à une variable. Cette méthode est la moins performante. La boucle for ... in est conçue pour itérer sur les propriétés d'un objet (ou les caractères d'un string). Et non pas sur les valeurs d'un tableau.
```javascript
const array = [1, 5, 10];
for (let a in array){
console.log(array[a])
} // result 1 5 10
```
### e - la boucle `for..of`
Le code idéal, car concis et lisible ?
```javascript
const array = [1, 5, 10];
for (const a of array){
    console.log(a)
} // result 1 5 10
```
## 3 - Les boucles qui la boucle (map, filter, reduce)
Le but de forEach est uniquement d'obtenir chaque élément de la collection, pas de créer une nouvelle collection résultant 
d'une transformation, car pour cela, il existe des méthodes comme filter, map, etc.
### a - `map`
En utilisant foreach, il est nécessaire de créer un tableau vide pour avoir un nouveau tableau
```javascript
const numbers = [1, 2, 3, 4];
const new_numbers = [];// création d'un tableau vide
for(let i = 0; i < numbers.length; i++) {
    new_numbers[i] = numbers[i] * 2;
}
console.log("Les nombres doublés sont", new_numbers); // [2, 4, 6, 8]
```
Ce code, bien que fonctionnel et clair peut être simplifié davantage et faire abstraction des boucles, ainsi :
```javascript
const numbers = [1, 2, 3, 4];
const new_numbers = numbers.map(function(number){
     return number * 2;
});
console.log("Les nombres doublés sont", new_numbers); // [2, 4, 6, 8]
```
### b - `filter`
La fonction map() est bien utile pour modifier des groupes entiers de valeurs, mais dans bien des cas, on désire uniquement 
modifier un sous-ensemble de ces valeurs en se basant sur un énoncé conditionnel. C'est à ce moment qu'entre en jeu la fonction 
filter(). La fonction filter() permet, tel que son nom l'indique, de filtrer un ensemble de données.
Regardez l'exemple suivant :
```javascript
const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const result = words.filter(word => word.length < 8);
console.log(result); // retourne [ 'Python', 'Go', 'Java', 'PHP', 'Ruby' ]
```
Le nouveau tableau rassemble tous les noms qui ont moins de 8 caractères.
### c - `reduce`
Si ce que vous désirez faire, est, obtenir un sous-produit des données d'un tableau, la fonction reduce() est là pour répondre à la majeure partie de vos besoins les plus simples.
Aimeriez-vous avoir un total ? Voici un exemple d'usage où on double toutes les valeurs d'un tableau avant d'en faire le cumul :
```javascript
const numbers = [1, 2, 3, 4];
const total_number = numbers.map(function(number){
     return number * 2;
}).reduce(function(total, number){
     return total + number;
}, 0);
console.log("Le total est", total_number); // 20
```
La seconde valeur passée à la méthode est la valeur de départ de la valeur qui sera retournée. Dans ce cas-ci, la valeur de départ est 0. Pour chacune des valeurs dans le tableau, on double la valeur et la cumule à partir de 0. La résultante est de 20. ((1×2)+(2×2)+(3×2)+(4×2)). La forme générale de la fonction est :
```javascript
let newArray = arr.filter(callback(valeurCourante, valeurAccumulée){
  // return la valeur cumulée à partir du cumul précédent et de la valeur courante
}, valeurDépart[, thisArg]);
```
