---
layout : "layouts/docs.njk"
title : "Installation"
description : ""
group : "sqlexpress"
section : "commencer"
toc : true
date : "2024-07-01T11:48:48+02:00"
draft : false
---

## 1 - Téléchargement
[Download sqlexpress](https://www.microsoft.com/fr-fr/download/details.aspx?id=104781)

[SQL Server Manager studio - SSMS](https://aka.ms/ssmsfullsetup)

## 2 - Installer sqlexpress
**a - choisir le mode Personnaliser**
{% figure-abs "images/sqlexpress/sqlexpress01.png" "Personnaliser" "50%" "50%" %}
**b - choisir Installation**
{% figure-abs "images/sqlexpress/sqlexpress02.png" "Installation"  "50%" "50%"%}
**c - désactiver Azure**
{% figure-abs "images/sqlexpress/sqlexpress03.png" "Azure"  "50%" "50%"%}
**d - sélectionner les fonctionnalités utiles**
{% figure-abs "images/sqlexpress/sqlexpress04.png" "fonctionnalités"  %}
**e - mettre votre nom comme nom d'instance**
{% figure-abs "images/sqlexpress/sqlexpress05.png" "instance"  "50%" "50%"%}
**f - choisir l'authentification windows**
{% figure-abs "images/sqlexpress/sqlexpress05.png" "authentification"  "50%" "50%"%}

## 3 - Installer SSMS
Il s'agit d'une interface qui, comme phpMyAdmin, permet de travailler plus facilement avec SqlExpress

**a - installer l'application**
{% figure-abs "images/sqlexpress/ssms01.png" "installer" "50%" "50%" %}
**b - vérifiez l'instance**
{% figure-abs "images/sqlexpress/ssms02.png" "instance" "50%" "50%" %}

## 4 - Paramétrez l'identification sqlserver
**a - click droit sur le nom du server et choisir properties**
{% figure-abs "images/sqlexpress/ssms06.png" "server" "50%" "50%" %}
**b - choisir le mode d'authentification sql server et windows**
{% figure-abs "images/sqlexpress/ssms07.png" "server" "50%" "50%" %}
**c - Lancer le gestionnaire de configuration**
{% figure-abs "images/sqlexpress/ssms08.png" "gestionnaire conf"  %}
**d - clicker sur la connection réseau et clique droit sur TCPIP, puis Activer le protocole**
{% figure-abs "images/sqlexpress/ssms09.png" "activer ip" %}
**e - clicker sur l'onglet Adresse IP et mettre le protocole au port 1433**
{% figure-abs "images/sqlexpress/ssms10.png" "port" "50%" "50%" %}


