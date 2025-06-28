---
layout : "layouts/docs.njk"
title : "Request Parameters"
description : "prepare et execute - Requêtes avec paramètres"
group : "sgbd"
section : "php"
toc : true
date : "2022-09-03T12:14:21+02:00"
draft : false
---
Lorsque la requête SQL à exécuter comporte des paramètres, il faut utiliser une technique différente.
### 1 - Première formulation
```php
⋮
// Préparation de la requête : le ? correspond au paramètre attendu
$req = $bdd->prepare("select * from employe where servempl=?");

// Exécution de la requête en lui passant le tableau des arguments
// (ici un seul élément : le code du service)
$req->execute($_POST['service']);
⋮
```
Ce code source utilise ce qu’on appelle une **requête préparée**. Il s’agit d’une technique dans laquelle on définit d’abord 
le squelette de la requête (appel de la méthode `prepare` sur l’objet `$bdd`) en prévoyant ses différents paramètres, 
indiqués par des `?` dans le code SQL. Ensuite, on exécute la requête préparée (méthode execute sur l’objet `$req`). 
Lors de cet appel, on passe les paramètres nécessaires sous la forme d’un tableau.
{% callout danger%}
 **Avertissement**  
Le tableau des paramètres doit contenir autant d’élément qu’il y a de ? dans la requête préparée. L’ordre doit également être respecté.
{% endcallout %}
Outre le gain de temps lorsqu’une même requête est exécutée plusieurs fois avec des paramètres différents, l’utilisation d’une requête préparée évite de construire une requête SQL en y intégrant directement des données utilisateur.


### 2 - Deuxième formulation
Dans cette formulation, le nom des variables est explicite, on ne met plus de `?`.
```php
⋮
// Préparation de la requête : le ? correspond au paramètre attendu
$req = $bdd->prepare("select * from employe where servempl=:service");

// Passage des arguments
$req->bindParam(':service', $_POST['service'], PDO::PARAM_STR);

// PDO::PARAM_STR signifie que :service est de type string

// Exécution de la requête
$req->execute();
⋮
```

La technique ci-dessus rend la base vulnérable aux attaques de type "injection SQL". L’injection SQL consiste à faire exécuter des requêtes SQL imprévues par le SGBDR, ce qui peut conduire à de graves problèmes de sécurité.

{% figure-abs "images/php/sgbd/sql_injection.png" "sql_injection" %}

Ce risque de sécurité n’existe pas lorsqu’on utilise des requêtes préparées,
{% callout %}
**Note**  
Ici, pas besoin de "nettoyer" la variable `$_POST['service']` reçue du formulaire comme nous l’avions fait dans le chapitre précédent. L’appel, à `htmlspecialchars`, désactive l’exécution de code JavaScript, mais ne présente aucun intérêt dans le cas de données utilisées dans des requêtes SQL.
{% endcallout %}
