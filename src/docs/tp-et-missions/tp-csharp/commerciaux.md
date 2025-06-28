---
layout : "layouts/docs.njk"
title : "Commerciaux"
description : ""
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-25T22:44:42+01:00"
draft : false
---
{% callout %}
### BLOC 2
2.1.2 Modéliser une solution applicative  
2.1.3 Utiliser des composants d’accès aux données  
2.1.5 Réaliser des tests nécessaires à la validation ou à la mise en production
{% endcallout %}
## CONTEXTE Commerciaux
La société **Camaurel** fabrique et vend des placards et rangements à monter soi-même. Son
siège est installé dans la région parisienne ; un nombre important de commerciaux rayonne en
France afin de développer et consolider sa clientèle : principalement des distributeurs
(magasins d'aménagement, surfaces de bricolage). Pendant ses déplacements, le commercial
est amené à engager des frais, pour ses transports, ses repas ou les nuits passées à l'hôtel.
L'application proposée ici vise à gérer ces notes de frais, documents rendus justifiant des frais
engagés.

## Mission 1
### 1) Gestion des commerciaux
   Chaque commercial a un nom, un prénom, une catégorie professionnelle – pour laquelle un
   barème pour certaines notes de frais sera appliqué, de type caractère -, une puissance de
   voiture de type entier – qui permettra d’affecter un tarif pour les frais de transport -.  
   Par ailleurs chaque commercial est affecté à un service, ici le service commercial.
###  2) Gestion des notes de frais de chaque commercial
   Régulièrement après chaque mission, le commercial remet ses notes de frais.
   Le système a besoin de connaître, à chaque création d'une note de frais, la date du frais, le
   montant à rembourser (champ de type double) et si chaque note de frais a été remboursée ;
   chaque note est identifiée par un numéro.  
   On désire également que chaque note de frais puisse connaître le commercial qui l’a émise.  
   Le service commercial ne contient pas de champ particulier

{% callout %}
Faire le diagramme de classes sans faire apparaître les méthodes.
{% endcallout %}

### 3) Code de la classe Commercial
{% callout danger %}
- Vous allez utiliser **Visual Studio** 
- faites un fork du [repository github](https://github.com/chchabin/libCommerciauxVerEtudt)
- exécutez les tests pour vérifier qu'ils sont tous faux
{% endcallout %}
Écrire le code de la classe `Commercial`.
{% questions %}
1. Écrire le constructeur de la classe,
2. Écrire les accesseurs pour chacun des champs,
3. Écrire une méthode d’ajout d’une note de frais,
4. Écrire une redéfinition de la méthode `ToString`.
5. Testez votre résultat avec les tests unitaires déjà préparés.
{% endquestions %} 


### 4) Code de la classe NoteFrais
Écrire le code de la classe `NoteFrais` :
{% questions %}
1. Écrire le constructeur de la classe (cf exemple),
2. Écrire les accesseurs pour les propriétés `montantARembourser` et `leCommercial`,
3. Écrire un modificateur qui permet de passer à true le champ `rembourse`,
4. Écrire un second modificateur qui valorise le champ `montantARembourser`(cf. exemple),
5. Écrire une redéfinition de la méthode `ToString`,
6. Ajouter la propriété numéro,
7. Dans la classe Commercial écrire la signature de la méthode `ajouterNoteFrais`,
8. Dans la classe Commercial ajoutez une liste note de frais (modifiez le constructeur en consèquence),
9. Dans le constructeur note de frais, faire en sorte que la note de frais soit immédiatement enregistré dans la liste du commercial,
10. Testez votre résultat avec les tests unitaires déjà préparés
    {% endquestions %}
    ***Exemple :***
```csharp
Commercial c;
c = new Commercial("Jean", "Dupond", 25, 'A ');
NoteFrais f0;
f0 = new NoteFrais(new DateTime(2022, 11, 12), c);
```

**Valoriser le champ `montantARembourser`**
```csharp
public void setMontantARembourser()
 {
   this.montantARembourser = calculMontantARembourser();
 }
virtual public double calculMontantARembourser() { return 0; }
```
Cette dernière méthode sera implémentée plus tard pour les classes dérivées.

Signature de la méthode `ajouterNoteFrais` :
```csharp
void ajouterNoteFrais(NoteFrais f)
```

{% callout warning%}
Remarque : le numéro de la note de frais est géré automatiquement ; dans notre cas, c’est la première note de frais 
pour ce commercial.
{% endcallout %}

### 5) Modification de Commercial
Écrire le code permettant de lister toutes les notes d'un `Commercial` :

{% questions %}
1. Écrire la méthode `getMesNoteFrais` qui renvoie la liste des notes de frais d'un commercial,
2. Complétez la méthode `ajouterNoteFrais`,
3. Testez votre résultat avec les tests unitaires déjà préparés.
{% endquestions %}

### 6) Tests Unitaires
Vous créerez des [tests unitaires](https://chchabinlab.gitlab.io/labslides/testu-vs/#/) pour la méthode `ajouterNoteFrais` :
- Écrire le code du test dans la classe `TestEcrire` du projet TestlibCommerciaux

**Arranger :**
```csharp
Commercial c;
NoteFrais f0, f1;
c = new Commercial("Jean", "Dupond", 25, 'A ');
```

**Agir :**
```csharp
f0 = new NoteFrais(new DateTime(2022, 11, 12), c);
f1 = new NoteFrais(new DateTime(2022, 11, 15), c);
```

**Auditer :**
```csharp
Assert.AreEqual(2, c.getMesNoteFrais().Count);
```
## Mission 2
### 1) Code de la classe `ServiceCommercial`
Écrire le code de la classe `ServiceCommercial`.
{% questions %}
1. Écrire le constructeur qui prend en compte la liste des commerciaux,
2. Écrire la méthode `ajouterCommercial` d’ajout d’un commercial,
3. Écrire la méthode `getEstRembourse` dans la classe `NoteFrais`,
4. Écrire la méthode `nbFraisNonRembourses` qui retourne le nombre de frais dans l’état non remboursé pour tous ses commerciaux.
5. Testez votre résultat avec les tests unitaires déjà préparés.
{% endquestions %}
Signature de la méthode `ajouterCommercial` :
```csharp
void ajouterNoteFrais(Commercial unCommercial)
```
Signature de la méthode `getEstRembourse` :
```csharp
Boolean getEstRembourse()
```
Signature de la méthode `nbFraisNonRembourses` :
```csharp
int nbFraisNonRembourses()
```
### 2) Tests Unitaires
Vous créerez des [tests unitaires](https://chchabinlab.gitlab.io/labslides/testu-vs/#/) pour la méthode `nbFraisNonRembourses` :
{% figure-abs "images/exercices-et-challenges/cas/commerciaux03.png" "commerciaux03" "100%" "100%" %}

## Mission 3
### 1) Les 3 classes dérivées de la classe NoteFrais
Il y a trois types de notes de frais.
- Les **notes de transport** routier dues au carburant (les péages sont pris en charge par une
  carte de société).  
  Le commercial précise sur sa note le nombre de km, sans autres justifications ; le
  remboursement se fait sur la base de la puissance de la voiture : 
  - 0.1 €/km pour une voiture de moins de 5 chevaux, 
  - 0.2 € pour une voiture entre 5 et 10 chevaux, 
  - 0.3 € au-delà de 10 chevaux.
- Les **notes de repas de midi**.  
  Le commercial doit fournir la facture du repas. Le remboursement se fait en tenant compte de
  la catégorie du commercial (échelle interne à la profession) ; 
  - la catégorie A donne lieu à un
    remboursement de 25 €, 
  - la catégorie B donne lieu à un remboursement de 22 € et 
  - la catégorie C à un remboursement de 20 €.  
  
  Dans le cas où la facture n'atteint pas ce plafond, le commercial est remboursé du montant de la facture produite.
- les **notes de nuité**, comprenant également le repas du soir et le petit déjeuner.
  Deux éléments interviennent ; la catégorie pour laquelle la même règle est appliqué que pour
  les repas de midi ;
  - A → 65€ , 
  - B → 55€, 
  - C → 50€ 

  et la région touristique dans laquelle se
  trouve l'hôtel. Un coefficient est appliqué aux tarifs : 
  - 0.90 pour la région 1, 
  - 1 pour la région 2, 
  - 1.15 pour la région 3.  

   Le plafond indiqué n'est remboursé que si le montant de la facture lui est supérieur.

{% callout %}
Ajouter les nouvelles classes au diagramme de classe
{% endcallout %}

{% questions %}
1. Écrire les classes `FraisTransport`, `RepasMidi`, `Nuite`.
2. Écrire le code des 3 constructeurs,
3. Testez votre résultat avec les tests unitaires déjà préparés.
{% endquestions %}

### 2) La classe FraisTransport
Cette classe redéfinit la méthode virtuelle `calculMontantARembourser`. C'est cette méthode - 
redéfinie - qui calculera les réels montants des remboursements pour les classes dérivées ; la
méthode `setMontantARembourser` sera appelée à la construction des instances des classes
dérivées.

{% questions %}
1. Écrire le code de la méthode `calculMontantARembourser`,
2. Écrire une redéfinition de la méthode `ToString`,
3. Testez votre résultat avec les tests unitaires déjà préparés.
{% endquestions %}

**Test Unitaire :**
```csharp
public void calculMontantARembourserTransportTest()
    {
        //Arranger
        Commercial c;
        NoteFrais f0;
        c = new Commercial("Jean", "Dupond", 8, 'A ');
        //Agir
        T0 = new FraisTransport(new DateTime(2022, 11, 12), c,250);
        //Auditer
        Assert.AreEqual(50, T0.getMontantARembourser());
    }
```

**Exemple de retour de la méthode `ToString` avec :**
```texte
Transport - Numéro : 0 - Date : 01/01/2023 00:00:00 - Montant à rembourser: 20 euros - Non remboursé - 100 km-
```


### 3) La classe RepasMidi
{% questions %}
1. Écrire le code de la méthode `calculMontantARembourser`,
2. Écrire une redéfinition de la méthode `ToString`.
{% endquestions %}

**Test Unitaire 1 :**
Pour la méthode `calculMontantARembourserMidi1Test` :  
- **Arranger**
  - le même commercial que dans le premier test
  - 35 comme montant du repas
- **Auditer**
  - 25 euros de remboursement.

**Test Unitaire 2 :**
  Pour la méthode `calculMontantARembourserMidi2Test` :  
- **Arranger**
  - le même commercial que dans le premier test
  - 15 comme montant du repas  
- **Auditer**
  - 15 euros de remboursement.

**Exemple de retour de la méthode `ToString` avec :**
```texte
Repas - Numéro : 1 - Date : 01/01/2023 00:00:00 - Montant à rembourser: 25 euros - Non remboursé - payé : 25,5 €
```

### 4) La classe Nuité
{% questions %}
1. Écrire le code de la méthode `calculMontantARembourser`,
2. Écrire une redéfinition de la méthode `ToString`.
   {% endquestions %}

**Test Unitaire 1 :**
Pour la méthode `calculMontantARembourserNuite1Test` :  
- **Arranger**
  - le même commercial que dans le premier test
  - 46 comme montant
  - région 2
- **Auditer**
  - 46 euros de remboursement.

**Test Unitaire 2 :**
Pour la méthode `calculMontantARembourserNuite2Test` :  
- **Arranger**
  - le même commercial que dans le premier test
  - 80 comme montant
  - région 3
- **Auditer**
  - 74,75 euros de remboursement.

**Exemple de retour de la méthode `ToString` avec :**
```texte
Nuité - Numéro : 1 - Date : 01/01/2023 00:00:00 - Montant à rembourser: 65 euros - Non remboursé - payé : 100,5 € - A -
```

## Mission 4
### 1) Gestion des notes de frais d'un commercial
On désire adapter la saisie des notes de frais. La création de chaque note de frais sera intégrée dans la classe `Commercial`.
{% questions %}
1. Écrire les trois méthodes `ajouterNote`, correspondant aux trois types de note : transport, repas, nuité ;
2. Ajouter la méthode `CumulNoteFraisRembourser` dans la classe Commercial qui permet d’obtenir le cumul des notes de
frais remboursées pour une année passée en paramètres.  
{% endquestions %}
On désire pouvoir ajouter des notes de frais à **partir du service commercial**.
{% questions %}
3. Écrire les trois méthodes `ajouterNote`, correspondant aux trois types de note : transport, repas, nuité ;
4. Établir les tests unitaires correspondants.
{% endquestions %}

C’est ainsi que l’appel suivant pourra ajouter différentes notes de frais : 
```csharp
ServiceCommercial sc; 
Commercial c1 ; 
sc = new ServiceCommercial(); 
c1 = new Commercial("Dupond", "Jean", 7, 'B'); 
sc.ajouterCommercial(c1); 
sc.ajouterNote(c1, new DateTime(2013, 11, 15), 100);      // ajoute un frais de transport 
sc.ajouterNote(c1, new DateTime(2013, 11, 21), 15.5);     // ajoute une note de repas 
sc.ajouterNote(c1, new DateTime(2013,11 , 25), 105, '2');  // ajoute une nuité 
Console.WriteLine($"il y a {sc.nbFraisNonRembourses()} frais non remboursés");
```
{% questions %}
1. Écrire le code qui permet de rembourser une note de frais,
2. Établir des tests unitaires `nbFraisNonRemboursesSCTest` pour ces méthodes.
{% endquestions %}

## Mission 5
### Sérialisation
[La sérialisation](https://chchabinlab.gitlab.io/labslides/serialization/#/)  
Nous allons créer une classe PersisteServiceCommercial qui permettra d'écrire les appels suivants :
```csharp
PersisteServiceCommercial.sauve(sc, "service.sr");
ServiceCommercial sc1 = PersisteServiceCommercial.charge("service.sr");
```
{% callout warning %}
Remarque : le ServiceCommercial sc est lu à partir de la mémoire, le
ServiceCommercial sc1 est désérialisé.
{% endcallout %}

{% questions %}
1. Écrire la classe PersisteCommercial qui ne contiendra que deux méthodes statiques (utiliser la
sérialisation JSON)
2. Faire un test unitaire, `serializationCommerciauxTest`, en comparant le nombre de commerciaux dans chacun des services.
{% endquestions %}
