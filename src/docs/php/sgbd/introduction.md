---
layout : "layouts/docs.njk"
title : "Introduction"
description : ""
group : "sgbd"
section : "php"
toc : true
date : "2022-09-03T12:12:32+02:00"
draft : false
---
## 1 - Introduction
Vous connaissez à présent les bases du langage PHP et vous savez transmettre des informations d’une page à une autre. Cependant, il nous reste à étudier le moyen de stocker des données de manière persistante. Ainsi, nous pourrons mémoriser les informations saisies par les utilisateurs, ou bien construire des pages dynamiques à partir des données externes.
{% callout %}
**Définition**  
Une donnée est dite **persistante** lorsqu’elle survit à l’arrêt du logiciel ou de la machine qui la manipule. Le contraire de "persistante" est "volatile".
{% endcallout %}
Actuellement, la technique la plus utilisée pour rendre des données persistantes consiste à les sauvegarder dans un logiciel dédié appelé SGBDR ou Système de Gestion de Bases de Données Relationnelles. Parmi les SGBDR les plus connus, citons MySQL, PostgreSQL ou encore ORACLE.

Nous allons donc étudier comment interagir avec un SGBDR depuis une page PHP. Pour cela, nous allons utiliser une extension récente du langage PHP appelée PDO (*Php Data Objects*). Par rapport aux autres solutions existantes, PDO possède le double avantage d’être orientée objet et d’être indépendante du SGBDR utilisé.

Le schéma ci-dessous décrit l’architecture que nous allons mettre en œuvre. Il s’agit d’un exemple d’**architecture trois tiers** (client, serveur Web, SGBD). Le rôle de PDO va être de faire le lien entre les pages PHP du serveur et les données stockées dans le SGBDR.

{% figure-abs "images/php/sgbd/archi-pdo.png" "archi-pdo.png" %}

## 2 - Configuration de la connexion avec `PDO`
La connexion à une base de données depuis un fichier source PHP est réalisée de manière orientée objet, en instanciant un objet de la classe PDO par le biais de son constructeur.
```php
$bdd = new PDO ("mysql:host=localhost;dbname=mabase;charset=utf8","mabase_util",
        "mabase_mdp", array(PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION ));
```
Le constructeur utilisé ici comporte quatre paramètres :

- Le premier paramètre (`mysql:..`.) définit le nom de la source de données ou DSN, *Data Source Name*. 
Ce nom contient le nom et le type du SGBD (ici MySQL sur la machine locale, `localhost`), le nom de la base de données (ici mabase) et le jeu de caractères utilisé (ici `utf8`).
- Le deuxième paramètre (`mabase_util`) est le login utilisé pour se connecter à la BD. Il doit auparavant avoir été créé au niveau du SGBDR.
- Le troisième paramètre (`mabase_mdp`) est le mot de passe associé au login.
- Le quatrième paramètre (`array(PDO::...)`) est relatif à la gestion des erreurs.
{% callout %}
**Autres façons de définir le jeu de caractères**  
Si vous effectuez une recherche, vous trouverez différentes façons de définir le jeu de caractères et les éditions précédentes de ce livre vous ont demandé d’utiliser ce code :
```php
$pdo->exec(’SET NAMES "utf8"’);
```
En effet, jusqu’à PHP 5.3.6, l’option charset n’était pas correctement appliquée par PHP. Étant donné que cela est corrigé dans n’importe quelle version de PHP que vous allez réellement utiliser, la définition du jeu de caractères dans la chaîne de connexion est l’option préférée.
{% endcallout %}
{% callout %}
**Le login : root**. 
Il est déconseillé d’utiliser le login root ayant tous les droits pour se connecter à une base de données depuis du code PHP. Il vaut mieux créer dans MySQL un utilisateur dédié n’ayant des droits que sur cette base.
{% endcallout %}

## 3 - `try/catch` La gestion des exceptions
Le serveur MySQL est un logiciel complètement distinct du serveur Web. Par conséquent, nous devons considérer la possibilité que le serveur soit indisponible ou inaccessible en raison d’une panne de réseau, ou parce que la combinaison nom d’utilisateur / mot de passe que vous avez fournie est rejetée par le serveur, ou puisque vous avez simplement oublié de démarrer votre serveur MySQL ! Dans de tels cas, `new PDO` ne fonctionnera pas et lèvera une exception PHP.

