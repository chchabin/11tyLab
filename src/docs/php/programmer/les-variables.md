---
layout : "layouts/docs.njk"
title : "Les Variables"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-09-21T15:38:19+02:00"
draft : false
---

## 1 - Définition d’une variable
Une variable joue en PHP le même rôle que dans tout autre langage : stocker une information. Une variable PHP est défini par un nom qui commence obligatoirement par le symbole $.
```php
<?php $message = 'Bonjour tout le monde !';
echo $message;?>// Affiche : Bonjour tout le monde !
```
{% callout %}
#### Typage dynamique
On remarque au passage que la variable `$message` n’a pas un type explicite comme `string` ou `int`. PHP n’impose pas au
programmeur de définir les types des variables.
{% endcallout %}
Les différents types dans PHP
{% bs-table %}

| **Type**  | **Exemple**                                               |
|-----------|-----------------------------------------------------------|
| bool      | true                                                      |
| ﬂoat      | 3.2                                                       |
| int       | 32                                                        |
| string    | "Bonjour"                                                 |
| array     | $tab=(1,2,3)                                              |
| object    | $obj = new stdClass;                                      |
| callable  | call\_user\_func (’my\_callback\_function’);              |
| iterable  | function foo ( iterable $iterable=[])                     |
| ressource | https://www.php.net/manual/fr/language.types.resource.php |
| NULL      | $var = NULL ;                                             |
{% endbs-table %}
Après sa définition, une variable PHP est utilisable à n’importe quel endroit de la page, même dans un autre bloc de code.
```php
<?php $message = 'Bonjour tout le monde !';?>
<h1>Un titre</h1>
<h2>Un sous-titre</h2>
<p><?php echo $message;?></p>
```
## 2 - Séquence d’échappement
Les séquences d’échappement permettent un grand nombre de possibilités comme le montre la
[documentation](https://www.php.net/manual/fr/regexp.reference.escape.php) PHP. Dans le cas des chaines de caractère,
elle permet d’afficher des caractères qui servent à délimiter les chaines.
{% bs-table %}

| séquences | Résultat                                                   |
|-----------|------------------------------------------------------------|
| \n        | fait un retour chariot                                     |
| \t        | fait une tabulation                                        |
| \’        | permet de créer un caractère contenant la valeur du quote. |
| \\"       | affiche un guillemet.                                      |
{% endbs-table %}
Exemple :
```php
<p>
<?php echo 'c'est le jour J';?>// Affiche : c
</p>
<p><?php echo 'c\'est le jour J';?></p>// Affiche : c’est le jour J
```
## 3 - Concaténations
### i - Les opérateurs `.` et `.=`
Il y a deux opérateurs de chaînes de caractères string. Le premier est l’opérateur de concaténation (`.`), qui retourne
la concaténation de ses deux arguments. Le second est l’opérateur d’affectation concaténant (`.=`).
```php
<?php 
$a = 'Bonjour ';
$b = $a . 'tout le monde !'; // $b contient "Bonjour tout le monde !"
$a = 'Bonjour ';
$a .= 'tout le monde !'; // $a contient "Bonjour tout le monde !"
```
Comme le typage est dynamique, la concaténation fonctionnera également quand la variable contiendra des types scalaires
### ii - L’utilisation des `"`
La différence entre guillemets simples et doubles apparaît lorsqu’on inclut une variable dans une chaîne de caractères.
```php
<?php $age = 39;
<p><?php echo "Vous avez $age ans";?></p>// Affiche : Vous avez 39 ans
<p><?php echo 'Vous avez $age ans';?></p>// Affiche : Vous avez $age ans
```

Lorsqu’on utilise des guillemets doubles pour définir une chaîne de caractères, les variables sont interprétées (remplacées par leur valeur). Ce n’est pas le cas avec des guillemets simples.
## 4 - Opérations sur les nombres
### a - Les opérateurs de calcul
```php
$testVariable = 1 + 1;  // assigne la valeur 2
$testVariable = 1 - 1;  // assigne la valeur 0
$testVariable = 2 * 2;  // assigne la valeur 4
$testVariable = 2 / 2;  // assigne la valeur 1
$testVariable = 5 % 3;  // assigne la valeur 2 le reste de la division
```
### b - Les opérateurs d’affectation combinés
{% bs-table %}

| **Opérateur** | **Description**                 | **Exemple** | **Equivalence** |
|---------------|---------------------------------|-------------|-----------------|
| +=            | Addition puis affectation       | $x += $y    | $x = $x + $y    |
| -=            | Soustraction puis affectation   | $x -= $y    | $x = $x – $y    |
| \*=           | Multiplication puis affectation | $x \*= $y   | $x = $x \* $y   |
| \*\*=         | Puissance puis affectation      | $x\*\*=2    | $x=($x)²        |
| /=            | Division puis affectation       | $x /= $y    | $x = $x / $y    |
| %=            | Modulo puis affectation         | $x %= $y    | $x = $x % $y    |
| .=            | Concaténation puis affectation  | $x .= $y    | $x = $x . $y    |
{% endbs-table %}
### c - Les opérateurs d’incrémentation et décrémentation
{% bs-table %}

| **Exemple** | **Nom**         | **Résultat**                          |
|-------------|-----------------|---------------------------------------|
| ++$x        | Pre-incrémente  | Incrémente $x de 1, puis retourne $x. |
| $x++        | Post-incrémente | Retourne $x, puis incrémente $x de 1. |
| --$x        | Pré-décrémente  | Décrémente $x de 1, puis retourne $x. |
| $x--        | Post-décrémente | Retourne $x, puis décrémente $x de 1. |
{% endbs-table %}
## 8 - Résumé
```php
$var1 = 'PHP';          // assigne la valeur 'PHP' à $var1
$var2 = 5;              // assigne la valeur 5 à $var2
$var3 = $var2 + 1;      // assigne la valeur 6 à $var3
$var2 = $var1;          // assigne la valeur 'PHP' à $var2
$var3++;                // assigne la valeur 7 à $var3
echo $var1;             // affiche 'PHP'
echo $var2;             // affiche 'PHP'
echo $var3;             // affiche '7'
echo $var1 . ' rules!'; // affiche 'PHP rules!'
echo '$var1 rules!';    // affiche '$var1 rules!'
echo "$var1 rules!"     // affiche 'PHP rules!'
```
## 9 - L'opérateur de fusion nul `?`
Il s'agit d'une nouvelle fonctionnalité de PHP. La déclaration des types de paramètre et de valeur de retour peut désormais
être marquée en tant que nullable en préfixant le nom du type avec un point d'interrogation. Ceci signifie que le type
spécifié aussi bien que null peuvent être passés comme argument, ou retournés en tant que valeur, respectivement.  
Par exemple, avec la déclaration de fonction suivante, le second appel était invalide, puisque null n’est pas un entier :
```php
function fonc01(int $a) {
    var_dump($a);
    }
    
fonc01(100); // int(100)
fonc01(null); // TypeError: Argument 1 passed to fonc01() must be of the type integer, null given
```
PHP 7.1 introduit les types nullables : en positionnant un `?` au début du nom d’un type, comme `?int`, on indique que la valeur null est acceptée :
```php
function fonc01(?int $a) {
    var_dump($a);
    }

fonc01(100); // int(100)
fonc01(null); // NULL
```
Cette notion de types nullables s’étend bien sûr à la valeur de retour :
```php
function fonc02(?int $a, ?int $b) : ?int {
    if ($a === null || $b === null) {
        return null;
    }
    return $a + $b;
}

var_dump( fonc02(10, 20) ); // int(30)
var_dump( fonc02(10, null) ); // NULL
```
## 10 - Les constantes globales ou de classe

### a - Conventions avec les constantes
Par convention, les constantes sont écrites en majuscules, les mots séparés par des traits de soulignement (underscore). Cette convention est presque universelle dans tous les langages de programmation.

Exemple de noms de constante

- LISTE_CATEGORIES
- EDITE_CATEGORIES

Comme le conseillent les bonnes pratiques de sécurité, votre fichier `index.php` devrait se trouver dans le répertoire Public, qui est un sous répertoire de la racine de votre site.
Il devient fastidieux, d’écrire à chaque fois `dirname(__DIR__)`, PHP nous laisse la possibilité de créer nos propres constantes avec l’instruction `define`.

### b - `define`
Il est possible de définir avec define() des constantes avec des noms réservés ou même invalide, où leur valeur peuvent (seulement) être récupérée.

Ainsi, nous pouvons définir une constante `ROOT` qui nous évitera de saisir à chaque fois la fonction `dirname(__DIR__)`.
Cette instruction aura la forme suivante :
```php
<?php 
define('ROOT', dirname(__DIR__));
```
Nous pourrons l’utiliser facilement avec une instruction `include` :
```php
<?php 
include ROOT.'monfichier.php';
```

### c - `const`
Permet de définir des constantes par classes qui restent identiques et non modifiables.  
La visibilité par défaut des constantes de classe est public.

La déclaration peut être faite selon l'exemple suivant :
```php
class MyClass
{
  const CONSTANT = 'valeur constante';

  function showConstant() {
    echo  self::CONSTANT . "\n";
  }
}
```
L'appel sera :
```php
echo MyClass::CONSTANT . "\n";
```
