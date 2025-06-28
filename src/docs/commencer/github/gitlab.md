---
layout : "layouts/docs.njk"
title : "Gitlab"
description : "Créer un dépôt sur git puis votre poste de travail"
group : "github"
section : "commencer"
toc : true
date : "2022-08-19T04:49:47+02:00"
draft : false
---
{% callout%}
#### Sources complémentaires
- [Documentation gitlab](https://docs.gitlab.com/)
- [Documentation markdown](https://www.markdownguide.org/cheat-sheet/)
- [Exemple](https://gitlab.com/c7654/gsbmvcmission1)
{% endcallout%}
## 1. GitLab : les caractéristiques
- dépôt Git
- gestion de tickets (comme Glpi, Jira...)
- organisation de travail (comme Trello...)
- wiki et page web
- intégration continue
- déploiement continu
- sécurité applicative
- API pour de nombreux services

Gitlab intègre de nombreuses technologies :

- redis
- nginx
- postgres
- registry docker
- Ruby on rails
- Go
- prometheus (interne)

Installation :

- multiple OS
- conteneurisé ou non

La version gratuite de gitlab est gitlab-ce
{% callout%}
#### Permissions
Pour rendre votre site public, il faut :

1. aller sur Settings et Rendre le groupe public
{% endcallout%}
## 2. Les Issues (les tickets)
[Une vidéo pour se former sur la gestion de tickets](https://www.youtube.com/watch?v=MwbfDOUnonU&list=PLn6POgpklwWrRoZZXv0xf71mvT4E0QDOF&index=7)

Les éléments qui se trouvent dans gitlab

- la gestion de tickets
- l'approche par projet par utilisateur
- 4 sous rubriques
    - List : liste des tickets
    - Bords : vision sous forme de tableau de l'avancée des tickets
    - Service Desk : permet l'utilisation via une solution externe (email par exemple)
    - Milestone : tracking cde certains tickets éventuellement couplés aux MR
### Approfondissons la gestion de tickets.
Pour écrire des tickets, il faut utiliser le markdown ou des raccourcis se trouvant dans le menu du ticket. Lors de l'écriture du ticket, vous pouvez :

- faire référence à des users ou des groupes @{user}
- faire un lien vers des commits : #{num\_commit}
- intégrer du code en l'entourant de backticks (accent grave ou {%kbd "ALT GR" %}+ {%kbd "7" %}) ou d'une section (dans le menu)
- créer time tracking : /estimate (temps estimé pour résoudre le ticket) et /spent (temps utilisé par le ou les programmeurs au fur et à mesure)
#### Rapport
Pour avoir un rapport des temps estimés et réalisé pour l'ensemble des issues, lancez [cosango](http://gitlabreports.cosango.com/) avec votre gitlab ouvert.
## 3. Le wiki
[Une vidéo pour se former sur la gestion du wiki](youtube.com/watch?v=KVor3t77cKM&list=PLn6POgpklwWrRoZZXv0xf71mvT4E0QDOF&index=10)

A quoi sert-il ?

- lier au projet
- visualiser l'historique des modifications du wiki et des users qui ont participé
- saisir en markdown et mermaid
- faire des schémas avec [mermaid](https://github.com/mermaid-js/mermaid)
- afficher du code (ex php)
- modifier la sidebar pour mettre le menu
{% callout%}
#### Permissions
Pour rendre votre wiki public il faut :

1. créer la page HOME
2. créer des liens sur les autres pages  
\[nom du lien\](nom-de-la-page)
{% endcallout%}
{% callout warning%}
Notez bien que les espaces sont remplacés par des - dans le nom de la page
{% endcallout%}
