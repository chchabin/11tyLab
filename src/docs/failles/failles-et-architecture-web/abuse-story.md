---
layout : "layouts/docs.njk"
title : "Abuse Story "
description : ""
group : "failles-et-architecture-web"
section : "failles"
toc : true
date : "2022-12-03T08:53:25+01:00"
draft : false
---
Une User Story est un concept fondamental qui est utilisé par presque toutes les équipes Agile ou Scrum. Une user story 
est une simple description d'une fonctionnalité, du point de vue de la personne/de l'utilisateur qui utiliserait ladite 
fonctionnalité.  
Par exemple, l'une des user stories d'une application de gestion des dépenses d'entreprise serait :
{% callout %}
pour télécharger et saisir les détails de mes dépenses professionnelles, afin que je puisse être remboursé par mon organisation.
{% endcallout %}
Il s'agit d'une histoire d'utilisateur assez large, que les équipes Scrum/Agile divisent généralement en sous-fonctionnalités 
ou tâches spécifiques qui peuvent être traitées par l'équipe dans leurs sprints.

## Qu'est-ce qu'un abuse story
Un `abuse story` est la version "maléfique" d'une histoire d'utilisateur. Alors qu'une User Story décrit une fonctionnalité 
ou une fonctionnalité utile qui fera éventuellement partie de l'incroyable application que vous créez. Une histoire d'agresseur 
est sombre et catastrophique. En termes simples, une histoire d'abus est une simple description de la façon dont la 
`user story` (fonctionnalité) peut être abusée par un acteur malveillant. Il s'agit d'un "cas d'abus" de ce qu'un acteur 
malveillant ferait pour compromettre les paramètres de confidentialité, d'intégrité ou de disponibilité (sécurité) de 
la `user story` dans un but particulier.  
Par exemple, en tant que story d'abuseur pour la `user story` de haut niveau, mentionnée ci-dessus, ce serait :
{% callout %}
En tant qu'employé malveillant, je téléchargerai des fichiers/contenus contenant des logiciels malveillants dans le système, 
afin de pouvoir compromettre l'ordinateur de l'administrateur qui télécharge ces fichiers pour examen et approbation.
{% endcallout %}

Une histoire d'abus, comme vous le remarquerez, a une syntaxe similaire à la `user story`. Cela permet simplement aux équipes 
Scrum/Agile de créer plus facilement des histoires d'agresseurs plus cohérentes. La structure serait la suivante :
{% callout %}
En tant qu'\<acteur malveillant\>, j'\<effectue une action malveillante\> donc \<résultat d'une action malveillante\>
{% endcallout %}

Il est important de prendre en compte les cas d'abus de type **technique** et **commercial** et de **les marquer en conséquence**.
{% callout %}
Exemple :

- Cas technique d'abus signalé : Ajout d'une injection de Cross Site Scripting dans un champ de saisie de commentaire.
- Cas d'abus signalé par l'entreprise : possibilité de modifier arbitrairement le prix d'un article dans une boutique en ligne avant de passer une commande, obligeant l'utilisateur à payer un montant inférieur pour l'article souhaité.
{% endcallout %}
Maintenant que nous avons éliminé cela, nous devons encore comprendre...
## Les scénarii d'attaque
Les scénarii d'attaque possibles sont utilisés pour identifier des vecteurs d'attaque spécifiques utilisés pour que l'abuse
story se produise :
- Injection SQL pour accéder au vol du mot de passe du gestionnaire et accéder à son compte
- Renifler les jetons de session sur le réseau pour accéder au jeton de session du gestionnaire et ensuite accéder à son compte
- Mot de passe faible Bruteforce utilisé par le gestionnaire pour accéder à son compte
- Utiliser l'ingénierie sociale pour déclencher une attaque CSRF potentielle contre le responsable afin d'approuver la dépense
- Incorporer un fichier chargé de logiciels malveillants dans le téléchargement de fichiers et compromettre le navigateur/l'ordinateur 
du gestionnaire et le compte du gestionnaire de prise de contrôle

L'aspect intéressant des scénarios d'attaque est qu'ils peuvent être transformés en cas de **test de sécurité** qui peuvent 
être utilisés par votre équipe de test de sécurité pour effectuer des validations plus spécifiques par rapport à l'application. 
Conception des fonctionnalités de sécurité Cette suite fait spécifiquement référence aux fonctionnalités qui peuvent être 
conçues dans le cadre de l'application en tant que défenses contre cela et d'autres histoires d'agresseurs. Il peut également 
s'agir de `user stories` distinctes.

