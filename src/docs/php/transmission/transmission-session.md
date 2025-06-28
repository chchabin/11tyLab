---
layout : "layouts/docs.njk"
title : "Transmission Session"
description : "$_SESSION et la transmission via la session"
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:24:46+02:00"
draft : false
---
De par sa nature, HTTP est **sans état**. Vous vous connectez à un site Web, le serveur vous donne un fichier.
Comme vous l’avez déjà vu, vous pouvez envoyer des données du navigateur au serveur à l’aide de variables `GET` et de formulaires HTML. 
Cependant, les informations sont fournies sur une seule page et ne sont disponibles que lorsque le navigateur fournit `GET` (ou `POST`) des variables.

Pour un système de connexion, l’utilisateur devra envoyer une fois son nom d’utilisateur et son mot de passe au serveur, 
puis conserver un état « connecté » à chaque demande de page suivante. Bien que ces informations puissent être envoyées via 
des paramètres d’URL ou des formulaires HTML, elles devraient être fournies à chaque page.  

Du point de vue de l’utilisateur, saisir son nom d’utilisateur et son mot de passe chaque fois qu’il visite une page différente prend du temps et est inefficace.
Deux technologies, les cookies et les sessions, peuvent être utilisées pour stocker des informations sur un utilisateur particulier entre les pages.

Les cookies et les sessions sont deux de ces technologies mystérieuses qui sont presque toujours considérées comme plus intimidantes et 
complexes qu’elles ne le sont en réalité. Dans ce chapitre, nous n’allons traiter que les `sessions`, 
je vais démystifier ces mythes en expliquant dans un langage simple ce qu’ils sont, comment elles fonctionnent et ce qu’elles peuvent faire pour vous.

Les sessions ont été développées en PHP comme solution à ce problème. Au lieu de stocker toutes nos données (éventuellement volumineuses) 
sous forme de cookies dans le navigateur Web de nos visiteurs, les sessions nous permettent de stocker les données sur notre serveur Web. 
La seule valeur stockée dans le navigateur est un cookie unique contenant l’**ID de session** de l’utilisateur, 
une longue chaîne de lettres et de chiffres qui sert à identifier cet utilisateur de manière unique pendant la durée de 
sa visite sur notre site. C’est une variable pour laquelle PHP surveille les requêtes de page suivantes et utilise pour 
charger les données stockées associées à cette session.
## 1 - Création d’une session
La création d’une nouvelle session s’effectue en appelant la fonction `session_start`.
```php
session_start();
// ...
```
{% callout danger %}
**Attention**  
Cette fonction doit obligatoirement être appelée au tout début de la page, avant tout code HTML.
{% endcallout %}
## 2 - Définition de variables de session
Une fois la session créée, on peut y ajouter de nouvelles variables identifiées par leur nom.
```php
$_SESSION['prenom'] = 'Baptiste';
$_SESSION['age'] = 39;
```
## 3 - Utilisation de variables de session
Dans n’importe quelle page où la fonction session_start a été appelée, on peut utiliser `$_SESSION` pour accéder aux valeurs 
des variables de session. Il est prudent de vérifier au préalable que la variable existe, grâce à la fonction `isset`.
```php
if(isset($_SESSION['age'] && isset($_SESSION['prenom']) {
    echo'Je te connais toujours ! Tu es ' . $_SESSION['prenom'] . ' et tu as ' . $_SESSION['age'] . ' ans.';
else{
    echo"Je ne te connais pas...";
}
```
Cette verification doit se faire à chaque page. Dans la cadre du pattern MVC, elle se fera dans le contrôleur.
## 4- Destruction d’une session
### a - Supprimer une session
En fin de visite, la destruction explicite d’une session se fait grâce à la fonction `session_destroy()`. 
Après l’appel, la variable `$_SESSION` n’est plus utilisable.
{% callout %}
**Rappel**  
Cette destruction est automatique au bout d’un certain temps d’inactivité.
{% endcallout %}
### b - Vider une session
Il est possible de supprimer toutes les données associées à une session, il s’agit de la fonction `session_unset()`
## 5 - Utilité des sessions
Un cas d’utilisation, très fréquent des sessions, est l’authentification d’un utilisateur par login/mot de passe. 
En utilisant une session pour mémoriser ces paramètres, on peut "reconnaître" l’utilisateur sur toutes les pages du site, mais aussi restreindre certaines zones aux utilisateurs authentifiés : si la variable de session associée au login existe, on affiche le contenu, sinon on affiche une erreur.
