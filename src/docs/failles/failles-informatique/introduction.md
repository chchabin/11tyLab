---
layout : "layouts/docs.njk"
title : "Introduction"
description : ""
group : "failles-informatique"
section : "failles"
toc : true
date : "2022-10-14T03:05:52+02:00"
draft : false
---
{% callout %}
**Source**  
[Sécurité informatique sur le Web](https://www.editions-eni.fr/livre/securite-informatique-sur-le-web-apprenez-a-securiser-vos-applications-management-cybersecurite-developpement-et-operationnel-9782409006340)  
[OSWAP TOP 10](’https://github.com/OWASP/Top10/blob/master/2017/fr/0x11-t10.md)
{% endcallout %}

## Hacking, piratage, sécurité informatique... Que met-on derrière ces termes ?
Selon le rapport X-Force Threat Intelligence Index 2020 d’IBM, 60 % des cyberattaques exploitent soit des données d’identification, volées, soit des vulnérabilités logicielles connues. Entre 2018 et 2019 les données exposées signalées ont augmenté de 200%.

D’autre part, les entreprises ont maintenant l’obligation légale de sécuriser leur système informatique pour limiter le risque de fuite de données personnelles. Cette obligation a été renforcée par la loi RGPD (Règlement général sur la protection des données), en vigueur depuis le 25 mai 2018. En cas d’attaque avérée, les entreprises doivent désormais effectuer des déclarations relatives à la perte ou à la fuite des données personnelles de leurs clients, fournisseurs ou salariés. Les tentatives d’hacking ne peuvent donc plus être passées sous silence, au risque de décrédibiliser et de ternir l’image des entreprises qui en sont victimes et de générer des impacts financiers importants.

Aujourd’hui, la majorité des foyers possèdent un accès à Internet et il est possible de se connecter avec le bout du monde depuis un café ou depuis un train, pour garder le contact avec ses proches ou travailler à distance où que l’on soit, grâce à un accès continu aux informations.

Une réelle avancée technologique dans un monde où tout doit aller si vite, mais un véritable problème de fond en ce qui concerne la sécurité des données et la vie privée de chacun. On ne développe pas un nouveau média sans développer quelques effets de bord nuisibles.

Or aujourd’hui, des informations des plus confidentielles sont transférées sur le réseau, le contenu de ces dernières étant parfois bien plus intéressant que la connaissance de l’émetteur ou du destinataire de l’information.

Et quand on réfléchit un instant à l’importance des données que l’on fait transiter sur le réseau, que ce soit chez soi ou au bureau, il y a de quoi se poser des questions sur la sécurité offerte à celles-ci.

Aujourd’hui, les attaques, les menaces et les conséquences d’une vigilance trop souple se multipliant, la conscience collective semble s’intéresser de plus en plus aux problèmes de sécurité informatique, de piratage et d’hacking. Un joli mélange de termes qui se retrouvent bien souvent les uns à la place des autres, faisant paniquer tout un chacun sur des dangers qui ne le concernent pas forcément et le laissant ignorant dans des sujets si importants que toute personne devrait les connaître avant de se connecter au réseau.

Le terme de **pirate** n’est pas propre à l’informatique, il définit en premier lieu un individu lié au banditisme en mer, pillant et volant avec violence, aux dépens d’autrui et de façon malhonnête. Adapté au domaine informatique, le contexte est différent, mais l’action peut être apparentée. Il s’agit d’une personne qui va chercher à piller un système informatique en détruisant ses protections. Le terme vise donc les personnes compromettant les systèmes informatiques dans le but de nuire, de voler des informations ou de réaliser du profit contrefait.

D’un autre côté, on entend souvent parler de **hackers**, et c’est ici que la confusion est souvent faite par les médias, qui les assimilent très facilement les uns aux autres alors qu’ils ont des éthiques bien différentes. Le hacker est par définition un bidouilleur, un fouineur, un passionné, bien plus enclin à la curiosité et à la soif d’apprendre qu’à la volonté de faire du mal. Le hacker est un spécialiste de la sécurité informatique, qui utilise ses connaissances par envie/besoin d’en savoir plus ou pour diffuser l’information.

Pour les hackers, le savoir et l’information se veulent libres et gratuits. Les hackers se regroupent en communautés basées autour du partage et de l’échange de compétences pour libérer cette culture. Autour de ce concept se sont développés plusieurs mouvements qui, aujourd’hui, ont largement dépassé le stade embryonnaire et se fondent dans notre quotidien. Citons par exemple le logiciel libre qui, grâce à une communauté passionnée et dévouée, s’est développé et même démocratisé de manière remarquable depuis quelques années, profitant de la communauté pour battre des records en termes de rapidité de résolution des problèmes et de publication de correctifs.

La **sécurité** informatique, ou plus globalement la sécurité des systèmes d’information, représente l’ensemble des moyens et des techniques mises en œuvre pour assurer l’intégrité et la non-diffusion involontaire des données transitant dans le système d’information. Le **système d’information** définit l’ensemble des données et des ressources (matérielles, logicielles et humaines) permettant de stocker et de faire circuler les informations qu’il contient. Il représente également le réseau d’acteurs qui interviennent sur celui-ci, qui échangent les données, y accèdent, les utilisent.
Dans un contexte global, la sécurité s’effectue :

- Au niveau utilisateur, les acteurs doivent comprendre l’importance de leur position.
- Au niveau des technologies utilisées.
- Au niveau des données en elles-mêmes : droits d’accès (authentification et contrôle, l’utilisateur ne doit posséder que les droits qui lui sont octroyés).
- Au niveau physique, de l’accès à l’infrastructure, au matériel... si on sécurise entièrement un système et que l’accès à la salle des machines n’est pas sécurisé, il suffit de voler physiquement le support de données pour compromettre gravement le système.

Cependant, la sécurité ne doit pas être une gêne au quotidien et doit permettre d’utiliser le système en toute confiance.
## Attaque d’un site web
Voici une liste non exhaustive des possibilités d’attaque suivant les informations récoltées :

- Si le site est un CMS et que nous connaissons sa version, nous pouvons rechercher sur Internet si des failles connues existent pour cette version ou si des fichiers de configuration sont à protéger.
- Si le site dispose d’un formulaire d’authentification, nous pouvons :
    - Tenter de modifier les champs cachés.
    - Faire du "brut forcing" s’il n’y a pas de protection par captcha (forme de test de Turing permettant de différencier de manière automatisée un utilisateur humain d’un ordinateur).
    - Injecter des chaînes de code.
- Si le site utilise du JavaScript, nous pouvons :
    - Appeler des fonctions en modifiant des paramètres.
    - Analyser des fonctions de cryptage de mot de passe.
- Si le site autorise le dépôt de fichiers, nous pouvons tenter de déposer des fichiers dont le type MIME n’est pas autorisé et par là faire exécuter du code sur le serveur.
- Si le site fait appel à des sessions, nous pouvons analyser la méthode d’identification et tenter de la contourner par :
    - Modification des cookies.
    - Modification de l’en-tête.
    - Modification des champs cachés des formulaires.
    - Injection SQL.
- Si le site autorise l’internaute à déposer un message, comme sur un forum par exemple, nous pouvons tenter de placer du code JavaScript dans le message pour recueillir d’autres informations ou voler une session.
- Si le site affiche des éléments présents dans l’URL, nous pouvons comme précédemment tenter d’injecter du code JavaScript.
- Si le site propose une fonction de "mot de passe oublié" nous pouvons analyser son fonctionnement.
- Etc...
## 3 types de test
- **Le pentest BlackBox** :
  l’auditeur simule une attaque en se mettant dans la peau d’un hacker, dans les conditions d’un piratage réel. Cela signifie qu’il ne dispose d’aucune information sur sa cible ou de très peu d’éléments. Cette stratégie permet de définir avec fiabilité les seuils critiques de la sécurité d’une entreprise.
- **Le pentest WhiteBox** :
  contrairement au pentesting BlackBox, l’auditeur travaille en étroite collaboration avec la DSI de son client. Il accède à l’ensemble des informations relatives à la configuration du SI. Le pentest WhiteBox se rapproche davantage d’un audit informatique officiel, mais il offre la possibilité d’approfondir la détection des vulnérabilités en accédant à toutes les strates du SI.
- **Le pentest Greybox** :
  de plus en plus utilisé, il s’agit d’une méthodologie intermédiaire, qui permet de bénéficier des avantages du BlackBox et du WhiteBox. Dans ce contexte, le pentester réalise son test d’intrusion en s’aidant d’un nombre restreint d’informations. Il peut, par exemple, intégrer l’entreprise en tant que salarié d’un service sensible et posséder son propre compte utilisateur. Au fur et à mesure qu’il progresse dans l’attaque, il obtient de nouvelles informations.
#### **Quels sont les différents types de hackers ?**
- **Les White Hat Hackers** :
  Ce sont les bons Hackers qui permettent de protéger les systèmes informatiques des entreprises. Lorsque ces hackers confrontent des failles, ils permettent de les corriger ou bien les signaler aux éditeurs des logiciels. Les grandes entreprises travaillent généralement en collaboration avec les white hat hackers pour faire des analyses et tester la résistance de leur système d’information. On a même organisé des compétitions dans lesquelles les hackers sont appelés à trouver très rapidement les failles de sécurité du programme et le plus rapide hacker gagne une grande somme d’argent.
- **Les Grey Hat Hacker** :
  C’est la personne la plus floue, c’est-à-dire parfois, elle est éthique et parfois non. Ils trouvent le plaisir de déjouer les systèmes de sécurité informatique pour avoir une idée sur leur capacité. Justement, ils sont intéressés par la détection des failles de sécurité qui ne sont pas encore découvertes, dites Zero Day. Ce type de hacker, n’applique pas leurs connaissances pour des raisons malveillantes. Par exemple, lorsqu’il déjoue le système informatique d’une entreprise, il leur donne un minimum de temps pour qu’elle puisse corriger la faille et récupérer son système.
- **Les Blacks Hat Hackers** :
  Ce sont les cybercriminels qui possèdent une mauvaise intention. Ils ont pour but l’exploitation de leurs compétences et connaissances pour de mauvaises raisons. Ils font exprès de nuire aux systèmes informatiques des entreprises à travers différentes méthodes comme l’escroquerie, le vol de données, l’espionnage… Ils utilisent les malwares pour nuire aux systèmes informatiques des sociétés. Par ailleurs, il s’avère important de vous annoncer que ces hackers ne sont pas forcément des pirates, ils sont des personnes qui ne font pas partie du domaine informatique, mais ils profitent du manque de méfiance des employés pour attaquer les logiciels. Pour cette raison, il faut savoir que vos collaborateurs peuvent représenter une faille de sécurité pour le système informatique de votre entreprise.
- **Les Hacktivistes** :
  Ce sont les hackers ayant un objectif particulier : ils visent la politique, à savoir les systèmes des gouvernements, des organisations mondiales, des grandes sociétés multinationales. Ces pirates permettent de divulguer des informations pour défendre une cause ou pour mettre en valeur une révolution d’un peuple… Ce genre de piratage peut-être aussi une manière pour exprimer leur opposition à la surveillance et la censure. Généralement, ils réagissent à ce genre de comportement par la publication des documents ou des informations délicates à travers l’attaque du système informatique de l’entreprise ou par l’attaque DDoS. 
