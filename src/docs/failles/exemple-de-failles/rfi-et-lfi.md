---
layout : "layouts/docs.njk"
title : "Rfi Et Lfi"
description : ""
group : "exemple-de-failles"
section : "failles"
toc : true
date : "2022-10-16T09:42:17+02:00"
draft : false
---
## A - Les failles RFI & LFI
Les failles de type RFI *(Remote File Include)* et LFI *(Local File Include)* sont les conséquences d’une trop grande 
confiance envers ses utilisateurs. En fait, tout programmeur web pense avant tout à la rapidité et à la facilité de 
navigation pour un utilisateur lambda venant visiter le site. Il ne faut surtout pas oublier l’utilisateur **hacker** 
qui ne vient pas pour visiter le site, mais pour essayer d’en tirer profit.  
La fonction php `include()` permet d’inclure ce qui est contenu dans n’importe quel autre fichier dans une page web. 
Notre site est une illustration typique de ce type de fonction. En réalité, le site est construit à partir d’une seule 
page qui appelle dynamiquement les articles et en place le contenu en son centre. Dans notre cas, ce mécanisme est quelque 
peu masqué, mais de manière générale, il l’est beaucoup moins. On le remarque notamment avec des URLs de la forme **`?page=XXX`**. 
## B - Exemple
Voici le code de deux pages web écrites en PHP : `index.php` et `accueil.php`. Ceci est codé de sorte que n’importe 
quel utilisateur sollicitant l’index se verra afficher l’accueil. La qualité du code n’est pas prise en compte à cette étape. 
La fonction `include()` est utilisée, considérant l’extension future du site :
### 1 - La page index.php
```php
<?php
// index.php - Bases Hacking Index Page
if ($_GET[’url’] == "") header("Location: ./?url=accueil.php");  //S’il n’y a pas d’url spécifiée, afficher l’accueil
?>
<!doctype html>
<html lang="fr">
<head>
    <title>Faille de type PHP include</title>
</head>
<body>
    <h1>Bases Hacking</h1>
    <?php $url = $_GET[’url’];
    include($url); ?>
</body>
</html>
```
### 2 - la page accueil.php
```php
<!-- accueil.php - Bases Hacking accueil -->
<div style="text-align: center; font-weight: bold;">Bienvenue sur SeriousHacking !</div>
<br>
<br>
<div style="text-align: justify;">
    <p> Notre but avec ce site est d’introduire le grand public à l’état d’esprit des hackers. Pour ce, nous allons
        essayer de vous apprendre les techniques fondamentales du vrai hacking, de l’exploitation des failles classiques
        du web (xss, include, sql injection...), à l’injection de shellcode en mémoire (buffer overflow, ou BoF), en
        passant par la redirection des flux réseaux (ARP Poisoning) ou les méthodes de crackage des clés WEP qui
        sécurisent vos réseaux Wifi. Nous essaierons de vous faire pénétrer dans ce que Jon Erikson a dénommé "l’art de
        l’exploitation".
        <br>N’est pas un hacker qui sait "deface" un site web. Hacker, c’est tout d’abord avoir des bases solides en
        informatique généraliste et surtout savoir réfléchir, s’adapter à de nouvelles situations et innover. Bien sûr,
        pour combattre le hack, il faut tout simplement le connaître aussi bien que les acteurs du hack eux-mêmes.
        Pouvoir sécuriser un site, un serveur, un ordinateur personnel, c’est avant tout savoir quelles failles sont
        susceptibles d’exister et comment elles sont exploitables afin de les combler.
        <br>Nous espérons susciter des vocations vers ce monde malheureusement trop peu connu et diffusé qu’est la
        sécurité informatique.
        <br>Bon voyage en notre compagnie,</p>
</div>
<br>
<div style="text-align: center;">L’équipe de Bases Hacking</div><br>
```
## C - Hacking
Lorsque vous lancez la page `index.php`, vous devez voir apparaitre la page `accueil.php`. L’URL que vous obtenez doit ressembler à ça :
```html
http://localhost/inclusionsDynamiques/?url=accueil.php
```
Maintenant, modifiez l’URL de cette façon (en l’adaptant bien sûr à votre situation) :
```html
http://localhost/inclusionsDynamiques/?url=https://www.google.com/intl/xx-hacker/
```
Selon la structure de votre `php.ini` vous avez deux possibilités :
1. une page Google qui apparait
2. l’erreur : `Warning: include(): https:// wrapper is disabled in the server configuration by allow_url_include=0`
L’instruction `allow_url_include` dans le `php.ini` bloque maintenant par défaut cette faille
