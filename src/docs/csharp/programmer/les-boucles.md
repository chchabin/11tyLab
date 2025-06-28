---
layout : "layouts/docs.njk"
title : "Les Boucles"
description : ""
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-02T11:35:54+02:00"
draft : false
---
{% callout %}
**Info**
Pour faciliter la compréhension du langage, nous utiliserons le mode console.
{% endcallout %}
## 1 - Définition
Les boucles sont des structures qui permettent d’exécuter plusieurs fois la même série d’instructions jusqu’à ce qu’une condition ne soit plus réalisée... On appelle parfois ces structures instructions répétitives ou bien itérations. La façon la plus commune de faire une boucle, est de créer un compteur (une variable qui s’incrémente, c’est-à-dire qui augmente de 1 à chaque tour de boucle) et de faire arrêter la boucle lorsque le compteur dépasse une certaine valeur.

Une structure répétitive, également appelée structure itérative ou encore boucle, permet de répéter plusieurs fois l’exécution d’une ou plusieurs instructions. Le nombre de répétitions peut :

- être connu à l’avance.
- dépendre de l’évaluation d’une condition.

À chaque répétition, les instructions contenues dans la boucle sont exécutées. C’est ce qu’on appelle un tour de boucle ou encore une itération.
## 2 - La boucle `for`
La boucle for permet de répéter un bloc d’instructions un nombre défini de fois et **connu à l’avance**.

Dans sa syntaxe, il suffit de préciser