Une exception PHP est ce qui se produit lorsque vous dites à PHP d’exécuter une tâche et qu’il est incapable de le faire. PHP essaiera de faire ce qu’on lui dit, mais échouera ; et afin de vous informer de l’échec, il vous lancera une exception. Une exception est un peu plus que PHP qui plante avec un message d’erreur spécifique. Lorsqu’une exception est levée, PHP s’arrête. Aucune ligne de code après l’erreur ne sera exécutée.
En tant que développeur responsable, c’est votre travail de détecter cette exception et de faire quelque chose pour que le programme puisse continuer.
{% callout danger%}
**Exceptions non interceptées**  
Si vous n’interceptez pas d’exception, PHP arrêtera d’exécuter votre script PHP et affichera un message d’erreur, spectaculairement laid. Ce message d’erreur révélera même le code de votre script qui a généré l’erreur. Dans ce cas, ce code contient votre nom d’utilisateur et votre mot de passe MySQL, il est donc particulièrement important d’éviter que le message d’erreur ne soit vu par les utilisateurs !
{% endcallout %}
On peut traiter immédiatement les erreurs (base de données introuvable, mauvais login ou mot de passe, etc) en intégrant la connexion dans un bloc `try/catch`. Il s’agit d’un mécanisme de gestion des erreurs utilisant les **exceptions**. Sans rentrer dans des détails inutiles, son fonctionnement est le suivant :

1. Les instructions situées dans le bloc `try` sont exécutées.
2. Si l’une des instructions du bloc `try` provoque une erreur, elle est interceptée par le bloc `catch`, dont les instructions sont alors exécutées.
3. Si aucune instruction du bloc `try` n’échoue, le contenu du bloc `catch` est ignoré et l’exécution se poursuit.

```php
try{
$bdd = new PDO ("mysql:host=localhost;dbname=mabase;charset=utf8","mabase_util",
    "mabase_mdp", array(PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION ));
}
catch (Exception $e){
die('Erreur fatale : ' . $e->getMessage());
}
// ...
```

Si un problème se produit pendant la connexion, l’exécution PHP est interrompue (fonction `die`) et un message d’erreur, 
est affiché. Sinon, le reste de la page est exécuté normalement.

Vous pouvez considérer une instruction `try … catch` comme une instruction `if … else`, sauf que le deuxième bloc de code correspond à ce qui se passe si le premier bloc de code ne s’exécute pas.

La classe PDO dispose d’une [documentation en ligne](http://www.php.net/manual/fr/class.pdo.php).
{% callout %}
**La variable `$e`**  
La variable $e n’est pas en fait une chaîne, mais un **objet**. Il est possible de traiter la variable $e comme une chaîne et de l’utiliser pour imprimer, un message d’erreur, plus descriptif.
{% endcallout %}
La classe PDOException a également une méthode `getMessage()` qui contient le message d’erreur. Si vous souhaitez être plus explicite, vous pouvez modifier le bloc catch comme suit :

```php
try{
$bdd = new PDO ("mysql:host=localhost;dbname=mabase;charset=utf8","mabase_util",
    "mabase_mdp", array(PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION ));
}
catch (PDOException $e){
$sortie='Erreur fatale : ' . $e->getMessage();
}
// ...
```

Il existe d’autres méthodes, notamment `getFile()` et `getLine()`, pour renvoyer le nom de fichier et le numéro de ligne sur 
lesquels l’exception a été lancée. Vous pouvez générer un message d’erreur, très détaillé comme celui-ci :

```php
try{
$bdd = new PDO ("mysql:host=localhost;dbname=mabase;charset=utf8","mabase_util",
    "mabase_mdp", array(PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION ));
}
catch (PDOException $e){
$sortie='Erreur fatale : ' . $e->getMessage().'dans '. $e->getFile().' : '.$e->getLine();
}
// ...
```

Ceci est extrêmement utile si vous avez un grand site Web avec des dizaines de fichiers d’inclusion. Le message d’erreur vous indiquera exactement dans quel fichier rechercher et sur quelle ligne l’erreur s’est produite.
