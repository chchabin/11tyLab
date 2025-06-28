---
layout : "layouts/docs.njk"
title : "Pattern Mvc"
description : ""
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:23:32+02:00"
draft : false
---
## Prérequis : Transmettre des données entre des pages
Le site web peut être statique ou dynamique. Un site statique est composé de pages HTML stockées dans un disque dur. 
Un site dynamique est constitué de pages de code, ici du `php`, qui sont interprétées pour fournir des pages `HTML` au navigateur.  
Une URL représente l'adresse d'une page web et commence par `http://` ou `https://`. 
Lorsqu'on fait un lien vers une autre page, il est possible d'ajouter des paramètres sous la forme 
`bonjour.php?nom=Dupont&prenom=Jean` qui seront transmis à la page. 

{% figure-abs "images/php/transmission/url.png" "url" %}

Dans ce cas, la page `bonjour.php` recevra ces paramètres dans la variable superglobale `$_GET` et défini automatiquement par PHP :

- `$_GET['nom']` aura pour valeur Dupont ; 
- `$_GET['prenom']` aura pour valeur Jean. 

{% callout %}
**Remarque**  
Le résultat sera le même avec la variable superglobale `$_REQUEST`
- `$_REQUEST['nom']` aura pour valeur Dupont ;
- `$_REQUEST['prenom']` aura pour valeur Jean.
{% endcallout %}

## Patron de conception MVC
Le développement d'une application web complexe, proposant de multiples fonctionnalités, par des équipes de plusieurs 
informaticiens nécessite d'établir des règles dans les étapes du développement et dans l'organisation du projet.

Pour passer de l'écriture d'un simple programme au développement d'une application maintenable et évolutive, 
il est indispensable d'industrialiser, de rationaliser son codage. C'est ce que proposent les patrons de conception, notamment MVC.

### Le routeur
Le fichier `index.php` fait fonction de routeur.  
Il lit les urls pour extraire la partie contrôleur et la partie action. Une url se présente de cette façon :
```html
index.php?uc=controleur&action=accueil
```
Cette url est récupérée dans un tableau `$_REQUEST`. Ce tableau fournit deux clés : 
{%bs-table "table-bordered mx-auto"%}

| Clé                   | valeur     |
|-----------------------|------------|
| `$_REQUEST[‘uc’]`     | contrôleur |
| `$_REQUEST[‘action’]` | accueil    |

{% endbs-table %}
### Le répartiteur

Le fichier `index.php` fait fonction de répartiteur.  
En fonction des valeurs du contrôleur il appelle le contrôleur grâce à l’instruction `include`. Parfois, dans les TP qui vous 
sont fournis, il n’y a qu’un contrôleur le répartiteur est réduit à son strict minimum.  

Les actions qui sont appelées sont, quant à elles, incluses dans le contrôleur. En fonction de l’action, le contrôleur 
exécute des opérations, appel le modèle et appel des vues.

### Les contrôleurs

Un contrôleur est l'élément central d'une fonctionnalité sur un site web `MVC`. Chaque fonctionnalité est gérée par un 
contrôleur. C'est le contrôleur qui a pour rôle de :

- récupérer les données transmises par un formulaire,
- récupérer ou envoyer les données dans la base en faisant appel aux fonctions gérées par le modèle,
- traiter les données,
- appeler les vues permettant d'afficher les données récupérées, calculées, ou d'afficher les messages à destination de l'utilisateur. 

{% figure-abs "images/php/transmission/mvc.png" "mvc" %}

### Accès aux données

Dans l'approche MVC, il est important de séparer l'accès à la base de données du reste du code applicatif.  
L’accès aux données se par l’intermédiaire du modèle, où sont enregistrées toutes les requêtes, le plus souvent dans des fonctions.  
L’origine des données est multiple, il peut s’agir :

- d’une base de données
- de tableau,
- de fichiers XML
{% callout %}
Le modèle est appelé à partir du contrôleur.
{% endcallout %}
