---
layout : "layouts/docs.njk"
title : "Les Tableaux"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T08:21:40+02:00"
draft : false
---
[*Détail des fonctions liées aux tableaux*](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
## 1 - Caractéristiques
### a - Création d'un tableau
Les tableaux en JavaScript sont dynamiques. Comme tous les langages de script, JavaScript a des tableaux dynamiques : leur taille n'est pas prédéterminée, ni le type des données contenues. Ils peuvent être créés avec un littéral ou un constructeur.
```javascript
const fruits = [ 'Mangue', 'Raisin', 'Figue' ]; // littéral
const fruits  = new Array();      //  constructeur
const fruits  = new Array('Mangue', 'Raisin', 'Figue');   // constructeur avec éléments
```
Comme tous les autres types de valeur, un tableau peut être stocké dans une variable.  
En revanche, en JavaScript, les tableaux sont considérés comme une forme particulière du type object. 
Autrement dit, `typeof[]` retourne `object`.  
Comme toute variable en JavaScript, les valeurs stockées dans un tableau peuvent être de n'importe quel type (y compris 
un tableau), et n'ont pas besoin d'être tous du même type :
```javascript
const fruits = [ 'Mangue', 'Raisin', 'Figue',123,,false ];
```
### b - Taille du tableau
Tout tableau possède une propriété length qui vaut le nombre de valeurs qu'il contient :
```javascript
fruits.length //retourne 6
```
### c - Tableau multidimensionnel
Il existe plusieurs méthodes pour créer un tableau multidimensionnel
```javascript
const a = new Array(
    new Array(1, 2, 3),
    new Array(4, 5, 6));
document.write(a);
```
{% callout success%}
#### Résultat :
1,2,3,4,5,6
{% endcallout%}
Ce tableau aura pour dimension, 2 lignes, 3 colonnes.
Ce code donne la même chose :
```javascript
const a = [ [ 1, 2, 3], [ 4, 5, 6] ];

document.write(a);
```
Ce code donne la même chose :
```javascript
a[0][0] = 1;
a[0][1] = 2;
a[0][2] = 3;
a[1][0] = 4;
a[1][1] = 5;
a[1][2] = 6;
document.write(a);
```
## 2 - Fonctions associées au tableau
### a - Ajout d'élément
La méthode push() permet d'ajouter un élément à la fin du tableau. La valeur de cet élément est à passer en paramètre 
(entre parenthèses) de la méthode, quand on l'appelle :
```javascript
const fruits = [ 'Mangue', 'Raisin', 'Figue' ];
fruits.push('Banane'); // appel de la méthode push() sur le tableau fruits, avec Banane en paramètre
console.log(fruits); // => [ 'Mangue', 'Raisin', 'Figue', 'Banane' ]
```
### b - Retrait d'élément
La méthode pop() retourne la dernière valeur du tableau puis la retire de ce tableau :
```javascript
const fruits = [ 'Mangue', 'Raisin', 'Figue' ];
const f = fruits.pop();
console.log(f);      // => Figue
console.log(fruits); // => [ 'Mangue', 'Raisin' ];
```
## 3 - Les nouveaux objets Set et Map en javascript ES6
Set : L'objet Set vous permet de stocker des valeurs uniques de tout type.
Map : L'objet Map vous permet de stocker les paires clé-valeur et de mémoriser l'ordre d'insertion original des clés.

**Pourquoi pas un tableau ?**

