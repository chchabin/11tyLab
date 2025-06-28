---
layout : "layouts/docs.njk"
title : "Git En Groupe"
description : "les workflow"
group : "github"
section : "commencer"
toc : true
date : "2022-08-19T04:49:47+02:00"
draft : false
---
## 1 - Paramétrage et utilisation du workflow
### a - principe du workflow
Examinons étape par étape comment une petite équipe peut collaborer en utilisant un workflow. Nous verrons comment deux développeurs, John et Jessica, peuvent travailler sur des fonctionnalités distinctes et partager leurs contributions via un dépôt centralisé.

L’organisation d’un petit projet suit cette logique :

{% figure-abs "./images/github/github_small-team-flow.png" "github_small-team-flow" "400" "400" %}
 
### b - ajouter des collaborateurs
#### Préliminaire : vous avez créé un projet
La création de collaborateurs permet de leur donner les droits en lecture et écriture. Allez sur settings et Manage access pour ajouter les collaborateurs.

{% figure-abs "/images/github/github_collaborateurs.png" "github_collaborateurs" "100%" "100%" %}

Votre mot de passe vous sera demandé. Maintenant, vous avez tous les deux les droits en écriture sur le répertoire.
### c - la création de branche
S’il n’existe pas encore de branche, il faut tout d’abord les créer.
```bash
git branch john
git branch jessica
```
Il faut ensuite les pousser sur le site github
```bash
git push -u origin john
git push -u origin jessica
```
### d - cloner le projet
À présent chaque développeur peut cloner le repo afin de travailler. Les collaborateurs doivent cloner le projet sur leur machine, par exemple :
```bash
git clone https://github.com/chchabin/mon-application.git
git checkout -b develop origin/jessica /* se positionne sur la branche jessica */
```
##### John travaille sur sa fonctionnalité
Dans son dépôt local, john peut développer des fonctionnalités en utilisant le processus de commit Git standard : édition, staging et commit.
N’oubliez pas que, puisque ces commandes créent des commits locaux, john peut répéter ce processus autant de fois qu’il le souhaite sans avoir à se soucier de ce qui se passe dans le dépôt centralisé.
##### Jessica travaille sur sa fonctionnalité
Dans le même temps, jessica travaille sur sa propre fonctionnalité dans son dépôt local en utilisant le même processus (édition, staging et commit). Tout comme john, elle ne se préoccupe pas de ce qu’il se passe dans le dépôt centralisé et elle ne se soucie vraiment pas de ce que john fait dans son dépôt local, puisque tous les dépôts locaux sont privés.
### e - publication des fonctionnalités
{% callout%}
#### Bonne pratique
La publication des fonctionnalités doit être faite par le chef de projet.
{% endcallout%}
##### John publie sa fonctionnalité
Une fois que John aura terminé de développer sa fonctionnalité, il devra publier ses commits locaux dans le dépôt centralisé pour que les autres membres de l’équipe puissent y accéder. Pour ce faire, il peut utiliser la commande git push comme suit :
```bash
git push -u origin master
```
Souvenez-vous que `origin` constitue la connexion distante avec le dépôt centralisé que Git a créé lorsque John l’a cloné. L’argument master indique à Git de faire de la branche master de `origin` sa branche master locale. Comme le dépôt centralisé n’a pas été mis à jour depuis que John l’a cloné, l’opération se déroulera sans conflit et le push fonctionnera comme prévu.
## 2 - Gestion des conflits
### a - déplacer l’origine d’une branche
##### John tente de publier la fonctionnalité de jessica.
Voyons ce qu’il se passe si Marie tente de faire un push de sa fonctionnalité après que Jean a publié ses changements 
dans le dépôt centralisé. Elle peut utiliser la même commande push. Mais, comme son historique local diverge du dépôt 
centralisé, Git refusera la demande et renverra un message d’erreur détaillée :

error: failed to push some refs to "/path/to/repo.git" hint: Updates were rejected because the tip of your current branch 
is behind hint: its remote counterpart. Merge the remote changes (e.g. 'git pull') hint: before pushing again. hint: See 
the "Note about fast-forwards" in "git push --help" for details.

Cela empêche Marie d’écraser les commits officiels. Elle doit faire un pull des mises à jour de Jean dans son dépôt, les intégrer avec ses changements locaux, puis réessayer.
##### Jessica fait un rebase par-dessus le ou les commits de John
John peut lancer git pull pour intégrer à son dépôt les changements effectués en amont. Cette commande est très similaire fait un pull de tout l’historique du commit en amont dans le dépôt local de Marie et tente de l’intégrer à ses commits locaux :
```bash
git pull --rebase origin master
```
L’option --rebase indique à Git de déplacer tous les commits de Jessica vers la pointe de la branche master après l’avoir synchronisée avec les changements issus du dépôt centralisé.

Le pull fonctionnera toujours si vous oubliez cette option, mais vous vous retrouverez avec un commit de merge superflu à chaque fois qu’un utilisateur devra synchroniser son dépôt avec le dépôt centralisé. Pour ce workflow, il est toujours préférable de procéder à un rebase plutôt que de générer un commit de merge.
### b - publication
##### John publie avec succès la fonctionnalité de Jessica
Après avoir synchronisé le dépôt centralisé, Marie pourra publier ses changements avec succès :

git push origin master
{% callout%}
#### Sources complémentaires
- [TD workflow](http://defeo.lu/in202/tutorials/tutorial4/)
{% endcallout%}
### c - code utile
Il existe un journal de toutes les références prises par le pointeur HEAD dans Git qui s’appelle le reflog (raccourci de log de référence). C’est un journal qui va enregistrer tous les commits par lesquels passe ce pointeur. Le reflog va par exemple être capable d’enregistrer les changements de branche ou alors l’ajout de commit.
```bash
git reflog
```
Le numéro de commit se trouve sur la première colonne de gauche. Pour revenir à un commit antérieur, il suffit de saisir :
```bash
git reset –hard numCommit
```
