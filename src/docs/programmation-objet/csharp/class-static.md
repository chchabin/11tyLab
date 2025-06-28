---
layout : "layouts/docs.njk"
title : "Class Static"
description : ""
group : "csharp"
section : "programmation-objet"
toc : true
date : "2023-10-06T09:03:09+02:00"
draft : false
---
## 1 - La classe `static`
Une classe statique est fondamentalement identique à une classe non statique, à une différence près : une classe statique 
ne peut pas être instanciée.  
En d’autres termes, vous ne pouvez pas utiliser l’opérateur `new` pour créer une variable du type classe.  
Étant donné qu’il n’y a aucune variable d’instance, vous accédez aux membres d’une classe statique en utilisant 
le nom de classe lui-même.
- Elle contient uniquement des membres statiques.
- Elle ne peut pas être instanciée.
- Elle est verrouillée (sealed), elle ne peut pas être héritée.
- Elle ne peut pas contenir de constructeurs d’instances.


```csharp
public static class UneClasseStatique
{
    public static void Afficher(string message)
    {
        Console.WriteLine(message);
    }
}
```
La méthode `Afficher` peut être appelée de la façon suivante :
```csharp
UneClasseStatique.Afficher("Un exemple de message");
```
Si nous avions une **CLASSE STANDARD**, nous devrions écrire :
```csharp
// A ne pas faire
maclasse=new UneClasseStatique();
maclasse.Afficher("Un exemple de message");
```

Une classe statique peut servir de conteneur pratique pour des ensembles de méthodes qui opèrent simplement sur des 
paramètres d’entrée et n’ont pas à obtenir ou définir de champs d’instance internes. Par exemple, dans la bibliothèque 
de classes .NET, la classe `System.Math` statique contient des méthodes qui effectuent des opérations mathématiques, 
sans qu’il soit nécessaire de stocker ou de récupérer des données spécifiques à une instance particulière de 
la classe `Math`. 

## 2 - Les méthodes `static`
Une méthode statique existe en dehors de la création d'un objet de la classe.
- elle peut être appelée sur une classe même quand aucune instance de la classe n’a été créée. 
- elle est toujours accessible par le nom de la classe, et non par le nom de l’instance. 
- une seule copie statique existe, quel que soit le nombre d’instances de la classe qui ont été créées. 
- les méthodes statiques ne peuvent pas accéder à des champs ou des événements non statiques dans leur type contenant. 
- elles ne peuvent pas non plus accéder à une variable d’instance d’un objet quelconque à moins qu’elle soit passée 
explicitement dans un paramètre de méthode.

```csharp
public class Automobile
{

    public static int tailleReservoire
    {
        get
        {
            return 15;
        }
    }

    public static void Conduire() { }

    public static event EventType? AvancerSansEssence;

    // Autres champs et propriétés non statiques...
}
```

Appel de méthode statique :
```csharp
Automobile.Conduire();
```
Si votre classe contient des champs statiques, fournissez un constructeur statique qui les initialise quand la classe
est chargée.

## 3 - Les champs `static`
- Un champ statique existe même si aucun objet de la classe n'a été créé.
- Ils ont les mêmes propriétés que les méthodes statiques.
Ils sont déclarés de la façon suivante :
```csharp {hl_lines=[3]}
public class Automobile
{
    public static int NbRoues = 4;

    public static int tailleReservoire
    {
        get
        {
            return 15;
        }
    }

    public static void Conduire() { }

    public static event EventType? AvancerSansEssence;

    // Autres champs et propriétés non statiques...
}
```

Appel du champ statique :
```csharp
int i = Automobile.NbRoues;
```

## Utilité
Il est plus courant de déclarer une classe non statique avec certains membres statiques que de déclarer une classe 
entière comme statique. Deux utilisations courantes des champs statiques consistent à conserver un décompte du nombre 
d’objets qui ont été instanciés ou à stocker une valeur qui doit être partagée entre toutes les instances.