---
layout : "layouts/docs.njk"
title : "Principaux Concepts"
description : ""
group : "csharp"
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
- Utilisez les conventions standards pour nommer classes et méthodes. Un nom de classe doit comporter un substantif : *Client, ClientPrivilegie*... Les méthodes doivent avoir un nom signifiant, commencer par une lettre minuscule ; les méthodes d’accès doivent commencer par **get** (*getNom()*) et les méthodes d’altération par **set** (*setNom()*).
- Ne faites jouer à la méthode main que le rôle d’instanciation d’objets.
- Pour plus de détails, voyez [le site de Microsoft](https://learn.microsoft.com/fr-fr/dotnet/standard/design-guidelines/naming-guidelines)
{% endcallout %}
## 1 - Constructeur
{% callout %}
**Classe : Définition**
le constructeur est une méthode spécifique dont le rôle est de construire un objet, le plus souvent en initialisant ses attributs.
{% endcallout %}
Le constructeur sans argument et les constructeurs paramétriques sont **OPTIONNELS**. De toute façon, un constructeur par défaut est fourni par C# en tenant compte des initialisations explicites et en fournissant des initialisations implicites pour tous les autres variables d’instance.

Il est possible d’avoir plusieurs constructeurs pour une classe
{% bt-collapse "notes1" %}
```csharp {linenos=table,hl_lines=["9-17"],linenostart=1}
using System;
    namespace demonstration
    {
        public class Exemple {
                // les attributs - généralement private
            private float x;
            private int y;
                // les méthodes
            public Exemple(){   // constructeur sans argument
            {
                this.x = 1;
                this.y = 4;
            }
            public Exemple(int _x,int _y){   // constructeur paramétrique
            {
                this.x = _x;
                this.y = _y;
            }
            public float f1(int a, int b)
            {
                // ...........code de f1
            }
             public void p2( )
            {
                // ...........code de p2
            }
         }
    }
```
{% endbt-collapse %}
L’utilisation d’un constructeur se fait au moment de l’instanciation de l’objet (opérateur `new`), en passant en paramètres les futures valeurs des attributs de l’objet créé (s’il y en a).
{% bt-collapse "notes2" %}
```csharp
using System;
namespace demonstration
 {
    class HelloWorld {
    static void Main() {
    Exemple ex1; // --déclaration d’un nouvel objet
    ex1 = new Exemple();// --instanciation de cet objet
    // --autre forme plus compacte
    Exemple ex2 = new Exemple(20,30);
 }
```
{% endbt-collapse  %}
{% callout danger%}
#### **ATTENTION**
1 - Le constructeur doit porter le même nom que la classe.

2 - Le constructeur ne doit pas être précédé d’un type de retour (surtout pas de void)
{% endcallout %}
## 2 - Autoréférence : le mot-clé `this`
{% callout %}
**Définition**  
À l’intérieur d’une méthode, le mot-clé this permet d’accéder à l’instance (l’objet) sur lequel la méthode est appelée
{% endcallout %}
Aucune variable ne peut être utilisée sans être une variable d’instance ou une variable locale déclarée dans ce bloc ou un bloc supérieur.

Lorsqu’il y a conflit de nom entre une variable locale et une variable d’instance, la variable locale l’emporte et masque la variable d’instance. Pour contourner le masquage et utiliser la variable d’instance, il faut utiliser le mot clef this qui désigne l’instance courante :
```csharp
this.variable_dinstance
```
{% bt-collapse "notes3" %}
```csharp  {linenos=table,hl_lines=["9-10","14-15"],linenostart=1}
using System;
    namespace demonstration
    {
        public class Exemple {
            private float x;
            private int y; // variable d’instance
            public Exemple(){
            {
                this.x = 1;
                this.y = 4;
            }
            public Exemple(flot _x,int _y){
            {
                this.x = _x;
                this.y = _y;
            }
            public float f1(int a, int b)
            {
                // ...........code de f1
            }
             public void p2( )
            {
                int y=3; // la variable locale a le même nom que la variable d’instance
                this.y = y; // la variable d’instance passe de la valeur 4 à la valeur 3
            }
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
```csharp  {linenos=table,hl_lines=["7-11"],linenostart=1}
using System;
    namespace demonstration
    {
        public class Exemple {
            private float x;
            private int y;
            public Exemple(){
            {
                this.x = 1;
                this.y = 4;
            }
            public Exemple(flot _x,int _y){
            {
                this.x = _x;
                this.y = _y;
            }
            public int getY( )
            {
                return y; // un accesseur de la variable y
            }
            public float f1(int a, int b)
            {
                // ...........code de f1
            }
             public void p2( )
            {
                int y=3;
                this.y = y;
            }
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
```csharp  {linenos=table,hl_lines=["21-24"],linenostart=1}
using System;
    namespace demonstration
    {
        public class Exemple {
            private float x;
            private int y;
            public Exemple(){
            {
                this.x = 1;
                this.y = 4;
            }
            public Exemple(flot _x,int _y){
            {
                this.x = _x;
                this.y = _y;
            }
            public int getY( )
            {
                returny;
            }
            public float setX(flot _x )
            {
                this.x = _x; // un mutateur de la variable x
            }
            public float f1(int a, int b)
            {
                // ...........code de f1
            }
             public void p2( )
            {
                int y=3;
                this.y = y;
            }
         }
    }
```
{% endbt-collapse  %}
## 5 - Redéfinition de `ToString`
{% callout %}
**Définition**  
La méthode ToString permet de décrire un objet sous la forme d’une chaîne de caractères.
{% endcallout %}
Le mot clé `override` permet de redéfinir une méthode de la classe Object
{% bt-collapse notes6 %}
```csharp {linenos=table,hl_lines=["34-37"],linenostart=1}
using System;
    namespace demonstration
    {
        public class Exemple {
            private float x;
            private int y;
            public Exemple(){
            {
                this.x = 1;
                this.y = 4;
            }
            public Exemple(flot _x,int _y){
            {
                this.x = _x;
                this.y = _y;
            }
            public int getY( )
            {
                return y;
            }
            public float setX(flot _x )
            {
                this.x = _x;
            }
            public float f1(int a, int b)
            {
                // ...........code de f1
            }
            public void p2( )
            {
                int y=3;
                this.y = y;
            }
            public override string ToString( ) // Réécriture de la méthode ToString
            {
                return "Les valeurs initiales sont " + this.x + "et" this.y;
            }
         }
    }
```
{% endbt-collapse %}
L’appel de la méthode `ToString` se fera de la façon suivante :
{% bt-collapse notes7 %}
```csharp
using System;
namespace demonstration
{
    class HelloWorld {
    static void Main() {
    // --autre forme plus compacte
    Exemple ex2 = new Exemple(20,30);
    Console.WriteLine(ex2.ToString());
    }
}
```
{% endbt-collapse %}
et affichera :
{% bt-collapse notes18%}
```csharp
les valeurs initiales sont 20 et 30
```
{% endbt-collapse %}
