---
layout : "layouts/docs.njk"
title : "Classe Static"
description : ""
group : "php"
section : "programmation-objet"
toc : true
date : "2022-09-02T18:43:38+02:00"
draft : false
---
## 1 - Les constantes de classe
Une constante de classe est une constante utilisable par tout script sans instanciation d’objet. Alors que pour une 
constante de script, on utilise la syntaxe suivante : 
{% callout %}
**Constante de script**  
```php
define("NOM_DE_CONSTANTE",valeur);
```
{% endcallout %}
Pour une constante de classe, vous la déclarez ainsi :
{% callout %}
**Constante de classe**
```php
const NOM_DE_CONSTANTE = valeur;
```
{% endcallout %}
Vous l’utilisez ainsi :
{% callout %}
**Constante de classe**
```php
NomDeLaClasse::NOM_DE_CONSTANTE[](#instanc)
```
{% endcallout %}
{% bt-collapse "notes1" %}
```php
class Constante
{
            const PII = 3.14;
            ...
}
// Appel de la constante
echo Constante::PII; // Affiche 3.14
```
{% endbt-collapse  %}

## 2 - Méthode statique, variable statique
Le fait de déclarer des propriétés ou des méthodes comme statiques vous permet d’y accéder sans avoir besoin d’instancier 
la classe. On ne peut accéder à une propriété déclarée comme statique avec l’objet instancié d’une classe 
(bien que ce soit possible pour une méthode statique). 

Comme les méthodes statiques peuvent être appelées sans qu’une instance d’objet n’ait été créée, la pseudo-variable `$this` 
n’est pas disponible dans les méthodes déclarées comme statiques.

On ne peut pas accéder à des propriétés statiques à travers l’objet en utilisant l’opérateur `->`.
## 3 - Les opérateurs `self` et `::`
### a - appel à l’extérieur de la classe
L’exemple est volontairement en dehors des bonnes pratiques de la création de classe. Pour une constante appelée en dehors de la classe, la déclaration est la suivante :
{% bt-collapse "notes2" %}
```php
class Visite
{
    public static float $prixVisite = 10;
    public static function maMethode{
        echo 'Le prix de la visite est de';
     }
    ...
}
// syntaxe d’appel de la constante
echo Visite::$prixVisite; // Notez le $ devant le nom de la variable
                          // affiche 10
// syntaxe d’appel de la méthode
echo "Visite::maMethode() Visite::$prixVisite";  // Affiche Le prix de la visite est de 10        
```
{% endbt-collapse %}
{% callout %}
**Appel en dehors de la classe.**
L’opérateur `::` doit être utilisé lorsqu’une propriété ou une fonction statique est appelée en dehors de la classe.
{% endcallout %}
### b - appel à l’intérieur de la classe
Le mot `self` et l’opérateur de résolution permettent d’accéder aux éléments static de la classe elle-même. 

`self` n’est pas précédé par `$` car `self` ne représente pas une variable, mais la classe elle-même. `$this` fait 
référence à une variable spécifique de sorte qu’elle ait un préfixe `$`.

{% bt-collapse "notes3" %}
```php
class Visite
{
    private static float $prixVisite = 10;
    private static function maVisite{
             return self:: $prixVisite *2
    }
    public static function maMethode{
        echo "Le prix de la visite est de self::maVisite()";
     }
    ...
}

// syntaxe d’appel de la méthode
echo Visite::maMethode()  // Affiche Le prix de la visite est de 20
```
{% endbt-collapse %}
{% callout %}
**Appel à l’intérieur de la classe.**  
L’opérateur self doit être utilisé lorsqu’une propriété ou une fonction statique est appelée à l’intérieur de la classe.
{% endcallout %}
