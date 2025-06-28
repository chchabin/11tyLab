---
layout : "layouts/docs.njk"
title : "Fiche Descriptive"
description : "PROJET GESTION DES FRAIS"
group : "missions"
section : "tp-et-missions"
toc : true
date : "2022-10-20T17:30:29+02:00"
draft : false
---

## Description du domaine de gestion
### La gestion des frais de déplacement
Grand poste de dépense, la gestion des frais de déplacement des visiteurs demande un suivi très précis. L’enveloppe annuelle pour ce seul poste s’élève à près de 25 millions d’euros. Il n’est donc pas question de le laisser s’envoler, tout en ne limitant pas les visiteurs à des hôtels de second ordre ou des repas chiches (il en va aussi de l’image de marque du laboratoire et de la motivation des équipes).

Les prix d’hébergement ou de nourriture étant variés d’un lieu à l’autre, d’une région à l’autre, il a été procédé à une évaluation statistique permettant de dégager un montant forfaitaire dans la fourchette haute des dépenses pour chaque type de frais standard : repas midi, relais étape (nuit plus repas), nuitée (hôtel seul), kilométrage (remboursement des frais kilométriques, chaque visiteur dispose d'un badge pour le télépéage pour éviter le remboursement de ces petits montants).

Le remboursement de l'ensemble des frais engagés par les visiteurs s’organise mensuellement et donne lieu à une fiche de frais identifiée par le numéro du visiteur et le mois de l’année.


### Processus à informatiser
Actuellement, au plus tard le 20 de chaque mois, le service comptable adresse aux visiteurs la fiche de demande de remboursement pour le mois en cours. L'application devra permettre aux visiteurs de consulter les notes de frais.

### Consultation
Après authentification grâce aux identifiants à leur disposition, les visiteurs doivent pouvoir consulter sur l'année écoulée, pour chaque mois, le montant du remboursement effectué par le laboratoire et le nombre de prestations pris en compte.
## Spécifications fonctionnelles de l’application de gestion des frais
Ce document concerne les spécifications fonctionnelles de l'application web "Gestion des frais".

Cette application web est destinée aux visiteurs médicaux et personnels du service comptable, les premiers pour renseigner et consulter leurs états de frais, les seconds pour réaliser le suivi des états de frais des visiteurs médicaux jusqu'à leur règlement.

### Cas d'utilisation
Les besoins sont exprimés ici à l'aide des cas d'utilisation : le diagramme des cas d'utilisation pour la vue synthétique de "qui fait quoi", puis une fiche par cas d'utilisation pour décrire les échanges entre le système et l'utilisateur.
### Diagramme des cas d'utilisation
{% figure-abs "images/exercices-et-challenges/missions/cas-utilisation.jpeg" "cas-utilisation" "100%" "100%" %}


## Enregistrement des données
La base de données est modélisée ainsi :
{% figure-abs "images/exercices-et-challenges/missions/sgbd.png" "sgbd" "100%" "100%" %}