- Enregistrez les tentatives d'accès invalides et configurez des alertes de sécurité pour détecter les attaques par force brute en cours.
- Autoriser uniquement le téléchargement de types de fichiers spécifiques (comme les fichiers image, etc.). Analysez les fichiers à la recherche de logiciels malveillants avant d'accepter.
- Appliquer les exigences de complexité des mots de passe, les mots de passe à haute entropie étant appliqués à tous les utilisateurs du système

Au niveau du développement, nous aurions, alors :

- Utiliser des requêtes paramétrées dans chaque requête de base de données
- Utilisez et validez les jetons Anti-CSRF pour chaque demande à l'application.
- Désinfectez la sortie HTML pour vous protéger contre les attaques XSS
- Implémentez HTTPS avec la prise en charge de TLS 1.1 et 1.2 et des suites de chiffrement puissantes. Mettre en œuvre le `HSTS`

## Exemple de dérivation de cas d'abus en tant que `user stories`
La section suivante montre un exemple de dérivation des cas d'abus en tant que récits d'utilisateurs, en utilisant ici le TOP 10 de l'OWASP comme source d'entrée.

Personas axés sur les menaces :

- Utilisateur malveillant
- Utilisateur abusif
- Utilisateur inconnu

### A1:2017-Injection
Épique :

Presque toutes les sources de données peuvent être un vecteur d'injection, des variables d'environnement, des paramètres, des services Web externes et internes et tous les types d'utilisateurs. Les failles d'injection se produisent lorsqu'un attaquant peut envoyer des données hostiles à un interpréteur.

Cas d'abus :

En tant qu'attaquant, je vais effectuer une attaque par injection (requêtes SQL, LDAP, XPath ou NoSQL, commandes du système d'exploitation, analyseurs XML, en-têtes SMTP, langages d'expression et requêtes ORM) contre les champs d'entrée des interfaces utilisateur ou API

### A2 : 2017-Authentification cassée
Épique :

Les attaquants ont accès à des centaines de millions de combinaisons de nom d'utilisateur et de mot de passe valides pour le bourrage d'informations d'identification, les listes de comptes administratifs par défaut, la force brute automatisée et les outils d'attaque par dictionnaire. Les attaques de gestion de session sont bien comprises, en particulier en ce qui concerne les jetons de session non expirés.

Cas d'abus :

En tant qu'attaquant, j'ai accès à des centaines de millions de combinaisons de nom d'utilisateur et de mot de passe valides pour le credential stuffing.

Cas d'abus :

En tant qu'attaquant, j'ai des listes de comptes administratifs par défaut, une force brute automatisée et des outils d'attaque par dictionnaire que j'utilise contre les zones de connexion des systèmes d'application et de support.

Cas d'abus :

En tant qu'attaquant, je manipule des jetons de session en utilisant des jetons expirés et faux pour y accéder.

### A3 :2017-Exposition des données sensibles
Épique :

Plutôt que d'attaquer directement la cryptographie, les attaquants volent des clés, exécutent des attaques de type "man-in-the-middle" ou volent des données en texte clair sur le serveur, en transit, ou sur le client de l'utilisateur, par exemple le navigateur. Une attaque manuelle est généralement nécessaire. Les bases de données de mots de passe précédemment récupérées pourraient être brutalement forcées par les unités de traitement graphique (GPU).

Cas d'abus :

En tant qu'attaquant, je vole des clés qui ont été exposées dans l'application pour obtenir un accès non autorisé à l'application ou au système.

Cas d'abus :

En tant qu'attaquant, j'exécute des attaques de type "man-in-the-middle" pour accéder au trafic et en tirer parti pour obtenir des données sensibles et éventuellement obtenir un accès non autorisé à l'application.

Cas d'abus :

En tant qu'attaquant, je vole des données en texte clair sur le serveur, en transit, ou sur le client de l'utilisateur, par exemple le navigateur, pour obtenir un accès non autorisé à l'application ou au système.

Cas d'abus :

En tant qu'attaquant, je trouve et cible les algorithmes cryptographiques anciens ou faibles en capturant le trafic et en cassant le chiffrement.

### A4:2017-Entités externes XML (XXE)
Épique :

