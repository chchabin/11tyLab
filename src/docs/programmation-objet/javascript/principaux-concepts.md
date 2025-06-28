---
layout : "layouts/docs.njk"
title : "Principaux Concepts"
description : ""
group : "javascript"
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
{% endcallout %}
  {% callout danger%}
#### **ATTENTION**
La normalisation n'est pas définitive, elle peut encore évoluer. Vous pouvez consulter le site officiel pour connaitre 
les évaluations.
{% endcallout %}

{% aref "https://www.ecma-international.org/", "Consultez ECMAScript Editions" %}
## 1 - Constructeur
{% callout %}
**Classe : Définition**
le constructeur est une méthode spécifique dont le rôle est de construire un objet, le plus souvent en initialisant ses attributs.
{% endcallout %}
Le constructeur sans argument et les constructeurs paramétriques sont **OPTIONNELS**. De toute façon, un constructeur par défaut est fourni par C# en tenant compte des initialisations explicites et en fournissant des initialisations implicites pour tous les autres variables d’instance.

{% bt-collapse "notes1" %}
```javascript
class Exemple {

            #x=0 // les attributs privés
            y=0 // les attributs public
            static z=9 // les attributs static
            static #w=3 // les attributs privés et static
            
        
        // constructeur
           constructor(a, b) {
                this.#x = a
                this.y = b
            }
        // les méthodes dont toujours public
           f1(a, b)
                {
                    this.y = this.#x**a+b
                    return `${this.#x} ${this.y}`
                 }
}
```
{% endbt-collapse %}
L’utilisation d’un constructeur se fait au moment de l’instanciation de l’objet (opérateur new), en passant en 
paramètres les futures valeurs des attributs de l’objet créé (s’il y en a).
{% bt-collapse "notes2" %}

```javascript
const ex2 = new Exemple(20,30)
console.log(Exemple.z) //Retourne 9
```
{% endbt-collapse  %}
{% callout danger%}
#### **ATTENTION**
Les méthodes ne commencent pas par le mot `function`.
{% endcallout %}
## 2 - Autoréférence : le mot-clé `this`
{% callout %}
**Définition**  
À l’intérieur d’une méthode, le mot-clé this permet d’accéder à l’instance (l’objet) sur lequel la méthode est appelée
{% endcallout %}
Aucune variable ne peut être utilisée sans être une variable d’instance ou une variable locale déclarée dans ce bloc ou un bloc supérieur.

Lorsqu’il y a conflit de nom entre une variable locale et une variable d’instance, la variable locale l’emporte et 
masque la variable d’instance. Pour contourner le masquage et utiliser la variable d’instance, il faut utiliser le mot 
clef `this` qui désigne l’instance courante :
```javascript
this.variable_dinstance
```

## 3 - Accesseurs
{% callout %}
**Définition**  
Un accesseur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en lecture
{% endcallout %}
En anglais, ils commencent par le mot clé `get`.

Voilà pourquoi on les appelle aussi des getters
{% bt-collapse "notes4" %}
```javascript
class Exemple {

            #x=0 // les attributs privés
            y=0 // les attributs public
            static #z=3 // les attributs privés et static
            
        
        // constructeur
           constructor(a, b) {
                this.#x = a
                this.y = b
            }
        // les méthodes dont toujours public
           f1(a, b){
                    this.y = this.#x**a+b
                    return `${this.#x} ${this.y}`
                 }
        // acesseur
           get valX(){
                    return this.#x
                   }
}
```
{% endbt-collapse %}
L'appel de la méthode sera :
```javascript
console.log(ex2.valX) //Retourne la valeur de x
```
## 4 - Mutateurs
{% callout %}
**Définition**  
Un mutateur est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en écriture
{% endcallout %}
En anglais, ils commencent par le mot clé `set`.

Voilà pourquoi on les appelle aussi des setters
{% bt-collapse notes5 %}
```javascript
class Exemple {

            #x=0 // les attributs privés
            y=0 // les attributs public
            static #z=3 // les attributs privés et static
            
        
        // constructeur
           constructor(a, b) {
                this.#x = a
                this.y = b
            }
        // les méthodes dont toujours public
           f1(a, b){
                    this.y = this.#x**a+b
                    return `${this.#x} ${this.y}`
                 }
        // acesseur
           get valX(){
                    return this.#x
                   }
        // mutateur
            set valX(value){
                this.#x=value
            }           
}
```
{% endbt-collapse  %}
L'appel de la méthode sera :
```javascript
ex2.valX=5 
```
## 5 - Héritage
Pour qu'une sous-classe hérite d'une autre classe, on utilisera le mot clé `extends`.  
Dans le cas d'un `extends`, vous pouvez aussi appeler les méthodes parentes à l'aide du mot clef `super`. On pourra 
l'utiliser dans le constructeur ou n'importe quelle méthode.
{% bt-collapse notes2 %}
```javascript
class Heritexemple extends Exemple {
          
        
        // constructeur
           constructor(a, b,c) {
               // le mot clé super est utilisé comme super contructeur. Il permet d'appeler
               // et d'avoir accès aux méthodes du parent
               super(a,b)
               this.v=c //l'attribut v est déclaré en même temps que l'affectation 
            }
        // les méthodes dont toujours public
           f2(){
                   
                    return super.f1(7,8)+`${this.#x} ${this.y}`
                 }          
}
```
{% endbt-collapse  %}
L'appel sera :
```javascript
console.log(Heritexemple.f1(6,8))
console.log(Heritexemple.f2())
```