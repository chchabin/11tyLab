---
layout : "layouts/docs.njk"
title : "Commencer Et Afficher"
description : ""
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T09:56:10+02:00"
draft : false
---
## 1 - Création d'app.js
Dans votre IDE, créez le fichier `app.js` et copiez ce code :
```javascript
const express   = require('express')    // chargement du module
const app       = express()             // appel du module
const port      = 8888                  // paramétrage du port
// création de la Route
app.get('/', (req, res) => {
  res.send('Hello World!');
})
// Gestion des erreurs HTTP
app.use((req, res, next) => {
  res.status(404).send("Désolé, nous ne pouvons pas accéder à votre requête !");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose bloque!');
});
// ouverture du serveur
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
```
Ouvrez le terminal et saisissez `nodemon main` ou `nodemon app` (en regardant dans le fichier package, vous comprendrez pourquoi !).  
Cliquez, dans le terminal sur le lien `http://localhost:8888` et vous voyez `Hello World!` apparaitre dans votre navigateur.
{% questions%}
1. À quoi sert `console.log()?`  
2. Quelle est la différence entre `console.log` et `res.send` ?  
3. Vous remarquerez l'utilisation des fonctions lambda, pour la route et le serveur. Réécrivez-les, en fonction traditionnelle. 
[Pour vous aider !](http://es6-features.org/#BlockScopedVariables)  
4. À quoi sert l'accent aigu (backticks en anglais), obtenu avec la combinaison `ALT GR + 7`.  
5. À quoi correspondent les erreurs HTTP mentionnées.
{% endquestions%}
## 2 - Anatomie du fichier app
### a - Les modules
Pour l'instant, nous n'avons qu'un module : express. Pour tous les autres que nous allons installer, la procédure sera la même, il faudra d'abord les charger, puis les appeler.
### b - Les routes
L'écriture des routes est un peu différente de celle utilisée pour laravel. Certes, nous avons les deux instructions : get et post.
`get` envoie des données au navigateur,
`post` récupère des données du navigateur.
En reprenant l'exemple précédent voici comment lire la fonction apt.get

- '/' : donne le chemin auquel la fonction s'applique
- (req, res) : fonction de middleware
    - req : Argument de demande HTTP à la fonction middleware (url envoyée au navigateur), appelé "req" par convention.
    - res : Argument de réponse HTTP à la fonction middleware (lecture de l'url et exécution du code), appelé "res" par convention.
## 3 - Affichage statique et dynamique à partir de l'URL
Modifions notre code de cette façon :
```javascript
const express = require('express')
const app = express()
const port = 8888
// Affichage statique 1
app.get('/', (req, res) => {
  res.send('Accueil')
})
// Affichage statique 2
app.get('/page', (req, res) => {
    res.send('Ceci est une page')
  })
// Affichage dynamique
  app.get('/page:num', (req, res) => {
    res.send(`Ceci est la page ${req.params.num}`)
  })
// Gestion des erreurs HTTP
app.use((req, res, next) => {
  res.status(404).send("Désolé, nous ne pouvons pas accéder à votre requête !");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose bloque!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
À l'affichage les résultats seront les suivants :

**Affichage statique 1**  
si l'url est `http://localhost:8888/` l'affichage sera `Accueil`  
**Affichage statique 2**  
si l'url est `http://localhost:8888/page` l'affichage sera `Ceci est une page`  
**Affichage dynamique**  
si l'url est `http://localhost:8888/page3` l'affichage sera `Ceci est la page 3`
{% callout danger%}
#### Attention au cas dynamique
Vérifiez a priori ce qui est saisi par l'utilisateur afin d'éviter l'injection de code !
{% endcallout %}
