---
layout : "layouts/docs.njk"
title : "Tests"
description : ""
group : "introduction"
section : "programmation-objet"
toc : true
date : "2022-12-03T08:53:25+01:00"
draft : false
---
## 1- Introduction
### A - les test manuels
#### a - cas général
L'objectif des tests est de s'assurer que le projet réponde au cahier des
charges et se comporte comme attendu.

Le premier test, c'est celui que nous faisons naturellement en écrivant un bout
de code, pour le lancer ensuite et vérifier s'il fait ce que nous souhaitons.

Ça a un côté grisant, car c'est interactif, le résultat est immédiat et la
correction s'ensuit de suite.

Cependant, dans la pratique, ce n'est pas gérable sur le long-terme :
- oubli des situations intéressantes (il faut tester les cas aux limites !)
- cumul des combinatoires au fur-et-à-mesure de l'enrichissement des
  fonctionnalités
- une fonctionnalité qui a marché à un moment peut ne plus fonctionner par
  après
- des portions de code peuvent se trouver difficilement atteintes une fois que
  le code s'est enrichi
- un projet conséquent ne pourra jamais être conçu d'une pièce avant d'être
  exécuté !

La réponse est donc de mettre en place des tests automatisés.
#### b - les tests exploratoires
De nos jours, les équipes doivent adopter l'intégration continue et répondre à la demande du marché en matière d'expériences 
numériques de qualité pour satisfaire les attentes croissantes des clients. Si la rapidité de mise sur le marché est 
importante, certains bugs coûtent des millions de dollars, et des expériences utilisateur catastrophiques sont toujours 
très coûteuses. De Boeing à Instagram, les exemples de situations où la précipitation à livrer dans les délais et des tests de mauvaise qualité ont conduit à des dommages financiers et en termes de réputation ne manquent pas.

La plupart des tests de qualité des logiciels utilisent une approche structurée. Les cas de test sont créés sur la base de `user stories` déjà définies, et les données de test sont structurées sur la base de ces cas de test. La couverture des tests est mesurée à l'aide de métriques d'ingénierie logicielle et, dans la plupart des cas, elle est techniquement adéquate.

Mais les cas limites manquent souvent à l'appel. Ceux-ci sont découverts lors des tests d'acceptation par l'utilisateur (UAT) et sont testés en fonction des personas utilisateur. D'autre part, les tests exploratoires sont de nature aléatoire ou non structurée et peuvent révéler des bugs qui ne seraient pas découverts pendant la phase structurée des tests.

Grâce aux tests exploratoires, les testeurs suivent une user story qui respecte une certaine séquence. Ils peuvent annoter les défauts, ajouter des assertions et des mémos vocaux, et créer de la documentation à la volée. C'est ainsi qu'une user story est convertie en cas de test. Ces informations peuvent également être utilisées pour l'assurance qualité.
### B - les tests automatisés

Les tests automatisés, d'autre part, sont effectués par une machine qui exécute un script de test programmé à l'avance. 
Ces tests peuvent énormément varier en termes de complexité, de la vérification d'une seule méthode dans une classe 
jusqu'à s'assurer que l'exécution d'une séquence d'actions complexes dans l'interface utilisateur mène aux mêmes résultats. 
Cette méthode est beaucoup plus robuste et fiable que les tests manuels, mais la qualité de vos tests automatisés dépend 
de la qualité de vos scripts de test. Si vous débutez avec les tests, vous pouvez lire notre tutoriel sur l'intégration 
continue avant de programmer votre première suite de tests.  

Les différents types de tests :
- Tests d'unités
- Tests d'intégration
- Tests fonctionnels
- Tests de bout en bout
- Tests d'acceptation
- Tests de performance
- Smoke tests

#### a - Tests d'unités
Les tests unitaires sont de très bas niveau, près de la source de votre application. Ils consistent à tester les méthodes et fonctions individuelles des classes, des composants ou des modules utilisés par votre logiciel. Les tests unitaires sont en général assez bon marché à automatiser et peuvent être exécutés très rapidement par un serveur, d'intégration continue.

#### b - Tests d'intégration
Les tests d'intégration vérifient que les différents modules ou services utilisés par votre application fonctionnent bien ensemble. Par exemple, ils peuvent tester l'interaction avec la base de données ou s'assurer que les microservices fonctionnent ensemble comme prévu. Ces types de tests sont plus coûteux à exécuter, car ils nécessitent que plusieurs parties de l'application soient fonctionnelles.

