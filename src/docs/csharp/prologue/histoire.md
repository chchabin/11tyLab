---
layout : "layouts/docs.njk"
title : "Histoire"
description : ""
group : "prologue"
section : "csharp"
toc : true
date : "2023-11-09T16:30:14+01:00"
draft : false
---

# Petite Histoire de la programmation et des bonnes pratiques.

On peut distinguer trois grandes phases dans l'histoire de la programmation :
1. La Naissance du code en tant que discipline
2. Le “Golden Age” qui nous donne les bases indiscutables
3. Les dérives de l’agilité et de l’architecture

## La Naissance du code en tant que discipline

Le fondateur est [Alan Turing](https://fr.wikipedia.org/wiki/Alan_Turing) qui s'illustra durant la seconde guerre mondiale
dans la cryptologie.
### Naissance du code
1. Il conçoit l'informatique théorique avec la machine de Turing
2. Il construit l'Automatic Computing Engin (ACE)

{% figure-abs "images/csharp/pilot-ace.jpg" "pilot-ace" "100%" "100%" %}

### Paradigmes de programmation

|          Paradigme           | Année de naissance |                            Inventeur                            | Avantage                                                                                | Inconvenient                                                                     |
|:----------------------------:|:------------------:|:---------------------------------------------------------------:|:----------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
|  Programmation Procédurale   |        1950        |                      John Backus (Fortran)                      | Ordre et structure - Contrôle fin des opérations - Efficace pour les tâches simples     | Peut devenir complexe - Manque de modularité                                     |
| Programmation Fonctionnelle  |        1950        |               Alonzo Church John McCarthy (LISP)                | Immuabilité et fonctions pures - Raisonnement facile sur le code - Hautement modulaire  | Peut être difficile à comprendre - Pas toujours optimise pour la performance     |
| Programmation Orientée Objet |        1960        | Ole-John Gale   Kristen Nygaard   (Simula) Alan Kay (Smalltalk) | Modélise le monde naturellement - Réutilisable et extensible (encapsulation des données | Peut être excessivement complexe - Pas toujours nécessaire pour tous les projets |

### Conférence de Garmisch (1968)
Le terme « `ingénierie logicielle` » a été inventé lors d'une conférence de l'OTAN  tenue du 7 au 11 octobre 1968
à Garmisch, en AllemagneLien. La conférence a été organisée en réponse à l'impression que la programmation 
informatique n'avait pas suivi les progrès du matériel informatique.

L'objectif était d'identifier les bonnes pratiques dans la cadre de développement de projet et de logiciels.
## Le “Golden Age” qui nous donne les bases indiscutables
### En 1990, le principe SOLID 

{% figure-abs "images/csharp/solid.webp" "solid" "100%" "100%" %}

### En 1996 le gang of Four(GoF) et les design pattern :
4 ingénieurs ont catégorisé tous les problèmes récurrents quand on produit du logiciel en programmation objet.

Ces [pattern](https://www.youtube.com/@ChristopherOkhravi/featured) sont un fondement de la programmation moderne.



{% figure-abs "images/csharp/Types-of-Design-Pattern.jpg" "Types-of-Design-Pattern" "100%" "100%" %}

### En 1999, l'extreme programming
L'idée, c'est de ne faire que des bonnes pratiques et d'éviter la dette technique.
- Pousser le test driven development TDD
- Refactoriser en permanence son code

## Le flou de l'agilité et de l'architecture

### En 2001
Conférence de Snowbird dans l'Utah, crée les bases du développement agile, signé par 17 développeurs.

### En 2003
Le domain driven design : les gens utilisent le logiciel car il procure de la valeur.
Il faut se concentrer sur ce domaine de valeur Les utilisateurs n'ont aucune idée, ni aucun intérêt, à connaitre la technique utilisée.

Puis la couche en [oignon](https://lixtec.fr/architecture-oignon-onion-architecture/). La règle d’or de l’architecture est que :

Rien dans un cercle intérieur ne peut savoir quoi que ce soit sur quelque chose dans un cercle extérieur. 
Cela inclut les fonctions, les classes, les variables ou toute autre entité logicielle nommée.


## Synthèse

1. Pas de règles business(métier) dans la vue
2. Tous les éléments qui appartiennent à une couche franchisent les autres couches dns une seule direction
3. Les dépendances pointes toutes vers une couche au niveau (les règles business(métier) ne dependent jamais d'une version technique, mysql ou bootstrap par exemple)
4. L'architecture ne depend pas de la technique
5. Il faut choisir l'architecture adaptée à son projet
