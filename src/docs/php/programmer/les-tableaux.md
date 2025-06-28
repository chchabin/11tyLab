---
layout : "layouts/docs.njk"
title : "Les Tableaux"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-08-20T13:22:56+02:00"
draft : false
---
## 1 - Tableaux simples
Un tableau est un type spécial de variable qui contient plusieurs valeurs. Si vous considérez une variable comme une boîte contenant une valeur, un tableau peut être considéré comme une boîte avec des compartiments où chaque compartiment est capable de stocker une valeur individuelle.
Pour créer un tableau en PHP, utilisez des crochets `[` et `]` contenant les valeurs que vous souhaitez stocker, séparées par des virgules.
```php
$myArray = ['one', 2, '3'];
```
{% callout %}
### Le mot-clé array
Les tableaux en PHP peuvent également être définis à l’aide du mot - clé array. Le code suivant est équivalent, à la notation entre crochets ci-dessus :
{% endcallout %}
```php
$myArray = array('one', 2, '3');
```
La notation entre crochets a été introduite dans PHP 5.4 et est préférée par les développeurs PHP, car les crochets sont plus facilement visibles dans les structures de contrôle comme les instructions if et les boucles while.

Ce code crée un tableau appelé $myArray qui contient trois valeurs : 'one', 2 et '3'. Tout comme une variable ordinaire, chaque espace d’un tableau peut contenir n’importe quel type de valeur. Dans ce cas, les premier et troisième espaces contiennent des chaînes, tandis que le second contient un nombre

On obtient la taille (nombre d’éléments) d’un tableau grâce à l’instruction PHP `count`.
On accède aux éléments d’un tableau en utilisant leur indice, un entier qui commence à 0 et non à 1.
```php
<?php
$langages = array('C#', 'PHP', 'HTML');
$nbLangages = count($langages);
echo "Je connais $nbLangages langages de programmation";
?>// Affiche Je connais 3 langages de programmation
<ul>
  <li><?php echo $langages[0];?></li>// Affiche C#
  <li><?php echo $langages[1];?></li>// Affiche PHP
  <li><?php echo $langages[2];?></li>// Affiche HTML
</ul>
```
### Ajouter des valeurs à un tableau
Chaque valeur stockée dans un tableau est appelée un élément. Vous pouvez utiliser une clé entre crochets pour ajouter de nouveaux éléments ou attribuer de nouvelles valeurs aux éléments de tableau existants :
```php
$langages[1]='JavaScript';// Assigne javascript à la deuxième colonne du tableau
```
Vous pouvez également ajouter des éléments à la fin d’un tableau en utilisant l’opérateur d’affectation comme d’habitude, mais en laissant vides les crochets qui suivent le nom de la variable
```php
$langages[]='HTML';
echo $langages[3];// Affiche HTML
```
{% callout warning%}
### Débogage
L'instruction PHP `var_dump()` permet d'afficher l'ensemble du contenu du tableau.
{% endcallout %}
Elle est utile pour déboguer un script.
```php
<p>Affichage direct du tableau :
<?php var_dump($langages);?></p> 
```
## 2 - Tableaux associatifs
Bien que les nombres soient le choix le plus courant pour les indices de tableau, il existe une autre possibilité. Vous pouvez également utiliser des chaînes comme index pour créer ce qu’on appelle un tableau associatif. On l’appelle ainsi, car il associe des valeurs à des indices significatifs. Un tableau associatif, parfois appelé dictionnaire.
```php
<?php
$client = array(
    'Nom' => 'Annie ZETTE',
    'Ville' => 'Lyon',
    'Courriel' => 'annie@zette.fr'
);// Notation abrégée pour créer le tableau
$nbChamps = count($client);
echo "Le tableau client contient $nbChamps champs";// Affiche Le tableau client contient 3 champs
?>

<ul>
  <li><?php echo $client["Nom"];?></li>// Affiche Annie ZETTE
  <li><?php echo $client["Ville"];?></li>// Affiche Lyon
  <li><?php echo $client["Courriel"];?></li>// Affiche annie@zette.fr
</ul>
```
## 3 - Tableaux multidimensionnels
Sachant que la valeur d’un tableau peut-être, n’importe quoi, elle peut aussi être un autre tableau. Ceci permet la création de tableaux multidimensionnels.

Il y a un tableau à l’intérieur d’un tableau. Dans ce cas, la variable clé correspond à un second tableau contenant les clés

Recréons, le tableau client pour qu’il permette d’enregistrer plusieurs clients :
```php
<?php
$client = array(
    0=>array('Nom' => 'Annie ZETTE',
              'Ville' => 'Lyon',
              'Courriel' => 'annie.zette@libre.fr'),
    1=>array('Nom' => 'Jean Bon',
              'Ville' => 'Bayonne',
              'Courriel' => 'jean.bon@libre.fr'),
);// Notation abrégée pour créer un tableau multidimensionnel
$nbChamps = count($client);
$nbChamps2 = count($client[0]);
echo "Le tableau client contient $nbChamps champs";// Affiche Le tableau client contient 2 champs
echo "Le tableau client[0] contient $nbChamps2 champs";// Affiche Le tableau client[0] contient 3 champs
?>

<ul>
  <li><?php echo $client[0]['Nom'];?></li>// Affiche Annie ZETTE
  <li><?php echo $client[0]['Ville'];?></li>// Affiche Lyon
  <li><?php echo $client[0]['Courriel'];?></li>// Affiche annie.zette@libre.fr
</ul>
```
Vous noterez que maintenant pour atteindre les mêmes informations que dans un tableau simple, il faut spécifier le numéro d’enregistrement, ici 0, du client dans le tableau $client
### Ajouter des valeurs à un tableau
Comme dans l’exemple, il y a un tableau dans un tableau, l’accès aux données nécessite l’emploi de 2 jeux de crochets.
Ainsi, pour afficher le nom du client :

- 0, on écrira :```php $client[0]['Nom']```
- 1, on écrira : ```php $client[1]['Nom']```

Pour ajouter un client, il faut laissant vides les crochets correspondant au numéro d'enregistrement, car il s’incrémentera automatiquement. Nous aurons alors :
```php
$client[]['Nom']='Jacques Sionne';
$client[]['Ville']='Dijon';
$client[]['Courriel']='Jacques.Sionne@libre.fr';
```
