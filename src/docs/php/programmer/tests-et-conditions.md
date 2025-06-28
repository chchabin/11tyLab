---
layout : "layouts/docs.njk"
title : "Tests Et Conditions"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-08-20T11:55:32+02:00"
draft : false
---
## 1 - L’instruction `if`
Dans un programme, on souhaite fréquemment agir en fonction du résultat d’une condition. Les traitements à effectuer 
peuvent être différents selon que la condition soit vraie ou fausse. En PHP, une alternative s’exprime grâce à l’instruction if éventuellement associée à une instruction else. Elle permet de conditionner des traitements en fonction de certains critères. On parle parfois de branchement logique. Pendant l’exécution, les instructions exécutées seront différentes selon la valeur de la condition. Un seul des deux blocs d’instructions sera pris en compte.
```php
<?php
if($nb1 > $nb2) {
    // sera exécuté si $nb1 > $nb2 
else {
    // sera exécuté si $nb1 <= $nb2 
}
?>
```
Il est possible de placer une instruction if à l’intérieur d’un bloc d’une autre instruction `if`. 
C’est ce qu’on appelle **imbriquer des conditions**. Attention à toujours bien refléter l’imbrication des blocs en 
décalant les instructions associées dans le code source : c’est ce qu’on appelle **l’indentation**.

Si la seule opération réalisée dans un bloc else est un `if`, on peut également employer l’instruction `elseif`, 
concise.
```php
<?php
if($nb1 > $nb2) {
    // sera exécuté si $nb1 > $nb2 
elseif ($nb2 > $nb1) {
    // sera exécuté si  $nb1 < $nb2 
}
else {
    // sera exécuté si $nb1 = $nb2 
}
?>
```
Une autre syntaxe possible de l’instruction if est la suivante :
```php
<?php
if($nb1 > $nb2) :
    // sera exécuté si $nb1 > $nb2 
elseif ($nb2 > $nb1) :
    // sera exécuté si  $nb1 < $nb2 
else :
    // sera exécuté si $nb1 = $nb2 
endif;
?>
```
Cette syntaxe, que l’on retrouve dans le code source de certains CMS, peut être pratique pour repérer plus facilement 
la fin des conditions (`endif`; au lieu de `}` ) lorsque le code PHP englobe de grandes portions de code HTML.
## 2 - La notion de condition
L’instruction if est associée à une condition. C’est une expression (une combinaison de variables, de valeurs et d’opérateurs)
dont l’évaluation donne la valeur, vraie (`true`) ou la valeur, faux (`false`). On parle d’expression booléenne. 

Toute expression renvoyant une valeur booléenne peut être utilisée comme condition avec un `if`. C’est le cas des expressions utilisant des opérateurs de comparaison, dont voici la liste.
{% bs-table %}

| Opérateur | Signification                               |
|-----------|---------------------------------------------|
| ==        | Égal à                                      |
| !=        | Différent de                                |
| <         | Inférieur strictement                       |
| <=        | Inférieur ou égal                           |
| >         | Supérieur strictement                       |
| >=        | Supérieur ou égal                           |
| ===       | Égal à et de même type                      |
| !==       | true : si Différent de, ou pas de même type |
{% endbs-table %}
{% callout danger%}
### Attention
La plupart des langages de programmation utilisent le symbole = pour symboliser l’affectation et le symbole == pour l’égalité. Attention aux confusions avec le sens mathématique de l’opérateur =.
{% endcallout %}
{% callout danger%}
### Utilisez le double-égal : `== `
N’oubliez pas de taper le double-égal (`==`). Une erreur courante parmi les programmeurs PHP débutants est de taper une condition comme celle-ci avec un seul signe égal :
```php
if($roll = 6)  // Missing equals sign!
```
Cette condition utilise l’opérateur d’affectation (`=`) au lieu de l’opérateur égal (`==`). Par conséquent, au lieu de comparer la valeur de $roll au nombre 6, il définira en fait la valeur de $roll à 6.  
Pour aggraver les choses, l’instruction if utilisera cette opération d’affectation comme une condition qu’elle considérera comme vraie, de sorte que le code conditionnel dans l’instruction if sera toujours exécuté, quelle que soit la valeur d’origine de $roll
{% endcallout %}
## 3 - Les opérateurs logiques
On peut définir des conditions plus complexes ("La valeur de X est entre 100 et 200") grâce aux opérateurs logiques. Ceux du langage PHP sont les suivants :

