---
layout : "layouts/docs.njk"
title : "Test Unitaire"
description : "Les tests unitaires avec visual studio"
group : ""
section : "programmation-objet"
toc : true
date : "2022-12-10T00:04:04+01:00"
draft : false
---
## Création d'un projet de test
1. Ajoutez un projet de test unitaire
{% figure-abs "images/csharp/testUnitaire01.png" "test Unitaire" %}
2. Dans ce nouveau projet ajouter une référence au projet
{% figure-abs "images/csharp/testUnitaire02.png" "référence test Unitaire" %}
   {% callout %}
       Un projet a déjà été créé
   {% endcallout %}
3. Créez une class de test  
    a. En haut du fichier, ajoutez l'instruction `using` le nom de la référence du projet, par exemple `using Banque;`  
    b. Ajoutez le code de votre méthode, par exemple :
```csharp
        public void Debit_montant_nonValide()
        {
            // Création de l'objet avec ses paramètres
                //Valeur attendue à la fin du test
            double attendu = 11.99; 
                // Valeurs prises en compte pour éxécuter la méthode
            double solde = 11.99;
            double debit = 144.55;
            double decouvertAut = -100;
            Compte c1 = new Compte(123, "Mr. Bryan Walton", solde, decouvertAut);

            // Exécute
            c1.debiter(debit);

            // Résultat attendu
                // Résultat rendu par ala méthode
            double actuel = c1.getSolde();
                // Résultat à comparer au résultat attendu
            Assert.AreEqual(attendu, actuel, 0.001, "Account not debited correctly");
        }
```
La méthode est simple : elle met en place un nouvel objet Compte avec un solde de début, puis retire un montant 
valide. Elle utilise la méthode `Assert.AreEqual` pour vérifier que le solde de fin est conforme à ce qui est attendu. 
Les méthodes telles que `Assert.AreEqual`, `Assert.IsTrue` et d’autres de l'objet `Assert` sont fréquemment utilisées 
dans les tests unitaires.
{% callout %}
**La classe Assert contient plusieurs méthodes :**  
AreEqual, AreNotEqual, IsFalse, IsTrue, IsNull…
{% endcallout %}

## Ajout d'un nouveau test : 
1. faire un click droit sur le projet de test unitaire et `Ajouter`
2. choisir `Test unitaire`
{% figure-abs "images/csharp/testUnitaire03.png" " ajouter test Unitaire" %}

## Execution des tests
1. faire un click droit sur le projet et `Exécuter les tests`
   {% figure-abs "images/csharp/testUnitaire04.png" "exécuter test Unitaire" %}
2. Le résultat apparait sous forme de tableau
   {% figure-abs "images/csharp/testUnitaire05.png" "résultat test Unitaire" %}