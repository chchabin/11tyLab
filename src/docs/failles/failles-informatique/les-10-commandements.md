---
layout : "layouts/docs.njk"
title : "Les 10 commandements"
description : "Les 10 commandements du code sécurisé"
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
## 1 - Authentification
{% bs-table %}

| **id** | **objet**                                                  | **Contrôle de sécurité**                                                                                                                                                                                                              | **Check-list** |
|--------|------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Utilisation de mots de passe forts                         | Les mots de passe dépassent-ils dix caractères minimum ?                                                                                                                                                                              | `  `☐          |
| 1      | Utilisation de mots de passe forts                         | Les mots de passe sont-ils complexes (majuscules, chiffres, caractères spéciaux) ?                                                                                                                                                    | `  `☐          |
| 2      | La réinitialisation des mots de passe est-elle sécurisée ? | Un jeton unique est-il créé pour la réinitialisation ?                                                                                                                                                                                | `  `☐          |
| 3      | Changement des données personnelles                        | Une ré-authentification est-elle demandée lors des changements des données personnelles sur l’application afin de prévenir les attaques de session ou CSRF ?                                                                          | `  `☐          |
| 4      | Le stockage des mots de passe                              | Les mots de passe sont-ils hachés en base de données ?                                                                                                                                                                                | `  `☐          |
| 4      | Le stockage des mots de passe                              | Les mots de passe sont-ils salés avant d’être envoyés en base ?                                                                                                                                                                       | `  `☐          |
| 5      | Message d’erreur                                           | Les messages d’erreur qui apparaissent suite à une authentification incorrecte (à cause du login ou du mot de passe) sont-ils générés afin d’éviter de donner des indices sur le fonctionnement de l’application aux cybercriminels ? | `  `☐          |
| 5      | Message d’erreur                                           | Le statut HTTP (200) change-t-il si l’utilisateur ne réussit pas son authentification ?                                                                                                                                               | `  `☐          |
| 6      | Brute force                                                | L’application bloque-t-elle un utilisateur lors d’essais d’authentification excessifs ?                                                                                                                                               | `  `☐          |
{% endbs-table %}
## 2 - Management des sessions
{% bs-table %}

| **id** | **objet**                        | **Contrôle de sécurité**                                                                                            | **Check-list** |
|--------|----------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Les identifiants de session      | Les identifiants de session sont-ils chiffrés, et au minimum à 128 bits de longueur ?                               | `  `☐          |
| 2      | Données personnelles             | Les sessions et cookies comportent-ils des données personnelles (adresse IP comprise car c’est une exigence CNIL) ? | `  `☐          |
| 3      | Secure flag                      | L’option secure cookie est-elle mise en place sur le serveur (HTTPS obligatoire) ?                                  | `  `☐          |
| 4      | HTTPOnly                         | L’option HTTPOnly cookie est-elle mise en place sur le serveur ?                                                    | `  `☐          |
| 5      | Domaine et cookie                | Le cookie est-il bien lié à un seul domaine et non à des sous-domaines (ex : exemple.com, intranet.exemple.com) ?   | `  `☐          |
| 6      | Temps de vie du cookie           | Le cookie a-t-il une limite de temps ?                                                                              | `  `☐          |
| 7      | Bouton de déconnexion            | Le bouton de déconnexion est-il disponible sur tout le site web ?                                                   | `  `☐          |
| 8      | Temps d’inactivité d’une session | La session d’un utilisateur expire-t-elle après x minutes d’inactivité ?                                            | `  `☐          |
| 9      | Date limite absolue              | La session expire-t-elle à un moment donné ?                                                                        | `  `☐          |
{% endbs-table %}
## 3 - Contrôle d’accès
{% bs-table %}

| **id** | **objet**           | **Contrôle de sécurité**                                                                                                        | **Check-list** |
|--------|---------------------|---------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Liste des rôles     | La liste des rôles et des droits est-elle bien claire et documentée pour l’application ?                                        | `  `☐          |
| 2      | Test de pénétration | Des tests de pénétration ont-ils été effectués pour vérifier le contournement de la segmentation des droits suivant les rôles ? | `  `☐          |
{% endbs-table %}
## 4 - Validation des entrées
{% bs-table %}

| **id** | **objet**             | **Contrôle de sécurité**                                                                                                                                                             | **Check-list** |
|--------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Périmètre des entrées | Toutes les entrées serveur et de code sont-elles nettoyées comme les variables liées aux informations réseau, cookies, id de session, user agents, données des en-têtes HTTP, etc. ? | `  `☐          |
| 2      | Taille des entrées    | La taille des entrées est-elle contrôlée) ?                                                                                                                                          | `  `☐          |
| 3      | Encodage              | L’encodage possible des entrées est-il connu et pris en compte ?                                                                                                                     | `  `☐          |
| 4      | Contenu riche         | Les contenus riches tels les Wysiwyg sont-ils bien contrôlés avec des frameworks spécifiques (HTML Purifier, AntiSamy, Bleach, etc.) ?                                               | `  `☐          |
{% endbs-table %}
## 5 - Encodage des sorties
{% bs-table %}

