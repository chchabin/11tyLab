---
layout : "layouts/docs.njk"
title : "Visual2019 Mysql Entity"
description : "Connecter une base Mysql à Visual Studio 2019 avec Entity"
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-25T22:44:42+01:00"
draft : false
---
{% callout danger %}
Pour l'instant, il n'est pas possible de connecter une base Mysql avec Entity pour des versions supérieures à Visual Studio 2019
{% endcallout %}
{% callout warning %}
Bien suivre l'ordre d'installation !
**Partie 1**  
Cette première partie est à faire sur un ordinateur **personnel**
{% endcallout %}
## Partie 1
### 1.1 - Installer Mysql pour Visual Studio
1. Fermer toutes les fenêtres de Visual Studio
2. [Télécharger l’installer msi](https://dev.mysql.com/downloads/windows/visualstudio/) 
3. Commencer l’installation
4. Cliquer sur le bouton `Complete`

### 1.2 - Installer MySql **Connector/Net** le driver ADO.NET pour MySQL
1. [Télécharger l’installer msi](https://dev.mysql.com/downloads/connector/net/)
2. Choisir la version 8.0.27
3. Commencer l’installation
4. Cliquer sur le bouton `Complete`

{% callout warning %}
**Partie 2**  
À faire quelque soit l'ordinateur.
{% endcallout %}
## Partie 2
### 2.1 - Création du projet
1. Créez la solution WinForm **framework**

### 2.2 - Installer les packages NuGet
1. Faire un click droit sur Référence
2. choisir : Gérer les packages NuGet
   {% figure-abs "images/exercices-et-challenges/cas/nugetChoix.png" "nugetChoix" "100%" "100%" %}
3. choisir la version `Mysql.Data.EntityFramework` (Toutes les autres dépendances seront installées).
   {% figure-abs "images/exercices-et-challenges/cas/nugetVersion.png" "nugetVersion" "100%" "100%" %}

### 2.3 - Connexion via ADO à MYSQL
1. Clic droit sur le nom de la solution,
2. Choisissez ajouter nouvel élément,
3. Choisir ADO.NET,
   {% figure-abs "images/exercices-et-challenges/cas/entityAdo.png" "entityAdo" "100%" "100%" %}
4. Choisir,
 {% figure-abs "images/exercices-et-challenges/cas/entityAdo2.png" "entityAdo2" "100%" "100%" %}
5. Choisir sa base de données,
   {% figure-abs "images/exercices-et-challenges/cas/entityAdo3.png" "entityAdo3" "100%" "100%" %}
6. Choisir l’option,
   {% figure-abs "images/exercices-et-challenges/cas/entityAdo4.png" "entityAdo4" "100%" "100%" %}
7. Si tout fonctionne, vous avez cette fenêtre où vous choisirez vos tables.
   {% figure-abs "images/exercices-et-challenges/cas/entityAdo5.png" "entityAdo5" "100%" "100%" %}