Les attaquants peuvent exploiter les processeurs XML vulnérables s'ils peuvent télécharger du XML ou inclure du contenu hostile dans un document XML, en exploitant du code, des dépendances ou des intégrations vulnérables.

Cas d'abus :

En tant qu'attaquant, j'exploite les zones vulnérables de l'application où l'utilisateur ou le système peut télécharger du XML pour extraire des données, exécuter une requête à distance depuis le serveur, analyser des systèmes internes, effectuer une attaque par déni de service, ainsi qu'exécuter d'autres attaques.

Cas d'abus :

En tant qu'attaquant, j'inclus du contenu hostile dans un document XML qui est téléchargé sur l'application ou le système pour extraire des données, exécuter une requête à distance depuis le serveur, analyser des systèmes internes, effectuer une attaque par déni de service, ainsi qu'exécuter d'autres attaques.

Cas d'abus :

En tant qu'attaquant, j'inclus du code XML malveillant pour exploiter du code vulnérable, des dépendances ou des intégrations pour extraire des données, exécuter une requête à distance depuis le serveur, analyser des systèmes internes, effectuer une attaque par déni de service (par exemple, l'attaque Billion Laughs), ainsi comme exécuter d'autres attaques.

### A5 :2017-Contrôle d'accès cassé
Épique :

L'exploitation du contrôle d'accès est une compétence essentielle des attaquants. Le contrôle d'accès est détectable par des moyens manuels, ou éventuellement par l'automatisation pour l'absence de contrôle d'accès dans certains frameworks.

Cas d'abus :

En tant qu'attaquant, je contourne les contrôles d'accès en modifiant l'URL, l'état de l'application interne ou la page HTML, ou simplement en utilisant un outil d'attaque d'API personnalisé.

Cas d'abus :

En tant qu'attaquant, je manipule la clé primaire et la modifie pour accéder à l'enregistrement d'un autre utilisateur, permettant de visualiser ou de modifier le compte de quelqu'un d'autre.

Cas d'abus :

En tant qu'attaquant, je manipule des sessions, des jetons d'accès ou d'autres contrôles d'accès dans l'application pour agir en tant qu'utilisateur sans être connecté, ou en tant qu'administrateur/utilisateur privilégié lorsque je suis connecté en tant qu'utilisateur.

Cas d'abus :

En tant qu'attaquant, j'utilise la manipulation des métadonnées, comme la relecture ou la falsification d'un jeton de contrôle d'accès JSON Web Token (JWT) ou d'un cookie ou d'un champ caché manipulé pour élever les privilèges ou abuser de l'invalidation JWT.

Cas d'abus :

En tant qu'attaquant, j'exploite la mauvaise configuration CORS du partage de ressources cross origin permettant un accès non autorisé à l'API.

Cas d'abus :

En tant qu'attaquant, je force la navigation vers des pages authentifiées en tant qu'utilisateur non authentifié ou vers des pages privilégiées en tant qu'utilisateur standard.

Cas d'abus :

En tant qu'attaquant, j'accède aux API avec des contrôles d'accès manquants pour POST, PUT et DELETE.

Cas d'abus :

En tant qu'attaquant, je cible les clés de chiffrement par défaut en cours d'utilisation, les clés de chiffrement faibles générées ou réutilisées, ou les clés dont la rotation est manquante.

Cas d'abus :

En tant qu'attaquant, je trouve des zones où l'agent utilisateur (par exemple, application, client de messagerie) ne vérifie pas si le certificat de serveur reçu est valide et effectue des attaques où j'obtiens un accès non autorisé aux données.

### A6 : 2017-Mauvaise configuration de la sécurité
Épique :

Les attaquants tenteront souvent d'exploiter les failles non corrigées ou d'accéder aux comptes par défaut, aux pages inutilisées, aux fichiers et répertoires non protégés, etc. pour obtenir un accès non autorisé ou une connaissance du système.

Cas d'abus :

En tant qu'attaquant, je trouve et exploite les configurations de renforcement de sécurité appropriées manquantes sur n'importe quelle partie de la pile d'applications, ou des autorisations mal configurées sur les services cloud.

Cas d'abus :

En tant qu'attaquant, je trouve des fonctionnalités inutiles qui sont activées ou installées (par exemple, des ports, des services, des pages, des comptes ou des privilèges inutiles) et j'attaque ou exploite la faiblesse.

Cas d'abus :

En tant qu'attaquant, j'utilise des comptes par défaut et leurs mots de passe pour accéder à des systèmes, des interfaces ou effectuer des actions sur des composants que je ne devrais pas pouvoir faire.

Cas d'abus :

En tant qu'attaquant, je trouve des zones de l'application où la gestion des erreurs révèle des traces de pile ou d'autres messages d'erreur trop informatifs que je peux utiliser pour une exploitation ultérieure.

Cas d'abus :

En tant qu'attaquant, je trouve des zones où les systèmes mis à niveau, les dernières fonctionnalités de sécurité sont désactivées ou ne sont pas configurées de manière sécurisée.

Cas d'abus :

En tant qu'attaquant, je trouve que les paramètres de sécurité dans les serveurs d'applications, les frameworks d'application (par exemple Struts, Spring, ASP.NET), les bibliothèques, les bases de données, etc. ne sont pas définis sur des valeurs sécurisées.

Cas d'abus :

En tant qu'attaquant, je trouve que le serveur n'envoie pas d'en-têtes ou de directives de sécurité ou qu'ils ne sont pas définis sur des valeurs sécurisées.

### A7:2017-Script intersite (XSS)
Épique :

XSS est le deuxième problème le plus répandu dans le Top 10 de l'OWASP et se retrouve dans environ les deux tiers de toutes les applications.

Cas d'abus :

En tant qu'attaquant, j'exécute un XSS réfléchi où l'application ou l'API inclut une entrée utilisateur non validée et non échappée dans le cadre de la sortie HTML. Mon attaque réussie peut permettre à l'attaquant d'exécuter du HTML et du JavaScript arbitraires dans le navigateur de ma victime. En règle générale, la victime devra interagir avec un lien malveillant pointant vers une page contrôlée par l'attaquant, comme des sites Web malveillants, des publicités ou similaires.

Cas d'abus :

En tant qu'attaquant, j'exécute un XSS stocké où l'application ou l'API stocke une entrée utilisateur non nettoyée qui est visualisée ultérieurement par un autre utilisateur ou un administrateur.

Cas d'abus :

En tant qu'attaquant, j'exécute DOM XSS où les frameworks JavaScript, les applications d'une seule page et les API qui incluent dynamiquement des données contrôlables par l'attaquant sur une page sont vulnérables au DOM XSS.

### A8 : 2017-Désérialisation non sécurisée
Épique :

L'exploitation de la désérialisation est quelque peu difficile, car les exploits prêts à l'emploi fonctionnent rarement sans modifications ou ajustements du code d'exploitation sous-jacent.

Cas d'abus :

En tant qu'attaquant, je trouve des zones de l'application et des API où la désérialisation d'objets hostiles ou falsifiés peut être fournie. Par conséquent, je peux me concentrer sur des attaques liées à un objet et à une structure de données où l'attaquant modifie la logique de l'application ou réalise une exécution arbitraire de code à distance s'il existe des classes disponibles pour l'application qui peuvent modifier le comportement pendant ou après la désérialisation. Ou je me concentre sur les attaques de falsification de données telles que les attaques liées au contrôle d'accès où les structures de données existantes sont utilisées, mais le contenu est modifié.

### A9 :2017-Utilisation de composants avec des vulnérabilités connues
Épique :

Bien qu'il soit facile de trouver des exploits déjà écrits pour de nombreuses vulnérabilités connues, d'autres vulnérabilités nécessitent un effort concentré pour développer un exploit personnalisé.

Cas d'abus :

En tant qu'attaquant, je trouve des packages open source ou open source courants présentant des faiblesses et j'effectue des attaques contre les vulnérabilités et les exploits qui sont divulgués

### A10 : 2017 - Journalisation et surveillance insuffisantes
Épique :

L'exploitation d'une journalisation et d'une surveillance insuffisantes est à la base de presque tous les incidents majeurs. Les attaquants comptent sur le manque de surveillance et de réponse rapide pour atteindre leurs objectifs sans être détectés. En 2016, l'identification d'une brèche prenait en moyenne 191 jours, donc beaucoup de temps pour que les dommages soient infligés.

Cas d'abus :

En tant qu'attaquant, j'attaque une organisation et les journaux, les systèmes de surveillance et les équipes ne voient pas ou ne répondent pas à mes attaques.