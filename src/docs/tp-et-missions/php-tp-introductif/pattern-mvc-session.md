---
layout : "layouts/docs.njk"
title : "Pattern Mvc Session"
description : ""
group : "php-tp-introductif"
section : "tp-et-missions"
toc : true
date : "2022-09-21T15:32:32+02:00"
draft : false
---
{% callout%}
**Objectif**  
Comme la valeur de certaines variables disparait quand on change de page, PHP offre une solution pour conserver les valeurs entre les pages.
{% endcallout%}

## Prérequis
{% callout warning%}
**Avant de commencer**
- Créez un répertoire TP05
- Copiez-collez les fichiers du répertoire TP04
  {% endcallout %}

{% callout danger%}
**Attention**  
Vérifiez bien que vous êtes en UTF8.
{% endcallout %}

## Exercice 1 - Mettre le choix de la langue en session
La session permet de conserver des informations, même si une page n’est pas chargée. Prenons un exemple,
Si vous choisissez le menu ’Anglais’, la variable selected passera à la valeur ’Anglais’.
Mais si vous cliquez sur ’contact us’, le formulaire apparaitra en français.
Pourquoi ? Parce que la valeur de la variable selected disparait quand vous cliquez sur le lien.  
Pour éviter cela, il faut conserver la valeur de la variable en mémoire, grâce à la Session.
Pour ce faire, modifiez la page `index.php` de cette façon :

{% bt-collapse "I1" %}
```php
session_start();
//Gestion de la langue
if (!isset($_REQUEST['langue'])&&!isset($_SESSION['selected'])) {
    $lang = $menu01;
    $_SESSION['selected']  = $menu01['langage'];
} else {
    if (isset($_REQUEST['langue'])) {
        if ($_REQUEST['langue'] === "1") {
            $lang = $menu01;
            $_SESSION['selected'] = 'Français';
        } else {
            $lang = $menu02;
            $_SESSION['selected'] = 'Anglais';
        }
    }
}
include('v_nav.php');
```
{% endbt-collapse %}

Pour éviter d’avoir à tout changer, vous modifierez le contrôleur `c_controleur` de cette façon :

{% bt-collapse "I2" %}
```php
$action = $_REQUEST['action'];
$selected=isset($_SESSION)?$_SESSION['selected']:'Français';
```
{% endbt-collapse %}
{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Que signifie cette condition : `!isset($_REQUEST[’langue’])&&!isset($_SESSION[’selected’]` ?
2. À quoi correspond session_start ?
3. À quoi correspond session_destroy ?
4. Pourquoi il suffit d’avoir un seul session_start sans l’index et pas sur chacune des pages ?
5. Que se passe-t-il si on clique sur ’contact us’ ?
   {% endquestions %}

## Exercice 2 - Mettre le tableau de la langue en session
La modification est partielle comme vous l’avez vu en répondant à la dernière question. Nous allons donc modifier
notre code pour avoir une stabilité du menu.
{% bt-collapse "I3" %}
```php
//Gestion de la langue
if (!isset($_REQUEST['langue'])&&!isset($_SESSION['selected'])) {
    $_SESSION['lang'] = $menu01;
    $_SESSION['selected']  = $menu01['langage'];
} else {
    if (isset($_REQUEST['langue'])) {
        if ($_REQUEST['langue'] === "1") {
            $_SESSION['lang'] = $menu01;
            $_SESSION['selected'] = 'Français';
        } else {
            $_SESSION['lang'] = $menu02;
            $_SESSION['selected'] = 'Anglais';
        }
    }
}
$lang=$_SESSION['lang'];
include('v_nav.php');
```
{% endbt-collapse %}
{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Pourquoi avons-nous cette ligne : `$lang=$_SESSION[’lang’];` ?
2. Que se passe-t-il si `$_REQUEST[’langue’]` est vide et $_SESSION ne l’est pas ?
3. Rajoutez dans le menu un lien `déconnecter` qui supprime la Session
   {% endquestions %}
