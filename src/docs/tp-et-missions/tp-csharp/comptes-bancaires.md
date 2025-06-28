---
layout : "layouts/docs.njk"
title : "Comptes Bancaires"
description : ""
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-13T13:51:41+01:00"
draft : false
---
{% callout %}
### BLOC 2
2.1.2 Modéliser une solution applicative  
2.1.3 Utiliser des composants d’accès aux données  
2.1.5 Réaliser des tests nécessaires à la validation ou à la mise en production
{% endcallout %}
## CONTEXTE BANQUE 

**Le Crédit Lyonnais**, société anonyme, connue sous l'appellation **LCL**, est une[ banque française ](https://fr.wikipedia.org/wiki/Liste_de_banques_par_pays#France)fondée à
[ Lyon ](https://fr.wikipedia.org/wiki/Lyon)en[ 1863 ](https://fr.wikipedia.org/wiki/1863)par[ François Barthélemy Arlès-Dufour ](https://fr.wikipedia.org/wiki/FranÃ§ois_BarthÃ©lemy_ArlÃ¨s-Dufour)et
[ Henri Germain.](https://fr.wikipedia.org/wiki/Henri_Germain_\(banquier\)) Elle est considérée comme l'un des trois 
piliers de l'industrie bancaire française, faisant partie des « Trois Vieilles » avec
[BNP Paribas ](https://fr.wikipedia.org/wiki/BNP_Paribas)et[ Société générale.](https://fr.wikipedia.org/wiki/Société_générale)

Aujourd’hui LCL est centré sur le marché français. Les activités de LCL sont la banque des particuliers, la banque privée, la banque des professionnels, et la banque des entreprises et de gestion de fortune.

LCL possède encore 3 filiales : 
- Interfimo (organisme de financement pour professionnels libéraux), 
- la banque Thémis (financement des procédures collectives des entreprises) et 
- Angle Neuf (investissement dans l'immobilier neuf). 

La BFC-AG (Banque Française Commerciale-Antilles Guyane) a été totalement intégrée à LCL en 2015. Les autres filiales en France et à l'international ont été intégrées au groupe Crédit Agricole.

En 2012, LCL compte près de 20 900 collaborateurs répartis sur 2 065 sites dont plus 1 900 agences LCL sur l'ensemble du territoire pour 6 millions de clients particuliers, 320 000 clients professionnels et 27 000 clients entreprises et institutionnels.

Dans les services informatiques, les informaticiens ont un rôle-clé pour faire fonctionner les millions de paiements effectués chaque heure, les salles de marchés, le site de la banque en ligne, etc. Ils peuvent avoir **différents rôles** :

- Dans le **réseau bancaire**, il s'assure de la remontée des flux (virements...) dans les usines de traitement, de la sécurité des transactions en ligne sur les sites internet, de la signature électronique...
- Dans la **salle de marchés**, sa mission est d'automatiser les opérations et de trouver des solutions informatiques adaptées aux différents produits financiers, en assurant bien sûr une performance maximale et une disponibilité totale des ordinateurs. En effet, le moindre arrêt ou ralentissement peut avoir de fortes conséquences.

Quelles que soient les missions, il fait aussi preuve de **vigilance** quant à la gestion des risques liés à l'utilisation de l'informatique.

Les informaticiens interviennent à tous les niveaux, quelquefois dans l'urgence. Selon sa spécialisation, il peut être affecté au service en charge de la banque en ligne, à la sécurité informatique, dans la salle de marchés ou encore sur un grand projet stratégique de la banque, etc.

Ils sont en **contact permanent avec l'ensemble des services de la banque**, qu'ils fassent partie d'une équipe interne 
ou comme prestataires extérieurs. Les banques peuvent en effet faire appel à des **SSII** (sociétés de services en ingénierie informatique) 
qui envoient des informaticiens, de manière ponctuelle ou pour des missions qui durent parfois des années.

## Mission 1
Dans le cadre d’éventuelles missions en tant que prestataire extérieur dans cette banque, vous devez répondre aux 
questions posées après observation du code donné afin d’être évalué sur vos connaissances.

**Code donné**
```csharp
// crée un compte avec un numéro, un nom, un solde et un découvert autorisé

Compte c1 = new Compte(12345,"toto",1000,-500);  
Compte c2 = new Compte(45657, "titi",2000,-1000); 
c1.Transferer(3300,c2);

if(c1.Superieur(c2))
    { Console.WriteLine("supérieur"); } 
else
    {
      Console.WriteLine("inférieur"); 
      Console.WriteLine(c2.ToString()); 
    }

c1.Crediter(2000);
c1.Debiter(5300);

Banque b = new Banque();
b.AjouteCompte(c1);
b.AjouteCompte(c2); 
b.AjouteCompte(1245,"dutronc",4500,-500); 

Console.WriteLine (b.compteMax().ToString()) ;
```
{% questions %}
**Question1**

Combien de classes sont utilisées dans cet extrait ; nommez-les ?

**Questions 2**

Combien d’objets sont créés ; nommez-les ?

**Questions 3**

Combien de méthodes sont utilisées ; précisez si elles sont d’objet ou de classe ?

**Question 4**

Faire le diagramme de classes des classes métiers en faisant figurer les signatures des méthodes et l’information sur 
leur portée (d’objet ou de classe).
{% endquestions %}

## Mission 2

La banque décide de vous intégrer en tant que prestataire extérieur débutant dans le service des traitements et vous 
donne l’ordre des tâches suivantes à réaliser.

### 1 - Les données

Un compte bancaire (simplifié) est caractérisé par :

- un **numéro** unique
- le **nom** de son propriétaire
- son **solde** (montant restant sur le compte) : il peut être négatif
- le montant du **découvert autorisé** (chiffre négatif) : le solde ne peut descendre en dessous.


### 2 - Responsabilités

Nous attribuons à cette classe un certain nombre de responsabilités, ceci permettra de déterminer ses méthodes.

Responsabilités :

- **créditer** d'un montant fourni
- **débiter** le solde d'un montant fourni, mais attention un "drapeau" (booléen) indiquera si l'opération a pu se réaliser : 
il ne faut pas dépasser le découvert autorisé.
- **transférer** un montant, du compte courant vers un autre compte ; même remarque que pour le paragraphe précédent.
- indiquer si le solde de l'objet courant est **supérieur** au solde d'un autre compte fourni, le résultat sera un booléen


### 3 - Écriture de la classe

{% callout warning%}
Pour réaliser la mission 2 téléchargez ou faites un fork de la version de base sur 
[github](https://github.com/chchabin/libCptBqTU_Etudiant)

A chaque écriture de méthode vous allez exécuter le test fonctionnel correspondant en vous aidant de ce tuto :[tests unitaires](https://chchabinlab.gitlab.io/labslides/testu-vs/#/).

{% endcallout %}
{% questions %}
Écrire chaque procédure qui ne contiendra qu'un corps vide `{}`.  
Afin de ne pas avoir d'erreur de compilation sur les fonctions, 
vous préciserez une valeur de retour dans le corps de la méthode,  
**exemple :**  
`public bool Debiter(decimal montant){return true;} `  

{% endquestions %}

### 4 - Écriture du corps des constructeurs.
{% questions %}
Écrire deux constructeurs :

- l'un sans paramètre qui ne fera que mettre à blanc ou à 0 les champs
- l'autre avec 4 paramètres, un pour chaque attribut
 
**Exécutez le test unitaire**
  {% endquestions %}

### 5 - Une méthode ToString

Cette méthode retourne une représentation d’un objet sous forme de chaîne de caractères.
{% questions %}
Écrire la méthode redéfinie `ToString` puis tester votre programme en insérant le code ci-dessous

**numero: 123456 nom: toto solde: 1000,50 decouvert autorisé: -500,00**

**Exécutez le test unitaire**
{% endquestions %}


### 6 - Écriture de la méthode créditer

{% questions %}
Écrire la méthode 
- `Crediter()`, 

**Exécutez le test unitaire**
{% endquestions %}

### 7 - Écriture des méthodes et des test unitaires
{% questions %}
Écrire la méthode
- `Debiter()`

Écrire le test unitaire qui intègre les choix suivants :

- débiter un montant positif
- débiter un montant négatif
- débiter un montant supérieur au solde autorisé
- débiter un montant égal au solde autorisé
 
**Aidez-vous des tests existants**
  {% endquestions %}

{% questions %}
Écrire la méthode 
- `Transferer()`

Détails au point 2 Responsabilités

Écrire le test unitaire qui intègre les choix suivants :

- transférer un montant valide entre des soldes suffisants
- transférer un montant supérieur au solde disponible
- transférer un montant nul
- transférer un montant négatif


**Aidez-vous des tests existants**
  {% endquestions %}



{% questions %}
Écrire la méthode `Superieur()` 

Écrire le test unitaire dont vous définirez les choix.
{% endquestions %}


## Mission 3

### 1 - Nouvelles règles de gestion

La banque regroupe les différents comptes.

{% questions %}
Proposer un diagramme de classes dans lequel figurent les deux classes, `Compte` et `Banque`.  
Vous ferez figurer les attributs de la classe `Compte` (à partir de l'analyse du fichier), les relations, les valeurs 
de multiplicité ainsi qu'une proposition de navigabilité.
{% endquestions %}

### 2 - Etude du code des classes

On vous fournit un extrait de la classe Banque :
```csharp
class Banque
    {
        private List<Compte> mesComptes;     
        public Banque()
        {
            mesComptes = new List<Compte>();         
        }    
    }
```

{% questions %}
1. Quel est l’attribut de la classe ?  
2. Quel rôle joue-t-il ?
3. Créer la classe `Banque` et son test unitaire,
4. Écrire la méthode publique `AjouterCompte(…)` et son test unitaire, de la classe `Banque` qui permet de créer un `Compte`,
5. l'ajouter à la liste `mesComptes` de la classe `Banque`,
6. Écrire la méthode redéfinie `ToString` et don test unitaire.
{% endquestions %}

**Les tests unitaires doivent permettre de tester les opérations suivantes :**
```csharp
Banque b = new Banque();
Compte c1 ;
c1 =  new Compte(12345,"toto",1000,-500);              
b.AjouterCompte(c1);
b.AjouterCompte(45657, "titi", 2000, -1000);
b.AjouterCompte(12654, "tintin", 5000, -500);
```
**Résultat attendu** :
{% figure-abs "images/exercices-et-challenges/cas/compte07.png" "compte07" "100%" "100%" %}

{% questions %}
Écrire une méthode publique `RendCompte(…)` de la classe `Banque` qui retourne un `Compte` en fonction de son numéro.
La méthode retourne `null` si le compte n'est pas trouvé.  
Écrire son test unitaire
{% endquestions %}

**Les tests unitaires doivent permettre de tester les opérations suivantes : :**

```csharp
Banque b = new Banque();
Compte c1 ;
c1 =  new Compte(12345,"toto",1000,-500); 
b.AjouterCompte(c1);
b.AjouterCompte(12345, "toto", 1000, -500);
b.AjouterCompte(45657, "titi", 2000, -1000);
b.AjouterCompte(12654, "tintin", 5000, -500);
```
**Résultat attendu**

{% figure-abs "images/exercices-et-challenges/cas/compte08.png" "compte08" "100%" "100%" %}

## Mission 4
### 1 - Détail des mouvements
On vous demande d’insérer dans l’application Compte la gestion des mouvements bancaires.

- Un mouvement bancaire est une opération concernant un compte. 
- Un type de mouvement caractérise une opération.  

Nous prendrons en compte qu'un nombre limité de mouvements :
{% bs-table %}

| Type                 | Code | Commentaire |
|----------------------|------|-------------|
| Prélèvement          | pre  | En débit    |
| Chèque débité        | ch   | En débit    |
| Chèque déposé        | dch  | En crédit   |
| Dépôt d'espèce       | des  | En crédit   |
| Virement             | vir  | En crédit   |
| Retrait distributeur | dab  | En débit    |
| Retrait en guichet   | ret  | En débit    |
{% endbs-table %}
L'objectif de la nouvelle application est de gérer les mouvements. 

Les données de la classe `Type` :
- le **code** qui identifie le type
- son **libellé**
- son **sens**, '-' pour un débit et '+' pour un crédit


{% callout warning %}
**Remarque :** 
dans le diagramme de classes, on peut voir une association entre la classe `Banque` et la classe `Type` ; 
ce choix de conception est nécessaire pour la suite
{% endcallout %}

On vous fournit un extrait de la classe Banque :
```csharp
class Banque
    {
        private List<Compte> mesComptes;
        private List<Type> mesTypes;
        
        public Banque()
        {
            mesComptes = new List<Compte>();
            mesTypes = new List<Type>();
        }
        public void AjouterType(string code,string libelle,char sens)
        {
            this.mesTypes.Add(new Type(code, libelle, sens));         
        }
        public void AjouterType(Type unType)
        {
            this.mesTypes.Add(unType);
        }
    }
```

{% questions %}
1. Quels sont les attributs de la classe ?  
2. Quels rôles jouent ils ?  
3. Que font les méthodes `AjouterType` ?
4. Proposer un diagramme de classes dans lequel figurent les trois classes, Compte, Type et Banque.
{% endquestions %}

### 2 - Codage des classes

À partir du code suivant, nous allons créer la classe `Type`.
```csharp
Banque b = new Banque();
b.AjouterType( "ch", "chèque débité",'-');
b.AjouterType("pre", "prélèvement",'-');
b.AjouterType("dab", "retrait en distributeur",'-');
b.AjouterType("ret", "retrait guichet ",'-');
b.AjouterType("vir", "virement sur compte",'+');
b.AjouterType("dch", "chèque déposé",'+');
b.AjouterType("des","dépôt d’espèce",'+');
```

{% questions %}
1. Créez la classe `Type` ; 
2. à partir du code précédent, proposez un constructeur à deux arguments,
3. écrire la méthode `GetCode()`,
4. Intégrez le code au point 2° dans la classe `Banque`,
{% endquestions %}
   
{% questions %}
5. On voudrait aussi que la banque puisse retourner un `Type` de mouvement en fonction de son nom.
Écrire cette méthode `GetType`.  
6. Dans la classe `Type` écrire la méthode `ToString`.

**Écrire le test unitaire de `GetType`**
{% endquestions %}

**Voici les données attendues :**
{% figure-abs "images/exercices-et-challenges/cas/compte12.png" "compte12" "100%" "100%" %}

### 3 - La classe Mouvement

Pour enregistrer les différents mouvements bancaires, une classe `Mouvement` est créée.  

Ces mouvements ont un montant, une date d’émission et un type.  
La classe `Mouvement` est liée à la classe `Compte` et la classe `Type` :

{% figure-abs "images/exercices-et-challenges/cas/compte11.png" "compte11" "100%" "100%" %}

{% callout warning%}
Remarque : `dateMvt` est de type `DateTime`
{% endcallout %}

{% questions %}
Écrire la déclaration de la classe `Mouvement`.
{% endquestions %}
{% questions %}
- Écrire un constructeur à 3 arguments ainsi que les accesseurs.  
- Créer la liste `mesMouvements` (ArrayList) dans la classe `Compte` (n'oubliez pas de la mettre dans le constructeur),  
- Écrire les test unitaires correspondants.
{% endquestions %}
{% questions %}
- Ajouter une méthode `AjouterMouvement` à la classe `Compte`,
- Écrire les test unitaires correspondants.
{% endquestions %}

**Faire un teste unitaire en utilisant :**
```csharp
b.AjouterCompte(45657, "titi", 2000, -1000);
b.RendCompte(45657).AjouterMouvement(200, new DateTime(2012, 09, 11),b.GetType("vir"));
```
{% callout danger%}
Attention, car l’ajout du mouvement entraine une action sur le solde du compte.
{% endcallout %}
Effectuer les tests nécessaires sur la méthode `AjouterMouvement`.

{% questions %}
Modifier la méthode `ToString` de la classe `Compte` afin de pouvoir afficher tous les mouvements d’un compte :
{% endquestions %}
**Faire un teste unitaire en utilisant :**
```csharp
Compte c;
c = b.RendCompte(45657);
c.AjouterMouvement(200, new DateTime(2017, 09, 11), b.GetType("vir"));
c.AjouterMouvement(100, new DateTime(2017, 09, 12), b.GetType("ret"));
c.AjouterMouvement(500, new DateTime(2017, 09, 13), b.GetType("vir"));
Console.WriteLine(c.ToString());
```
**Résultat attendu :**
{% figure-abs "images/exercices-et-challenges/cas/compte13.png" "compte13" "100%" "100%" %}