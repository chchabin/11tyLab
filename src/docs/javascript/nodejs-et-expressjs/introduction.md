---
layout : "layouts/docs.njk"
title : "Introduction"
description : "Principes généraux de Node.js et de ses principaux modules"
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T09:35:30+02:00"
draft : false
---
## 1 - Les API REST
### a - L’API REST
Une API (Application Program Interface) permet d’établir des contrats entre une partie d’un logiciel et une autre. Cela consiste à établir une structure de requête (request), réponse (response). Cela consiste pour une application à recevoir une requête et à fournir des données correspondantes formatées.
Une API REST. REST (pour `REpresentational State Transfer`) est un style d’architecture basé sur le protocole HTTP et qui permet de manipuler des ressources via un URI Une API REST. HTTP est le protocole de base de communication pour internet. REST permet de traiter les objets coté serveur, selon l’acronyme CRUD (Create, Update, Delete). Il utilise aussi, parfois, des éléments du standard JSON.
{% callout %}
#### Qu’est-ce que JSON ?
JSON signifie JavaScript Objet Notation. Il s’agit d’un format textuel indépendant de la langue, couramment utilisé pour la transmission de données dans les applications Web. JSON a été inspiré par la notation JavaScript Object Literal, mais il existe des différences entre les deux. Par exemple, dans les clés JSON doivent être entre guillemets, alors que dans les littéraux d’objet, ce n’est pas le cas.
{% endcallout %}
Une API REST doit respecter un certain nombre de contraintes :

- **Client-Serveur** : Il y a séparation des rôles entre le client et le serveur permettant à chacun d’évoluer séparément ;
- **Sans état (stateless)** : Chaque requête du client contient toutes les informations nécessaires au traitement. Il n’y a donc pas de session côté serveur ;
- **Cache** : La réponse du serveur peut être mise en cache côté client ou côté serveur ;
- **Interface uniforme** (Uniform Interface) : Chaque ressource doit être identifiable de manière unique via son URI, représentable (via le format XML ou JSON par exemple), manipulable via sa représentation (en utilisant les méthodes HTTP), autodescriptive (doit contenir toutes les informations pour son traitement, par exemple, on peut connaitre son format via l’utilisation des types MIME) ;
- **Organisation en couches** (Layered System) : Le système peut être séparé en plusieurs couches (serveurs proxy, load balancers, firewalls, etc.) ;
- **Code à la demande** (Code-On-Demand) : Cette contrainte optionnelle permet au client d’exécuter du code à la demande, c’est-à-dire d’étendre une partie de la logique du serveur au client, via l’envoi de code JavaScript par exemple.
### b - Les méthodes HTTP
#### Les requêtes HTTP de base :
- GET : Récupération d’une ressource ;
- POST : Ajout d’une ressource ;
- PUT : Mise à jour d’une ressource spécifique ;
- DELETE : Suppression d’une ressource ;
- HEAD : Similaire à GET, mais permet uniquement de récupérer les en-têtes HTTP.
#### Les requêtes HTTP plus spécifiques :
- HEAD : Semblable à GET mais ne retourne pas de ressources (body) ;
- OPTION : Décrit les options de communication pour la ressource ciblée ;
- PATCH : Mise à jour de certaines ressources.
#### Exemple d’URL (Endpoint)
{% bs-table %}

| Action                              | Méthode | URL                                    |
|-------------------------------------|---------|----------------------------------------|
| Récupérer la liste des articles     | GET     | https://monsite.fr/api/posts           |
| Récupérer un article en particulier | GET     | https://monsite.fr/api/posts/8         |
| Récupérer le détail d’un article    | GET     | https://monsite.fr/api/posts/8/details |
| Ajouter un article                  | POST    | https://monsite.fr/api/posts           |
| Modifier un article en particulier  | PUT     | https://monsite.fr/api/posts/8         |
| Supprimer un article en particulier | DELETE  | https://monsite.fr/api/posts/8         |
{% endbs-table %}
#### Authentification
Certaines API nécessitent une authentification soit pour limiter l’accès à des données, soit pour en plus, rendre l’accès payant. Le plus souvent, c’est le protocole OAuth qui est utilisé. C’est un protocole libre qui permet d’autoriser un site web, un logiciel ou une application (dite « consommateur ») à utiliser l’API sécurisée d’un autre site web (dit « fournisseur ») pour le compte d’un utilisateur. L’authentification se fait à l’aide d’un jeton (access token).
Voici quelques exemples avec L’API de github. Ils utilisent curl qui est un outil pour transférer des données en utilisant plusieurs protocoles dont HTTP.
{% bs-table %}

