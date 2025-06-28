---
layout : "layouts/docs.njk"
title : "Les Fonctions"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-14T21:13:03+02:00"
draft : false
---
## 1 - Écriture de fonctions
### a - déclaration et appel d’une fonction
La déclaration de fonction permet de spécifier la signature de la fonction. Dans sa forme générale, elle correspond à :
{% callout %}
#### Déclaration générale de fonction :
```javascript
function nomDeLaFonction (parametre1, parametre2, parametre3, ...) {  
  // instructions javascript  
  // pouvant utiliser les paramètres parametre1, parametre2 et parametre3  
  return resultat;  
}
```
{% endcallout %}
{% callout %}
#### Définition d’une fonction
Les 6 étapes de définition

- Nom : un identificateur suffisamment explicite.
- Paramètres : la liste des paramètres d’entrée-sortie du programme. 
- Préconditions : une liste d’expressions booléennes qui précisent les conditions d’utilisation des paramètres. 
- Appel : des exemples d’utilisation du programme avec les résultats attendus (jeu de tests). 
- Description : une phrase qui dit ce que fait le programme. 
- Code : la séquence d’instructions nécessaires à la résolution du problème
  {% endcallout %}
Cela donne concrètement :

Déclaration générale de fonction maximum :
```javascript
function maximum( nb1, nb2, nb3)
    {
        let max = nb1;
        if (nb2 > max) {max = nb2;}
        if (nb3 > max) {max = nb3;}

        return max;
    }
```
Appel de la fonction :
```javascript
maximum(1, 2, 3); // retourne 3
```
### b - la gestion des arguments
La gestion des arguments est particulière en javascript, les arguments seront récupérés par l’objet arguments.
{% callout warning%}
#### Note :
L’objet n’est pas un tableau, vous ne pouvez pas l’utiliser avec les propriétés ou les méthodes de l’objet tableau 
(comme pop()...) sauf avec la propriété length qui renvoie le nombre d’arguments. Vous pouvez récupérer chaque argument 
à partir de l’indice de l’objet arguments.
{% endcallout %}
Soit l’exemple suivant :
```javascript
function invitation(){
    console.log(`Il y a ${arguments.length} invités qui sont : `);
    for(let i=0;i <arguments.length;i++){
        console.log(arguments[i]);
    }
}
```
L’appel de la fonction donne :
```javascript
invitation("dany","roby"); // affiche : Il y a 2 invités qui sont : dany roby
```
À la différence des autres langages, il n’est pas nécessaire de déclarer les paramètres dans la signature de la fonction.

#### Transformer l’objet arguments en tableau
```javascript
const tabArgs = Array.prototype.slice.call(arguments);
```


### c - Les paramètres rest
Disponible au sein de chaque fonction, la fonction magique argument, permet de récupérer, comme son nom l’indique, les 
arguments. Si l’objet récupéré est similaire à un Array, il ne dispose d’aucune des propriétés ou des méthodes de 
celui-ci, à l’exception de length. 
Les paramètres rest vous permettent de récupérer un véritable Array à l’aide du simple préfixe ... appliqué sur le 
dernier argument de votre fonction.
```javascript
function invitation(separator, ...words) {
  return words.join(separator);
}

invitation("-", "dany","roby"); // "dany-roby"
```
### d - L’opérateur spread
Aussi appelé opérateur de décomposition, il permet de développer un objet itérable (comme un Array) lorsqu’on a besoin 
de plusieurs arguments.
```javascript
const myArray = [1991, 8, 1]
new Date(...myArray) // object Date - équivaut à: new Date(1991, 8, 1)

const myString = "foo bar"
// les objets String étant itérables
[...myString] // ["f", "o", "o", " ", "b", "a", "r"]
```
À noter que contrairement aux paramètres rest, l’opérateur spread peut être mélangé aux autres arguments d’une fonction.
```javascript
const myArray = [8, 1];
new Date(1991, ...myArray, 12); // object Date - équivaut à: new Date(1991, 8, 1, 12)
```
Les possibilités offertes par cette nouveauté sont très nombreuses. Voici quelques usages un peu plus avancés pour 
stimuler votre inspiration :
#### Concaténer plusieurs itérables
```javascript
const stronglyTyped = ["scala", "haskell"]

// ES6 / ES2015
["go", "rust", ...stronglyTyped] // ["go", "rust", "scala", "haskell"]
```
#### Déstructurer dans un tableau
```javascript
const words = ["foo", "bar", "baz"];

// ES6 / ES2015
const [first, ...rest] = words;
console.log(rest) // ["bar", "baz"]
```
Cela marche aussi avec des objets :
```javascript
const words = {param1:"foo", param2:"bar", param3:"baz"};
const {param2, ...rest} = words;

console.log(rest)  //  {param1:"foo", param3:"baz"}
```
## 2 - la portée des variables et des fonctions
### a - la portée des variables
Les variables n’ont pas toutes la même visibilité dans un script. Une variable déclarée à l’extérieur d’une fonction est globale. Elle est donc accessible aussi dans la fonction. Une variable déclarée dans la fonction ne pourra pas être utilisée à l’extérieur.

