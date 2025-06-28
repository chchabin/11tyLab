---
layout : "layouts/docs.njk"
title : "Idor"
description : "(Insecure Direct Object Reference)"
group : "exemple-de-failles"
section : "failles"
toc : true
date : "2022-10-16T09:42:36+02:00"
draft : false
---
## A - Les failles de Références directes d’objets
Passons maintenant à une faille facile de compréhension, mais pour le moins dangereuse. Labellisée par les instituts CWE/SANS comme *Improper Access Control* ou *Insecure Direct Object Reference*, ce type de vulnérabilité affecte les applications qui ne contrôlent pas suffisamment les ressources que peuvent accéder les utilisateurs, partant souvent du principe que ceux-ci ne dévieront pas de la navigation normale.

Dans la pratique, ce type de problème intervient lors d’accès à des ressources référencées ou indexées. Notamment, le profil de l’utilisateur "1", l’accès au panier "654", etc.

Étant très facile à exploiter, La référence indirecte d’objet a toujours occupé la troisième ou la quatrième place sur la liste des dix premières vulnérabilités Web de l’OWASP (Open Web Application Security Project).
## B - Exemple
Voici un exemple volontairement simplifié pour mettre en évidence cette faille. Ici, vous allez créer 3 pages :
`index.php`, `controller.php` et `result.php`.
### 1 - La page index.php
```html
<!doctype html>
<html lang="fr">
<head><title>Suivi de votre commande</title></head>
<body>
<form method="get" action="controller.php">
    <label for="idCommande">Référence de votre commande : </label>
    <input type="text" maxlength="5" size="5" id="idCommande" name="idCommande">
</form>
</body>
</html>
```
### 2 - La page controller.php
```php
<?php
   $num=$_REQUEST[’idCommande’];
   if ($num==’12345’ || $num==’23456’){
   include ’result.php’;
}
else{
    echo ’Numéro incorrecte’;
    include ’index.php’;
}
```
### 3 - La page result.php
```html
<!doctype html>
<html lang="fr">
<head><title>Suivi de votre commande</title></head>
<body>
    <p>Référence de votre commande : <?php echo $num ?></p>
    <p>Détails de votre commande : [...]</p>
</body>
</html>
```
## C - Hacking
Lorsque vous lancez la page `index.php` l’application vous demande de saisir une commande. Seuls 2 numéros sont valables : 12345, 23456.

Saisissez 1234 et vous obtiendrez une erreur. Mais regardez l’URL, elle correspond à :
```html
http://localhost:63342/security/IDOR/controller.php?idCommande=1234
```
Maintenant, dans l’URL, rajoutez le nombre 5 à idCommande. Vous devez obtenir la page de la commande.

Il est temps de s’intéresser à ce qui ne va pas. Deux choses :

- d’une part, la référence à la commande est directe (référence d’identification de la commande). Autrement dit, si nous trouvons le numéro d’une commande qui n’est pas à nous, nous pouvons quand même afficher la page de détail.
- d’autre part, l’étendue des numéros est trop petite. En effet, un identifiant à 5 chiffres laisse seulement une centaine de milliers de possibilités, ce qui est très faible comparé à la puissance de calcul informatique actuelle. L’idée serait donc ici de tester tous les numéros afin de trouver ceux qui sont valides.

Vous l’avez compris, ce genre de danger est présent lors d’accès à des ressources sans avoir besoin de s’authentifier, auquel cas la clé doit être suffisamment difficile à deviner ou brute forcer, ainsi que dans tous les cas où des variables d’identification d’objet, sont passées à l’utilisateur puis réutilisées, auquel cas, il faut bien vérifier que l’utilisateur a le droit de consulter l’objet.
