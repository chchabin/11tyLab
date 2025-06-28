---
layout : "layouts/docs.njk"
title : "Connexion Au Sgbd"
description : ""
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T10:17:52+02:00"
draft : false
---
{% callout %}
#### Création et accès à la page catégories (2/3)
Vous allez récrire l'application [Lafleur](https://github.com/chchabin/Lafleur-2021-php-MVC), initialement écrite enPHP, en javascript.
{% endcallout %}
{% callout warning%}
#### Prérequis
Créez un répertoire `db`

Créez dans ce répertoire un fichier `dbConnexion.js`.

Créez un fichier .env à partir de la racine (ne pas oublier le point devant env !!!).

Télécharger les modules : `mysql` et `dotenv`.
{% endcallout %}
## 1 - Exécution du script sql
Créez votre base de données et lancez le fichier sql.  
Si vous avez oublié, voyez comment faire [ici]({% aref "docs/tp-et-missions/php-tp-introductif/pattern-mvc-sgbd" %})

## 2 - Création de la structure des répertoires et des fichiers
### a - modification du fichier .env
```batch
# DB Configurations
DB_HOST=localhost
DB_USER='root'
DB_PASS=’’
DB_DATABASE=lafleur2013
```
### b - ajout de la connexion dans le fichier dbConnexion
```javascript
const dotenv = require('dotenv');
const mysql = require('mysql');
// Chargement du fichier .env
dotenv.config();

// Affectation des variables du fichier.env
const {DB_HOST,DB_USER,DB_PASS,DB_DATABASE}= process.env;
//Paramétrage de la connexion fournie par le fichier .env
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
});

//Établissement de la connexion
db.connect((err) => {
    if (err) {
        throw err;
    }
    // console.log('Mysql Connecté ....')
    console.log('Base de données : ' + db.state);
});

// Préparation de l'exécution d'une requête
query = async (sql, values) => {
    return new Promise((resolve, reject) => {
        const callback = (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        }
        // L'exécution appellera les requêtes préparées ou classiques
        db.query(sql, values, callback);
    }).catch(err => {
        const mysqlErrorList = Object.keys(HttpStatusCodes);
        // converti les erreurs mysql en statut HTTP
        err.status = mysqlErrorList.includes(err.code) ? HttpStatusCodes[err.code] : err.status;
        throw err;
    });
};

const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
});
```
Réécriture des requêtes PHP en Javascript. Ce code est à mettre à la suite du précédent :
```javascript
module.exports = {
    getLesCategories:async (param=[]) => {
        try {
            return await new Promise((resolve, reject) => {
                const sql = 'select * FROM categorie';
                // db.query(requête sql, paramètres s'ils existent, callback (soit erreur soit execution requête)
                db.query(sql, param, (err, result) => {
                    if (err) throw reject(new Error(err.message));
                    //Exécution de la requête s'il n'y a pas d'erreurs
                    resolve(result)
                })
            });
        } catch (error) {
            console.log(error);
        }
    },
}
```
La fonction exploite les promesses comme expliqué dans la fiche [promesses]({% aref "docs/javascript/programmer/les-promesses" %}). 
Si l'exécution se passe correctement, c'est la fonction resolve qui s'exécute, sinon c'est une fonction reject qui n'est pas utilisée ici.
### c - Récupération des données dans le contrôleur
Vous allez connecter le module de base de données au contrôleur. En haut du fichier du contrôleur, copiez :
```javascript
const db = require('../db/dbConnexion');
```
Il s'agit maintenant d'appeler les données à partir du modèle. La variable lesCategories est instanciée à partir d'une fonction :
```javascript
voirCategories:async (req, res) => {
        const lesCategories=await db.getLesCategories();
        //Appel de la vue produit et envoie des données
        res.render('produit',{
            lesCategories:lesCategories
        });
}
```
#### le code de la vue
Pour la vue, il n'y a rien à changer
{% questions%}
#### Rafraichissez ou Lancez de nouveau l'application (si besoin)
Vous devez voir les 3 catégories s'afficher.
{% endquestions %}