| **id** | **objet**                          | **Contrôle de sécurité**                                                                                                               | **Check-list** |
|--------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Se prévenir des vulnérabilités XSS | Les entrées utilisateur sont-elles encodées de manière que du JavaScript ou du HTML ne puisse pas être utilisé (fonction d’encodage) ? | `  `☐          |
| 2      | Se prévenir des injections SQL     | Les paramètres utilisés lors de l’envoi d’une requête SQL sont-ils bien contrôlés par des fonctions ou patterns adéquats ?             | `  `☐          |
| 3      | Se prévenir des injections XML     | Tout comme pour les XSS, la réception des données XML est-elle contrôlée et encodée avec le passage du parser XML ?                    | `  `☐          |
{% endbs-table %}
## 6 - Upload de fichiers
{% bs-table %}

| **id** | **objet**          | **Contrôle de sécurité**                                                                                       | **Check-list** |
|--------|--------------------|----------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Upload de fichiers | Les types et extensions (content-type) des fichiers envoyés au serveur sont-ils contrôlés ?                    | `  `☐          |
| 1      | Upload de fichiers | Les fichiers changent-ils de nom une fois stockés sur le serveur ?                                             | `  `☐          |
| 1      | Upload de fichiers | Les fichiers spécifiques liés à l’administration système tels .htaccess, crossdomain.xml sont-ils contrôlés ;? | `  `☐          |
{% endbs-table %}
## 7 - XSS
{% bs-table %}

| **id** | **objet**               | **Contrôle de sécurité**                                                                                 | **Check-list** |
|--------|-------------------------|----------------------------------------------------------------------------------------------------------|----------------|
| 1      | Échappement des entrées | L’échappement des caractères spécifiques tels que les balises HTML, le code JavaScript est-il contrôlé ? | `  `☐          |
| 2      | Content Security Policy | La Content Security Policy est-elle mise en place avec une whitelist des sources de confiance ?          | `  `☐          |
{% endbs-table %}
## 8 - CSRF
{% bs-table %}

| **id** | **objet**            | **Contrôle de sécurité**                                                                      | **Check-list** |
|--------|----------------------|-----------------------------------------------------------------------------------------------|----------------|
| 1      | Jeton unique chiffré | Un système de jeton chiffré est-il incorporé dans le cheminement de l’envoi d’un formulaire ? | `  `☐          |
| 2      | Captcha              | Un système de Captcha est-il proposé pour les formulaires avec des données sensibles ?        | `  `☐          |
{% endbs-table %}
## 9 - Clickjacking
{% bs-table %}

| **id** | **objet**               | **Contrôle de sécurité**                                                                                                                                                                              | **Check-list** |
|--------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Content Security Policy | La Content Security Policy est-elle mise en place avec une whitelist des sources de confiance afin d’éviter toute injection de frame frauduleuse (attention à la version des navigateurs supportés) ? | `  `☐          |
| 2      | X-Frame-Options         | Si la CSP (Content Security Policy) n’est pas mise en place, les X-Frame-Options sont-elles configurées ?                                                                                             | `  `☐          |
{% endbs-table %}
## 10 - Enregistrement des événements
{% bs-table %}

| **id** | **objet**                  | **Contrôle de sécurité**                                                                                                                | **Check-list** |
|--------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Événements liés au serveur | Les événements (logs) liés aux échecs d’authentification, aux erreurs de requêtes HTTP et aux échecs de session sont-ils enregistrés ;? | `  `☐          |
| 2      | Événements liés au code    | Les événements liés au code lors des erreurs produites (flaw, bug) sont-ils enregistrés ?                                               | `  `☐          |
| 3      | Événements                 | Les événements, en général, sont-ils régulièrement consultés ?                                                                          | `  `☐          |
| 4      | Attaques                   | Lors d’une attaque cybercriminelle, est-on capable de réagir avec l’aide des événements ?                                               | `  `☐          |
{% endbs-table %}
## 11 - RGPD
{% bs-table %}

| **id** | **objet**                                    | **Contrôle de sécurité**                                                                                                                         | **Check-list** |
|--------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| 1      | Données liées à la personne                  | État civil, identité, données d’identification.                                                                                                  | `  `☐          |
| 2      | Vie personnelle                              | habitudes de vie, situation familiale, etc.                                                                                                      | `  `☐          |
| 3      | Vie professionnelle                          | CV, scolarité, formation professionnelle, distinctions, etc.                                                                                     | `  `☐          |
| 4      | Informations d’ordre économique et financier | revenus, situation financière, situation fiscale, etc.                                                                                           | `  `☐          |
| 5      | Données de connexion                         | adresse IP, données de connexion, etc.                                                                                                           | `  `☐          |
| 6      | Données de localisation                      | déplacements, données GPS, GSM, etc.                                                                                                             | `  `☐          |
| 7      | Données sensibles                            | origine raciale ou ethnique, opinions politiques, convictions religieuses ou philosophiques ou appartenance syndicale, génétiques, biométriques. | `  `☐          |
{% endbs-table %}
