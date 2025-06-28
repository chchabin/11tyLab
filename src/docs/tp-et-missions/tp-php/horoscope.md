---
layout : "layouts/docs.njk"
title : "Horoscope"
description : ""
group : "tp-php"
section : "tp-et-missions"
toc : true
date : "2023-04-06T09:53:06+02:00"
draft : false
---
Votre Association de club de Bridge comporte beaucoup de joueurs superstitieux. Il vous est demandé de faire une 
application d'horoscope pour tranquiliser les joueurs.
{% callout%}
Les caractéristiques techniques sont les suivantes :
1. Langage : PHP, HTML, CSS
2. Pattern :  MVC
3. Framework css : [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
   {% endcallout%}
**Horoscope :**  
Les horoscopes informatisés affichent des réponses préprogrammées en fonction du signe de l’utilisateur. 

Écrire le programme qui réalise le cas d’utilisation suivant :
## Étape 1 : Afficher la liste des signes
{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web Horoscope         | 
|---------------------------------------------------|
| **Description cas d’utilisation**                 |
| **Nom cas d’utilisation :**   Afficher les signes |
| **Acteur déclencheur :**   l’utilisateur          |
| **Scénario nominal :**                            |                                                                                                                                                                                          
| 1. L’utilisateur demande à afficher les signes.   |
| 2. Le système retourne la vue listesignes         |             |
| **Extensions :**                                  |
| **Exceptions :**                                  |  
{% endbs-table %}

## Étape 2 : Afficher l'horoscope du signe

{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web Horoscope                   | 
|-------------------------------------------------------------|
| **Description cas d’utilisation**                           |
| **Nom cas d’utilisation :**   Afficher l'horoscope du signe |
| **Acteur déclencheur :**   l’utilisateur                    |
| **Scénario nominal :**                                      |                                                                                                                                                                                          
| 1. L’utilisateur demande à afficher l'horoscope.            |
| 2. Le système récupère le signe demandé.                    |
| 3. Le système retourne l'horoscope.                         |             |
| **Extensions :**                                            |
| L'utilisateur demande un nouveau signe.                     |
| **Exceptions :**                                            |  
{% endbs-table %}

## Étape 3 : Internationalisation
Votre horoscope a tellement de succès qu’un grand opérateur américain veut racheter votre développement pour 1 million 
de $, du moment que vous pouvez en faire une version bilingue (l’utilisateur choisit sa langue, et en fonction de cela, 
le site lui affiche la version localisée).
{% callout%}
Vous pouvez utiliser un service de traduction automatique en ligne (en première approximation) pour la version anglaise.
{% endcallout%}

## Données en français

{% bs-table "table-bordered mx-auto"%}

| **Signe**  | **Message à afficher**                                                                  |
|:-----------|:----------------------------------------------------------------------------------------|
| Bélier     | Vous devrez faire les efforts les plus sérieux pour acquérir un bon niveau.             |
| Taureau    | Une de vos plus grandes qualités est la capacité de saisir les théories.                |
| Gémeaux    | De temps à autre, admettez que vous n'êtes pas le seul à raisonner avec logique.        |
| Cancer     | La rapidité de votre intelligence risque de vous entraîner à négliger certains détails. |
| Lion       | Un effort vers la patience et la persévérance sera pour vous grandement payant.         |
| Vierge     | Faites l'effort de vous concentrer.                                                     |
| Balance    | Vous avez une forte tendance à choisir les solutions astucieuses.                       |
| Scorpion   | Renoncez à imposer vos propres données et appliquez les méthodes apprises.              |
| Sagittaire | Pardonnez avec aisance et sans ambiguïté, mais n'acceptez aucun extrême.                |
| Capricorne | Une certaine facilité ne doit pas vous détourner de l’objectif.                         |
| Verseau    | Ce travail vous demandera beaucoup d’ingéniosité.                                       |
| Poissons   | Votre esprit vif et limpide facilite la résolution des problèmes.                       |
{% endbs-table %}
