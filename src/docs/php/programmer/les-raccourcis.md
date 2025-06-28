---
layout : "layouts/docs.njk"
title : "Les Raccourcis"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-08-21T08:05:51+02:00"
draft : false
---
## 1 - Les opérateurs d'incrémentation et décrémentation
Ces opérateurs ont déjà été vus dans le chapitre consacré aux variables, ici, nous rappelons leur grande utilité.
{% bs-table %}

| Exemple | Nom             | Résultat                              |
|---------|-----------------|---------------------------------------|
| ++$x    | Pre-incrémente  | Incrémente $x de 1, puis retourne $x. |
| $x++    | Post-incrémente | Retourne $x, puis incrémente $x de 1. |
| --$x    | Pré-décrémente  | Décrémente $x de 1, puis retourne $x. |
| $x--    | Post-décrémente | Retourne $x, puis décrémente $x de 1. |
{% endbs-table %}
## 2 - Les opérateurs d'affectation combinés
Ces opérateurs ont déjà été vus dans le chapitre consacré aux variables, ici, nous rappelons leur grande utilité.
{% bs-table %}

| Opérateur | Description                     | Exemple   | Equivalence   |
|-----------|---------------------------------|-----------|---------------|
| +=        | Addition puis affectation       | $x += $y  | $x = $x + $y  |
| -=        | Soustraction puis affectation   | $x -= $y  | $x = $x – $y  |
| \*=       | Multiplication puis affectation | $x \*= $y | $x = $x \* $y |
| \*\*=     | Puissance puis affectation      | $x\*\*=2  | $x=($x)²      |
| /=        | Division puis affectation       | $x /= $y  | $x = $x / $y  |
| %=        | Modulo puis affectation         | $x %= $y  | $x = $x % $y  |
| .=        | Concaténation puis affectation  | $x .= $y  | $x = $x . $y  |
{% endbs-table %}
## 3 - L'opérateur ternaire
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
## 4 - L'opérateur de fusion Null
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
## 5 - Le code abrégé
Le mixte balise HTML, code PHP peut être confus à lire. PHP propose des raccourcis intéressants.
{% callout %}
### Utilisation de code abrégé
Dans les versions de PHP antérieures à la version 5.4, cette notation abrégée nécessitait l'activation d'un paramètre PHP assez rare, elle était donc déconseillée pour des raisons de compatibilité. L'utilisation de la notation abrégée peut avoir entraîné l'arrêt de votre code lors du passage d'un serveur sur lequel il était activé à un autre qui ne le faisait pas.  
À partir de PHP 5.4 (ainsi n'importe quelle version que vous allez rencontrer de façon réaliste ces jours-ci), l'`echo` abrégé fonctionne quels que soient les paramètres PHP, vous pouvez ainsi l'utiliser en toute sécurité sans craindre qu'il ne fonctionne sur tous les serveurs.
{% endcallout %}
Un autre outil intéressant proposé par PHP est un moyen abrégé d'appeler la commande - echo qui, est fréquemment utilisée. Nos déclarations echo ressemblent à ceci :
```php
<?php echo $variable;?>
```
Au lieu de cela, vous pouvez utiliser ceci :
```php
<?= $variable;?>
```
Cela fait exactement la même chose. `<?=` signifie echo et vous donne un moyen légèrement plus court d'imprimer les variables.
{% callout warning%}
### Les limites de l'abrégé d'echo
Il y a cependant une limitation à cela : si vous utilisez `<?=` , vous pouvez seulement afficher ; vous ne pouvez pas inclure d'instructions `if`, d'instructions `for`, etc., bien que vous puissiez utiliser la concaténation, et elle peut être suivie d'un appel de fonction.
{% endcallout %}
## 6 - Les syntaxes alternatives
Le mixte balise HTML, code PHP peut être confus à lire. PHP propose des raccourcis intéressants.
{% callout %}
### Syntaxe alternative
PHP propose une autre manière de rassembler des instructions à l'intérieur d'un bloc, pour les fonctions de contrôle `if`, `while`, `for`, `foreach` et `switch`.
Dans chaque cas, le principe est de remplacer l'accolade d'ouverture par deux points (`:`) et l'accolade de fermeture par, respectivement, `endif`;, `endwhile`;, `endfor`;, `endforeach`;, ou `endswitch`;.
{% endcallout %}
Il est courant d'utiliser une boucle foreach dans un modèle PHP pour afficher tour à tour chaque élément d'un tableau. Voici à quoi cela pourrait ressembler pour un tableau $tab :
```php
<?php
foreach($tab as $uneLigne ) {?>

    ⋮ HTML  code pour traiter chaque ligne
    
<?php } ?>
```
Avec ce mélange de code PHP pour décrire la boucle foreach et de code HTML pour l'afficher, le code semble plutôt désordonné. Pour cette raison, il est courant d'utiliser une autre manière d'écrire la boucle lorsqu'elle est utilisée dans une vue
```php
<?php
foreach($tab as $uneLigne ):?>

    ⋮ HTML  code pour traiter chaque ligne
    
<?php endforeach;?>
```
Les deux morceaux de code sont fonctionnellement identiques, mais ce dernier semble plus convivial lorsqu'il est mélangé avec du code HTML.
Nous aurions la même chose avec l'utilisation d'un if ou d'un while ou toute autre instruction concernée. 
