---
layout : "layouts/docs.njk"
title : "Dll"
description : ""
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-13T23:04:56+01:00"
draft : false
---
# Création d'une DLL avec l'application Comptes Bancaires

## 1 - Création du projet
{% callout danger%}
Attention :  
Vérifiez bien que le projet est en `.Net Framework`  
Sinon vous devrez tout recommencer !
{% endcallout %}
Créons un nouveau projet VS de type <mark>bibliothèque de classes ( `.Net Framework` )</mark> que nous nommerons `libCptBq`  :
{% figure-abs "images/exercices-et-challenges/cas/dll01.png" "dll01" "100%" "100%" %}

{% callout %}
1. Renommez `Class1` en `Compte`.
{% endcallout %}

{% callout %}
2. Écrire la déclaration de votre classe `Compte` en utilisant le diagramme de classe qui indique les attributs et méthodes.  
Chaque procédure ne contiendra qu'un corps vide `{}`. Afin de ne pas avoir d'erreur de compilation sur les fonctions,
vous préciserez une valeur de retour dans le corps de la méthode,  
exemple :  
`public bool debiter(float montant){return true;} `  
**Compiler.**
{% endcallout %}

## 2 - Ajout de documentation
La documentation est utile pour l’utilisateur des classes ; ajoutons une documentation.
Pour cela, au-dessus de la méthode (ou de la classe) à documenter, ajoutons 3 slashs `/`, l’environnement VS, va insérer
automatiquement des balises de documentation, au-dessus du constructeur.  
Dans la balise summary, écrivons la documentation :
{% figure-abs "images/exercices-et-challenges/cas/dll02.png" "dll02" "100%" "100%" %}

Cette documentation apparaîtra dans l’IntelliSense quand l’utilisateur de la classe appellera le constructeur.

## 3 - Création de la documentation XML
Pour utiliser cette documentation, il faut générer le fichier XML associé.  
Pour cela, aller dans le menu Projet → Propriétés de `libCptBq`
{% figure-abs "images/exercices-et-challenges/cas/dll03.png" "dll03" "100%" "100%" %}

Dans la page qui s’ouvre, cliquez sur `Build` et cochez la case `Fichier de documentation XML`
{% figure-abs "images/exercices-et-challenges/cas/dll04.png" "dll04" "100%" "100%" %}

{% callout %}
1. Valider
2. Compiler
{% endcallout %}

Allez dans le repertoire `bin\Debug\` de la solution dans votre explorateur vous verrez le fichier `libCptBq.xml` qui contient vos commentaires.

## 4 - Ajouter un projet dans une solution existante
1. Sélectionner le projet  
   {% figure-abs "images/exercices-et-challenges/cas/dll05.png" "dll05" "100%" "100%" %}
2. faire un clic droit `=>` Ajouter `=>` Nouveau Projet
3. Choisir le type de projet (Console ou WinForms) puis valider
{% callout danger%}
   Attention :  
   Vérifiez bien que le projet est en `.Net Framework`  
   Sinon vous devrez tout recommencer !
{% endcallout %}
4. Faire un clic droit sur le projet  
   {% figure-abs "images/exercices-et-challenges/cas/dll06.png" "dll06" "100%" "100%" %}
5. Choisir "définir en tant que projet de démarrage "
   {% figure-abs "images/exercices-et-challenges/cas/projetDemar.png" "projetDemar" "100%" "100%" %}
6. Affichez les dépendances du projet.
7. Faire un clic droit → "ajouter une référence au projet"  
   {% figure-abs "images/exercices-et-challenges/cas/dll07.png" "dll07" "100%" "100%" %}
8. Choisissez la DLL   
   {% figure-abs "images/exercices-et-challenges/cas/dll08.png" "dll08" "100%" "100%" %}
9. Il ne reste plus qu’à indiquer dans votre code, grâce à la clause `using`, la bibliothèque :  
   {% figure-abs "images/exercices-et-challenges/cas/dll09.png" "dll09" "100%" "100%" %}

{% callout danger%}
   Attention :  
la bibliothèque à indiquer dans la clause using est le nom du namespace de la dll ! Dans notre cas la dll et le nom 
du namespace sont les mêmes.
{% endcallout %}

{% callout danger%}
Attention :  
Les bibliothèques (dans les propriétés) doivent être identiques.
{% endcallout %}

{% callout %}
1. Construisez vos objets dans `libCptBq`
2. Générez la solution
3. Afficher vos résultats dans votre projet console ou winform.
{% endcallout %}