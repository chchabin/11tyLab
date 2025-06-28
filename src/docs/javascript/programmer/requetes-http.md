---
layout : "layouts/docs.njk"
title : "Requetes Http"
description : "Effectuer des requêtes HTTP depuis un navigateur web vers un serveur."
group : "programmer"
section : "javascript"
toc : true
date : "2023-10-08T12:45:49+02:00"
draft : false
---
`XMLHttpRequest` et `FetchAPI` sont deux méthodes JavaScript pour effectuer des requêtes HTTP depuis un navigateur web vers un 
serveur. Les deux sont utilisés pour récupérer des données à partir de ressources externes, telles que des fichiers JSON, 
des pages HTML, ou d'autres types de données depuis des serveurs distants. Cependant, ils diffèrent dans leur approche 
et leur utilisation. 

`fetch` est souvent préféré à `XMLHttpRequest` dans le développement moderne en raison de sa syntaxe plus propre, de son 
utilisation de promesses et de sa meilleure intégration avec les nouvelles fonctionnalités JavaScript.

## 1 - FETCH

API plus récente : fetch est une API plus récente introduite avec ECMAScript 6 (ES6) et elle est devenue plus populaire 
en raison de sa simplicité et de sa promesse basée sur la nature.

Promesse : fetch renvoie une promesse qui permet de gérer la réponse de manière plus propre et plus lisible. Vous pouvez 
utiliser then pour traiter la réponse.

Syntaxe plus propre : fetch a une syntaxe plus propre et plus moderne, ce qui rend son utilisation plus simple pour les 
développeurs.

L'utilisation de fetch avec await permet d'effectuer des requêtes HTTP asynchrones de manière propre et lisible dans 
JavaScript. Fetch renvoie une promesse, et lorsque vous l'utilisez avec await, vous pouvez attendre que la promesse se 
résolve pour traiter la réponse de manière synchrone. Voici comment utiliser fetch avec await :
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://exemple.com/mon-fichier.json');

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Traitez les données ici
    } catch (erreur) {
        console.error(erreur);
    }
}

// Appelez la fonction asynchrone pour récupérer les données
fetchData();
```
## 2 - L'interface Response
L'interface Response fait partie de l'API Fetch en JavaScript et représente la réponse à une requête HTTP. Elle contient 
des informations sur la réponse HTTP, telles que le statut de la réponse, les en-têtes, le corps de la réponse, etc. 

Voici quelques-unes des propriétés et méthodes les plus couramment utilisées de l'interface Response :

1. `Response.status`: Un entier représentant le code d'état HTTP de la réponse (par exemple, 200 pour OK, 404 pour Non trouvé, etc.).
2. `Response.statusText`: Une chaîne de caractères représentant le texte de l'état HTTP de la réponse (par exemple, "OK" pour le code 200).
3. `Response.ok`: Un booléen indiquant si la réponse est réussie (code d'état entre 200 et 299).
4. `Response.headers`: Un objet Headers contenant les en-têtes HTTP de la réponse.

Méthodes de l'interface Response :

1. `Response.json()`: Une méthode qui renvoie une promesse résolue avec le corps de la réponse parsé en JSON.

2. `Response.text()`: Une méthode qui renvoie une promesse résolue avec le corps de la réponse sous forme de texte brut.

3. Response.blob() : Une méthode qui renvoie une promesse résolue avec le corps de la réponse sous forme de données binaires (un objet Blob).

4.  Response.arrayBuffer() : Une méthode qui renvoie une promesse résolue avec le corps de la réponse sous forme de tampon d'octets (un objet ArrayBuffer).

5. Response.clone() : Une méthode qui crée une copie de la réponse, utile si vous souhaitez la lire plusieurs fois.

6. Response.redirected : Un booléen indiquant si la réponse a été redirigée.

7. Response.url : L'URL de la réponse, qui peut être différente de l'URL initiale si la réponse est le résultat d'une redirection.
## 3 - XMLHttpRequest
Ancienne API : XMLHttpRequest a été introduit tôt dans le développement web, et il a été utilisé pendant de nombreuses 
années pour effectuer des requêtes asynchrones. C'est une API plus ancienne, et elle est moins moderne que fetch.

Asynchrone : XMLHttpRequest est principalement asynchrone, ce qui signifie que les requêtes sont effectuées en arrière-plan 
sans bloquer le thread principal de l'application. Vous devez fournir un callback pour gérer la réponse.

Gestionnaire d'événements : Vous gérez les réponses en utilisant des gestionnaires d'événements tels que `onload` pour la 
réussite, onerror pour les erreurs, etc.

Complexité : XMLHttpRequest a une syntaxe plus complexe pour effectuer des requêtes et gérer les réponses, ce qui le rend 
parfois difficile à utiliser pour les développeurs.

Exemple d'utilisation de XMLHttpRequest :
```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://exemple.com/mon-fichier.json', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error('Erreur de requête : ' + xhr.status);
    }
};
xhr.onerror = function() {
    console.error('Erreur réseau');
};
xhr.send();
```
Cependant, XMLHttpRequest est toujours pris en charge par les navigateurs plus anciens, de sorte qu'il peut être 
nécessaire de l'utiliser dans certains cas, en particulier si vous devez prendre en charge des versions de navigateurs 
obsolètes.