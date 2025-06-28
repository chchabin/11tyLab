---
layout : "layouts/docs.njk"
title : "Risques du navigateur"
description : "Sécurisation du navigateur, à partir du serveur"
group : "failles-informatique"
section : "failles"
toc : true
date : "2022-10-14T03:05:52+02:00"
draft : false
---
{% callout %}
**Source**  
[Sécurité informatique sur le Web](https://www.editions-eni.fr/livre/securite-informatique-sur-le-web-apprenez-a-securiser-vos-applications-management-cybersecurite-developpement-et-operationnel-9782409006340)  
[Sécuriser le navigateur](’https://github.com/OWASP/Top10/blob/master/2017/fr/0x11-t10.md)
{% endcallout %}
## A - SOP, CORS
Pour introduire la sécurité des navigateurs, il est essentiel de parler de la *`Same Origin Policy`* (SOP) contenue dans tous les navigateurs récents.

La *`Same Origin Policy`* restreint la manière dont un script, image, vidéo ou iframe chargé depuis une origine peut interagir avec une autre origine.

Les deux origines correspondent si le protocole, le port et l’hôte sont identiques et peuvent donc communiquer. 
Voici un exemple avec l’URL : `http://www.exemple.com/eni/page.html`

Une autre possibilité pour ouvrir la `Same Origin Policy` est d’utiliser la *Cross-Origin Resource Sharing* (CORS) afin d’interagir entre scripts, images, stylesheets (CSS), iframes, vidéos d’origines différentes.

Pour plus d’informations, veuillez consulter ce site :<https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>.
## B - HSTS
Parmi les protections des navigateurs, le HSTS (HTTP Strict Transport Security) est un incontournable. Le HSTS a pour objectif de forcer les navigateurs à utiliser le protocole HTTPS (HyperText Transfer Protocol Secure) au lieu du protocole HTTP qui est, lui, non sécurisé.

Le protocole HTTPS a la particularité d’utiliser du chiffrement, contrairement au HTTP dont les trames réseau sont facilement accessibles par les cybercriminels à travers un réseau local (LAN). Les attaques de type homme du milieu (HDM) ou man-in-the-middle attack (MITM) sont faciles à utiliser et les réseaux du type hotspot que l’on peut trouver dans les aéroports, cafés, commerces ou entreprises sont généralement vulnérables. Le vol d’identifiants, boîte e-mail ou compte bancaire peut s’avérer un jeu d’enfant si le protocole HTTPS n’est pas forcé.
## C - X-frame-options, x-content-type-options, x-xss-protection
Les techniques de détournement de click (*Clickjacking*) qui, comme le nom l’indique, permettent de détourner du trafic utilisateur en le forçant à cliquer sur une iframe invisible superposée à un élément d’un site web. La plus récente attaque de ce type est le *likejacking* visant à insérer une iframe invisible dans un site web afin que l’utilisateur clic dessus pour partager du contenu sur Facebook ou like une page afin de générer du trafic.

Une solution drastique contre ce genre d’attaques est l’utilisation du X-frame-options qui a pour solution la gestion des iframes à l’intérieur d’une page web.

Voici les différentes options proposées par celui-ci :

- **DENY** : cette option interdit toute utilisation d’iframe dans la page web.
- **SAMEORIGIN** : cette option permet l’utilisation d’iframe seulement si celle-ci provient de la même origine (SOP).
- **ALLOW-FROM** : permet de spécifier les domaines pouvant être utilisés en tant qu’iframe dans la page web.

Une autre technique, dite *Drive by download*, a vu son apparition sur Internet depuis ces dernières années. Elle consiste à faire télécharger au navigateur un logiciel malveillant (Malware) en arrière-plan afin que le ou les cybercriminels prennent le contrôle de la machine cible.

En général, cette technique est possible via des navigateurs et des plugins Adobe Flash, Java ou Microsoft Silverlight non mis à jour et donc vulnérables.

Pour limiter le risque sur un tel scénario, les navigateurs utilisent **X-Content-Type-Options**, qui a pour objectif de contrôler de manière stricte le type MIME (Multipurpose Internet Mail Extensions) de chaque fichier de script utilisé par l’application et donc exécuté sur le navigateur.

Un autre marqueur, nommé **X-XSS-Protection**, a vu le jour sur les dernières versions des navigateurs. Cette protection directement intégrée dans les navigateurs agit comme un réel petit pare-feu applicatif contre les vulnérabilités XSS (Cross Site Scripting) dont la finalité est l’injection de JavaScript malicieux à l’intérieur d’une page web.
## D - Content Security Policy
Une technique encore plus "purgative" nommée *Content Security Policy* permet le filtrage en liste blanche (Whitelist) des domaines. Seuls les scripts JavaScript, CSS, frames, images, etc. provenant des domaines ayant été configurés sur la *Content Security Policy* pourront être insérés dans la page web, ce qui protège de toute insertion ou injection de données malveillantes.

Voici un d’utilisation sur un serveur Apache (httpd.conf) :

**Header set Content-Security-Policy default-src "self";**
Autorise seulement les sources provenant du domaine local
## E - FLAG SECURE, HTTPONLY COOKIE
Parmi toutes ces techniques, une des plus répandues est la *session hijacking*, permettant à un cybercriminel de voler les sessions utilisateur afin d’accéder aux boîtes électroniques, comptes personnels d’entreprises, réseaux sociaux, etc.

Il existe une protection contre le vol de cookies à travers un réseau HTTP nommé secure flag ou secure cookie permettant de forcer le processus d’échange de cookies entre un client et un serveur web sur un canal chiffré, type HTTPS. De ce fait, il est moins risqué pour un utilisateur de se faire voler une session lors d’une attaque MITM.

Une autre technique utilisée par les cybercriminels pour voler un cookie est l’utilisation de vulnérabilités XSS 
(vue en détail dans le chapitre suivant : Top 10 des risques et vulnérabilités liés au Web - Cross-Site Scripting (XSS)).
En effet, avec l’injection de JavaScript dans une page web, le cybercriminel peut facilement récupérer le cookie (`document.cookie`) et l’envoyer sur un serveur qu’il contrôle.

Afin d’éviter cette attaque, il est possible de configurer, tout comme pour le secure flag, l’option HTTPOnly qui a pour 
principe de ne pas autoriser JavaScript à accéder aux cookies à l’aide de la méthode `document.cookie`.
## F - Authentification HTTP
Il est possible d’utiliser le protocole HTTP (HyperText Transfer Protocol) afin d’intégrer un système d’authentification, et cela, sur n’importe quel répertoire appartenant à une application web.

Cette méthode est assez simple à mettre en place sur un serveur web, mais très peu sécurisée. Les identifiants passent en clair dans le réseau et sont encodés en base64, qui n’est en aucun cas du chiffrement et donc facilement réversible. Il est alors indispensable d’utiliser un canal SSL (HTTPS) pour l’utilisation de cette méthode.

L’autre méthode, appelée digest, permet quant à elle d’ajouter un peu plus de sécurité en envoyant les identifiants, non pas en base64 mais en md5 qui est une méthode de hachage censée être non réversible. De plus, un élément unique est envoyé au client par le serveur afin d’ajouter de la granularité au hash et donc, de renforcer la sécurité contre les attaques dites ”par rejeu” (relay attack).

La méthode digest est plus sûre, mais il est toujours nécessaire d’utiliser un canal chiffré tel que HTTPS car les attaques par brute force peuvent être envisagées sur cette méthode.
