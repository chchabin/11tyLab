---
layout : "layouts/docs.njk"
title : "Les Bases"
description : ""
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-01T14:43:04+02:00"
draft : false
---
{% callout %}
**Qu'est-ce que le langage C# ?**
- C# est un langage dit de "haut niveau". Il se positionne entre le C++, réputé complexe et Visual Basic.
- Le C# est souple, c’est-a-dire qu’il peut être exécuté sur la machine sur laquelle il se trouve ou bien transmis par l’intermédiaire du web pour s’exécuter sur un ordinateur distant.
- Le C# est aussi puissant que le C++, tant par la richesse de son langage que par sa vitesse d’exécution.
- Le C# est facile à utiliser, les commandes générant des erreurs en C++ ont été modifiées pour les rendre plus sûres.
- Le C# est multicibles, les programmes peuvent être définis pour s’exécuter en, mode console, graphique, sur Pc, sur Pocket-Pc et même sur Linux grâce à mono et à Microsoft qui a fourni les sources de .net (Projet Rotor).
- C# est prêt pour Internet, c’est le pivot de la nouvelle stratégie Internet de Microsoft, nommée .NET.
- C# est sûr, comme tout langage destiné à une utilisation sur Internet, il doit contenir les principes garantissant l’intégrité de la plateforme hôte.
- C# est véritablement orienté objet.
{% endcallout %}

## 1 - Anatomie d’un fichier source
Le code C# est écrit dans des fichiers source portant l’extension `.cs`. Dans le cas d’un programme web celle-ci
sera `.asp`.

Il est fortement conseillé d’adopter le jeu de caractères ANSI non étendu (sans les caractères français). Tous les fichiers source doivent être encodés avec ce jeu de caractères, seules les parties de texte peuvent contenir des caractères français, voici un exemple ci-dessous.
```csharp
using System;
    namespace demonstration
    {
        class HelloWorld {
             static void Main() {
                 Console.WriteLine ("Hello, World");
             }
    }
```
Voici les explications du code :  
**`Using System;`**  
Au début de chaque fichier de programme, il faut mettre la directive using pour spécifier au compilateur une liste de chemins de recherche implicites.

Par exemple, quand le compilateur rencontre la méthode "`Console.WriteLine ("Hello, World");`", il s’aperçoit que son chemin 
n’est pas défini explicitement. Il balaie alors les espaces de noms spécifiés dans les `using` puis, une fois la méthode 
dénichée dans l’espace de nom `System`, il compile le code.  

**`namespace demonstration`**  
Cette ligne facultative définie un espace de nom qui va contenir les classes qui sont entre accolades dans notre exemple la classe bonjour. 
L’explication est la même dans le principe que celle donnée au-dessus, je vous laisse vous y reporter.

**`public class HelloWorld`**  
Une application C# est une collection de classes, une classe étant un ensemble de données et de méthodes. Une méthode est un ensemble d’instructions appliquant un traitement aux données de la classe, retournant ou non un résultat logique ou typé (valeur numérique, chaîne de caractères, référence d’objet, etc.)

C’est le mot clé `class` qui introduit la déclaration de la classe, suivi du nom de la classe, d’une accolade ouvrante et 
d’une accolade fermante. Votre code sera placé entre les deux accolades.  

**`static void Main()`**  
Cette méthode est la méthode principale (main in english) de votre programme bonjour, c’est ici que vous placerez les actions à faire exécuter à C#.  

Le mot-clef `public` signifie que la méthode est accessible au monde extérieur. Le mot clé `static` indique au compilateur que la méthode `Main` est 
globale et que, par conséquent, il est inutile d’instancier la classe pour pouvoir appeler la méthode. Comme elle est statique, 
le compilateur prend son adresse comme point d’entrée. De cette façon, l’environnement .NET sait par où commencer l’exécution de l’application.  

**`Console.WriteLine("HelloWorld");`**  
Pour l’instant, intéressons-nous à `WriteLine( )`, qui veut dire "écris ce que je te donne sur une ligne de la console". C’est magnifique, vous savez faire écrire une phrase ! Ne vous inquiétez pas après l’écriture viendront les calculs !
{% callout danger%}
**Attention !**  
Les instructions se terminent par un point-virgule ; comme une phrase en français se termine par un point.
{% endcallout %}
## 2 - Le bloc de code
{% callout danger%}
#### Attention !
Les débutants ont tendance à copier le code avant de fermer les accolades, ce qui induit des recherches inutiles en débogage
{% endcallout %}
{% callout warning %}
**Bonne pratique :**  
avant de commencer à coder, soyez sûr que toutes les accolades existent de façon à générer un programme vide sans erreurs.
{% endcallout %}
La partie de programme située entre deux accolades, une ouvrante et une fermante, est appelée bloc. Je conseille de prendre l’habitude de faire une tabulation après le retour à la ligne qui suit l’accolade. Puis retirer cette tabulation après l’accolade fermante du bloc.
```csharp
{
    // Faire une tabulation
    // Tout le code est frappé à cette hauteur
}
// Retrait de la tabulation
// Tout le code est frappé à cette hauteur
```
Cette méthode permet de contrôler la fermeture des accolades et de leurs correspondances.
## 3 - Affichage de texte
L’affichage de texte s’effectue grâce à la commande `Console.Write()`.
```csharp
Console.WriteLine ("Hello, World");
```
Il existe en fait 2 méthodes d’affichage :

