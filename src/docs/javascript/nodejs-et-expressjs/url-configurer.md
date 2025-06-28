---
layout : "layouts/docs.njk"
title : "Url Configurer"
description : "Création de page avec URL Paramétrée"
group : "nodejs-et-expressjs"
section : "javascript"
toc : true
date : "2022-08-15T10:39:40+02:00"
draft : false
---
{% callout %}
#### Création et accès à la page produits (3/3)
Vous allez récrire l'application [Lafleur](https://github.com/chchabin/Lafleur-2021-php-MVC), initialement écrite enPHP, en javascript.
{% endcallout %}
## 1 - modification du contrôleur
Lorsque l'utilisateur clic sur le lien l'URL est composée de `/voirProduitIdcategorie`. Il faut donc retrouver cette information. 
En suivant le détail de l'
[URL]({% aref "docs/javascript/nodejs-et-expressjs/commencer-et-afficher"%}) vous comprendrez comment récupérer l'`Idcategorie`.

Vous allez modifier l'action voir produit dans le contrôleur après l'action voirCategories, de façon à charger les données en fonction du modèle.
```javascript
voirProduit:async (req, res) => {
        // Récupération du code renvoyé dans l'URL
        const num=req.params.num;
        // Récupération des catégorie, car vous allez rappeler la vue categorie
        const lesCategories=await db.getLesCategories();
        // Récupération des produits en fonction de la catégorie (passée en paramètre dans l'URL)
        const getLesProduitsDeCategorie=await db.getLesProduitsDeCategorie(num);
        // Affichage de la vue Produit avec les paramètres
        res.render('produits',{
            lesCategories:lesCategories,
            lesProduits:getLesProduitsDeCategorie,
            categorie:num
        });
    }
```
{% callout danger%}
#### Attention
N'oubliez pas la virgule à la fin de voirCategorie !!!

La virgule à la fin n'a aucun impact en dehors d'éviter de l'oublier si vous rajoutez une action.
{% endcallout %}
## 2 - modification du modèle
Dans le modèle, le fichier dbConnexion, vous allez créer une requête paramétrée,
```javascript
getLesProduitsDeCategorie:async (param=[]) => {
        try {
            return await new Promise((resolve, reject) => {
                 // création de la requête paramétrée
                const sql = 'select * FROM produit WHERE idCategorie =?';
                db.query(sql, param,(err, result) => {
                    if (err) throw reject(new Error(err.message));
                    //Exécution de la requête s'il n'y a pas d'erreurs
                    resolve(result)
                })
            });
        } catch (error) {
            console.log(error);
        }
    }
``` 
{% callout danger%}
#### Attention
N'oubliez pas la virgule à la fin de getLesCategories !!!

La virgule à la fin n'a aucun impact en dehors d'éviter de l'oublier si vous rajoutez une action.
{% endcallout %}
