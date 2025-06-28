---
layout : "layouts/docs.njk"
title : "Les Formulaires"
description : ""
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:23:32+02:00"
draft : false
---
## 1 - Notion de variable superglobale
Une **variable superglobale** est une variable PHP particulière créée par le langage et non par le développeur. Elle a comme particularité d’être disponible partout dans le code (d’où son nom). La plupart du temps, elle commence par le symbole $_. Une variable superglobale s’utilise comme un tableau associatif : elle associe des clés et des valeurs.

Par exemple :

- `$_GET`
- `$_POST`
- `$_REQUEST`
- `$_SESSION`

Les informations transmises entre pages PHP sont mémorisées dans des variables superglobales particulières que nous allons maintenant découvrir.

## 2 - Création d’un formulaire
On ajoute un formulaire à une page Web grâce à la balise HTML <form>.
```html
<!doctype html>
  <head lang="fr">
    <meta charset="utf-8"/>
    <title>Mon premier formulaire</title>
  </head>
  <body>
    <form action="login.php" method="post">
        <label for="inputLogin">Entrez votre login :</label>
        <input type="text" name="login" id="inputLogin" required>
        <label for="inputMdp">Entrez votre mot de passe :</label>
        <input type="password" name="password" id="inputMdp" required>
        <input type="submit" value="Envoyer">
    </form>
  </body>
</html>
```
La balise HTML `<form>` possède deux attributs importants :

- `action` permet de définir l’URL cible qui traitera les informations soumises par le formulaire, lorsque l’utilisateur le validera en cliquant sur le bouton de type `submit` (ici "Envoyer").
- method permet de définir le type de requête HTTP utilisée pour envoyer les données à l’URL d’action. Ici, ce sera une requête `POST`, le cas le plus fréquent avec les formulaires, mais il est possible d’avoir une requête `GET`.

À l’affichage, nous obtiendrons :

{% figure-abs "images/php/transmission/formulaire.png" "formulaire" %}

Sans css la mise en forme est un peu brute.
## 3 - GET ou POST ?
En règle générale, vous ne devez utiliser les formulaires GET quand rien ne change sur le serveur lorsque le formulaire est soumis : par exemple, lorsque vous demandez une liste de résultats de recherche.
Étant donné que les termes de recherche se trouvent dans l’URL, l’utilisateur peut ajouter la page de résultats de recherche à ses favoris et y revenir sans avoir à saisir à nouveau le terme de recherche.

Mais si, après avoir soumis le formulaire, un fichier est supprimé, ou une base de données est mise à jour, ou encore un enregistrement est inséré, vous devez utiliser POST.
La raison principale en est que si un utilisateur marque la page (ou appuie sur back sur son navigateur), il ne déclenchera pas à nouveau la soumission du formulaire et créera potentiellement un enregistrement en double. 