Un tableau, comme un ensemble, est une structure de données qui permet d'ajouter, de supprimer et de boucler des opérations 
sur ses éléments. Cependant, un tableau diffère d'un ensemble en ce sens qu'il permet l'addition de valeurs dupliquées et que ses opérations sont relativement plus lentes.
### a - L'objet Set
Les objets Set sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet Set dans 
leur ordre d'insertion. **Une valeur donnée ne peut apparaître qu'une seule fois par Set**.
###### i - Comment créer un ensemble (Set) ?
```javascript
const set = new Set();
console.log(set); // Set {}
```
###### ii - Comment initialiser un ensemble (Set) ?
```javascript
const confectioneries = new Set(['oreo', 'marshmallow','oreo', 'kitkat', 'gingerbread']);
console.log(confectioneries); // result: Set { 'oreo', 'marshmallow', 'kitkat', 'gingerbread' }
```
Dans l'extrait ci-dessus, la valeur en double “oreo” est discrètement supprimée de l'ensemble et seules les valeurs uniques sont renvoyées.
###### iii - Comment ajouter un élément dans un ensemble (Set) ?
```javascript
const confectioneries = new Set(['oreo', 'marshmallow','oreo', 'kitkat', 'gingerbread']);
confectioneries.add('donut');
console.log(confectioneries); // log result: Set { 'oreo', 'marshmallow', 'kitkat', 'gingerbread', 'donut' }
confectioneries.add('kitkat'); // ajout d'un élément déjà existant
console.log(confectioneries); // log result: Set { 'oreo', 'marshmallow', 'kitkat', 'gingerbread', 'donut' } 
```
###### iv - Comment supprimer un élément dans un ensemble (Set) ?
```javascript
confectioneries.delete('kitkat'); // première possibilité
console.log(confectioneries); // log result: Set { 'oreo', 'marshmallow', 'gingerbread', 'donut' }
confectioneries.clear(); // deuxième possibilité
console.log(confectioneries); // log result: Set {}
```
###### v - Comment connaitre la taille d'un ensemble (Set) ?
```javascript
const confectioneries = new Set(['oreo', 'marshmallow', 'kitkat', 'oreo','gingerbread']);
console.log(confectioneries.size); // log result: 5
```
###### vi - Comment rechercher un élément parmi un ensemble (Set) ?
```javascript
const confectioneries = new Set(['oreo', 'marshmallow', 'kitkat', 'oreo','gingerbread']);
console.log(confectioneries.has('marshmallow')); // log result: true
```
###### vii - Comment récupérer les éléments d'un ensemble (Set) ?
Nous pouvons retourner les éléments d'un objet Set dans le même ordre d'insertion en utilisant la méthode `values()`. Cette méthode retourne un nouvel objet setIterator. Une méthode similaire pour retourner les éléments d'un ensemble est la méthode keys() :
```javascript
const confectioneries = new Set(['oreo', 'marshmallow', 'kitkat', 'oreo','gingerbread', 'donut']);
console.log(confectioneries.values()); // log result: _[_Set Iterator] { 'oreo', 'marshmallow', 'kitkat', 'gingerbread', 'donut' }
console.log(confectioneries.keys()); // log result: _[_Set Iterator] { 'oreo', 'marshmallow', 'kitkat', 'gingerbread', 'donut' }
```
###### viii - L'objet Iterator
L'objet setIterator est un objet Iterator car il implémente les protocoles Iteratable et Iterator. Le protocole Iterable spécifie un moyen d'itération à travers un ensemble de valeurs en utilisant des constructions en boucle. Il permet également d'itérer les valeurs à l'aide de la méthode next(). Quand nous appelons next() sur un objet setIterator, nous obtenons la valeur suivante dans l'itération et une false si toutes les valeurs du Set ont été itérées :
```javascript
const confectioneries = new Set(['oreo', 'marshmallow', 'kitkat', 'oreo','gingerbread', 'donut']);

let iterator = confectioneries.values();
console.log( iterator.next()); // { value: 'oreo', done: false }
_
console.log( iterator.next()); // { value: 'marshmallow', done: false }
_
console.log( iterator.next()); // { value: 'kitkat', done: false }
_
console.log( iterator.next()); // { value: 'gingerbread', done: false }
_
console.log( iterator.next()); // { value: 'donut', done: false }
_
console.log( iterator.next()); //_{ value: undefined, done: true }_
```
Puisque les ensembles implémentent le protocole Itérable, les constructions de boucle telles que `for … of` peuvent être 
utilisées comme indiqué ci-dessous :
```javascript
for (let confectionery of confectioneries) {
    console.log(confectionery);
}

/* result :
oreo
marshmallow
kitkat
gingerbread
donut
*/
```
### b - L'objet Map
Les Maps Javascript sont des objets conçus pour stocker et récupérer efficacement des éléments en fonction d'une clé 
unique pour chaque élément. Une Map stocke des paires clé-valeur où les clés et les valeurs peuvent être soit des valeurs
primitives, soit des objets, soit les deux. Un objet Map permet de retrouver ses éléments dans leur ordre d'insertion. 
Par exemple, une boucle `for ... of` renverra un tableau de `[clé, valeur]` pour chaque itération.
###### i - Comment créer un ensemble (Map) ?
```javascript
const Map = new Map();
console.log(Map); // Map {}
```
###### ii - Comment ajouter un élément dans un ensemble (Map) ?
```javascript
users.set('John Doe', {
    email: 'johndoe@example.com',
    });

users.set('Jane Doe', {
    email: 'janedoe@example.com',
    });

console.log(users);

/* result
Map {
    'John Doe' => { email: 'johndoe@example.com'},
    'Jane Doe' => { email: 'janedoe@example.com'} }
    }
*/
```
Contrairement aux Sets qui suppriment les clés dupliquées, Maps met à jour la valeur attachée à cette clé
```javascript
users.set('John Doe', {
    email: 'johndoe477@example.com',
    });
console.log(users);

/* result
Map {
    'John Doe' => {email: 'johndoe477@example.com'},
    'Jane Doe' => { email: 'janedoe@example.com'} }
    }
*/
```
###### iii - Comment supprimer un élément dans un ensemble (Map) ?
```javascript
users.delete('Jane Doe'); // première possibilité
users.clear();// deuxième possibilité
console.log(users); // Map {}
```
###### iv - Comment rechercher un élément parmi un ensemble (Map) ?
```javascript
let users = new Map();
users.set('John Doe', {
    email: 'johndoe@example.com',
    });

users.set('Jane Doe', {
    email: 'janedoe@example.com',
    });

console.log(users.has('John Doe')); // true
```
###### v - Comment récupérer les éléments d'un ensemble (Map) ?
Il est possible d'obtenir toutes les clés et valeurs d'un objet Map en utilisant les méthodes keys() et values() respectivement. Ces deux méthodes retournent un nouvel objet MapIterator qui a une méthode next() utilisable pour boucler les éléments de la Map :
```javascript
console.log(users.get('Jane Doe')); // { email: 'janedoe@example.com' }
let userKeys = users.keys();
console.log(userKeys.next()); // { value: 'John Doe', done: false }

let userValues = users.values();
console.log(userValues.next()); // { value: { email: 'johndoe@example.com' }
```
Comme pour les Sets, les boucles telles que for ... of et forEach() peuvent être utilisées pour itérer à travers les éléments de la Map
```javascript
for (let user of users) {
    console.log('[for...of]: ', user);
    }
/* result
    [for...of]:  ['John Doe', { email: 'johndoe@example.com' } ]
    [for...of]:  ['Jane Doe', { email: 'janedoe@example.com' } ]
*/

users.forEach((value, key) => console.log('[\_\_forEach()]:  ', key, value));

/* result
    [forEach()]:   John Doe { email: 'johndoe@example.com' }
    [forEach()]:   Jane Doe { email: 'janedoe@example.com' }
*/
```
