---
layout : "layouts/docs.njk"
title : "Installation"
description : "INSTALLER GIT SUR VOTRE POSTE DE TRAVAIL"
group : "github"
section : "commencer"
toc : true
date : "2022-08-19T04:49:47+02:00"
draft : false
---
## Vérifier que git est opérationnel avec Laragon
Ouvrez Laragon, Cliquez sur Terminal :

{% figure-abs "images/github/laragon_accueil.png", "laragon_accueil.PNG" %}

Saisir git et vous devez voir apparaitre les messages suivants :

{% figure-abs "images/github/laragon_git.png" "laragon_git.PNG"  %}

## Installer git
Vous pouvez installer git depuis Laragon en suivant le chemin :

{% figure-abs "images/github/laragon_install.png" "laragon_install.PNG"  %}

## Utiliser git
vous pouvez utiliser git :

- depuis le terminal de Laragon,
- depuis le terminal de Visual studio code (trouvez des tutos à ce sujet).
## Configurer git sur votre poste de travail
les couleurs :
```bash
git config --global color.diff auto
git config --global color.status auto
git config --global color.branch auto
```
L’identification :
```bash
git config --global user.name “Mon Nom”
git config --global user.email mon@mail.com
git config --global --list  /* Affiche les propriétés globales */
```