#### Portée globale
```javascript
const nb = 2;
function affiche(){
    console.log(nb);
}

affiche(); // affichera 2
```

Les variables définies en dehors d’une fonction sont accessibles dans la fonction. Elles peuvent être modifiées en dehors de la fonction aussi bien que par la fonction elle-même. On dit qu’elles ont une portée globale.

#### Portée locale
```javascript
function affiche(){
    const nb=2;
    console.log(nb);
}
affiche(); // affichera 2
console.log(nb); // affichera une erreur
```

Les variables définies dans une fonction, ainsi que les arguments d’une fonction ne sont disponibles qu’à l’intérieur de la fonction. On dit qu’elles ont une portée locale

#### Variables passées en argument
```javascript
let nb = 2;
function affiche(nb){
    nb=nb+1
    console.log(nb);
}
affiche(nb); // affichera 3
console.log(nb) // affichera 2
```

Lorsque la variable est passé en argument, elle devient locale dans la fonction. C’est la valeur de la variable qui est passée.

#### [Objet]({% aref "docs/javascript/programmer/les-objets"%}) passé en argument
```javascript
const monObjet={
    nb : 2
}

function affiche(Obj){
    Obj.nb=Obj.nb+1
    console.log( Obj.nb);
}
affiche(monObjet); // affichera 3
console.log(monObjet) // affichera {nb:3}
```

Le comportement est différent pour les objets et les tableaux (qui sont aussi des objets) car les variables qui permettent 
d’y accéder contiennent en fait une référence vers l’objet. C’est la référence qui est copiée dans l’argument et non 
l’objet, or Javascript fait automatiquement le lien entre une référence et l’objet sur lequel elle pointe. On accède donc 
au même objet.
### b - la portée des fonctions
#### Portée globale
La fonction a une portée globale, elle s'exécute dans les deux cas suivants
```javascript
const nb = 2;
function affiche(){
    console.log(nb);
}

affiche(); // affichera 2
```
ou comme le permet le hosting sur les fonctions (et pas les fonctions fléchées)

```javascript
const nb = 2;
affiche(); // affichera 2

function affiche(){
    console.log(nb);
}
```
#### Portée locale
Pour avoir une portée locale, il faut affecter la fonction à une variable :
```javascript
const nb = 2;
const affiche = function (){
console.log(nb);
}

affiche(); // affichera 2
```
mais
```javascript
const nb = 2;
affiche(); // affichera Cannot access 'affiche' before initialization

const affiche = function (){
    console.log(nb);
}
```
## 3 - les fonctions anonymes
Le principe consiste à appeler une fonction sans qu’elle porte de nom. Elle sera donc appelée qu’une seule fois.

#### Création d’une fonction anonyme
```javascript
 function (){
    const nb=2;
    console.log(nb);
} // ici une fonction anonyme est créée, mais sans l’exécuter
```

Il existe une syntaxe un peu spéciale qui permet d’exécuter une fonction anonyme : il faut englober la fonction anonyme dans des parenthèses. L’ensemble devient donc une fonction que l’on peut exécuter en ajoutant une paire de parenthèses à la fin. (Note : N’oubliez pas le point virgule final, son absence provoquant parfois des erreurs)

#### Exécution d’une fonction anonyme
```javascript
function (){
    const nb=2;
    console.log(nb);
} ();   // Attention ici il faut le point virgule pour l’exécuter.
```

Une fonction n’est en fait qu’une variable un peu spéciale, on peut l’affecter à une variable :

#### Exécution d’une fonction anonyme en l’affectant à une variable
```javascript
const afficher=function (){
    const nb=2;
    console.log(nb);
};   // Attention ici il faut le point virgule.

afficher(); // affichera 2
```

