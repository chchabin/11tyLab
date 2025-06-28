---
layout : "layouts/docs.njk"
title : "Installation"
description : ""
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T09:42:10+02:00"
draft : false
---
## 1 - Pour démarrer
Pour démarrer, mettez à jour npm :
```bash
npm install npm@latest -g
```
### a - Démarrer avec une architecture Express et ejs
Express vous laisse la possibilité d’utiliser une structure préfabriquée. Pour cela, il faut saisir dans le terminal :
```bash
npm install express-generator -g
```
Cette instruction va installer le configurateur pour tous les projets, -g signifie en mode global.
Ensuite, il faut se placer dans le répertoire désiré et saisir cette instruction :
```bash
express --view=ejs myapp
```
Le configurateur va créer le dossier myapp dans votre répertoire. Ici, nous avons choisi le moteur de template ejs, mais il en existe d’autres, il suffit, pour les connaitre, de saisir dans votre terminal :
```bash
express -h
```
Nous obtenons ainsi cette architecture :
```text
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    ├── index.ejs
    └── layout.ejs
```
7 directories, 9 files

Nous la détaillerons dans les chapitres suivants.
Ensuite, installons les dépendances :
```bash
cd myapp
npm install
```
Pour Lancer l’application avec le debugger, dans le terminal, saisir :
```bash
set DEBUG=myapp:\*
npm start
```
Pour Lancer l’application, dans le navigateur, saisir :
```bash
http://localhost:3000/
```
### b - Démarrer avec un fichier vierge
Cette partie reprend l’explication qui se trouve sur le site de [Express](https://expressjs.com/fr/starter/installing.html) .
Créez votre repertoire et positionner vous dessus.
L’expression chemin désigne le chemin d’accès à votre fichier. Saisir dans le terminal, le code suivant :
```bash
cd chemin\monappexpress
```
Vous pouvez aussi grâce à votre IDE (comme visual studio code) ouvrir votre répertoire.
NPM garde en mémoire, dans un fichier, tous les modules créés. Ce fichier s’appelle package.json. S’il n’existe pas, il 
faut le créer en saisissant, dans le terminal :
```bash
npm init
```
Il suffit de répondre aux questions pour le créer.

{% figure-abs "images/javascript/package.png" "package" "50%" "50%" %}

{% callout %}
#### Note
Notez que notre fichier de départ sera app.js
{% endcallout %}
{% callout %}
#### Astuce
Si vous n’avez pas de préférence, il faut saisir :
```bash
npm init -y
```
Notez qu’ici, notre fichier de départ sera index.js
{% endcallout %}
### c - Démarrer avec un fichier existant
Par contre, si ce fichier existe déjà dans votre répertoire, en le copiant collant par exemple, il faut taper
```bash
npm install
```
Si les deux fichiers `package.json` et `package-lock.json` sont déjà présents, il suffit de taper :
```bash
npm ci
```
### d - Lancer l’application
#### Lancer l’application à partir d’un fichier package.json
Pour Lancer l’application, il suffit de saisir, si notre fichier créé avec npm init est app.js :
```bash
node app.js
```
#### Lancer l’application sans fichier package.json
Si vous utilisez NPM 5.2.0 ou une version plus récente, vous pouvez utiliser le serveur http sans l’installer avec npx. Ce n’est pas recommandé pour une utilisation en production, mais c’est un excellent moyen de faire fonctionner rapidement un serveur sur localhost.
Le serveur lira le premier fichier index qu’il rencontrera.
```bash
npx http-server
```
## 2 - Installer nodemon
`nodemon` est un outil qui permet de développer des applications basées sur node.js en redémarrant automatiquement 
l’application de nœud lorsque des modifications de fichier dans le répertoire sont détectées. `nodemon` s’installe à l’aide 
de npm, soit localement, soit globalement.
### a - Installation globale
C’est l’installation que nous allons préférer. Si ce n’est pas déjà fait pour un autre projet, saisissez l’instruction suivante :
```bash
npm install -g nodemon
```
### b - Installation locale
Vous pouvez également utiliser npm pour installer nodemon localement. Pour procéder à une installation locale, nous pouvons installer nodemon sous la forme d’une dev dependency avec --save-dev (ou --dev) :
```bash
npm install --save-dev nodemon
```
Une écriture simplifiée est :
```bash
npm i -D nodemon
```
Il y a cependant une chose à retenir concernant une installation locale. Il vous sera impossible d’utiliser la commande 
nodemon directement à partir de la ligne de commande. Vous pouvez l’utiliser dans le cadre de certains scripts 
[npm](https://www.digitalocean.com/community/tutorials/nodejs-utilizing-npm-scripts-during-development) ou avec npx. 
Néanmoins, il est possible de le lancer en saisissant pour le fichier app.js :
```bash
node node\_modules/nodemon/bin/nodemon.js app.js
```
Vous pouvez aussi modifier le fichier package.json, de cette façon, pour la partie script :
```json
{
"scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",

    "start": "node index",

    "dev":"nodemon index"

  }
}
```
Ainsi pour lancer nodemon en local, il faut saisir, dans le terminal :
```bash
npm run dev
```
## 3 - Installer express
Installez ensuite Express dans le répertoire, puis sauvegardez-le dans la liste des dépendances
```bash
npm install --save express
```
Pour installer express dans sa version simplifié :
```bash
npm i -S express
```
Cette version simplifiée est valable pour tous les paquets.
{% callout %}
#### Note
Les modules Node.js installés à l’aide de l’option --save sont ajoutés à la liste des dépendances dependencies, dans le fichier package.json.
{% endcallout %}
{% callout %}
#### Note
Si vous regardez maintenant le fichier package.json, vous verrez dans dependencies que la ligne `"express": "^4.17.1"` est ajoutée.
{% endcallout %}
## 4 - Installer d’autres packages
### a - Raccourcis
Voici une ligne pour lancer tous les paquets en même temps :
```bash
npm i -S express mysql dotenv ejs express-layout express-session mathjs
```
### b - Mysql
La procédure est comparable aux autres, il faut saisir :
```bash
npm install --save Mysql
```
Il existe aussi un autre paquet Mysql qui offre d’autres possibilités. Il faudra regarder la documentation.
```bash
npm install --save Mysql2
```
### c - Dotenv
Ce paquet permet de gérer un fichier d’environnement qui s’appelle `.env`, dans lequel on inscrit par exemple tous les paramètres de connexion, de cette façon l’application est plus sécurisée. Il suffit de télécharger le paquet suivant :
```bash
npm install --save i dotenv
```
### d - EJS
Ce paquet est un moteur de template, comme dans Laravel. Concrètement, il permet de coder des interfaces/
```bash
npm install --save ejs
```
### e - express-layout
Ce paquet permet d’obtenir un patron d’interface. Tout appel de page sera intégré dans ce patron.
```bash
npm install --save express-layout
```
### f - mathjs
Ce paquet permet d’avoir des fonctions mathématiques.
```bash
npm install --save mathjs
```
### g - express-session
Ce paquet permet de gérer les sessions avec express.
```bash
npm install --save express-session
```
### h - cookie-parser
Ce paquet permet avec les sessions de gérer les cookies.
```bash
npm install --save cookie-parser
```
### i - Redis
Ce paquet permet de créer un magasin de session pour que plusieurs utilisateurs qui se connectent n’aient pas la même session.
```bash
npm install --save redis connect-redis
```
## 5 - Désinstaller un module npm
Comme, vous l’avez compris, tout module npm peut être installé en exécutant une simple commande :  
`npm install.`  
Comment désinstaller les modules npm dans le nœud js ?  
La commande est simplement `npm uninstall`  
Les documents nodejs, dans [npmjs](https://npmjs.org/doc/), ont toutes les commandes à connaître avec npm.  
Une installation locale sera dans le node\_modules/ de votre application. Cela n’affectera pas 
l’application si un module y reste sans références.  
Si vous supprimez un package global, toutes les applications qui le référencent seront bloquées.  
Voici différentes options :  
`npm uninstall module1`            supprime le module de node\_modules, mais pas package.json  
`npm uninstall --save module1`     supprime également des dependencies dans package.json  
`npm uninstall --save-dev module1` supprime également de devDependencies dans package.json  
`npm -g uninstall --save module1`  supprime également globalement   
