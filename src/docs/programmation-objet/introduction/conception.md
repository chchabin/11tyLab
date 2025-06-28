---
layout : "layouts/docs.njk"
title : "Conception"
description : ""
group : "introduction"
section : "programmation-objet"
toc : true
date : "2022-09-02T18:43:07+02:00"
draft : false
---
## 1 - Structure d’une classe.
{% callout %}
**Classe : Définition**  
Une classe permet de définir un nouveau type, d’instancier des objets, d’appeler les services sur cet objet.
{% endcallout %}
{% bt-collapse "notes1" %}
```csharp
using System;
    namespace demonstration
    {
        public class Exemple {
                // les attributs - généralement private
            private float x;
            private int y;
                // les méthodes
            public float F1(int a, int b)
            {
                // ...........code de F1
             }
             public void p2( )
             {
                // ...........code de p2
             }
         }
    }
```
{% endbt-collapse %}
La définition d’une classe commence par le mot-clé class. On trouve ensuite la définition des champs (attributs) et des méthodes de la classe. Les méthodes utilisent (et modifient) les valeurs des attributs.
{% callout warning%}
**Vocabulaire : attributs**  
les attributs sont les variables de la classe sauf s’ils sont publics, les attributs ne sont pas visibles depuis une autre classe (étrangère).
{% endcallout %}
{% callout warning%}
**Vocabulaire : méthodes**  
Les méthodes sont les fonctions ou procédures de la classe. Elles aussi peuvent être publiques ou privées.
{% endcallout %}
{% callout warning%}
**Vocabulaire : instance de classe**  
Une classe permet de définir un nouveau type, construire des objets (instancier).
On parle alors de services ou de variables d’instances
{% endcallout %}
{% callout warning%}
**Vocabulaire : accès aux éléments de la classe (Public, Private)**  
Les modificateurs private et public se mettent devant un type (par exemple : une classe) ou un membre (par exemple : un champ ou une méthode).  
`private` restreint l’accès de ce qui suit à l’usage exclusif dans le bloc où il a été déclaré.  
`public` autorise quant à lui l’accès de ce qui suit depuis l’extérieur.  
{% endcallout %}
{% callout warning%}
**Vocabulaire : classe static**  
Lorsqu’une déclaration est précédée du mot clé static, cette information concerne la classe, tous les services définis dans la classe auront accès à cette information.
{% endcallout %}
On parle alors de services ou de variables de classe
## 2 - Déclaration et instanciation d’un objet
Une classe C# peut être considérée comme un nouveau type dans le programme et donc des variables, d’objets, peuvent être déclarées selon ce nouveau "type"
{% bt-collapse "notes2" %}
```csharp
using System;
    namespace demonstration
    {
        class HelloWorld {
             static void Main() {
                Exemple ex1; // --déclaration d’un nouvel objet de type Exemple
                ex1 = new Exemple();// --instanciation de cet objet
                // --autre forme plus compacte
                Exemple ex2 = new Exemple();
                Exemple ex3 = new Exemple();
                // ...
                // il n’y a pas de limite au nombre d’objets que l’on peut créer
		// --l’instanciation peu se faire avec des paramètres, selon la définition de la classe
		Exemple ex4 = new Exemple(209,30);
             }
    }
```
{% endbt-collapse %}
La déclaration permet de créer une nouvelle variable, appelée ex1 dans l’exemple ci-dessus. À ce stade, aucune réservation de mémoire n’a eu lieu pour cet objet. Il est donc inutilisable.

Le type de la variable ex1 est `Exemple` : le type d’un objet est sa classe.

L’instanciation utilise l’opérateur `new` , qui permet de réserver une zone mémoire spécifique pour l’objet. 
On dit que l’objet est instancié par l’opérateur `new` . Sans cette étape indispensable, l’objet déclaré ne peut pas être utilisé.
{% callout danger%}
**ne pas confondre instanciation et initialisation**  
`Instancier`, c’est, créer un nouvel objet (opérateur `new` )  
`Initialiser`, c’est, donner une valeur initiale à quelque chose (opérateur `=` )
{% endcallout %}

## 3 - Appeler une méthode
{% callout %}
**Appel d’une méthode**
```csharp
nomDeLaMéthode(paramètresSéparésParUneVirgule);
```
{% endcallout %}
Dans notre exemple, nous souhaitons appeler les méthodes de la classe exemple :
{% bt-collapse notes3 %}
```csharp
using System;
    namespace demonstration
    {
        class HelloWorld {
             static void Main() {
                Exemple ex1; // --déclaration d’un nouvel objet de type Exemple
                ex1 = new Exemple();// --instanciation de cet objet
                // --appel de la méthode p2
                ex2.p2();
                // --appel de la méthode F1
                 ex2.F1(20,30);
             }
    }
```
{% endbt-collapse  %}
