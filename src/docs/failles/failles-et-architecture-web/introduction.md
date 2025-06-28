---
layout : "layouts/docs.njk"
title : "Introduction"
description : ""
group : "failles-et-architecture-web"
section : "failles"
toc : true
date : "2022-10-14T03:05:52+02:00"
draft : false
---
## A - Web et sécurité
Les applications Web sont probablement les services les plus couramment exposés par les entreprises et les institutions sur Internet ; de plus, la plupart des anciennes applications ont désormais une "version web" disponible dans le navigateur. Cette transformation massive fait de la sécurité Web un élément important de la sécurité d’un réseau.
### 1 - Modèle de sécurité du Web
La base du modèle de sécurité du Web est très simple : **ne pas faire confiance au client**. La plupart des informations qu’un serveur recevra peuvent être usurpées par le client. Il vaut mieux être plus prudent que désolé ; il vaut mieux filtrer et échapper à tout, que de réaliser plus tard qu’une valeur que vous pensiez n’être pas contrôlée par l’utilisateur, l’est.
### 2 - Risques de sécurité Web
Les applications Web présentent tous les risques des applications normales :

- mise en péril,
- fuite d’informations,
- atteinte à la réputation,
- perte d’informations,
- perte d’argent.
## B - Architecture du web
Pour consulter un site Web sur Internet, il suffit de taper l’adresse correcte du site dans la barre d’adresse d’un navigateur Web et le site s’affiche (si l’accès au réseau fonctionne). Nous allons tenter de comprendre ce qui se cache derrière cette opération très simple en apparence. Cette architecture s’appelle, dans sa forme simplifiée, l’architecture 3 tiers, car elle fait intervenir 3 éléments :

- le client, un navigateur web dans la plupart des cas,
- le serveur web, qui recevra les requêtes du client. Un serveur d’applications, peut être impliqué pour traiter les requêtes ; dans ce cas, le serveur Web transmettra simplement les requêtes au serveur d’applications,
- le serveur de données, pour récupérer et enregistrer des informations, le plus souvent une base de données.

Tous ces composants peuvent avoir des comportements différents qui auront un impact sur l’existence et l’exploitabilité de la vulnérabilité. Tous ces composants peuvent également présenter des vulnérabilités ou des problèmes de sécurité.
### 1 - La notion de serveur Web
Pour être accessible, un site Web doit être publié sur un **serveur**. Un serveur est un type particulier d’ordinateur dont le rôle est d’attendre les demandes de clients, et d’y répondre. Un serveur rend un service à ses clients.

Il existe de nombreux types de serveurs, en fonction du service rendu : serveur de fichiers, de messagerie, d’authentification... Un serveur qui permet de publier des sites Web est appelé serveur Web.

{% callout %}
**Note**
Une même machine peut rendre différents services (exemple : serveur Web et serveur de fichiers).
{% endcallout %}

Plus précisément, une machine serveur Web embarque et exécute un logiciel serveur, capable de répondre aux demandes de consultations de sites Web. Les logiciels serveurs Web les plus populaires sont [Apache](http://httpd.apache.org/), [Microsoft IIS](http://www.iis.net/) et [nginx](http://nginx.org/).

Les langages de programmation utilisés peuvent être : PHP, Java, Ruby, Python, ASP, C#, ... Ces langages de programmation peuvent également être utilisés dans le cadre d’un framework comme Ruby-on-Rails, `.Net MVC`, Symfony, Django.
### 2 - La notion de client Web
La machine qui permet la consultation du site Web demandé est appelé **client Web**. Il s’agit d’un abus de langage : en réalité, le véritable client est un logiciel qui s’exécute sur cette machine et réalise l’opération de consultation. Ce logiciel est le plus souvent un navigateur Web (*browser*). Les navigateurs Web les plus populaires sont [Microsoft Edge](https://www.microsoft.com/fr-fr/edge), [Mozilla Firefox](https://www.mozilla.org/fr/firefox), [Chrome](https://www.google.fr/chrome/browser/), [Safari](https://www.apple.com/fr/safari/) et [Opera](http://www.opera.com/fr).

D’autres types de logiciels que les navigateurs peuvent jouer le rôle de clients Web en se connectant à des serveurs Web. Exemples : robots d’indexation, aspirateurs Web, applications mobiles, etc.
### 3 - Le serveur de données
Le serveur de données peut être situé sur le même serveur que le serveur Web ou sur un autre. Cela peut expliquer des comportements bizarres lors de l’exploitation de certaines vulnérabilités.
En voici quelques exemples :

- fichiers simples,
- bases de données relationnelles comme Mysql, Oracle, SQL Server, PostgreSQL,
- bases de données noSql comme MongoDB, CouchDB
- des répertoires comme openLDAP ou Active Directory.

Une application peut utiliser différents serveurs de donnée. Par exemple, certaines applications utilisent LDAP pour stocker les utilisateurs et leurs informations d’identification et utilisent Oracle pour stocker les informations.
