---
layout : "layouts/docs.njk"
title : "Les Variables"
description : ""
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-01T21:36:51+02:00"
draft : false
---
{% callout %}
**Info**
Pour faciliter la compréhension du langage, nous utiliserons le mode console.
{% endcallout %}
## 1 - Définition d’une variable
Une variable joue en C# le même rôle que dans tout autre langage : stocker une information.

Vous pouvez vous représenter une variable comme étant une boîte dans laquelle on met quelque chose, c’est-à-dire qu’on écrit quelque chose, ou dont on « apprend » quelque chose, c’est-à-dire qu’on lit ce quelque chose

Une variable ne peut contenir qu’une seule chose à la fois. Si vous mettez une seconde donnée dans une variable, la précédente est effacée.

Le nom d’une variable est appelé identificateur.  
**Les types de variables**
{% bs-table %}

| Type    | Représente         | Plage                           | Valeur par défaut |
|---------|--------------------|---------------------------------|-------------------|
| bool    | booléen            | True ou False                   | False             |
| byte    | 8 bits non signés  | 0 à 255                         | 0                 |
| char    | 16 bits Unicode    | U +0000 à U +FFFF               | ’\0’              |
| decimal | 128 bits           | -7.9 x 1028 à +7.9 x 1028       | 0.0M              |
| double  | 64 bits            | +/- 5 x 10324 à +1.7\*10308     | 0.0D              |
| ﬂoat    | 32 bits            | 3.4 x 1038 à +3.4 x 1038        | 0.0F              |
| int     | 32 bits signés     | 2147483648 à +2147483647        | 0                 |
| long    | 64 bits signés     | +/- 9223372036854775808 environ | 0L                |
| sbyte   | 8 bits signés      | -128 à +127 (0x7F)              | 0                 |
| short   | 16 bits signés     | 32768 à +32767 (0X7FFF)         | 0                 |
| uint    | 32 bits non signés | 0 à 4294967295 (0xFFFFFFFF)     | 0                 |
| ulong   | 64 bits non signés | 0 à 18446744073709551615        | 0                 |
| ushort  | 16 bits non singés | 0 à 65535                       | 0                 |
{% endbs-table %}
## 2 - Déclarer et initialiser les variables
{% callout %}
**Ce processus se passe en trois étapes :**
1. Choisir un type
2. Donner un nom
3. initialiser
{% endcallout %}
Exemple :
{% bs-table %}

| Choisir un type | Donner un nom     | initialiser |
|-----------------|-------------------|-------------|
| int             | nombreDeVisiteurs | 5000        |
| string          | ours              | Grizzly     |
{% endbs-table %}
```csharp
int nombreDeVisiteurs = 5000;
```
```csharp
string ours = "Grizzly";
```
**Déclarer et initialiser les chaînes de caractères**  
Exemple simple
```csharp
string s = "Hello World";  // Hello World
```
Déclarer une chaîne entre guillemets
```csharp
string s = "\"Hello\""; // "Hello"
```
Gestion des caractères protégés
```csharp
string s = "Hello\nWorld"; // Hello World sur 2 lignes
```
Les chaînes @
```csharp
string s = "c:\\Docs\\Source\\a.txt"; // Devient plutôt :
string s = @"c:\Docs\Source\a.txt";
```
## 3 - Les caractères spéciaux
Nous avons vu que pour faire un retour chariot, c’est-à-dire un retour à la ligne, nous pouvions utiliser
soit `Console.WriteLine`, mais le retour chariot n’a lieu qu’en fin de ligne obligatoirement,
soit `\n` que nous placions dans notre texte là où nous voulions faire un retour à la ligne.

Les caractères spéciaux commencent tous par le caractère de suffixe \. Cela permet au compilateur de faire la différence par exemple entre \n et n.
Il existe environ une dizaine de caractères spéciaux dont voici les principaux :
{% bs-table %}

| type | Description                                                |
|------|------------------------------------------------------------|
| `\n` | fait un retour chariot                                     |
| `\t` | fait une tabulation                                        |
| `\’` | permet de créer un caractère contenant la valeur du quote. |
| `\"` | affiche un guillemet.                                      |
{% endbs-table %}
## 4 - Saisie de variables
**En mode Console** la saisie des variables se fait grâce à l’instruction
```csharp
Console.ReadLine()
```
Ainsi le code suivant demande à l’utilisateur de saisir une variable qui sera stockée dans la variable `s`.
```csharp
s = Console.ReadLine();
```
{% callout warning%}
**Le problème :**  
Le problème, c'est que `Console.ReadLine()` ne renvoie qu’un type string.
{% endcallout %}
Ainsi ce code renverra une erreur.
```csharp
int s = Console.ReadLine(); // Erreur de type
```
**Les conversions**  
Ici, il ne s’agit pas de changer de religion 😁, mais de type

