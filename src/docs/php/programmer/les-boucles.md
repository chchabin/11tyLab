---
layout : "layouts/docs.njk"
title : "Les Boucles"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-08-21T07:22:59+02:00"
draft : false
---
## 1 - Définition
Une structure répétitive, également appelée structure itérative ou encore boucle, permet de répéter plusieurs fois l’exécution d’une ou plusieurs instructions. Le nombre de répétitions peut :

- être connu à l’avance.
- dépendre de l’évaluation d’une condition.

À chaque répétition, les instructions contenues dans la boucle sont exécutées. C’est ce qu’on appelle un tour de boucle ou encore une itération.
## 2 - La boucle `while`
La boucle `while` permet de répéter des instructions tant qu’une condition est vérifiée.
```php
<?php
$i = 0;
while($i < 10) {
    ...
    $i++;
}
?>
```
Avant chaque tour de boucle, la condition, associée au `while`, est évaluée : Si elle est vraie, les instructions du bloc `while` sont exécutées. Ensuite, la ligne du `while` est à nouveau exécutée et la condition vérifiée. Si elle est fausse, les instructions du bloc ne sont pas exécutées et le programme continue juste après le bloc `while`.
{% callout danger%}
### Attention
Il faut absolument que la condition de la boucle `while` puisse devenir fausse. Dans le cas contraire, on obtient une boucle infinie qui ne s’arrête jamais.
{% endcallout %}
## 3 - La boucle `for`
La boucle for permet de répéter un bloc d’instructions un nombre défini de fois.
```php
<?php
for($i = 0; $i < 10; $i++) {
  ...
}
?>
```
Voici son fonctionnement :

- L’initialisation `$i = 0` se produit une seule fois, au début de l’exécution.
- La condition `$i < 10` évaluée avant chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée.
- L’étape d’incrémentation $i++ est réalisée après chaque tour de boucle.

Dans notre exemple la boucle fera `10` tours et `$i` prendra les valeurs allant de 0 à 9.

Les boucles for peuvent être combinées avec d’autres instructions telles que des instructions `if` pour effectuer des tâches spécifiques à chaque itération.
La variable utilisée dans l’initialisation, la condition et l’étape est appelée le compteur de la boucle. Par convention, elle est souvent nommée `i`.
## 4 - La boucle `foreach`
La boucle `foreach` est principalement utilisée pour parcourir un tableau (associatif ou non).
```php
<?php
$langages = array('C#', 'PHP', 'HTML');
foreach($langages as $monlangage) {
    echo"$monlangage<br>";
}
?>
```
{% callout danger%}
### Attention
Ne pas confondre la variable qui représente le tableau (ici `$langages`, écrite au pluriel) et la variable qui représente l’élément courant dans la boucle (ici `$monlangage`).
{% endcallout%}
Le parcours d’un tableau associatif avec une boucle foreach permet d’obtenir la liste des clés et des valeurs associées.
```php
<?php
$client = array(
    "Nom" => "Annie ZETTE",
    "Ville" => "Lyon",
    "Courriel" => "annie@zette.fr"
);
?>

<ul>
<?php foreach($client as $cle => $valeur) {?>
`    `<li><?php echo $cle .  ' : ' .  $valeur;?></li>
<?php}?>
</ul>
```
