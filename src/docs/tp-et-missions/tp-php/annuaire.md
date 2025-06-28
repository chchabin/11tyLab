---
layout : "layouts/docs.njk"
title : "Annuaire"
description : "Un club de bridge a souhaité créer une application pour recencer tous ses membres lors d'une compétition."
group : "tp-php"
section : "tp-et-missions"
toc : true
date : "2022-09-11T09:53:06+02:00"
draft : false
---
{% callout%}
Un étudiant en informatique a durant son stage créer un debut d'application.  
Les caractéristiques sont les suivantes :
1. Langage : PHP, HTML, CSS
2. Pattern :  MVC
3. Framework css : [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)   

**Pour l'instant cette application est locale.**
Monsieur Geste le président de l'association souhaite faire quelques modifications.
{% endcallout%}
## Partie 1 - Le cas Annuaire
### Mission 1 : Installation de l'application
1. Faire un fork de annuaire-VerEtudt sur [https://github.com/chchabin/annuaire-VerEtudt](https://github.com/chchabin/annuaire-VerEtudt)
   {% figure-abs "images/tp-php/fork.png" "fork" "100%" "100%" %}
2. Faire un clone du repository
```bash
git clone https://github.com/<votrenom>/annuaire-VerEtudt.git
```
2. Lancer le script `annuaire.sql`
3. Lisez la partie 2 pour comprendre les principes du MVC.

### Mission 2 : Création de la fonctionnalité liste membre
#### a - Maquette  
La maquette de la vue `v_listemembres.php` doit avoir cette apparence :

{% figure-abs "images/tp-php/vueListeMembre.PNG" "vueListeMembre" "100%" "100%" %}

#### b - Fiches descriptives du cas d'utilisation à réaliser

{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web de afficher membre   | 
|------------------------------------------------------|
| **Description cas d’utilisation**                    |
| **Nom cas d’utilisation :**   Afficher les membres   |
| **Acteur déclencheur :**   l’utilisateur             |
| **Scénario nominal :**                               |                                                                                                                                                                                          
| 1. L’utilisateur demande à afficher les membres.     |
| 2. Le système retourne le vue listemembres           |
| 3. L’utilisateur choisi de retourner à l’accueil.    |
| 4. Le système retourne la vue accueil                |
| **Extensions :**                                     |
| **Exceptions :**                                     |  
{% endbs-table %}

{%questions %}
**Ce qui vous est demandé de faire :**
1. dans le fichier `m_model.php` modifiez la requête qui récupère tous les noms et prénom des membres.
2. Testez votre résultat.
3. dans le fichier `v_listemembres.php` à l'aide du php, remplissez les lignes dynamiquement à partir de la variable `$les_membres`  envoyée par le contrôleur.
{% endquestions %}

### Mission 3 : Création de la fonctionnalité saisir membre
#### a - Maquette
La maquette de la vue `v_listemembres.php` doit avoir cette apparence :

{% figure-abs "images/tp-php/vueSaisieMembre.PNG" "vueSaisieMembre" "100%" "100%" %}

La maquette de résultat doit avoir cette apparence :

{% figure-abs "images/tp-php/vueSaisieResult.PNG" "vueSaisieResult" "100%" "100%" %}

#### b - Fiches descriptives du cas d'utilisation à réaliser
{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web de afficher membre                               | 
|----------------------------------------------------------------------------------|
| **Description cas d’utilisation**                                                |
| **Nom cas d’utilisation :**   Saisir les membres                                 |
| **Acteur déclencheur :**   l’utilisateur                                         |
| **Scénario nominal :**                                                           |                                                                                                                                                                                          
| 1. L’utilisateur demande à saisir un membre.                                     |
| 2. Le système retourne le formulaire de saisie                                   |
| 3. L’utilisateur saisit les informations et valide sa saisie.                    |
| 4. Le système retourne la vue accueil avec l'information sur l'état de la saisie |
| **Extensions :**                                                                 |
| **Exceptions :**                                                                 |

{% endbs-table %}
{%questions %}
**Ce qui vous est demandé de faire :**
1. dans le fichier `m_model.php` créez la fonction `insertMembre()` pour insérer un nouveau membre dans la base de données.
2. dans le fichier `v_saisiemembre.php` construisez un formulaire avec le nom et le prénom à saisir.
3. modifiez l'action `controlesaisie` dans le contrôleur pour récupérer toutes les variables.
4. modifiez le message envoyé par le contrôleur dans la vue `accueil.php`.
{% endquestions %}

### Mission 4 : Création de la fonctionnalité `supprimer membre`
{% callout %}
Les membres seront supprimés un par un.
{% endcallout %}
#### a - Maquette
La maquette de la vue `v_deletemembre.php` doit avoir cette apparence :  

{% figure-abs "images/tp-php/vueSupprimerMembre.PNG" "vueSupprimerMembre" "100%" "100%" %}

La maquette de résultat doit avoir cette apparence :  

{% figure-abs "images/tp-php/vueSupprimerResult.PNG" "vueSupprimerResult" "100%" "100%" %}

#### b - Fiches descriptives du cas d'utilisation à réaliser
{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web de afficher membre                               | 
|----------------------------------------------------------------------------------|
| **Description cas d’utilisation**                                                |
| **Nom cas d’utilisation :**   Supprimer un membre                                |
| **Acteur déclencheur :**   l’utilisateur                                         |
| **Scénario nominal :**                                                           | 
| 1. L’utilisateur demande à supprimer un membre.                                  |
| 2. Le système retourne le formulaire de saisie                                   |
| 3.  L’utilisateur choisi le membre et valide sa saisie.                          |
| 4. Le système retourne la vue accueil avec l'information sur l'état de la saisie |
| **Extensions :**                                                                 |
| **Exceptions :**                                                                 |

{% endbs-table %}  

{% callout%}
Pour preparer cette mission, aidez-vous du code de la mission précédente.
{% endcallout%}

{%questions %}
**Ce qui vous est demandé de faire :**
1. dans le fichier `m_model.php` créez la fonction `deleteMembre()` qui prendra en paramètre l'id du membre,
2. créez un fichier `v_deletemembre.php` dans lequel l'utilisateur choisi le membre à supprimer dans une liste, puis valide la suppression,
3. dans le contrôleur, créez l'action `supprimer` qui affiche la vue `v_deletemembre.php`,
4. testez votre travail,
5. dans le contrôleur, créez l'action `controledelete` pour récupérer les informations du formulaire et lancer la suppression dans le modèle.
6. Affichez le résultat de la saisie dans la vue `accueil.php` (prévoyez le code dans l'action `controledelete` en conséquence).
{% endquestions %}

### Mission 5 : Création de la fonctionnalité `modifier un membre`
#### a - Maquette
La maquette de la vue `v_choisirmembre` doit avoir la même apparence que la vue `v_deletemembre`  
La maquette de résultat correspond à celle, de celle de saisie d'un membre

#### b - Fiches descriptives du cas d'utilisation à réaliser
{% bs-table "table-bordered mx-auto"%}

| **PROJET :**   Application  web de modifier un membre                                  | 
|----------------------------------------------------------------------------------------|
| **Description cas d’utilisation**                                                      |
| **Nom cas d’utilisation :**   Saisir les membres                                       |
| **Acteur déclencheur :**   l’utilisateur                                               |
| **Scénario nominal :**                                                                 | 
| 1. L’utilisateur demande à modifier un membre.                                         |
| 2. Le système retourne le formulaire de saisie                                         |
| 3. L’utilisateur choisi le membre et valide sa saisie.                                 |
| 4. Le système retourne le formulaire de modification                                   |
| 5. L’utilisateur modifie les informations et valide sa saisie.                         |
| 6. Le système retourne la vue accueil avec l'information sur l'état de la modification |
| **Extensions :**                                                                       |
| **Exceptions :**                                                                       |

{% endbs-table %}
{%questions %}
**Ce qui vous est demandé de faire :**
1. dans le fichier `m_model.php` créez la fonction `getUnMembre()` qui prendra en paramètre l'id du membre,
2. modifiez le fichier `v_choisirmembre.php` avec la même structure que `v_deletemembre.php` mais qui a pour action `modifier`,
3. dans le contrôleur, créez l'action `choisir` qui affiche la vue `v_choisirmembre.php`,
4. testez votre travail,
5. dans le contrôleur, créez l'action `modifier` pour récupérer les informations du formulaire et afficher la vue `v_saisiemembre.php`.
6. modifier la vue `v_saisiemembre.php` pour qu'elle affiche les données du membre choisi (attention, l'id du membre doit être récupérée, mais pas affichée).
7. dans le fichier `m_model.php` créez la fonction `updateMembre()` qui prend en paramètre l'id, le nom et le prénom.
8. modifier l'action `controlesaisie` pour qu'elle appelle `updateMembre()` s'il existe un `id` dans le `REQUEST`,
9. affichez le résultat de la saisie dans la vue `accueil.php`.
   {% endquestions %}

## Partie 2- Quelques explications

### a - Point d'entrée unique
Le fichier `index.php` va lire toutes les url lancées par l'utilisateur.  
Il faut distinguer 2 cas :
1. l'application se lance pour la **première fois**, dans ce cas les paramètres de l'url sont fixées par avance
2. l'utilisateur clic sur un lien du menu, l'url obtenu sera de la forme
```batch
adresse du site/index.php?uc=nomcontroleur&action=nomaction
```
Par exemple vous pouvez avoir l'URL suivante si vous cliquez sur `Lister les membres`
```url
http://localhost/annuaire-VerEtudt/index.php?uc=gerer&action=lister
```
### La gestion de l'url
Le routage de l'URL se fait dans le fichier `index.php`.
Le tableau `$_REQUEST` récupère les valeurs de `uc` et de `action`.
```php
$uc = 'gerer'; ---------------------> // valeur par défaut du contrôleur  
$action = 'accueil';----------------> // valeur par défaut de l'action   
if (isset($_REQUEST['action'])) { -->//test si la variable action a une valeur   
   $action=$_REQUEST['action'];  
  }  
if (isset($_REQUEST['uc'])) {------->//test si la variable uc a une valeur  
    $uc=$_REQUEST['uc'];  
    }  
include "controllers/c_$uc.php";---->// appel du contrôleur correspondant  
```
Le fichier index.php va orienter le flux vers le contrôleur qui, par défaut, est le fichier
```php
c_gerer.php
```
### b - L'écriture de l'action dans le contrôleur
Dans le contrôleur, le programme exécutera la fonction correspondant au nom de l'action.
Ici l'action est appelée via un `switch`  
L'action va obtenir des données du modèle. Elle va les traiter et les envoyer à une vue. Voici un exemple
```php
switch ($action) {
     ⁝
     case 'lister': {
        $les_membres=$pdo->getLesMembres(); // Appel de la fonction dans le modèle
        require 'views/v_listemembres.php'; // Appel de la vue à afficher
        break;
     }
     ⁝
}
```
### c - Le modèle
Le modèle enregistre toutes les données, qu'elles viennent d'une base de données ou d'un tableau.  
Dans le cas d'une base de donnée, elle rassemblera toutes les requêtes nécessaires à la fourniture de données.
Dans notre cas, c'est la fonction `getLesMembres()` qui est appelée :
```php
    public function getLesMembres()
    {
       // modifiez la requête sql
        $sql = 'SELECT id FROM membres';
        $lesLignes = PdoBridge::$monPdo->query($sql);
        return $lesLignes->fetchALL(PDO::FETCH_ASSOC);
    }
```
### d - La vue
Elle reçoit les données et le met en forme selon les besoins du client.
Le contrôleur appel la vue `v_accueil` et envoie des données via la variable `$message`:
```php
switch ($action) {
        case 'accueil':
    {
        $message="Ce site permet d'enregistrer les participants à une épreuve.";
        include("views/v_accueil.php");
        break;
    }
     ⁝
}
```
`v_accueil` récupère les données de la variable `$message`
```php
<div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Bienvenue</h1>
        <p><?php echo $message; ?></p>
    </div>
</div>
```
{% callout danger%}
**ATTENTION**  
 Ici le nom de la variable doit être identique dans l'action et dans la vue !
{% endcallout%}

L'affichage sera alors :
{% figure-abs "images/tp-php/vueAccueil.png" "vueAccueil.png" "100%" "100%" %}

