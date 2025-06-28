---
layout : "layouts/docs.njk"
title : "Les Modules"
description : "réutilisation de scripts"
group : "programmer"
section : "javascript"
toc : true
date : "2023-10-08T07:27:39+02:00"
draft : false
---
Les modules JavaScript sont un moyen de regrouper et d'organiser le code JavaScript en plusieurs fichiers ou modules 
réutilisables. Ils permettent de découper un programme JavaScript en morceaux plus petits et autonomes, ce qui facilite 
la maintenance, la réutilisation et la collaboration entre les développeurs.

Les modules JavaScript ont été introduits dans ECMAScript 6 (également connu sous le nom d'ES6) et sont désormais 
largement pris en charge par les navigateurs modernes et les environnements Node.js. Voici quelques concepts de base 
liés aux modules JavaScript :

## 1- Exportation et importation, `import{variable,fonction,class}` 
Les modules JavaScript permettent d'exporter des fonctions, des variables ou d'autres éléments d'un module pour les 
rendre accessibles à d'autres modules. On utilise `export` pour déclarer ce que l'on souhaite exporter, puis `import` pour 
l'importer dans un autre module.

Exemple d'exportation :
```javascript
// Dans un module
export const nomVariable = 42;
export function maFonction() {
    // ...
}
```
Exemple d'importation :
```javascript
// Dans un autre module
import { nomVariable, maFonction } from './mon-module.js';
```
Il est courant d'exporter des classes depuis des modules pour les rendre disponibles dans d'autres parties de votre 
application :
```javascript
// Dans un module (par exemple, ma-classe.js)
export class MaClasse {
    // ...
}

// Dans un autre module
import { MaClasse } from './ma-classe.js';

const instance = new MaClasse();
```
## 2- Export par défaut
Jusqu'à présent, nous avons utilisé des exports nommés — chaque valeur est exportée avec un nom et c'est ce nom qui est 
également utilisé lorsqu'on réalise l'import.

Il existe également un export par défaut — conçu pour simplifier l'export d'une fonction par module et pour faciliter 
l'interopérabilité avec les systèmes de module CommonJS et AMD.
Exemple d'exportation par défaut :
```javascript
// Dans un module
export default function() {
    // ...
}
```
Exemple d'importation par défaut :
```javascript
// Dans un autre module
import maFonctionParDefaut from './mon-module.js';
```
## 3- Chargement dynamique : `import(module)`
L’expression `import(module)` charge le module et renvoie une promesse résolue en un objet de module contenant toutes 
ses exportations. Il peut être appelé de n’importe quel endroit du code.

Nous pouvons l’utiliser dynamiquement à n’importe quel endroit du code, par exemple :
```javascript
import('./mon-module-dynamique.js')
    .then(module => {
        // Utilisez le module ici
    })
    .catch(error => {
        // Gérez les erreurs ici
    });
```
L'utilisation du mot-clé `await` au plus haut niveau est une fonctionnalité disponible dans les modules. Cela permet 
d'avoir des modules qui agissent comme des grandes fonctions asynchrones, ce qui signifie que le code peut être évalué 
avant d'être utilisé dans des modules parents, mais sans bloquer le chargement des modules frères et sœurs.

Nous pourrions utiliser `const module = await import(modulePath)` s’il se trouve dans une fonction asynchrone.
```javascript
async function chargerModuleDynamique() {
    try {
        // Utilisez l'opérateur "await" avec "import()"
        const module = await import('./mon-module-dynamique.js');

        // Utilisez le module chargé ici de manière synchrone
        module.maFonction();
        console.log(module.nomVariable);
    } catch (erreur) {
        // Gérez les erreurs ici
        console.error(erreur);
    }
}

// Appelez la fonction pour charger le module dynamiquement
await chargerModuleDynamique();
```
ou encore
```javascript
const fetchData = async (link) => {
    // await response of fetch call
    const response = await fetch(link)
    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json()
}
//export {dataJson};
export default await fetchData
```
Exemple d'importation par défaut :
```javascript
// Dans un autre module
import fetchDataJson from './mon-module.js';
```
## 4 - HTML et Modules JavaScript
Vous pouvez intégrer des modules JavaScript dans une page HTML en utilisant la balise `<script type="module">`.

Cette balise indique au navigateur que le fichier JavaScript doit être traité comme un module.

Les modules JavaScript peuvent être chargés de manière asynchrone, ce qui peut améliorer les performances de chargement 
de la page.

Exemple d'intégration d'un module JavaScript dans un fichier HTML :
```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page HTML avec un module JavaScript</title>
</head>
<body>
    <!-- Utilisation d'un module JavaScript -->
    <script type="module" src="mon-module.js"></script>
</body>
</html>
```