#### c - Tests fonctionnels
Les tests fonctionnels se concentrent sur les exigences métier d'une application. Ils vérifient uniquement la sortie d'une action et non les états intermédiaires du système lors de l'exécution de cette action.

Il y a parfois une certaine confusion entre les tests d'intégration et les tests fonctionnels, car ils nécessitent tous les deux plusieurs composants pour interagir. La différence réside dans le fait qu'un test d'intégration peut simplement vérifier que vous pouvez interroger la base de données, tandis qu'un test fonctionnel s'attend à obtenir une valeur spécifique de la base de données, telle que définie par les exigences du produit.

#### d - Tests de bout en bout
Les tests de bout en bout reproduisent le comportement d'un utilisateur avec le logiciel dans un environnement applicatif complet. Ils vérifient que les différents flux d'utilisateurs fonctionnent comme prévu et peuvent être aussi simples que le chargement d'une page Web ou la connexion. Des scénarios beaucoup plus complexes peuvent aussi vérifier les notifications par e-mail, les paiements en ligne, etc.

Les tests de bout en bout sont très utiles, mais ils sont coûteux à réaliser et peuvent être difficiles à gérer lorsqu'ils sont automatisés. Il est recommandé d'avoir quelques tests clés de bout en bout et de s'appuyer davantage sur des tests de niveau inférieur (tests unitaires et d'intégration) pour être en mesure d'identifier rapidement les changements de dernière minute.

#### e - Tests d'acceptation
Les tests d'acceptation sont des tests formels exécutés pour vérifier si un système répond à ses exigences métier. Ils nécessitent que l'application soit entièrement opérationnelle et se concentrent sur la simulation du comportement des utilisateurs. Ils peuvent aussi aller plus loin, et mesurer la performance du système et rejeter les changements si certains objectifs ne sont pas atteints.

#### f - Tests de performance
Les tests de performance évaluent les performances d'un système sous une charge de travail spécifique. Ces tests permettent de mesurer la fiabilité, la vitesse, l'évolutivité et la réactivité d'une application. Par exemple, un test de performance peut observer les temps de réponse lors de l'exécution d'un nombre important de demandes ou déterminer le comportement du système face à une quantité élevée de données. Il peut déterminer si une application répond aux exigences de performances, localiser les goulots d'étranglement, mesurer la stabilité pendant les pics de trafic, et plus encore.

#### g - Smoke tests
Les smoke tests sont des tests simples qui vérifient le fonctionnement de base d'une application. Ils sont conçus pour 
être rapides à exécuter, et leur but est de vous donner l'assurance que les caractéristiques principales de votre système 
fonctionnent comme prévu.

Les « smoke tests » peuvent être utiles juste après la création d'un build afin de décider si vous pouvez exécuter des tests plus coûteux. Ils peuvent également être utiles après un déploiement pour vous assurer que l'application s'exécute correctement dans l'environnement nouvellement déployé.
### C - Mise en œuvre
#### a - Les cas de test
C’est la plus petite unité du test ; un cas précise les conditions d’exécution et le résultat attendu
{% callout %}
**Exemple :**  
Un cas de test d’un test de charge d’une page d’un site web va se faire en simulant 1000 accès simultanés sur cette page : le résultat attendu portera sur le temps d’accès en ms. Un autre cas de test portera sur 2000 accès simultanés.
{% endcallout %}
La procédure de test (pour un cas de test) doit fournir toutes les explications sur les conditions de réalisation du cas.  
Ainsi une procédure peut (par exemple) être automatisée ou lancée par un script.  
En effet l’échec d’un cas de test peut provenir du programme ou de la procédure elle-même.
#### b - Quand définir les tests ?
La définition des tests est parallèle à la réalisation du projet.
{% callout %}
Par exemple lorsque l’on définit un cas d’utilisation, on définit les tests à réaliser.
{% endcallout %}
#### c - Quand réaliser les tests ?
Après le codage  
Mais aussi parfois avant !!!  
Des méthodologies ont été développées dans ce sens.
## 2 - Le Test driven development (TDD)
Le Test-Driven Development(TDD), ou développement piloté par les tests en français, est une méthode de développement de logiciel 
qui consiste à concevoir un logiciel par petites étapes, de façon progressive, en écrivant avant chaque partie du code source 
propre au logiciel les tests correspondants et en remaniant le code continuellement.