- le nom de la variable qui sert de compteur (et éventuellement sa valeur de départ,
- la condition sur la variable pour laquelle la boucle s’arrête (basiquement une condition qui teste si la valeur du compteur dépasse une limite)
- enfin une instruction qui incrémente (ou décrémente) le compteur.
```csharp
for (int i=0; i<4; i++) {
 Console.WriteLine(i);
 } // 0 1 2 3
```
Voici son fonctionnement :

- L’initialisation se produit une seule fois, au début de l’exécution (`int i=0`).
- La condition est évaluée avant chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée (`i<4`).
- L’étape est réalisée après chaque tour de boucle (`i++`).

La variable utilisée dans l’initialisation, la condition et l’étape est appelée le compteur de la boucle. Par convention, elle est souvent nommée `i`.

Au niveau du `for` la trace de la boucle est la suivante :
{% bs-table %}

|  iteration  | valeur de i  | sortie de boucle  |
|:-----------:|:------------:|:-----------------:|
|      0      |      0       |       false       |
|      1      |      1       |       false       |
|      2      |      2       |       false       |
|      3      |      3       |       false       |
|      4      |      4       |       true        |
{% endbs-table %}
A la sortie de la boucle la valeur de `i` est 3
{% callout warning%}
**Itérations**  
Il faut bien compter le nombre de fois que l’on veut faire exécuter la boucle :
{% endcallout %}
```csharp
for(i=0;i<10;i++) //exécute 10 fois la boucle (i de 0 à 9)
for(i=0;i<=10;i++) //exécute 11 fois la boucle (i de 0 à 10)
for(i=1;i<10;i++) //exécute 9 fois la boucle (i de 1 à 9)
for(i=1;i<=10;i++) //exécute 10 fois la boucle (i de 1 à 10)
```
## 3 - La boucle `while`
La boucle while permet de répéter des instructions tant qu’une condition est vérifiée.

Si au départ de la boucle la condition n’est pas remplie, le programme n’y rentre pas.

La sortie de boucle dépend de l’évaluation de la condition.
```csharp
const int fin = 5; // ceci est une constante, mot clé const
    int somme = 0;   // variable de cumul
    int i = 0;       // variable de compteur
    while (i < fin) {
        somme += i ;    // raccourci de somme = somme + 1
        i++;            // raccourci de i = i + 1
     }
    Console.WriteLine("La somme vaut :" + somme);
```
Au niveau du `while` la trace de la boucle est la suivante :
{% bs-table %}

|  iteration  |  valeur de i  |  valeur de somme  |  sortie de boucle  |
|:-----------:|:-------------:|:-----------------:|:------------------:|
|      0      |       0       |         0         |       false        |
|      1      |       1       |         1         |       false        |
|      2      |       2       |         3         |       false        |
|      3      |       3       |         6         |       false        |
|      4      |       4       |        10         |       false        |
|      5      |       5       |        10         |        true        |
{% endbs-table %}
Le compteur, la variable i, est à 5 ce qui ne remplit plus la condition est fait sortir le programme de la boucle

La variable `somme` est appelée variable de cumul, car elle additionne toutes les valeurs de `i` rentrées dans la boucle, soit `0 + 1 + 2 + 3 + 4`

Avant chaque tour de boucle, la condition associée au while est évaluée : Si elle est vraie, les instructions du bloc `while`
sont exécutées. Ensuite, la ligne du `while` est à nouveau exécutée et la condition vérifiée. 
Si elle est fausse, les instructions du bloc ne sont pas exécutées et le programme continue juste après le bloc `while`.
{% callout danger%}
**Attention :** 
Il faut absolument que la condition de la boucle while puisse devenir fausse. Dans le cas contraire, on obtient une boucle infinie qui ne s’arrête jamais.
{% endcallout %}
## 4 - Les boucles imbriquées
Il est possible de faire des boucles imbriquées. Elles nécessitent deux indices.
```csharp
const int fin = 5;
int i = 0;
int j = 0;
while (i < fin)
{
    Console.WriteLine("i = " + i);
    while (j < fin)
        {
            Console.WriteLine("j = " + j);
            j++;
        )
    j = 0 ;
    i++;
 }
```
Quand `i` s’incrémente une fois, `j` s’incrémente 5 fois.

Une fois `j` incrémenté, il est initialisé à 0.

Cela donne le tableau à double entrée suivant :
{% bs-table %}

| i/j |   0   |   1   |   2   |   3   |   4   |
|-----|:-----:|:-----:|:-----:|:-----:|:-----:|
| 0   |   0   |   1   |   2   |   3   |   4   |
| 1   |   0   |   1   |   2   |   3   |   4   |
| 2   |   0   |   1   |   2   |   3   |   4   |
| 3   |   0   |   1   |   2   |   3   |   4   |
| 4   |   0   |   1   |   2   |   3   |   4   |
{% endbs-table %}
Plusieurs combinaisons sont possibles en fonction de `i` et `j`. Par exemple au lieu d’avoir la condition `i<fin`, nous pouvons avoir i<j, en changeant des éléments du code de la boucle.
{% callout %}
**Info**  
Les boucles imbriquées ne sont pas réservées aux boucles `while`, elles peuvent aussi être appliquées à tous les types de boucle.
{% endcallout %}
## 5 - Les compteurs et les cumuls
### a - Le compteur
Les boucles permettent d’utiliser 2 techniques proches, qui leur sont spécifiques, le compteur et le cumul. 
Dans le cas du compteur, vous pouvez remarquer qu’il est déjà inscrit dans la structure de la boucle `for`. 
Voyons une formulation dans la boucle `while` en reprenant notre exemple précédent :
```csharp
const int fin = 5; // ceci est une constante, mot clé const
    int i = 0;       // variable de compteur
    while (i < fin) {
        i++;            // raccourci de i = i + 1
    Console.WriteLine("Le compteur vaut :" + i);
     }
```
Ce petit bout de code affichera :
```csharp
Le compteur vaut : 1
Le compteur vaut : 2
Le compteur vaut : 3
Le compteur vaut : 4
Le compteur vaut : 5
```
### b - Le cumul
Pour le cumul utilisons, de nouveau, le code précédent dans une boucle, while :
```csharp
const int fin = 5; // ceci est une constante, mot clé const
    int somme = 0;   // variable de cumul
    int i = 0;       // variable de compteur
    while (i < fin) {
        somme += i ;    // raccourci de somme = somme + 1
     }
    Console.WriteLine("La somme vaut :" + somme);
```
La boucle va permettre l’addition des valeurs de `i` comme le montre le tableau suivant :
{% bs-table %}

| Variables                      |   i   |     somme |
|--------------------------------|:-----:|----------:|
| Initialisation avant itération |   0   |         0 |
| Itération 1                    |   0   |         0 |
| Itération 2                    |   1   |   1 (1+0) |
| Itération 3                    |   2   |   3 (2+1) |
| Itération 4                    |   3   |   6 (3+3) |
| Itération 5                    |   4   |  10 (6+4) |
| Valeurs fin d’itération        |   5   |        10 |
{% endbs-table %}
Ce petit bout de code affichera :
```csharp
La somme vaut : 10
```
