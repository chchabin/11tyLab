---
layout : "layouts/docs.njk"
title : "Transmission Secure"
description : ""
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:25:08+02:00"
draft : false
---

Qu’elles soient issues de l’URL (`$_GET`) ou d’un formulaire (`$_POST`), il faut garder à l’esprit que les données reçues 
par une page PHP sont saisies par l’utilisateur, ce qui peut constituer une menace pour la sécurité du site. 
Rien n’empêche un utilisateur malveillant de saisir des données de manière à provoquer un comportement inattendu du site Web.
C’est ce que l’on appelle **l’injection de code**.

Pour se prémunir contre ces risques, il faut appliquer un principe très important : **ne jamais faire confiance aux données de l’utilisateur**. 
Un développeur Web qui suppose que ses utilisateurs saisiront uniquement des informations appropriées et n’effectue aucun contrôle 
sur ces saisies prend le risque d’exposer son site à des attaques très faciles à réaliser.

Il existe deux principaux types d’injection de code :

- L’injection JavaScript dans une page HTML, appelé parfois [XSS](https://fr.wikipedia.org/wiki/Cross-site_scripting) (*Cross-Site Scripting*).
- L’injection SQL dans une base de données, dont nous parlerons dans un prochain chapitre.

Pour réaliser une injection de code JavaScript, un utilisateur va saisir un morceau de code JavaScript au lieu d’une valeur "normale".
```html
<script type="text/javascript">alert('Miaou !')</script> 
```
Si la valeur saisie est directement affichée par la page PHP, le résultat HTML généré contiendra un script JavaScript imprévu qui sera exécuté par le navigateur client. Cela peut potentiellement causer de gros problèmes de sécurité.
### 1 - `htmlspecialchars`
Un premier niveau de sécurité, qui doit devenir un réflexe, consiste à "nettoyer" toute donnée externe avant de l’utiliser 
pour générer une page Web. Il existe plusieurs fonctions PHP qui limitent fortement le risque d’injection de code JavaScript. 
Le choix le plus fréquent est la fonction `htmlspecialchars`. Cette fonction remplace certains caractères spéciaux par des entités HTML. 
Par exemple, le caractère `<` est remplacé par `&lt;`. Cela permet de désactiver l’exécution du code contenu dans des balises `<script>`.

On peut intégrer l’appel à `htmlspecialchars` dans une fonction escape.
```php
<?php
/**
 * Nettoie une valeur insérée dans une page HTML
 * Doit être utilisée à chaque insertion de données dynamique dans une page HTML
 * Permet d’éviter les problèmes d’exécution de code indésirable (XSS)
 * @param string $valeur Valeur à nettoyer
 * @return string Valeur nettoyée
 */
function escape($valeur)
{
    // Convertit les caractères spéciaux en entités HTML
    return htmlspecialchars($valeur, ENT_QUOTES, 'UTF-8', false);
}
?>
```
Il faut toujours penser à utiliser cette fonction lors de l’insertion de données externes dans une page Web.
```php
$prenom = $_GET['prenom']
$nom = $_GET['nom']
echo'Bienvenue '. escape($prenom) . ' ' . escape($nom) . ' !';
```
### 2 - `addslashes`
Une deuxième solution est de supprimer les caractères [échappables](php031ProgPhp_Variables.html#echapp). La fonction [addslahes](https://www.php.net/manual/fr/function.addslashes.php) permet d’échapper automatiquement tous les caractères échappable :

- guillemets simples (’)
- guillemets doubles (")
- antislash (\)
- NUL (l’octet NUL)

Exemple :
```php
<p><?php echo addslashes('c'est le jour J');?></p>// Affiche : c’est le jour J

`                                                  `// Equivalent à 'c\'est le jour J'
```
