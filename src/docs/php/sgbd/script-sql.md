---
layout : "layouts/docs.njk"
title : "Script Sql"
description : "Exécuter un script SQL"
group : "sgbd"
section : "php"
toc : true
date : "2022-09-03T12:14:46+02:00"
draft : false
---
{% callout %}
**Qu'est-ce qu'un fichier SQL ?**  
Les fichiers avec l'extension SQL contiennent du code écrit dans le langage de requête structurée SQL.  
Le code contenu dans le fichier SQL est utilisé pour modifier le contenu d'autres bases de données relationnelles.  
Les fichiers SQL peuvent servir à supprimer, insérer, extraire ou mettre à jour des données et des informations.
{% endcallout%}
## 1 - Création de la base
### a - La création de la base est dans le fichier SQL
Ouvrez votre fichier SQL, si au début du fichier, vous voyez ceci :
```sql
-- Listage de la structure de la base pour annuaire
DROP DATABASE IF EXISTS `annuaire`;
CREATE DATABASE IF NOT EXISTS `annuaire` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `annuaire`;
```
Dans cet exemple, le fichier va supprimer et créer une nouvelle base `annuaire`.
{% callout danger%}
Cette méthode est très pratique quand vous voulez créer une base vierge.  
Mais si vous avez déjà des données que vous voulez conserver, elles seront supprimées.
{% endcallout%}
### b - La création de la base n'est pas dans le fichier SQL
Si vous connaissez phpmyadmin (c’est celui qui sera en démonstration), lancez l’application, sinon utilisez votre **application favorite** ou les lignes de code. Une fois phpmyadmin connecté, cliquez sur base pour créer la base lafleur
{% callout success%}
#### Résultat
Voici ce que vous obtenez en créant la base :
{% endcallout%}

{% figure-abs "images/exercices-et-défis/tp/creationBase.PNG" "creationBase" %}


## 2 - Execution du script

{% callout danger%}
**Décompressez le fichier !**  
Si vous voulez exécuter le fichier sql **sans** décompresser le fichier zip, vous obtiendrez une erreur.
{% endcallout%}

Pour lancer le script, il suffit 
1. d’aller sur l’onglet importer 
2. de cliquer sur `Choisir un fichier` et choisir votre fichier `.sql` 
3. de cliquer su go tout en bas de la page.
{% callout success%}
#### Résultat
Voici ce que vous obtenez en voulant lancer le script :
{% endcallout%}

{% figure-abs "images/exercices-et-défis/tp/scriptBase.PNG" "scriptBase" %}
