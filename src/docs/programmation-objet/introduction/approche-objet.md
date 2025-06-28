---
layout : "layouts/docs.njk"
title : "Approche Objet"
description : ""
group : "introduction"
section : "programmation-objet"
toc : true
date : "2022-09-02T18:39:05+02:00"
draft : false
---
## 1 - Conception d’objet
La question est : De quoi parle-t-on ?

Quelles sont les entités qui interviennent dans mon problème ?

Exemple :
modéliser un logiciel de trafic routier
les entités sont :

- les feux tricolores
- les carrefours
- les véhicules
- les agents de la circulation.

Lorsqu’un feu tricolore passe au vert, il envoie cette connaissance (= ce message) à l’agent posté à ce carrefour. L’agent prend une décision et en informe (envoi de messages) les chauffeurs des véhicules.
{% callout %}
**Définition**  
un objet se compose d’**informations** et d’**actions**. Les actions utilisent (et parfois modifient) les informations de l’objet.
{% endcallout %}
- L’ensemble des informations d’un objet donné est appelée son état.
- L’ensemble des actions applicables à un objet représente son comportement.

{% callout %}
**Remarque**  
Les actions associées à un objet s’expriment généralement sous la forme de verbes à l’infinitif (créditer, débiter).
{% endcallout %}
Un objet est composé de 2 parties :

- partie interface : opérations qu’on peut faire dessus (partie publique)
- partie interne (intime) : données sensibles de l’objet (partie privée) Les utilisateurs (c’est-à-dire les éléments extérieurs) de l’objet ne voient que la partie interface.

Ces entités doivent être indépendantes
## 2 - Exemple d’objet
La renault R21 bleue immatriculée 2245 CDV 75 de mon chef de service est un objet
{% bt-collapse "notes1" %}
```batch
objet R21_de_mon_chef
genre : Renault
immatriculation : 2245 CDV 75
NbPlaces : 5
propriétaire: chef de service
s_arreter()
avancer()
fin objet
```
{% endbt-collapse %}
Un autre objet serait ma clio immatriculée 4357 NBG 93
{% bt-collapse "notes2" %}
```batch
objet ma_Corsa
genre : Opel
immatriculation : 4357 NBG 93
NbPlaces : 4
propriétaire: Moi - même
s_arreter()
avancer()
fin objet
```
{% endbt-collapse %}
{% callout %}
**Remarque**
Les objets ne diffèrent que par leurs attributs (en bleu ici).
{% endcallout %}
Différentes instances de la même classe :

- contiennent des attributs aux valeurs différentes
- partagent un même comportement
## 3 - Un objet sans classe… n’a pas de classe
{% callout %}
**Définition**
Modèle décrivant le contenu et le comportement des futurs objets de la classe.
{% endcallout %}
**Le contenu** correspond aux attributs dans lesquels sont stockées les méthodes.  

**Le comportement** correspond aux méthodes (l’autre nom pour les fonctions dans les classes)  

**Représentation UML de la classe**  

{% figure-abs "images/csharp/classUml.png" "Classe UML" %}

**Exemple de classe**  
la classe des véhicules, la classe des camions, des automobiles.
La classe des automobiles peut être décrite par :
{% bt-collapse notes3 %}
```batch
classe Automobile
genre
immatriculation
NbPlaces
propriétaire
s_arreter()
avancer()
fin classe
```
{% endbt-collapse %}
## 4 - Les classes et leur jardin secret
{% callout %}
**Encapsulation**  
L’encapsulation consiste à gérer la classe comme boite noire responsable de sa propre cohérence.
{% endcallout %}

Pour y parvenir, il est possible de définir la visibilité de chacun des membres d’une classe.

Un membre peut être :

- public(+) : visible par tous
- private(-) : visible uniquement des membres de la classe
- protected(#) : utile lors de l’héritage
- rien : (~) visibilité par défaut, uniquement au niveau package
