---
layout : "layouts/docs.njk"
title : "Programmation"
description : ""
group : "prologue"
section : "csharp"
toc : true
date : "2022-08-18T14:50:35+02:00"
draft : false
---
## C’est quoi un programme ?
Une suite d’instructions envoyées au processeur pour qu’il les exécute (CPU, microcontrôleur, …). 
Le processeur ne comprend que des instructions machines, qui sont assez illisibles et rébarbatives. 
Le programme est aussi appelé code source. Une multitude de langages existe (plusieurs centaines), 
Les différents langages présentent souvent des intérêts dans des domaines particuliers :  
* Python : initialement un langage de scripting, qui peut tout faire aujourd’hui (data, web, bdd, gui, …)
* Javascript : initialement un langage pour les applications web, qui peut quasiment tout faire aujourd’hui
* Java : applications d’entreprise (avec une bonne gestion des erreurs)
* C++ : applications avec besoin de rapidité
* PHP : processeur de HTML
* …
{% callout %}
### Le chiffre : 870 languages
C'est le nombre de languages recensés par [rosetta code](www.rosettacode.org)
{% endcallout %}
## Les paradigmes de programmation
Un paradigme de programmation est l’approche que l’on a de la programmation informatique pour traiter un problème et 
le formuler dans un langage. Différents paradigmes sont par exemple :
* *Impératif (ou procédural)* : le programme est composé d’une suite d’instructions dont on compose le flux (séquençage). Ex. de langages : C, fortran, COBOL
* *Déclaratif fonctionnel (ou logique)* : le programme décrit des fonctions (ou prédicats) qui peuvent être appelé récursivement. Ex. de langages : Lisp, Haskell, oCaml
* *Orienté objet* : les programmes sont découpés en modules isolés les uns des autres, les objets, qui communiquent par message et conservent leurs données et les méthodes associées (état). Ex. de langages : C++, Java, Pharo (Smalltalk)
* *Concurrent* : le programme peut effectuer plusieurs tâches en mêmes temps. Ex. de langages :
* *Visuel* : le programme n’est plus un texte, mais un dessin
* *Événementiel* : le programme ne suit pas une séquence, mais réagi à des actions (événements)
* *Basé Web* : les images et le code s’échangent entre ordinateur. Ex. de langages : Java, PHP, Javascript
## Quelques principes
### La dette technique

{% figure-abs "images/csharp/dettetech.png" "dette technique" "100%" "100%" %}
 
Un projet de développement logiciel inclut souvent une conception logicielle, formalisée ou non. 
L’écriture du code, si elle suit les bonnes pratiques, assure la cohérence du projet et facilite sa maintenance :
* *corrective* : corriger les bugs informatiques,
* *évolutive* : ajouter de nouvelles fonctionnalités au logiciel.  
La dette technique survient quand les bonnes pratiques n'ont pas été respectées lors de l'écriture du code de votre solution.  
Dans ce cas, une conception logicielle négligée va induire des coûts futurs à rembourser 
sous forme de temps de développement supplémentaire, et des bugs de plus en plus fréquents.
### DRY “don’t repeat yourself”
Ce principe est d’éviter au maximum les répétitions d’informations dans un programme. Chaque élément de connaissance 
ou de logique d’un programme doit avoir une représentation unique et non ambiguë.  

L’erreur associée est le **WET** (We enjoy typing ou Wasting everyone’s time) qui consiste à réécrire plusieurs 
les mêmes bouts de code à différents endroits, ce qui implique que la maintenance en sera compliquée, car redondante.  

La méthode consiste à diviser le système en petites unités réutilisables (fonctions) appelées. 
Il est rarement nécessaire d’écrire des fonctions/méthodes très longues.  

Les bénéfices du DRY sont :
* l’écriture du code est plus rapide et moins douloureuse,
* la maintenance est simplifiée,
* le risque de bugs est moindre.

### KISS : Keep it simple, stupid
Ce principe est de garder un code lisible, simple et clair, facile à comprendre. 
Si la machine ne comprend que des 0 et des 1, ce n’est pas le cas des humains. 
La programmation est faite aussi pour ceux qui la font.  
Un indicateur est d’avoir des fonctions qui ne dépassent pas 50 lignes (hors commentaires).  
{% callout %} Une fonction doit assurer 1 seule fonction, celle pourquoi elle est créée. {% endcallout %}
La méthode pour y arriver est d’envisager différentes méthodes pour résoudre un problème et de conserver la plus simple.

### SOLID
SOLID est un acronyme des cinq premiers principes de la conception orientée objet (OOD) de Robert C. Martin.  
SOLID signifie :

* S - Responsabilité unique (Single responsibility principle)
* O - Ouvert/fermé (Open/closed principle)
* L - Substitution de Liskov (Liskov substitution principle)
* I - Ségrégation des interfaces (Interface segregation principle)
* D - Inversion des dépendances (Dependency inversion principle)

Plus de détails sur ce [site](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design-fr)

### YAGNI
YAGNI (anglicisme, acronyme anglais de you ain't gonna need it, qui peut se traduire par « vous n'en aurez pas besoin ») 
est un principe d'`extreme programming` qui déclare que les programmeurs ne devraient pas ajouter de fonctionnalité 
à un logiciel tant que celle-ci n'est pas absolument nécessaire.  
Ron Jeffries recommande par ailleurs : « mettez toujours en œuvre les choses quand vous en avez effectivement besoin, 
pas lorsque vous prévoyez simplement que vous en aurez besoin ».

{% figure-abs "images/csharp/yagni.png" "yagni" "100%" "100%" %}

## Web et niveaux de programmation
Les quatre principaux niveaux de programmation pour les langages Web :
* Procéduraux,
* Programmation orientée objet (OOP),
* MVC : Modèle Vue Contrôleur,
* ORM : mapping objet-relationnel (une couche d’abstraction entre le monde objet et monde relationnel), composant disponible 
dans les frameworks.