- `&&` (Et),
- `||` (Ou),
- `!` (Non),
- il existe aussi `and` et `or`.

Si and est utilisé avec &&, && sera prioritaire. De même que || sera prioritaire sur or. Il existe aussi l’opérateur xor correspondant au Ou exclusif, c’est-à-dire qu’il vérifie qu’une des deux conditions qu’il sépare est vraie, mais pas les deux à la fois.
## 4 - L’instruction `switch`
L’instruction switch déclenche l’exécution d’un bloc d’instructions parmi plusieurs possibles. Seul le bloc correspondant à la valeur testée sera pris en compte.
```php
<?php
switch ($nombre) {
    case 1:
        ...
        break; // break force la sortie du switch
    case 2:
        ...
        break;
    case 3:
        ...
        break;
    default:
        ...
        break;
?>
```
Il n’y a pas de limite au nombre de cas possibles. Le mot-clé `default`, à placer en fin de switch, est optionnel. Il sert souvent à gérer les cas d’erreurs.

Les instructions `break`; dans les blocs `case` sont indispensables pour éviter de passer d’un bloc à un autre.
## 4 - L'opérateur ternaire `?:`
La syntaxe est la suivante :
```php
$action = ($a > $b) ? -1 : 1;
```
La syntaxe ici semble étrange si vous ne l'avez pas rencontrée auparavant. Vous savez réellement ce qui se passe ici, mais vous ne l'avez pas vu exprimé de cette manière. Le code ici est une instruction if abrégée (ou ternaire), et son exécution est identique à celle-ci :
```php
<?php
if($a > $b) {
  return -1;
else {
  return 1;
}
?>
```
{% callout %}
### Définition
L'expression `(expr1) ? (expr2) : (expr3)` est évaluée à expr2 si expr1 est évaluée à TRUE, et expr3 si expr1 est évaluée à FALSE.
Il est possible d'omettre la partie centrale de l'opérateur ternaire. L'expression `expr1 ?: expr3` retourne expr1 si expr1
vaut TRUE, et expr3 sinon.
{% endcallout %}
{% callout warning%}
### Empilage
Il est recommandé de ne pas "empiler" les expressions ternaires. Le comportement de PHP lors de l'utilisation de plus d'un opérateur ternaire dans une seule instruction n'est pas évident comparé à d'autres langages. En effet, antérieur à PHP 8.0.0, les expressions ternaires étaient évaluées de gauche à droite, au lieu de droite à gauche comme la plupart des autres langages de programmation.
{% endcallout %}
## 5 - L'opérateur de fusion Null `??`
La syntaxe est la suivante :
```php
$action = $a ?? 'Cette variable n'est pas instanciée';
```
C'est une fonctionnalité intéressante introduite dans PHP 7. C'est un nom très déroutant, mais ce n'est en fait qu'un raccourci pour cela :
```php
<?php
if(isset($a)) {
  return $a;
else {
  return 'Cette variable n'est pas instanciée';
}
?>
```
Sur le côté gauche de l'opérateur `??` se trouve la variable en cours de vérification, et sur la droite se trouve la sortie qui
est utilisée si elle n'est pas définie. Dans le cas ci-dessus, si la variable `$a` est définie, il affichera le contenu
de la variable. Si la variable n'est pas définie, affichera `variable not set` et, mieux encore, elle fonctionnera également
avec des tableaux.
{% callout %}
### Définition
L'expression `(expr1) ?? (expr2)` retourne expr2 si expr1 est NULL, et expr1 dans les autres cas. En particulier, cet opérateur n'émet pas de notice si la partie gauche n'existe pas, exactement comme `isset()`. Ceci est particulièrement utile pour les clés des tableaux.
{% endcallout %}
{% callout warning%}
### Empilage
L'opérateur de fusion null permet une imbrication simple
```php
<?php
$foo = null;
$bar = null;
$baz = 1;
$qux = 2;
echo $foo ?? $bar ?? $baz ?? $qux; // sortie 1
```
{% endcallout %}
