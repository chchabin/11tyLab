---
layout : "layouts/docs.njk"
title : "Affichage Declaration Tableaux"
description : ""
group : "php-tp-introductif"
section : "tp-et-missions"
toc : true
date : "2022-09-21T15:31:34+02:00"
draft : false
---
{% callout%}
**Objectif**  
Créer un menu bilingue : francais, anglais.
{% endcallout%}

## Prérequis
{% callout warning%}
**Avant de commencer**
- Créez un répertoire TP01
  {% endcallout %}

{% callout danger%}
**Attention**  
Vérifiez bien que vous êtes en UTF8.
{% endcallout %}

Copiez le code suivant dans un fichier que vous allez appeler TPMenu.php :

{% bt-collapse "I1" %}
```html
<?php
?>
<!doctype html>

<html lang="fr">

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>TP01</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
            <li  class="nav-item">
				<a class="nav-link" href="#presentation">Accueil</a>
		    </li>
      </ul>
   </nav>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"> </script>
    </body>

</html>
```
{% endbt-collapse %}
Il s’agit d’une page HTML, même si l’extension du nom est en php, qui utilise le framework css Bootstrap. Vous n’avez pas à vous occuper du design, bootstrap le fait pour vous !
{% callout success%}
#### Résultat
Lancez TPMenu.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images//exercices-et-challenges/tp/menuAccueil.PNG" "menuAccueil" "100%" "100%" %}

## Exercice 1 - Affichage en php
### a - Insertion de balises PHP
[dossier technique les variables]({% aref "docs/php/programmer/les-variables"%})

Nous voulons que les titres des menus puissent être définis par le programmeur. Pour ce faire, nous allons adapter une version anglaise.
Avant le doctype, insérez le code suivant :

{% bt-collapse "I10" %}
```php
<?php
//Déclaration de variables
$menu01="ACCUEIL";
$menu02="HOME";
?>
```
{% endbt-collapse %}

{%questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quoi correspondent menu01 et menu02 ?
2. Pourquoi y a-t-il un `$` devant leur nom ?
3. À quoi sert le `;` à la fin de chaque ligne ?
4. Pourquoi ACCUEIL et HOME sont entre `"` ?
5. Pourquoi le code `//Déclaration de variables`, n’apparaît pas à l’écran ?
6. Pourquoi lorsque l’on exécute le fichier, seul le code HTML de la page apparaît ?
7. À quoi correspond l’extension php ?
{% endquestions %}
### b - Paramétrons le lien accueil :
Remplacez le lien existant par celui ci-dessous et exécutez la page.

{% bt-collapse "I3" %}
```html
<a class="nav-link" href="#presentation"><?php echo $menu01;?></a>
```
{% endbt-collapse %}

{% callout success%}
#### Résultat de menu01
Lancez TPMenu.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/menuAccueil.PNG" "menuAccueil" "100%" "100%" %}

Remplacez `$menu01` par `$menu02`.

{% callout success%}
#### Résultat de menu02
Lancez TPMenu.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/menuHome.PNG" "menuHome" "100%" "100%" %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quoi servent les balises `<?php` et `?>` ?
2. À quoi sert l’instruction `echo` ?
3. Pourquoi à l’affichage, nous avons ACCUEIL et non pas $menu01 ?
4. Pourquoi à l’affichage, nous avons ACCUEIL et non pas "ACCUEIL" ?
5. Que se passe-t-il lorsqu’on change $menu01 en $menu02 ?
   {% endquestions %}
## Exercice 2 - Modification de la langue
### Prérequis :
Copiez le code de TPMenu.php dans un nouveau fichier TPMenuLangue.php. Changez le contenu de la balise `titre` comme l’exemple suivant

{% bt-collapse "I4" %}
```html
<title><?= basename(__File__)?></title>
```
{% endbt-collapse %}

{% callout success%}
#### Résultat de menu02
Lancez TPMenuLangue.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/menuTitle.PNG" "menuTitle" "100%" "100%" %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quoi correspond la balise `<?=` ? (utilisez l’aide [php](https://www.php.net/manual/fr/control-structures.alternative-syntax.php))
2. Que fait la fonction basename()
3. À quoi correspond la variable `__File__` ?
   {% endquestions %}
### b - Objectif :
[Dossier technique les tableaux]({% aref "docs/php/programmer/les-tableaux"%})

Changer la langue du menu avec une zone de liste. Voici le tableau des correspondances :
{% bs-table %}

| **Français**      | **Anglais** |
|-------------------|-------------|
| accueil           | home        |
| nos produits      | products    |
| nous contacter    | contacts us |
| plan d’accès      | find Us     |
| qui sommes-nous ? | about us    |
| langue            | language    |
{% endbs-table %}
Création au niveau de la déclaration de variables de 2 tableaux $menu01 et $menu02 à partir du tableau précédent :

{% bt-collapse "I5" %}
```php
<?php
//Déclaration de variables
$menu01 = ["accueil","nos produits","nous contacter","plan d’accès","qui sommes nous ?","langage"];
$menu02 = ["home","products",...à compléter....];
$lang=array();
?>
```
{% endbt-collapse %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Que signifie le caractère `[` ?
2. Comment peut-on déclarer un tableau vide ?
3. Pourquoi accueil et home sont entre " ? (retirez les doubles cotes pour voir ce qui se passe)
   {% endquestions %}

### c - Affichage des valeurs
[Dossier technique les boucles]({% aref "docs/php/programmer/les-boucles"%})

Nous allons saisir dynamiquement les valeurs en français.

1. À partir de la ligne 21 (si vous avez correctement suivi le TP), supprimer les balises <li> et les balises <a> qui sont à l’intérieur de la balise <ul>.
2. À cette place copiez le code suivant :
   {% bt-collapse "I6" %}
```php
<?php
for ($i= 0; $i < count($lang); $i++) { ?>
    <li><a class="nav-link" href="#" ><?php echo ucfirst($lang[$i]);?></a></li>
<?php } //fin de la boucle ?>
```
{% endbt-collapse %}
3. Au début de la page, remplacez ```php$lang=array();``` par ```php$lang=$menu01;```
   {% callout success%}
#### Résultat de menu en français
Lancez TPMenuLangue.php pour voir si tout fonctionne. Vous devez obtenir ceci :
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/menuFrancais.PNG", "menuFrancais" %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. À quoi sert `$i` ?
2. À quoi correspond `count($lang)` ?
3. À quoi correspond `$lang[$i]` ?
4. Combien de balises `<li>` seront affichées ?
5. Affichez le code source de votre navigateur. Le nombre de balises `<li>` est-il le même que celui du `P01Menu.php` ?
6. Quelle est la différence entre le contenu de ces deux balises ?
7. Ajoutez le code nécessaire pour supprimer cette différence.
8. Changez `$lang=$menu01;` en `$lang=$menu02;`, que se passe-t-il ?
9. À quoi sert cette instruction ?
10. Que fait la fonction `ucfirst()`?
{% endquestions %}
