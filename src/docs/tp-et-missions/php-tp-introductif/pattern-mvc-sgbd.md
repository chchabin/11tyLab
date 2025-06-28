---
layout : "layouts/docs.njk"
title : "Pattern Mvc Sgbd"
description : ""
group : "php-tp-introductif"
section : "tp-et-missions"
toc : true
date : "2022-09-21T15:32:44+02:00"
draft : false
---
{% callout%}
**Objectif :**  
Il s’agit d’obtenir des données qui sont stockées dans une base de données. Il faut ensuite pourvoir les afficher en fonction des besoins du contrôleur.
{% endcallout%}

## Prérequis
{% callout warning%}
**Avant de commencer**
- Créez un répertoire TP06
- Copiez-collez les fichiers du répertoire TP05
  {% endcallout %}

{% callout danger%}
**Attention**  
Vérifiez bien que vous êtes en UTF8.
{% endcallout %}

{% callout%}
**Téléchargez**  
Téléchargez le dossier [Lafleur](https://github.com/chchabin/Lafleur-2021-php-MVC) :
1. cliquez sur le bouton code
2. cliquez sur Download ZIP (ou clonez le fichier avec GIT)
3. décompresses le fichier zip
4. déplacez le répertoire images dans le répertoire TP06
   {% endcallout%}

## Exercice 1 - Exécution du script sql
### a - Création de la base
Si vous connaissez phpmyadmin (c’est celui qui sera en démonstration), lancez l’application, sinon utilisez votre application favorite ou les lignes de code. Une fois phpmyadmin connecté, cliquez sur base pour créer la base lafleur
{% callout success%}
#### Résultat
Voici ce que vous obtenez en créant la base :
{% endcallout%}

{% figure-abs "images/exercices-et-challenges/tp/creationBase.PNG" "creationBase" "100%" "100%" %}


### b - Execution du script
Si vous avez décompressé le fichier, vous avez accès au fichier `lafleur2013.sql`

{% callout danger%}
**Décompressez le fichier !**  
Si vous voulez exécuter le fichier sql **sans** décompresser le fichier zip, vous obtiendrez une erreur.
{% endcallout%}

Pour lancer le script, il suffit d’aller sur l’onglet importer et de cliquer su go tout en bas de la page.
{% callout success%}
#### Résultat
Voici ce que vous obtenez en voulant lancer le script :
{% endcallout%}

{% figure-abs "images/exercices-et-challenges/tp/scriptBase.PNG" "scriptBase" "100%" "100%" %}

## Exercice 2 - La création de la classe connexion
La connexion se fait par l’intermédiaire d’une classe objet : la classe PDO. C’est une classe indépendante du type de
*base de données. Créez un fichier m_pdo.php. Copiez coller le code suivant :

{% bt-collapse "I1" %}
```php
<?php
class PdoTd
{
    private static $serveur = 'mysql:host=localhost';
    private static $bdd = 'dbname=lafleur';
    private static $user = 'root';
    private static $mdp = '';// mettre ici votre mot de passe
    \*\*
     \* @var PDO $monPdo
     \*/
    private static $monPdo;
    private static $monPdoTd = null;
    \*\*
     \* Constructeur privé, crée l'instance de PDO qui sera sollicitée
     \* pour toutes les méthodes de la classe
     \*
     \*/
     private function __construct()
        {
            self::$monPdo = new PDO(self::$serveur.';'.self::$bdd,
                    self::$user, self::$mdp);
            self::$monPdo->query("SET CHARACTER SET utf8");
        }
    public function _destruct(){
        self::$monPdo = null;
    }
    \*\*
     \* Fonction statique qui crée l'unique instance de la classe
     \*
     \* Appel : $instancePdoTd = PdoTd::getPdoTd();
     \* @return null l'unique objet de la classe PdoTd
     */
    public  static function getPdoTd()
    {
        if(self::$monPdoTd == null)
        {
            self::$monPdoTd= new PdoTd();
        }
        return self::$monPdoTd;
    }
    \*\*
     \* Ici commence la déclaration des fonctions qui
     \*               permettrons d'exécuter les requêtes.
     \*
     \*
     \* @return array
     */
    public function getLesCategories()
    {
        $req = "select \* from categorie";
        $res = self::$monPdo->query($req);
        $lesLignes = $res->fetchAll();
        return $lesLignes;
    }
    \*\*
     \* @return array
     \*/
    public function getLesProduits()
    {
        $req="select \* from produit";
        $res = self::$monPdo->query($req);
        $lesLignes = $res->fetchAll();
        return $lesLignes;
    }
}
```
{% endbt-collapse %}
Pour instancier la classe, modifiez le fichier index.php, de la façon suivante :
{% bt-collapse "I2" %}
```php
include('m_model.php');
include('v_entete.php');
require_once 'm_pdo.php';
session_start();
$pdo = PdoTd::getPdoTd();
```
{% endbt-collapse %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. Que signifie `private` ?
2. Que signifie `public` ?
3. Que signifie `self` ?
4. Que signifie `->` ?
5. Que signifie `query()`?
6. Que signifie `fetchAll()` ?
7. Que signifie `::` ?
8. Que signifie `require_once` ?
9. Comment est appelé le constructeur de la classe ?
   {% endquestions %}

## Exercice 3 - Modification du contrôleur
Il s’agit maintenant de remonter les informations obtenues de la base de données pour les transmettre au contrôleur.
Il faut donc rajouter du code dans la partie Produits du contrôleur. Vous allez chercher à afficher les catégories,
il faut ainsi obtenir les catégories du modèle. Vous allez remplacer le code existant par le code suivant :

{% bt-collapse "I3" %}
```php
    case 'produits' :
{
    $lesCategories = $pdo->getLesCategories();
    include('v_produits.php');
    break;
}
```
{% endbt-collapse %}
## Exercice 4 - La création de la vue
Vous avez remarqué que les requêtes renvoient des tableaux. Il faut donc pourvoir les parcourir pour les afficher.
Vous allez créer un fichier v_produit.php, et saisir le code est le suivant :

{% bt-collapse "I4" %}
```html
<div class="container">
    <?php foreach($lesCategories as $uneCategorie) : ?>
                    <h2><?= $uneCategorie['libelle']; ?></h2>
        <hr>
        <div class="card-group">
            <? //lire un tableau les produits
              //test pour savoir si le produit a la même reference que celle de une catégorie?>
            <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><?= "//description d'un produit" ?></h5>
                        </div>
                        <img class="card-img-top" src="<?= "//image d'un produit" ?>" alt="Card image du produit">
                        <div class="card-footer text-muted">
                            <p>prix : <?= "//prix d'un produit" ?>€</p>
                        </div>
                    </div>
            <? //fin de la condition?>
            <?// fin de la boucle?>
        </div>
    <?php endforeach; ?>
</div>
```
{% endbt-collapse %}
Voici le résultat obtenu :
{% callout success%}
#### Résultat
Voici ce que vous obtenez avec la composition :  
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/vueComposition.PNG" "vueComposition" "100%" "100%" %}

{% questions %}
**En vous aidant de la documentation php, répondez aux questions suivantes :**
1. En vous aidant du code pour les catégories, modifiez le contrôleur pour obtenir le tableau des produits nommé lesProduits.
2. Dans la vue, remplacez les commentaires par le code php permettant d’afficher les produits. Vous appellerez chaque élément du tableau lesProduits : unProduit.
3. Pour voir à quoi ressemble lesProduits, vous pouvez, dans le contrôleur, rajouter après l’appel `var_dump($lesProduits);`
4. Modifier le titre de l’onglet pour obtenir ’LesFleurs’
   {% endquestions %}

{% callout success%}
#### Résultat
Voici ce que vous obtenez avec les produits :  
{% endcallout %}

{% figure-abs "images/exercices-et-challenges/tp/vueProduits.PNG" "vueProduits" "100%" "100%" %}