En 2014, Robert C. Martin reformule d'ailleurs les trois lois de TDD.
Sans le terme "unitaire" et sans ambiguïté
{% bs-table %}

| Dénomination | Formulation                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------|
| Loi n° 1     | Il faut écrire un test qui échoue avant d’écrire le code de production correspondant.                               |
| Loi n° 2     | Il faut écrire une seule assertion à la fois, qui fait échouer le test ou qui échoue à la compilation.              |
| Loi n° 3     | Il faut écrire le minimum de code de production pour que l'assertion du test actuellement en échec soit satisfaite. |
{% endbs-table %}
### Application
Concrètement, cela signifie que :
- L’écriture des tests (utilisant une classe de test) est écrite au préalable
- Les tests ne vont pas passer puisque le code à tester n’est pas écrit !!!
- On écrit le code qui doit permettre de passer les tests
- On recommence en ajoutant de nouveaux tests
- Etc..
### Erreurs courantes
Quelques erreurs courantes des programmeurs novices en développement par les tests :

- oublier de dérouler les tests fréquemment
- écrire de nombreux tests à la fois
- écrire des tests d'une granularité inadaptée
- écrire des tests non probants, par exemple dépourvus d'assertions
- écrire des tests pour du code trivial, par exemple des accesseurs

Quant à l'organisation de l'équipe autour de cette pratique, les écueils suivants sont courants :
- adoption partielle : seuls certains développeurs plus motivés ou mieux formés utilisent TDD ; on ne peut pas attendre de bénéfices collectifs dans ce cas
- mauvais entretien de la batterie de tests : en particulier, une batterie de tests qui prend trop longtemps à dérouler
- délaissement de la batterie de tests : découlant parfois du mauvais entretien, parfois d'autres facteurs tel un trop brusque renouvellement de l'équipe

## 3 - Behaviour-Driven Development (BDD)
BDD est une élaboration des pratiques TDD (développement par les tests) et ATDD (développement par les tests client).

Au lieu de parler de "tests", une personne utilisant BDD préfèrera le terme "spécifications". Il s'agit en fait de réunir dans un même document des exigences (**User Stories**) exprimés selon le formalisme rôle-fonction-bénéfice et des scénarios ou exemples exprimés selon le canevas given when-then, ces deux notations étant les plus lisibles.

En mettant l'accent sur le mot "spécifications", BDD cherche à fournir une réponse unique à ce que nombre d'équipes Agiles considèrent comme deux activités séparées : 

l'élaboration de tests unitaires et de code "technique" d'une part, l'élaboration de tests fonctionnels (servant à formaliser les exigences) et de "fonctionnalités" d'autre part.

Plutôt que parler de "test unitaire d'une classe", une personne ou une équipe utilisant BDD préfère dire qu'elle fournit les "spécifications du comportement (behaviour) de la classe". Cela se traduit par une plus grande attention portée au rôle documentaire de ces spécifications : leur nom doit être parlant et, complété par leur description structurée par le canevas given when then, doit pouvoir servir de documentation technique.

Plutôt que parler de "test fonctionnel" on préfèrera "spécifications du comportement du produit" ; par ailleurs le volet technique de BDD est complété par un ensemble de techniques favorisant la conversation avec les interlocuteurs responsables de la définition du produit.

En supplément des techniques de refactoring utilisées dans TDD, l'approche BDD prête, en matière de conception, une attention particulière à la répartition des responsabilités ce qui conduit à favoriser la technique dite de "mocking".

En synthèse, BDD consiste à augmenter TDD et ATDD d'un certain nombre de principes supplémentaires :

- appliquer le principe des "cinq pourquoi" à chaque User Story proposée pour en comprendre l'objectif

- raisonner "de l'extérieur vers l'intérieur", c'est-à-dire toujours implémenter le comportement qui contribue le plus directement à cet objectif

- décrire ces comportements dans des notations accessibles à tous : experts fonctionnels, développeurs, testeurs

- appliquer ces techniques jusqu'aux plus bas niveaux de description du logiciel, en étant attentif à la répartition des comportements entre classes

L’écriture de ces critères d’acceptation s’écrivent dans un langage naturel appelé **Gherkin**. Voici un exemple simple :
{% callout %}
**Étant donné que** je suis le client sur la fiche produit  
**Quand** je clique sur ajouter au panier sur le produit d’identifiant “255”  
**Et que** le stock est à “3”  
**Alors** le produit se rajoute au panier.  
{% endcallout %}