| Action                             | URL                                                                   |
|------------------------------------|-----------------------------------------------------------------------|
| Transfert du jeton dans le header  | curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com     |
| Transfert du token par l’URI       | curl https://api.github/?access\_token= OAUTH-TOKEN                   |
| Génération du token par paramètres | curl 'https://api.github/whatever?client\_id=xxxx&client\_secret=yyy' |
{% endbs-table %}
## 2 - Introduction node.js
Qu’est-ce que node.js

- C’est un environnement d’exécution (Runtime), pas un langage, p)as un framework,
- Produit à partir du moteur Javascript V8 comme Google Chrome,
- Écrit en C++,
- Seul le langage javascript est utilisé pour ce serveur.

Que faut-il connaitre pour utiliser node.js

- Le langage javascript (Objets, tableaux, conditions, etc.),
- Il est utile de connaitre,
    - Le protocole HTTP (les codes de retour, les entêtes, etc.),
    - Le format JSON,
    - Les fonctions Arrow,
    - Les promises,
    - le pattern MVC.

Pourquoi utiliser node.js

- Rapide, efficace et fortement évolutif,
- Gestion des évènements, un modèle d’entrée/sortie non bloquant,
- Populaire chez les programmeurs,
- Le même langage en front et en back office (JS).

Un modèle d’entrée/sortie non bloquant

- Travail sur un seul thread et utilise des, entrée/sortie, non bloquantes,
- Supporte 10 000 connexions simultanées,
- Optimise le débit et l’évolutivité, dans une application avec plusieurs opérations d’entrée/sortie,
- Tout ceci rend les applications node.js rapides et efficaces.

La boucle d’évènement node.js

- Un seul thread
- Support la concurrence d’accès entre les événements(events) et les rappels (callback),
- EventEmitter est une classe pour relier les événements (events) et les écouteurs (listener).

Les projets les plus utilisés pour node.js

- les API REST & les microservices,
- les services en temps réels (chat, mise à jour),
- les applications en lecture, écriture, mise à jour, suppression (CRUD) - Blogs, Boutiques, Réseaux sociaux,
- les outils (tools) & les utilitaires (utilities).

NPM - Node Package Manager (npm)

- Install la troisième partie des packages (framework, librairie, outils, etc.),
- Les paquets sont enregistrés dans le répertoire `node_modules`,
- Toutes les dépendances sont recensées dans le fichier `package.json`,
- Des scripts npm sont créés pour effectuer certaines tâches comme lancer un serveur.

Exemples

- npm init : générer le fichier package.json,
- npm install express : installer un paquet localement,
- npm -g nodemon : installer un paquet pour toutes les applications (global).
## 3 - Express framework
Qu’est-ce-qu’Express

- Express est un framework pour le web et node.js, il est rapide, minimaliste et ouvert (dans la mesure où il peut intégrer différents packages),
- Express est un framework aussi bien coté serveur que coté client,
- Il n’est pas comparable à des frameworks uniquement coté client comme React, Angular, Vue,
- Il peut être utilisé avec d’autres frameworks pour créer des applications "full stack" : qui intègre aussi bien le côté client que le côté serveur.

Pourquoi utiliser Express ?

- Pour créer plus facilement un site web avec node.js,
- Le rendu serveur, utilisé pour des applications, est aussi bien que des API ou des micro services,
- Extrêmement léger, rapide et gratuit,
- Le plus populaire framework node.js,
- Facile à utiliser coté client, car en javascript

Que faut-il connaitre pour utiliser node.js

- Le langage javascript (Objets, tableaux, conditions, etc.),
- les fonctionnalités de base de node.js et NPM
- Il est utile de connaitre,
    - Le protocole HTTP (les codes de retour, les entêtes, etc.),
    - Le format JSON,
    - Les fonctions Arrow,
    - Les méthodes des tableaux (foreach, map, filter, ...).

La syntaxe de base du serveur
```javascript
// Chargement du module
const express = require('express');
// init express
const app = express();
// création de la route
app.get('/', (req, res)=> {
      res.send('Hello Wordl !');
});
// écoute du port
server.listen(8888);
```
Gestion de base des routes

- gérer les routes et les requêtes est simple
- app.get(), app.post(), app.put(), app.delete(), etc.
- accès aux paramètres, requêtage, découpe d’url, etc.
- Express dispose d’un Routeur, il est possible de stocker les routes dans un fichier séparé,
- On peut analyser les données entrantes avec le Body Parser.
```javascript
app.get('/', (req, res)=> {
      // Récupération de données depuis la base de données
      // Charger des pages
      // Retourner un fichier json
      // Accès complet aux request & response
});
```