Dans sa forme générale, la saisie d’un int au clavier s’écriera :
```csharp
string s = Console.ReadLine();
int i = Convert.ToInt32(s);
```
Dans sa forme abrégée, nous aurons :
```csharp
int i = Convert.ToInt32(Console.ReadLine());
```
{% callout %}
**Info**  
Ceci s’applique intelligemment à toutes les conversions autres que string.
{% endcallout %}
{% callout danger%}
**Les Winform :**
Il est possible de faire des saisies à partir des formulaires C#, les Winform.
Dans ce cas, ce sont des objets graphiques qui permettent une saisie comme les `TextBox`.
{% endcallout %}
## 5 - Opérations sur les nombres
Les opérateurs de bases en programmation sont les mêmes que les opérateurs mathématiques que vous employez depuis votre plus tendre enfance, à savoir :
### a - les opérateurs de calcul
- l’opérateur `+` pour l’addition : additionne 2 entiers entre eux
- l’opérateur `–` pour la soustraction : soustrait 2 entiers entre eux
- l’opérateur `*` pour la multiplication : multiplie 2 entiers entre eux
- l’opérateur `/` pour la division : divise le 1er entier par le 2d et tronque le résultat
- l’opérateur `%` qui permet de connaître le reste d’une division euclidienne (que vous n’avez probablement jamais vu)

**Exemple d’utilisation :**
```csharp
int a = 2;

int b = 3;

int c = a + b; // c = 5

int d = c + 12; //d = 17

int e = a*b; //e = 3*2 = 6

int f = c%a; //5%2 = 1 car 5 = 2*2 + 1
```
Les Expressions sont évaluées en fonction de la précédence des opérateurs
```csharp
int a = 10;

int b = 20;

int c = 5;

int g = a + b/c; //g = 14
```
Les parenthèses peuvent être utilisées pour contrôler l’ordre d’évaluation
```csharp
int g = (a + b)/c;//g = 6

int g = a + (b/c); //g = 14
```
### b - Les opérateurs d’affectation combinés

Il est ainsi possible d’affecter une variable et d’effectuer une opération en même temps (d’un point de vue uniquement visuel).
Ces opérateurs sont 
- +=,     
- -=,`
- \*=,
- /=,
- %=,
- ++,
- --.

Exemple d’utilisation :
```csharp
int i = 0; //La variable doit avoir été initialisé au préalable.

i += 12; // i = i + 12;

i -= 12; // i = i – 12;

i *= 5; // i = i * 5;

i /= 5; // i = i / 5;

i %= 2; // i = i % 2;

i++; // i += 1; // i = i + 1;

i--; // i -= 1; // i = i – 1;
```
## 6 - Affichage de texte
L’affichage de texte s’effectue grâce à la commande `Console.Write()`.
```csharp
Console.WriteLine ("Hello, World");
```
Il existe en fait 2 méthodes d’affichage :

- `Console.Write() `: affiche du texte et reste sur la même ligne,
- `Console.WriteLine()` : affiche du texte et fait un saut de ligne
## 7 - Concaténation
La concaténation est une opération visant à regrouper plusieurs chaînes de caractères entre elles.
### a - La concaténation classique
Elle s’effectue par l’intermédiaire de l’opérateur + et ne peut avoir lieu qu’entre types string.
Les autres opérateurs ne s’emploient pas sur les types string.
On peut se représenter une concaténation comme étant une opération mettant bout à bout les chaînes de caractères (ou string) entre elles.

Exemple d’utilisation :
```csharp
string a = "Coucou,";

string b = " c’est moi !";

string c = a + b;//c contient "Coucou, c’est moi !"

Console.WriteLine("Vous avez entré : " + c);//Vous avez entré : Coucou, c’est moi !
```
### b - Le format composé
Il s’agit de créer un masque qui sera ensuite chargé par les variables. Reprenons l’exemple précédent
```csharp
Console.WriteLine("Vous avez entré : {0}" , c);//Vous avez entré : Coucou, c’est moi !
```
Ici le caractère `{0}` va utiliser, la première variable qui se trouve après la virgule.
S’il existe plusieurs variables, il faut incrémenter les accolades :
```csharp
Console.WriteLine("Vous avez entré : {0} {1}" , a, b);//Vous avez entré : Coucou, c’est moi !
```
### c - l’interpolation de chaine `$`
Avec la même idée, il est possible de saisir uniquement le nom des variables. Vous conviendrez que c’est beaucoup plus facile à utiliser et à lire !
```csharp
string d = $"Vous avez entré : {c}";//d contient "Vous avez entré : Coucou, c’est moi !"
```
On obtient le même résultat à l’affichage :
```csharp
Console.WriteLine(d);//Vous avez entré : Coucou, c’est moi !
```
{% callout danger%}
**Attention**  
N’ajoutez pas d’espace entre les signes `$` et `"` au début d’un littéral de chaîne.
{% endcallout %}
