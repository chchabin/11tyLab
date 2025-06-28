---
layout : "layouts/docs.njk"
title : "Xss"
description : "(Cross Site Scripting) Non Permanente"
group : "exemple-de-failles"
section : "failles"
toc : true
date : "2022-10-16T09:43:18+02:00"
draft : false
---
## A - Les failles XSS
Le Cross Site Scripting, ou XSS, est la faille la plus présente sur le web, et d’assez loin. Elle est désignée par quantité de noms, parmi lesquels "faille des livres d’or", tout simplement, car ceux-ci ont permis une généralisation de ces vulnérabilités faille. La faille de type XSS se caractérise par une injection possible de code arbitraire dans le code HTML qui sera rendu au navigateur. Autrement dit, l’attaquant va être capable de modifier un aspect du site ou d’injecter des scripts dans ce que la victime va ensuite voir à l’écran. Il existe plusieurs types de failles XSS :

- les failles non permanentes,
- les failles permanentes.

**Les failles non permanentes** résultent de l’utilisation de données fournies par l’utilisateur dans un script quelconque, sans les modifier. Typiquement, une simulation en ligne ou une page de statistiques. Ainsi, si ces données ne sont pas modifiées, on peut ajouter du "script dans le script" qui sera lui-même exécuté.
Ceci dit, en modifiant les données qui doivent être traitées, le résultat du XSS ne va modifier que la page que peut afficher l’utilisateur. Cela peut paraître bénin, mais ça l’est beaucoup moins quand l’attaquant utilise le Social Engineering et diffuse des pages piégées de cette façon. Ce genre de vulnérabilités est souvent utilisé pour lancer des campagnes de spam afin de ternir l’image d’un site (redirections, modifications d’apparence) ou de voler des informations (phishing).

**Les failles permanentes**, permettent des exploitations plus en profondeur. C’est la faille des livres d’or, présente dans les forums, les formulaires d’inscription. La différence essentielle est que les données entrées sont stockées dans des bases de données et sont renvoyées dès qu’un utilisateur les demande.
## B - Exemple
Voici un exemple volontairement simplifié pour mettre en évidence cette faille. Ici, vous allez créer 3 pages : 
`index.php`, `inscription.php` et `liste.php`.
### 1 - La page index.php
La page `menu.php` contient le code permettant de réceptionner les valeurs par le formulaire de la page `index.html` 
afin d’inclure la page demandée :
```html
<?php if (session_status() === PHP_SESSION_NONE) session_start(); ?>
<!-- index.php - Bases Hacking Mailing List -->
<!doctype html>
<html lang="fr">
<head>
    <title>Faille de type Cross Site Scripting</title>
</head>
<body>
<h1>Bases Hacking Mailing List !</h1>
<br>
<ul>
    <li>Inscrivez-vous en un clic :<br>
        <form method="POST" action="inscription.php">
            <label for="adresse">E-mail : </label>
            <input type="text" id="adresse" name="adresse" placeholder="Votre mail ici"><br>
            <input type="radio" id="anonyme" name="anonyme">
            <label for="anonyme">Apparition sur la liste des inscrits ?</label>
            <br><br>
            <input type="submit" name="envoi" value="Inscrivez-vous !">
        </form>
    </li>
    <li>
        Vous pouvez consulter la liste des personnes déjà inscrites <a href="liste.php">ici</a>
    </li>
</ul>
</body>
</html>
```
### 2 - La page inscription.php
```php
<?php
//inscription.php - Inscription d'une adresse mail
if (session_status() === PHP_SESSION_NONE) session_start();
$email = $_REQUEST['adresse'];
$anonyme = isset($_REQUEST['anonyme']) ? 0 : 1;
$list = $_SESSION['list'] ?? array();
for ($i = 0; $i < strlen($email); $i++) {
    if ($email[$i] == '@' && $i < strlen($email) - 4) {
        for ($j = $i + 1; $j < strlen($email) - 2; $j++)
            if ($email[$j] == '.' && ($j >= strlen($email) - 5 || $j <= strlen($email) - 3)) {
                $valid = true;
                $i = $j = strlen($email);
            }
    }
}
if (isset($valid)) {
    $list[] = array(
        'email' => $email,
        'anonyme' => $anonyme
    );
    $_SESSION['list'] = $list;
    include 'liste.php';
} else include 'index.php';
```
### 3 - La page liste.php
```html
<?php if (session_status() === PHP_SESSION_NONE) session_start(); ?>
<!-- liste.php - Liste des inscrits -->
<!doctype html>
<html lang="fr">
<head>
    <title>Faille de type Cross Site Scripting</title>
</head>
<body>
<h1>Bases Hacking Mailing List !</h1>
<br>
<p>Voici la liste des inscrits non-anonymes : </p>
<ul>
    <?php
    $list = $_SESSION['list'];
    $nb = 0;
    foreach ($list as $item) :?>
        <li><?php if ($item['anonyme'] == 0) {
                echo $item['email'];
                $nb++;
            } ?></li>
    <?php endforeach; ?>
</ul>
<?php if ($nb = 0) echo 'Aucun inscrit non-anonyme pour le moment' ?>
<p>Pour retourner au formulaire d'inscription, c'est <a href="index.php">ici</a></p>
</body>
</html>
```
## C - Hacking
### 1 - Insertion de javascript
Nous n’allons pas expliquer le code en détail, car il n’y a aucun intérêt à cela : il demande la saisie d’une adresse mail, 
il l’enregistre si elle possède bien un ’`@`’, un '`.`' et une extension entre 2 et 4 caractères. Ensuite, la page `liste.php` 
ressort les adresses de la base de données. Nous préférons vous montrer le but de ces pages. 
Tout d’abord, voici ce qui se passe quand tout se passe bien :

La liste affiche une liste d’addresses email.

Nous allons maintenant profiter de la faille qu’offre ce site et nous allons injecter le script
```html
<script>alert("S3ri0usH4cK WuZ H3r3")</script>@h4ck3d.com
```
Comme l’on pouvait s’y attendre, le script est exécuté tel quel et tout utilisateur voulant voir la liste des utilisateurs de la liste d’email verra le petit code que nous avons injecté.
### 2 - Vol de session
Le vol de session est une des techniques les plus simples :

1. Ouvrez votre application et saisir quelques emails.
2. Faire un clic droit sur le navigateur et allez sur inspecter.
3. Allez sur `stockage` puis `cookies`
4. sur la fenêtre à côté, récupérez le numéro de **PHPSESSID**.
5. Ouvrez votre application dans Chrome.
6. Faire un clic droit sur le navigateur et allez sur inspecter.
7. Allez sur `Application` puis `cookies`
8. Remplacez le numéro de **PHPSESSID** par celui de firefox

Normalement, vous retrouvez les informations que vous avez saisies. Cet exemple est rudimentaire, mais sans protection, il est possible d’attaquer des applications pou connaitre le mot de passe ou s’insérer dans une session.
