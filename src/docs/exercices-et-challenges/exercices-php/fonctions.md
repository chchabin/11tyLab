---
layout : "layouts/docs.njk"
title : "Fonctions"
description : ""
group : "exercices-php"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T22:59:23+02:00"
draft : false
---
### 1 - les retours de fonction
Quels sont les retours attendus ?
{% bs-table %}

| **Signatures**                         |   |  |   | **Retour** |
|----------------------------------------|:-:|--|:-:|------------|
| function carre(int $val): array        | ☐ |  | ☐ | void       |
| function afficher(string $txt): void   | ☐ |  | ☐ | string     |
| function toString(array $tab): string  | ☐ |  | ☐ | int        |
| function afficher(string $txt=’’): int | ☐ |  | ☐ | double     |
| function convert(array $num): array    | ☐ |  | ☐ | array      |
{% endbs-table %}
### 2 - la déclaration des paramètres
La déclaration, des paramètres ou des valeurs de retour, est-elle correcte ?
{% bs-table %}

| **Signatures**                                 |  **Valide**  | **Pas Valide**  |
|------------------------------------------------|:------------:|:---------------:|
| function carre(int $val); int                  |      ☐       |        ☐        |
| function afficher(string $txt, int $num): void |      ☐       |        ☐        |
| function toString(array $tab, $tab2): string   |      ☐       |        ☐        |
| function afficher(string $txt): void           |      ☐       |        ☐        |
| function convert(string $num[]): string        |      ☐       |        ☐        |
| function produire(void): array                 |      ☐       |        ☐        |
{% endbs-table %}
### 3 - retour
Qu’allez vous obtenir à l’affichage ?
```php
$a = [1, 2, 3, 4, 5];
echo fun(a);

function  fun( array b ): string
{
    $ret="";
    $k =[3, 4, 7, 8,’\0’];
    for ($i = 0; $i < count($b); $i++)
    {
        $b[i] = $b[i] + $k[i] ;
        $ret += $b[i] + ", ";
    }
    return $ret;
}
```
☐ 3, 4, 7, 8, 5  
☐ 3, 4, 7, 8, 5, 1, 2, 3, 4, 5  
☐ 4, 6, 10, 12, 5  
☐ Erreur de compilation
### 4 - retour attendu
Qu’allez vous obtenir à l’affichage ?
```php
$a =[2, 21, 34, 46, 85, 88, 90];
echo ’Les nombres obtenus sont :’.fun(a);

 function fun(array b ): string
 {
     $ret="";
     $c = [1, 2, 3, 4, 5, 6, 7];
     for ($i = 0 ;$i < count($b) ;$i++)
     if ($b[i] % 2 == 0)
     {
         $c[i] = $b[i];
     }
     for ($i = 0 ;$i <= count($b);$i++)
     {
         $ret += $c[i] + ", ";
     }
     return $ret;
}
```
☐ 2, 21, 34, 4, 6, 46, 88, 90  
☐ 2, 4, 34, 46, 6, 88, 90  
☐ 2, 34, 46, 88, 90  
☐ Erreur de compilation
### 5 - Traduire les chiffres
Qu’allez vous obtenir à l’affichage ?
```php
$x = [80, 82, 65, 72, 83, 67];
     echo fun(x);

function fun(array b ): string
 {
     $ret="";
     for ($i = 5; $i >=0 ; $i--)
     {
         $ret +=chr($b[i])) + " ";
     }
    return $ret;
 }
```
☐ 67 83 72 65 82 80  
☐ P R A H S C  
☐ C S H A R P  
☐ 80 82 65 72 83 67
### 6 - Ne pas faire un somme
```php
$s = somme(3,somme(4,5));
     echo"La somme est de $s";
 }
 function somme(int $a, int $b ): int
 {
     $ret = $a + $b;
     if ($a == 5)
     {
         $ret = 1;
     }
     return $ret;
}
```
Qu’allez vous obtenir à l’affichage ?

☐ 8  
☐ 12  
☐ 4  
☐ Erreur de compilation  
