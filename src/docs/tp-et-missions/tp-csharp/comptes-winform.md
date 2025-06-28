---
layout : "layouts/docs.njk"
title : "Comptes WinForm"
description : ""
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-31T16:49:21+01:00"
draft : false
---
{% callout %}
### BLOC 2
2.1.2 Modéliser une solution applicative  
2.1.3 Utiliser des composants d’accès aux données  
2.1.5 Réaliser des tests nécessaires à la validation ou à la mise en production
{% endcallout %}

Vous disposez d’un début d’application ; les données sont déjà présentes dans un fichier sérialisé.  
Une dll contient le code des classes métiers : Banque, Compte, Mouvement, Type et PersisteBanque.  
Vous devez fournir une version graphique de l'application grâce aux objets WinForm de Visual Studio.

## Mission 1
### 1 - Créer un Menu et un container MDI
{% callout %}
1. Ajoutez la DLL au projet
2. Renommer `Form1` en `Menu`
3. Ajouter en menu principal `Comptes` et `Mouvements`
4. Ajouter en sous menu de `Comptes` : `Voir tous les comptes`, `Ajouter`, `Rechercher un compte`
5. Ajouter en sous menu de `Mouvements` : `Ajouter`, `Voir les mouvements`
{% endcallout %}

**Résultat attendu :**
   {% figure-abs "images/exercices-et-challenges/cas/wfcompte01.png" "wfcompte01" "100%" "100%" %}

Nous allons nous intéresser à présent à une autre façon de gérer les multifenêtres, il s’agit des MDI
{% callout %}
6. Ajoutez un container MDI en mettant la propriété `IsMdiContainer` à True
{% endcallout %}

**Résultat attendu :**
{% figure-abs "images/exercices-et-challenges/cas/wfcompte02.png" "wfcompte02" "50%" "50%" %}

**Résultat pour le WinForm :**
{% figure-abs "images/exercices-et-challenges/cas/wfcompte03.png" "wfcompte03" "100%" "100%" %}

### 2 - Ajout des formulaires
{% callout %}
1. Créez les formulaires `FrmAjoutCompte` et `frmAjoutMouvement`
2. Ajouter les objets à `FrmAjoutCompte` selon le schéma suivant. Nommez-les en fonction de leur type, par exemple `lblNom` pour le label nom et 
`txtNom` pour la zone de text ou encore `btnValider` pour le bouton valider.
3. Ajouter les objets à `frmAjoutMouvement` selon le schéma suivant. Utilisez `lst` pour les listBox.
{% endcallout %}

**Résultat attendu `FrmAjoutCompte` :**
{% figure-abs "images/exercices-et-challenges/cas/wfcompte04.png" "wfcompte04" "100%" "100%" %}

**Résultat attendu `frmAjoutMouvement` :**
{% figure-abs "images/exercices-et-challenges/cas/wfcompte05.png" "wfcompte05" "100%" "100%" %}

### 3 - Ajouter le code
{% callout %}
1. Dans les formulaires ajouter le `using` avec la DLL
2. Déclarez une banque B et passez-la en paramètre.
{% endcallout %}

**Exemple de résultat attendu pour `frmAjoutMouvement` :**
```csharp
Banque B;
public FrmAjoutMouvement(Banque b)
{
   InitializeComponent();
   this.B = b;
}
```

{% callout %}
1. Dans le Form `Menu`, ajouter le `using` avec la DLL,
2. Déclarez une banque B,
3. Double-cliquez sur `Ajouter` dans le menu
{% endcallout %}

**Résultat attendu :**
{% figure-abs "images/exercices-et-challenges/cas/wfcompte06.png" "wfcompte06" "100%" "100%" %}