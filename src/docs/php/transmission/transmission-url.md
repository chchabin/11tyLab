---
layout : "layouts/docs.njk"
title : "Transmission Url"
description : ""
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:24:19+02:00"
draft : false
---
## 1 - Créer une URL
Une URL représente l’adresse d’une page web et commence par http:// ou https://. Lorsqu’on fait un lien vers une autre page, il est possible d’ajouter des paramètres sous la forme `bonjour.php?nom=Dupont&prenom=Jean` qui seront transmis à la page.

{% figure-abs "images/php/transmission/url_get_parameters.png" "url_get_parameters.png" %}

Ici, l’URL accède d’abord au repertoire monsite du serveur puis au fichier bonjour.php. Dans ce fichier, sont envoyées 2 variables :

- nom avec la valeur dupont
- prenom avec la valeur jean
{% callout %}
**Ajout de paramètres à l’URL**  
On peut transmettre autant de paramètres que l’on veut dans une URL, la seule limite étant de ne pas dépasser une longueur totale de 256 caractères. Si par exemple, vous voulez ajouter la variable id avec une valeur de 3, on écrira :
```html
https://www.monsite.com/bonjour.php?nom=mauve&prenom=guy&id=3
```
{% endcallout %}
{% callout %}
**Avec quoi créer l’URL**  
2 éléments HTML permettent d’envoyer une URL :

- ancre avec la propriété href : [a](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)
- formulaire avec la propriété action : [form](https://developer.mozilla.org/fr/docs/Web/HTML/Element/form)
{% endcallout %}
## 2 - Récupérer des données de l’URL
Dans ce cas, la page bonjour.php recevra ces paramètres dans la variable superglobale `$_GET` et défini automatiquement par PHP :

- `$_GET['nom']` aura pour valeur Dupont ;
- `$_GET['prenom']` aura pour valeur Jean.

Le code de la page `bonjour.php` ressemblera à ceci :
```php
<?php
$nom=$_GET['nom'];
$prenom=$_GET['prenom'];
echo 'Bonjour'.$prenon.$nom
```


Avant d’utiliser un paramètre transmis dans l’URL, on peut utiliser la fonction `isset` qui permet de vérifier si ce paramètre est défini ou non. La modification pour $nom sera ceci :
```php
if(isset($_GET['nom']) {
    // Utilisation de $_GET['nom']
    $nom=$_GET['nom'];
}
 else {
    $nom=null;
}
```
## 3 - Problème de sécurité
Mais attention ! Il y a une **faille de sécurité cachée** dans ce code ! Bien que PHP soit un langage de programmation facile 
à apprendre, il s’avère qu’il est également particulièrement facile d’introduire des problèmes de sécurité dans les sites Web utilisant PHP, 
si vous ne savez pas quelles précautions prendre. 

Avant d’aller plus loin avec le langage, je veux m’assurer que vous êtes en mesure de repérer et de résoudre ce problème de sécurité particulier, car c’est probablement le plus courant sur le Web aujourd’hui.  

Le problème de sécurité, **ici**, provient du fait que le script `bonjour.php` génère une page contenant du contenu sous le contrôle de l’utilisateur - 
dans ce cas, les variables `$nom` et `$prenom`. Bien que les variables `$nom` et `$prenom` reçoivent normalement une valeur de la chaîne de requête URL
dans le lien, un utilisateur malveillant pourrait modifier l’URL pour envoyer une valeur différente pour la variable `nom`. 

En modifiant l’URL pour insérer une balise `<strong>` avant le nom et une balise `<strong>` après le nom. 
Vous notez que le nom de la page est maintenant en gras, comme indiqué dans l’image suivante : 
(Vous remarquerez peut-être que certains navigateurs convertiront automatiquement les caractères < et > en séquences d’échappement d’URL (%3C et %3E respectivement), mais de toute façon, PHP recevra la même valeur.) 
 
Bonjour jean **Dupont**
 
Pour remédier à ce problème, il faut également prendre une précaution supplémentaire pour éviter certaines failles de sécurité. 
## 4 -cacher des informations `hidden`
La balise HTML `input type="hidden"` permet de stocker des informations dans la page, sans que celles-ci soient visibles pour l’utilisateur.

Cette balise peut être très utile lorsque le programmeur veut transmettre des informations à l’URL sns avoir à les afficher pour utilisateur. 
Par exemple, le formulaire suivant envoie en plus du nom et du prénom le nom du formulaire 
```html
<!doctype html>

  <head lang="fr">
    <meta charset="utf-8"/>
    <title>Mon premier formulaire</title>
  </head>
  <body>
    <form action="login.php" method="post">
        <input type="hidden" name="info" value="formulaire1" required>
        <label for="inputLogin">Entrez votre login :</label>
        <input type="text" name="login" id="inputLogin" required>
        <label for="inputMdp">Entrez votre mot de passe :</label>
        <input type="password" name="password" id="inputMdp" required>
        <input type="submit" value="Envoyer">
    </form>
  </body>
</html>
```
À l’affichage, nous obtiendrons la même chose que précédemment :

{% figure-abs "images/php/transmission/formulaire.png" "formulaire" %}

L’URL lorsque le formulaire est saisi sera :
```html
https://www.monsite.com/bonjour.php?nom=mauve&prenom=guy&info=formulaire1
```
