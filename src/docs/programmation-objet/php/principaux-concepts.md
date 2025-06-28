---
layout : "layouts/docs.njk"
title : "Principaux Concepts"
description : ""
group : "php"
section : "programmation-objet"
toc : true
date : "2022-09-02T18:43:38+02:00"
draft : false
---
{% callout warning%}
**Bonnes pratiques**  
- Maintenir les données privées.
- Initialiser toujours les données.
- Ne fournissez de méthodes d'accès que si cela est nécessaire.
- Utilisez les conventions standards pour nommer classes et méthodes. Un nom de classe doit comporter un substantif : *Client, ClientPrivilegie*... Les méthodes doivent avoir un nom signifiant, commencer par une lettre minuscule ; 
les méthodes d’accès doivent commencer par **get** (*getNom()*) et les méthodes d’altération par **set** (*setNom()*).
- Ne faites jouer à la méthode main que le rôle d’instanciation d’objets.
{% endcallout %}
## 1 - Constructeur
{% callout %}
**Classe : Définition**
le constructeur est une méthode spécifique dont le rôle est de construire un objet, le plus souvent en initialisant ses attributs.
{% endcallout %}
Le constructeur sans argument et les constructeurs paramétriques sont **OPTIONNELS**. De toute façon, un constructeur par défaut est fourni par C# en tenant compte des initialisations explicites et en fournissant des initialisations implicites pour tous les autres variables d’instance.

En C# ou en Java par exemple, la surcharge de fonctions permet d’avoir plusieurs constructeurs pour un objet, mais en PHP cela n’est pas possible. Une fonction ne peut pas avoir plus qu’une seule définition.
{% bt-collapse "notes1" %}
```php
class Exemple {

        // les attributs - généralement privés
            private float $x;
            private int $y;
        
        // constructeur
            public function __construct(float $x, int $y = 0) {
                $this->x = $x;
                $this->y = $y;
            }
        // les méthodes
            public function f1(int a, int b):bool
                {
                     $flag = true;
                    // ...........code de f1
                     return $flag;
                 }
            private function p2()
                 {
                    // ...........code de p2
                 }
}
```
{% endbt-collapse %}
Une autre façon d’écrire le constructeur pour qu’il prenne en compte des surcharges serait :
{% bt-collapse "notes1b" %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de f1
             return $flag;
         }
    private function p2()
         {
            // ...........code de p2
         }
}
```
{% endbt-collapse %}
L’utilisation d’un constructeur se fait au moment de l’instanciation de l’objet (opérateur `new`), en passant en paramètres les futures valeurs des attributs de l’objet créé (s’il y en a).
{% bt-collapse "notes2" %}
```php
Exemple $ex1; // --déclaration d’un nouvel objet
$ex1 = new Exemple();// --instanciation de cet objet

// --autre forme plus compacte
Exemple $ex2 = new Exemple(20,30);
```
{% endbt-collapse  %}

## 2 - Autoréférence : le mot-clé `this`
{% callout %}
**Définition**  
À l’intérieur d’une méthode, le mot-clé this permet d’accéder à l’instance (l’objet) sur lequel la méthode est appelée
{% endcallout %}
Aucune variable ne peut être utilisée sans être une variable d’instance ou une variable locale déclarée dans ce bloc ou un bloc supérieur.

Lorsqu’il y a conflit de nom entre une variable locale et une variable d’instance, la variable locale l’emporte et masque 
la variable d’instance. Pour contourner le masquage et utiliser la variable d’instance, il faut utiliser le mot clef `this` 
qui désigne l’instance courante :
```php
$this->variable_dinstance
```
{% bt-collapse "notes3" %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de f1
             return $flag;
         }
    private function p2()
         {
            $y=3; // la variable locale a le même nom que la variable d’instance
            $this->y = $y; // la variable d’instance passe de la valeur 4 à la valeur 3
         }
}
```
{% endbt-collapse %}

## 3 - Accesseurs
{% callout %}
**Définition**  
Un accesseur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en lecture
{% endcallout %}
En anglais, ils commencent par le mot clé `get`.

Voilà pourquoi on les appelle aussi des getters
{% bt-collapse notes4 %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de f1
             return $flag;
         }
    private function p2()
         {
            $y=3;
            $this->y = $y;
         }
     public function getY( )
            {
                return $y; // un accesseur de la variable y
            }
}
```
{% endbt-collapse %}
## 4 - Mutateurs
{% callout %}
**Définition**  
Un mutateur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en écriture
{% endcallout %}
En anglais, ils commencent par le mot clé `set`.

Voilà pourquoi on les appelle aussi des setters
{% bt-collapse notes5 %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de F1
             return $flag;
         }
    private function p2()
         {
            $y=3;
            $this->y = $y;
         }
     public function getY( )
            {
                return $y;
            }
    public setX(flot $x ):float
        {
            $this->x = $x; // un mutateur de la variable x
        }
}
```
{% endbt-collapse  %}
## 5 - la méthode magique `__toString()`
Cette méthode doit renvoyer une chaîne de caractères et est automatiquement sollicitée par `print($objet);` ou par `echo $objet;`.
{% bt-collapse notes6 %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de F1
             return $flag;
         }
    private function p2()
         {
            $y=3;
            $this->y = $y;
         }
     public function __toString()
        {
            return "x : $this->x ; y : $this->y";
        }
}
```
{% endbt-collapse  %}
L’appel se fait de cette façon :
{% bt-collapse notes7 %}
```php
Exemple $ex1; // --déclaration d’un nouvel objet
$ex1 = new Exemple(1,30);// --instanciation de cet objet

echo $ex1  // Affiche x : 1 ; y : 30
```
{% endbt-collapse %}

## 6 - les méthodes magiques `__get()`, `__set()`
Les deux méthodes magiques ne fonctionnent que dans les contextes objets. Ces méthodes magiques ne seront pas lancées en contexte statique.

Attention au double `$$` !
{% callout %}
**Syntaxe**  
```php
public function __set($var, $valeur) { $this->$var = $valeur; }
public function __get($var) { return $this->$var; }
```
{% endcallout %}
{% bt-collapse notes8 %}
```php
class Exemple {

// les attributs - généralement privés
    private float $x;
    private int $y;

// constructeur
    public function __construct() {
        // compte le nombre d’arguments
        $ctp = func_num_args();
        // Récupère les arguments
        $args = func_get_args();

        if ($cpt==2){
            $this->x = $x;
            $this->y = $y;
         };
    }
// les méthodes
    public function f1(int a, int b):bool
        {
             $flag = true;
            // ...........code de F1
             return $flag;
         }
    private function p2()
         {
            $y=3;
            $this->y = $y;
         }
     public function __get($var)
        {
            return $this->$var;
        }
    public function __set($var, $valeur)
        {
            $this->$var = $valeur;
        }
     public function __toString()
        {
            return "x : $this->x ; y : $this->y";
        }
}
```
{% endbt-collapse %}
L’appel se fait de cette façon :
{% bt-collapse notes9 %}
```php
Exemple $ex1; // --déclaration d’un nouvel objet
$ex1 = new Exemple();// --instanciation de cet objet

$ex1->y=3;
echo $ex1->y  // Affiche 3
```
{% endbt-collapse %}