## 4 - la closure
La closure consiste à créer une fonction à l’intérieur d’une fonction pour pouvoir retourner la fonction interne. 
La closure (fermeture ou clôture en français) est une technique de programmation qui permet de séparer une variable de 
son contenu. Comme vous le savez sûrement, une variable possède deux composantes : un nom et une valeur. 
En utilisant une closure, on va conserver la valeur d’une variable de telle sorte qu’elle ne soit plus accessible en 
passant par la variable qui la contenait à l’origine. Voici un exemple :

#### Déclaration d’une closure
```javascript
function MaFonction(nombre) {

    console.log(`nombre : ${nombre}`)

    function Ajouter(valeur) {
        console.log(`valeur : ${valeur}`)
        // La variable "nombre" est accessible dans cette fonction, car "nombre"
        // a été définie en dehors de la fonction Ajouter

        return nombre + valeur;
    }

    // Comme on l’a vu, Ajouter est une variable,
    //j’ai donc le droit de la rendre en
    // tant que résultat de la fonction

    return Ajouter;

}
```

Voici les résultats en faisant plusieurs appels :
{% callout success%}
#### Résultat :
```javascript
const a = MaFonction(10); // affiche nombre : 10
console.log(a(2)) // affiche nombre : 10 valeur : 2 12
console.log(a(3)) // affiche nombre : 10 valeur : 3 13
```
{% endcallout %}
La première valeur 10 est clôturée. Elle n’est plus accessible après les appels suivants. Seul la variable valeur est affectée. 
Vous savez désormais le principe de fonctionnement d’une closure ainsi que comment la mettre en place. Les closures permettent de se sortir de situations autrement insolubles. Elles peuvent sembler difficiles à aborder au début, mais une fois qu’on a compris leur fonctionnement leur utilisation devient naturelle et salvatrice.
## 5 - fonctions fléchées (arrow function)
Les fonctions fléchées offrent une syntaxe raccourcie des fonctions en utilisant la syntaxe `=>`.

Il existe une syntaxe un peu spéciale qui permet d’exécuter une fonction anonyme : il faut englober la fonction anonyme dans des parenthèses. L’ensemble devient donc une fonction que l’on peut exécuter en ajoutant une paire de parenthèses à la fin. (Note : N’oubliez pas le point virgule final, son absence provoquant parfois des erreurs)
{% callout %}
#### Exemple
```javascript
// es5
var myFn = function(x) {
  return x + 1;
};

// es6
const myFn = x => {
  return x + 1;
};

// ou encore plus simple
const myFn = x =>  x + 1;
```
{% endcallout %}
Les fonctions fléchées sont syntaxiquement similaires à ce qu’on trouve déjà dans d’autres langages comme Java (8+), C#, PHP… 
Les exemples suivants sont donc tous les mêmes :
```javascript
const myFn = (x) => {
  return x + 1;
};
// ===
const myFn = (x) => x + 1;
// ===
const myFn = x => x + 1;
// ===
const myFn = x => (x + 1);
```
Notez que dans le cas, où il y a plusieurs arguments, il faut des parenthèses :
```javascript
const myFn = (x,y) => x+y;
```
Dans le cas, où il y a des accolades (et le plus souvent plusieurs instructions), il faut un return :
```javascript
const myFn = (x,y) => {
 return x+y;
};                
```
Dans le cas des Objets, Les fonctions fléchées n’ont pas de this. 
Attention à la façon d’écrire les fonctions :
```javascript
const aFn = obj => {
  key: obj.value;
};
const anObj = {
  value: 'my value'
};
console.log(aFn(anObj)); // undefined
```
Il faudra préférer cette écriture :
```javascript
const aFn = obj => {
  return { key: obj.value };
};
// ou plus simplement
const aFn = obj => ({ key: obj.value }); // It works !
```
## 6 - le hissage (Hosting)
En Javascript, les variables sont hissées en haut de l’étendue dans laquelle elles sont déclarées. 
Ainsi, le code suivant :
```javascript
function nomChat(nom) {
  console.log("Le nom de mon chat est " + nom);
}
nomChat("Tigrou");
//Le résultat du code ci-dessus est : "Le nom de mon chat est Tigrou"
```
est équivalent à :
```javascript
nomChat("Chloé");
function nomChat(nom) {
  console.log("Le nom de mon chat est " + nom);
}
//Le résultat du code ci-dessus est : "Le nom de mon chat est Chloé"
```
Mais cela ne fonctionne pas dans le cas suivant :
```javascript
num = 6; // initialisation
num + 7;
var num;
// Ne donne aucune erreur tant que num est déclarée
```
Car JavaScript hisse seulement les déclarations, pas les initialisations
{% callout danger%}
Le hissage ne fonctionne pas avec les fonctions fléchées
{% endcallout %}