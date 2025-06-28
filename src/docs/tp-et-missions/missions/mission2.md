---
layout : "layouts/docs.njk"
title : "Mission2"
description : "Aide pour la gestion des missions"
group : "missions"
section : "tp-et-missions"
toc : true
date : "2022-10-20T17:11:35+02:00"
draft : false
---

{% callout %}
Vous avez une mission à remplir, votre cahier des charges vous a été communiqué.

Ce document vous fournit des pistes à suivre pour vous organiser.
{% endcallout %}

## Définition des tâches

La description des cas d’utilisation n’est pas suffisante pour définir les tâches qui devront être réalisées en
parallèles. Vous devez définir des tâches précises, par exemple:
{% callout danger%}
- Maquettage de l’application (dessin *logique* des écrans attendus),
- Modification de la base de données si besoin
- Tests fonctionnels,
- Point 1 et 2 du cas d’utilisation 1
- ` `etc…
  {% endcallout %}
La définition des tâches fait l’objet d’un document qui décrit rapidement chaque tâche, le cahier des tâches.
Elaboration d’un diagramme de Gantt (ou autre) qui évalue les temps et définit les ressources (qui fait quoi). Vous
utilisez un logiciel.

Ces tâches sont amenées à évoluer: certaines tâches n’ont pas été prévues au début du projet (par exemple); d’autres
tâches prendront plus de temps que prévu, certaines moins. C’est ainsi que vous aurez plusieurs versions de la
description des tâches (diag de Gantt) et de leurs affectations.

## Suivi du projet

Prévoir des **jalons, dates** où des objectifs devront être atteints: ceci donne lieu à un cahier « suivi de projet »
dans lequel est indiqué l’état d’avancement du projet.

*Par exemple, le premier jalon sera la définition d’une première version des tâches et de leurs répartitions, un autre
jalon serait la version 0.1 de l’application: l’architecture MVC sans accès au Modèle (que des vues et des contrôleurs).
Il faut fixer des dates pour ces jalons*.

## Travail en équipe

Vous travaillez en parallèle ; il faut prévoir des temps pour faire le point, dix minutes avant la fin de chaque séance.
C’est le chef de projet qui fera la synthèse dans le cahier « suivi de projet » -en dehors des séances-

## Gestion des versions

Chaque membre du groupe devra **gérer les versions de son code.**

Voir, à ce propos la documentation *guide GitLab* déposé sur la plateforme.

## Travail collaboratif

La version courante du projet est unique et doit être à un endroit particulier –sur le compte GitLab du chef de
projet- ; chaque développeur travaille sur des copies de cette version. En fin de séance, la version courante est mise à
jour à partir des différents travaux et clonée sur GitLab.

## Divers documents doivent ainsi être produits :

- les maquettes d’écran
- les tests fonctionnels, ce qui est attendu et ce qui est obtenu et quand
- Diagramme de Gantt

**Cette documentation devra être centralisée sur un site accessible à tous les membres d’un groupe**

**Rappels** (contraintes):

- Le code doit être documenté (cf. la documentation déjà présente dans le code de GSB fourni)

## Laravel

### Installer Laravel

1. Lancer le terminal
2. saisir `composer selfupdate`
3. déplacez-vous pour aller dans le répertoire de publication (www sous Windows)
4. Installer l’application :

   {% callout danger %}
   Pour la version `11` La procédure est différente car laravel utilise par défaut sqlLite
   {% endcallout %}
    ```bash
    composer create-project --prefer-dist laravel/laravel gsbLaravel
    ```
5. Télécharger la version **zip** de gsb master sur [github](https://github.com/chchabin/gsb-laravel11-master)
6. Copier dans le répertoire gsbLaravel du répertoire de publication (www sous windows)
   l’ensemble des fichiers dézippés ; **vous répondrez que vous voulez modifier à chaque fois que
   la question est posée**.
7. Crées la base de données
8. Modifier les paramètres de connexion du fichier `.env`   
9. Allez dans le repertoire `gsbLaravel` et saisir
    ```bash
    php artisan migrate
    ```

### Lancer laravel

{% callout %}
Pour éviter les bugs  
{% endcallout %}

1. Lancer le terminal
2. se déplacer dans le répertoire où se trouve gsbLaravel
3. saisir `php artisan serve`
4. Dans le navigateur saisir[ http://127.0.0.1:8000 ](http://127.0.0.1:8000/)

### Debugger votre programme

1. L'instruction **dd()** affiche les données passées en paramètre et stoppe le programme
2. L'instruction **dump()** affiche les données passées en paramètre et continue l'exécution
3. L'instruction **@dump()** a la même fonctionnalité que **dump()** mais s'exécute dans la vue.
4. Les logs sont visibles dans le répertoire **storage/logs**