- `Console.Write() `: affiche du texte et reste sur la même ligne,
- `Console.WriteLine()` : affiche du texte et fait un saut de ligne
## 4 - Commentaires
Les commentaires doivent permettre à quelqu’un, de pouvoir lire et comprendre ce qui se passe. Les commentaires sont indispensables à tout bon programme.

Il y a deux façons de placer des commentaires :

- soit en utilisant `/*Commentaire*/`, qui permet aussi un commentaire sur plusieurs lignes,
- soit en utilisant `//`. Le reste de la ligne est un commentaire où le commentaire se termine à la fin de la ligne.

Microsoft a introduit la génération automatique de documentation basée sur le XML. Pour l’obtenir, il suffit de saisir `///` devant chaque déclaration de méthode

On obtient le code suivant :
```csharp
/// <summary>
/// Commentaire ...
/// <summary>
```

## 5 - l’indentation
Revenons à notre exemple. Le code n’est pas, en totalité, positionné à droite. À chaque nouveau bloc le code est décalé vers la droite. C’est ce qu’on appelle l’indentation. Elle existe dans tous les langages, c’est une bonne pratique qui rend le code plus lisible.
```csharp
using System;
    namespace demonstration
    {
        class HelloWorld {
             static void Main() {
                 Console.WriteLine ("Hello, World");
             }
    }
```
{% callout %}
#### **Note**
Si avec des IDE comme Visual Studio l’indentation est souvent automatique, préférez les **tabulations** à des espaces.
{% endcallout %}
Si vous souhaitez couper une expression les bonnes pratiques sont les suivantes :

- faire un saut après une virgule,
- faire un saut après un opérateur (un + par exemple)
- aligner le début de la nouvelle ligne au même niveau que la précédente.
```csharp
longMethodCall(expr1, expr2,
                   expr3, expr4, expr5);
```
Mauvais saut
```csharp
var = a * b / (c - g +
                   f) + 4 * z;
```
Meilleure méthode
```csharp
var = a * b / (c - g +f) +
                    4 * z;
```
## 6 - Conventions de nommage
##### La notation hongroise
- On ajoute un préfixe à chaque variable pour indiquer son type.
- Exemple : `btnRetour` pour bouton Retour
- Toutefois, les préfixes ne sont pas standardisés et on doit en inventer pour les nouveaux types.
- Puisque C# est un langage fortement typé et que la hiérarchie de classes est très stricte, on ne suggère pas d’utiliser cette notation.
##### La casse Pascal
- La première lettre est en majuscule.
- On sépare les mots en mettant leur première lettre en majuscule.
- Exemple : `AfficherCustomer`
- Vous remarquerez que les espaces de noms et les classes de bases du Framework respectent cette casse.
##### La casse Camel
- La première lettre est en minuscule.
- On sépare les mots en mettant leur première lettre en majuscule.
- Exemple : `testCompteur`
##### La casse Majuscule
- Toutes les lettres sont en majuscule pour les constantes d’une ou deux lettres
- Exemple : `PI`
- Si le nom est trop long, utilisez la casse Pascal
##### La casse Snake
- Toutes les lettres sont en minuscule
- On sépare les mots avec un underscore (_)
- Exemple : `afficher_customer`
{% callout %}
**Note**
Il est fortement déconseillé de séparer les mots par des traits de soulignement (underscore) : `Afficher_Customer` est donc déconseillé.
{% endcallout %}

##### **Nommage des noms**
{% bs-table %}

| Espaces de noms | On suggère d’utiliser le nom de la compagnie ou du produit en notation Pascal.           |
|-----------------|------------------------------------------------------------------------------------------|
| Variables       | On utilise des noms en notation camelCase.                                               |
| Classes         | On utilise un nom qui décrit les objets en notation PascalCase.                          |
| Méthodes        | On utilise un verbe qui décrit exactement ce que fait la méthode en notation PascalCase. |
| Paramètres      | On utilise des noms significatifs en notation PascalCase.                                |
| Interfaces      | On utilise des noms en notation Pascal précédés d’un I majuscule.                        |
| Membres         | On utilise des noms en notation camelCase.                                               |
{% endbs-table %}
