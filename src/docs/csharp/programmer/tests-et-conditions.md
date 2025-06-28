---
layout : "layouts/docs.njk"
title : "Tests Et Conditions"
description : ""
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-01T22:32:00+02:00"
draft : false
---
{% callout %}
**Info**
Pour faciliter la compréhension du langage, nous utiliserons le mode console.
{% endcallout %}

## 1 - L’instruction `if`
Dans un programme, on souhaite fréquemment agir en fonction du résultat d’une condition. 
Les traitements à effectuer peuvent être différents selon que la condition est vraie ou fausse.  
En C#, une alternative s’exprime grâce à l’instruction `if` éventuellement associée à une instruction `else`.  
Elle permet de conditionner des traitements en fonction de certains critères. On parle parfois de branchement logique. 
Pendant l’exécution, les instructions exécutées seront différentes selon la valeur de la condition.  
**Un seul, des deux blocs d’instructions, sera pris en compte.**
```csharp
if(condition vraie)
    {
        //instructions 1
    }
    else
    {
         //instructions 2
    }
```
Il est possible de placer une instruction if à l’intérieur d’un bloc d’une autre instruction if. C’est ce qu’on appelle **imbriquer des conditions**. Attention à toujours bien refléter l’imbrication des blocs en décalant les instructions associées dans le code source : c’est ce qu’on appelle **l’indentation**.
```csharp
if(condition 1)
    {
        //instructions 1
    }
    else
    {
         if(condition 2)
         {
            //instructions 2
         }
         else
        {
            //instructions 3
        }
    }
```
{% callout %}
**Remarque :**
Vous pouvez imbriquer autant de `if`, de `else if`, de `else` que vous le souhaitez, a priori, il n’y a pas de limite. Mais concrètement, il est compliqué de descendre au-dessous de **3** imbrications, en effet, le code devient peu lisible.
{% endcallout %}
## 2- La notion de condition
L’instruction `if` est associée à une condition. C’est une expression (une combinaison de variables, 
de valeurs et d’opérateurs) dont l’évaluation donne la valeur, vraie (true) ou la valeur, faux (false). 
On parle d’expression booléenne.

Toute expression renvoyant une valeur booléenne peut être utilisée comme condition avec un `if`. 
C’est le cas des expressions utilisant des opérateurs de comparaison, dont voici la liste.
{% bs-table %}

| Opérateur | Signification         |
|-----------|-----------------------|
| ==        | Égal à                |
| !=        | Différent de          |
| <         | Inférieur strictement |
| <=        | Inférieur ou égal     |
| >         | Supérieur strictement |
| >=        | Supérieur ou égal     |
{% endbs-table %}
{% callout warning%}
**Attention !**  
La plupart des langages de programmation utilisent le symbole `=` pour symboliser **l’affectation** et 
le symbole `==` pour **l’équivalence**.

Attention aux confusions avec le sens mathématique de l’opérateur `=`.
{% endcallout %}
## 3 - Les opérateurs logiques
On peut définir des conditions plus complexes ("La valeur de X est entre 100 et 200") grâce aux opérateurs logiques. Ceux du langage C# sont les suivants :

- && (Et),
- || (Ou),
- ! (Non),

Plutôt que d’avoir des conditions complexes comme :
```csharp
if(a == 5 && b == 2)
```
Il est préférable d’imbriquer les `if` pour éviter une erreur d’analyse :
```csharp
if(a == 5)
{
    if(b == 2)
    {
        //instructions 1
    }
}
else
{
     //instructions 2
}
```
## 4 - L’instruction `switch`
L’instruction switch déclenche l’exécution d’un bloc d’instructions parmi plusieurs possibles. Seul le bloc correspondant à la valeur testée sera pris en compte.
```csharp
switch(<variable>)
{
    case (<valeur 1>):
        //instructions 1
        break;
    case (<valeur 2>):
            //instructions 2
            break;
    case (<valeur 3>):
            //instructions 3
            break;
    default:
            //instructions par défaut
            break;
}
```
Il n’y a pas de limite au nombre de cas possibles. Le mot-clé `default`, à placer en fin de switch, est optionnel. 
Il sert souvent à gérer les cas d’erreurs.

Les instructions `break;` dans les blocs `case` sont indispensables pour éviter de passer d’un bloc à un autre.
## 5 - l’opérateur `?:` ou la condition ternaire
La syntaxe est la suivante :
```csharp
bool condition = (a > b)
int action = condition ? -1 : 1;
```
La syntaxe ici semble étrange si vous ne l’avez pas rencontrée auparavant. Vous savez réellement ce qui se passe ici, mais vous ne l’avez pas vu exprimé de cette manière. Le code ici est une instruction if abrégée (ou ternaire), et son exécution est identique à celle-ci :
```csharp
int action = 0
if(a > b) {
    action = -1;
else {
    action = 1;
}
```
Vous remarquerez, qu’avec une expression ternaire, il n’est pas nécessaire d’initialiser la variable.
{% callout %}
**Définition**  
L’expression `(expr1) ? (expr2) : (expr3)` est évaluée à `expr2` si `expr1` est évaluée à `TRUE`, et `expr3` si `expr1` est évaluée à `FALSE`.
{% endcallout %}
## 6 - L’opérateur `??` de fusion Null
La syntaxe est la suivante :
```csharp
int a = null;
int b = a ?? 1;
Console.WriteLine(b);//Affiche 1 si a est null sinon a
```
C’est un nom très déroutant, mais ce n’est en fait qu’un raccourci pour cela :
```csharp
if(a != null) {
    return 1;
else {
    return a;
}
```
Sur le côté gauche de l’opérateur ?? se trouve la variable en cours de vérification, et sur la droite se trouve la sortie qui est utilisée si elle n’est pas définie. Dans le cas ci-dessus, si la variable a est définie, il affichera le contenu de la variable. Si la variable n’est pas définie, affichera 1.
{% callout %}
**Définition**  
l’expression `(expr1) ?? (expr2)` retourne `expr2` si `expr1` est **NULL**, et `expr1` dans les autres cas. 
En particulier, cet opérateur n’émet pas de notice si la partie gauche n’existe pas, exactement comme `isset()`. 
Ceci est particulièrement utile pour les clés des tableaux.
{% endcallout %}
## 7 - L’opérateur `??=`
À compter de C# 8.0, la syntaxe est la suivante :
```csharp
int a = null;
int b = a ??= 1;
Console.WriteLine(b); //Affiche 1
```
C’est un nom très déroutant, mais ce n’est en fait qu’un raccourci pour cela :
```csharp
if(a == null) {
    return 1;
}
```
