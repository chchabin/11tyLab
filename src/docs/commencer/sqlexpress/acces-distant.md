---
layout : "layouts/docs.njk"
title : "Acces distant"
description : ""
group : "sqlexpress"
section : "commencer"
toc : true
date : "2024-10-17T10:46:01+02:00"
draft : false
---

## 1 - Créer une connexion avec sqlexpress
Connectez-vous à SSMS, si besoin.

**a - créez un nouveau login**
{% figure-abs "images/sqlexpress/ssms03.png" "login" "50%" "50%" %}
**b - choisir général**
1. choisir sql authentification
2. mettre un mot de passe
   {% figure-abs "images/sqlexpress/ssms04.png" "authentification" "50%" "50%" %}
   **c - choisir Server Roles**
* cocher sysadmin
  {% figure-abs "images/sqlexpress/ssms05.png" "admin" "50%" "50%" %}

## 2 - Connexion à une machine virtuelle

**Désactiver le pare-feu windows**

## 3 - Changer le nom du server
Aller dans
1. paramètres
2. système
3. A propos de
4. Renommer ce pc

Mettre votre nom à la place du nom existant.