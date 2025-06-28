---
layout : "layouts/docs.njk"
title : "Tableaux Boucles Formulaires"
description : ""
group : "php-tp-introductif"
section : "tp-et-missions"
toc : true
date : "2022-09-21T15:34:06+02:00"
draft : false
---
{% callout%}
**Objectif**  
Créer un menu bilingue : francais, anglais.
{% endcallout%}

## Prérequis
{% callout warning%}
**Avant de commencer**
- Créez un répertoire TP02
- Copiez collez le fichier TPMenu.php du repertoire TP01
  {% endcallout %}

{% callout danger%}
**Attention**  
Vérifiez bien que vous êtes en UTF8.
{% endcallout %}

## Exercice 1 - Création du formulaire
[Dossier technique les formulaires]({% aref "docs/php/transmission/les-formulaires"%})
Modifiez votre code dans TPMenu.php de façon à obtenir le code suivant :

{% bt-collapse "I1" %}
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
        <?php
        for ($i= 0; $i < count($lang)-1; $i++) { ?>
        <li><a class="nav-link" href="#" ><?php echo ucfirst($lang[$i]);?></a></li>
        <?php } //fin de la boucle ?>
    </ul>
    <form class="d-flex">
        <select class="form-select" aria-label="Default select example" name="langue">
            <option selected><?= $lang[count($lang)-1];?></option>
            <option value="1">Français</option>
            <option value="2">Anglais</option>
        </select>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</nav>
```
{% endbt-collapse %}

{% callout success%}
#### Résultat
Lancez TPMenu.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/menuForm.PNG", "menuAccueil" %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quoi sert la balise `form` ?
2. Que fait la balise `select` ?
3. À quoi correspond option `selected` ?
4. Pourquoi c’est le mot langue qui est affiché en premier dans la sélection sur la barre de navigation ?
5. Si vous cliquez sur le bouton quel est le changement obtenu dans l’URL ?
6. Après avoir choisi Français, quel est le changement obtenu dans l’URL ?
7. Après avoir choisi Anglais, quel est le changement obtenu dans l’URL ?
8. En vous aidant de la balise option, justifiez sz la valeur respective de 1 ou 2, obtenus dans l’URL ?
   {% endquestions %}

## Exercice 2 - Récupération des valeurs du formulaire
[Dossier technique les formulaires]({% aref "docs/php/transmission/les-formulaires"%})

Vous allez modifier les attributs du formulaire pour qu’il puisse renvoyer quelque chose. Vous obtenez :

{% bt-collapse "I2" %}
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
        <?php
        for ($i= 0; $i < count($lang)-1; $i++) { ?>
        <li><a class="nav-link" href="#" ><?php echo ucfirst($lang[$i]);?></a></li>
        <?php } //fin de la boucle ?>
    </ul>
    <form class="d-flex" method="post" action="TPreponse.php">
        <select class="form-select" aria-label="Default select example" name="langue">
            <option selected><?= $lang[count($lang)-1];?></option>
            <option value="1">Français</option>
            <option value="2">Anglais</option>
        </select>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</nav>
```
{% endbt-collapse %}

Ensuite, créez une page `TPreponse.php`, dans laquelle vous mettrez le code :

{% bt-collapse "I3" %}
```php
<?php
var_dump($_REQUEST);
```
{% endbt-collapse %}

{% callout success%}
#### Résultat
Si vous sélectionnez Français, vous obtenez :
```php
array(1) { ["langue"]=> string(1) "1" } 
```
Si vous sélectionnez Anglais vous obtenez :
```php
array(1) { ["langue"]=> string(1) "2" }
```
{% endcallout %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Que fait `var_dump` ?
2. À quoi correspond `$_REQUEST` ?
3. En vous aidant de l’URL, dans quelle page est affichée la ligne suivante :
   ```php array(1) { ["langue"]=> string(1) "1" } ? ```
4. À quoi correspond l’attribut method ?
5. À quoi correspond l’attribut action ?
   {% endquestions %}

Modifiez votre code dans `TPreponse`.php pour obtenir :

{% bt-collapse "I4" %}
```php
<?php
var_dump($_REQUEST);
echo '<br>';
echo $_REQUEST['langue'];
```
{% endbt-collapse %}

{% callout success%}
#### Résultat
Si vous sélectionnez Anglais vous obtenez :
```php
array(1) { ["langue"]=> string(1) "2" } 
2
```
{% endcallout %}

[dossier technique les variables]({% aref "docs/php/programmer/les-variables"%})

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quel type de variable correspond `["langue"]` ?
2. À quel type de variable correspond `$_REQUEST` ?
3. Que signifie dans notre cas `=>` ?
   {% endquestions %}

## Exercice 3 - Utilisation des valeurs récupérées
Vous allez faire plusieurs changements, tout d’abord au niveau de la balise php, modifiez le code de la façon suivante :

{% bt-collapse "I5" %}
```php
<?php
$menu01 = ["accueil", "nos produits", "nous contacter", "plan d’accès", "qui sommes nous ?", "langage"];
$menu02 = ["home", "products", ""];
//test du $_REQUEST
if (!isset($_REQUEST)) {
    $lang = $menu01;
    $selected = $lang[count($lang) - 1];
} elseif ($_REQUEST['langue'] === "1") {
    $lang = $menu01;
    $selected = 'Français';
} else {
    $lang = $menu02;
    $selected = 'Anglais';
};
?>
```
{% endbt-collapse %}

Ensuite au niveau du formulaire, modifiez le code comme suit :

{% bt-collapse "I6" %}
```html
<form class="d-flex" method="post" action="TPMenu.php">
        <select class="form-select" aria-label="Default select example" name="langue">
            <option selected><?= $selected; ?></option>
            <option value="1">Français</option>
            <option value="2">Anglais</option>
        </select>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
```
{% endbt-collapse %}

{% callout success%}
#### Résultat
Si vous choisissez anglais, la barre de navigation est en anglais, si vous choisissez français, elle est en français.
{% endcallout %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Quel service rend l’instruction `isset` ?
2. Pourquoi dans le test `if` nous avons `"1"` et pas `1` ?
3. Quel est l’intérêt d’avoir mis une variable selected dans la balise option selected ?
   {% endquestions %}
