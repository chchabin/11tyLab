---
layout : "layouts/docs.njk"
title : "Boucles"
description : ""
group : "exercices-csharp"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T08:54:56+02:00"
draft : false
---
## 1 - Utilité des boucles
Voici deux extraits de version permettant d’obtenir la somme de chiffres d’affaires :
__{% col-n %}
#### Version 1

```csharp
double ca01, ca02, ca03, ca20, somme;
somme = 0;
Console.WriteLine("Saisir ca1 :");
ca01 = Convert.ToDouble(Console.ReadLine());
somme = somme + ca01;
Console.WriteLine("Saisir ca2 :");
ca02 = Convert.ToDouble(Console.ReadLine());
somme += ca02;
Console.WriteLine("Saisir ca3 :");
ca03 = Convert.ToDouble(Console.ReadLine());
somme += ca03;
//--Reproduire le même code jusqu’à 19 fois
Console.WriteLine("Saisir ca20 :");
ca20 = Convert.ToDouble(Console.ReadLine());
somme += ca20;
```
<--->

#### Version 2
```csharp
double ca, somme;
int i;
somme = 0;
i=0;
ca = 0;
while (i < 21)
    {
    Console.WriteLine("Saisir ca :");
    ca = Convert.ToDouble(Console.ReadLine());
    somme += ca;
    i++;
    }
Console.WriteLine($"La somme des CA  est de {somme} ");
```
{% endcol-n %}

Quel est l’avantage de la version 2 :

☐ la version est plus courte  
☐ elle donne un résultat exact  
☐ le traitement est plus rapide  
☐ la version peut être adaptée facilement
## 2 - Choix d’une version
Voici trois extraits de version permettant d’obtenir la somme de chiffres d’affaires :
```csharp
double ca, somme;
somme = 0;
```
{% col-n %}
#### Version 1

```csharp
Console.WriteLine("Saisir ca :");
ca = Convert.ToDouble(Console.ReadLine());
while (ca != 0)
 {
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(Console.ReadLine());
   somme += ca;
 }
Console.WriteLine($"La somme des CA est de {somme} ");
```

#### Version 2
```csharp
ca = 0;
while (i < 21)
 {
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(Console.ReadLine()).
   somme += ca;
   i++;
 }
Console.WriteLine($"La somme des CA est de {somme} ");
```
<--->
#### Version 3
```csharp
Console.WriteLine("Saisir ca :");
ca = Convert.ToDouble(Console.ReadLine())
while (ca != 0)
 {
   somme += ca;
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(
               Console.ReadLine());
 }
Console.WriteLine($"La somme des CA est de {somme} ");
```
{% endcol-n %}
**Dans la version 3, comment peut-on arrêter de saisir des CA ?**  
☐ quand la somme est calculée  
☐ en saisissant un CA nul  
☐ en indiquant le nombre de CA à saisir  
**Quel est l’avantage de la version 1 par rapport à la version 2 :**  
☐ le résultat de la somme est exact  
☐ le traitement est plus rapide  
☐ l’initialisation des variables est juste  
☐ le nombre de CA à saisir peut être inconnu  
**Selon vous quelle est la meilleure version :**  
☐ Version 1  
☐ Version 2  
☐ Version 3  
## 3 - Analyser un programme
Soit l’extrait de version suivant :
```csharp
double note, somme;
string reponse;
int i;
somme = 0;
ca = 0;
Console.WriteLine("Voulez vous saisir une note O/N :");
reponse= Console.ReadLine();
while (reponse == "O")
 {
   Console.WriteLine("Saisir note :");
   note = Convert.ToDouble(Console.ReadLine());
   somme += note;
   Console.WriteLine("Voulez vous saisir une autre note O/N :");
   reponse= Console.ReadLine();
  }
Console.WriteLine($"La somme des notes est de {somme} ");
```
**Que fait ce programme ?**  
☐ il calcule la moyenne des notes  
☐ il calcule la somme des notes  
☐ il fournit la réponse Oui ou Non  
☐ il calcule la moyenne du baccalauréat  
**Si un utilisateur saisit les notes : 3 puis 4 puis 12, quel sera le contenu de la variable SOMME à la fin du traitement ?**  
☐ 12  
☐ 7  
☐ 19  
**Est-ce que l’utilisateur peut ne saisir aucune note ?**  
☐ oui  
☐ non  
**Comment l’utilisateur peut-il arrêter la saisie des notes ?**  
☐ en tapant "N"  
☐ en tapant "zigouigoui "  
☐ en tapant "Oui"  
☐ en tapant "O"
## 4 - Cumul des ventes
Soit 3 extraits de version différents ayant comme objectif de calculer la somme de ventes saisies par l’utilisateur :
```csharp
double vente, totalht;
totalht = 0;
```
{% col-n %}
#### Version 1

```csharp
Console.WriteLine("Saisir les ventes :");
vente = Convert.ToDouble(Console.ReadLine());
while (vente != 0)
 {
   totalht  += vente;
   Console.WriteLine("Saisir les ventes :");
   vente = Convert.ToDouble(Console.ReadLine());
}
Console.WriteLine($"totalht {totalht}");
```

#### Version 2
```csharp
vente = 0;
while (vente != 0)
 {
   Console.WriteLine("Saisir les ventes :");
   vente = Convert.ToDouble(Console.ReadLine());
   totalht  += vente;
 }
Console.WriteLine($"totalht {totalht}");
```
<--->
#### Version 3
```csharp
Console.WriteLine("Saisir les ventes :");
vente = Convert.ToDouble(Console.ReadLine());
while (vente != 0)
 {
   totalht  += vente;
 }
Console.WriteLine($"totalht {totalht}");
```
{% endcol-n %}
**Complétez le tableau d’analyse suivant :**
{% bs-table %}

|                                      | **Version 1** | **Version 2** | **Version 3** |
|--------------------------------------|:-------------:|:-------------:|:-------------:|
| la boucle fonctionne correctement    |       ☐       |       ☐       |       ☐       |
| on ne peut pas sortir de la boucle   |       ☐       |       ☐       |       ☐       |
| on ne peut pas entrer dans la boucle |       ☐       |       ☐       |       ☐       |
{% endbs-table %}
**Si l’utilisateur saisit les chiffres 10, 20 et 0, que contiendra la variable TOTALHT à la fin de l’exécution de chacune des versions :**
{% bs-table %}

|                        | **Version 1** | **Version 2** | **Version 3** |
|------------------------|:-------------:|:-------------:|:-------------:|
| 0                      |       ☐       |       ☐       |       ☐       |
| 20                     |       ☐       |       ☐       |       ☐       |
| 30                     |       ☐       |       ☐       |       ☐       |
| N’affiche pas le total |       ☐       |       ☐       |       ☐       |
{% endbs-table %}
**Si l’utilisateur saisit les chiffres 10, 20, 20 et 0, que contiendra la variable TOTALHT à la fin de l’exécution de chacune des versions :**
{% bs-table %}

|                        | **Version 1** | **Version 2** | **Version 3** |
|------------------------|:-------------:|:-------------:|:-------------:|
| 0                      |       ☐       |       ☐       |       ☐       |
| 40                     |       ☐       |       ☐       |       ☐       |
| 50                     |       ☐       |       ☐       |       ☐       |
| N’affiche pas le total |       ☐       |       ☐       |       ☐       |
{% endbs-table %}
## 5 - Chercher un chiffre
Un jeu consiste à demander à l’utilisateur de taper un chiffre. Celui-ci gagne si le chiffre est 5. Le joueur qui a terminé laisse la place au suivant.
```csharp
string reponse="n";
double chiffre=0;
while (reponse == "n" || reponse == "N")
 {
   Console.WriteLine("Tape un chiffre entre 1 et 9");
   chiffre = Convert.ToDouble(Console.ReadLine());
   while (chiffre != 5)
 	{
   		Console.WriteLine("Tu as perdu ! Recommence :");
  		chiffre = Convert.ToDouble(Console.ReadLine());
	}
    Console.WriteLine("Bravo.Tu as gagné ! ");
    Console.WriteLine("Autre joueur ? O/N : ");
    reponse= Console.ReadLine();
 }
```
**Considérons la boucle qui gère le message « Tu as perdu ! Recommence : » Est-il possible qu’elle ne soit jamais déclenchée ? (Itération=0)**  
☐ oui  
☐ non  
**Considérons la boucle qui gère le passage à l’autre joueur Est-elle déclenchée au moins une fois ?**  
☐ oui  
☐ non
## 6 - Monter les tours
Soit les extraits des versions suivantes permettant de saisir les chiffres d’affaires de 4 trimestres :
{% col-n %}
#### Version 1

```csharp
compteur = 0;
Console.WriteLine("Saisir ca :");
ca = Convert.ToDouble(Console.ReadLine());
while (compteur < 4)
 {
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(Console.ReadLine());
   compteur += 1;
 }
```

#### Version 2
```csharp
compteur = 1;
while (compteur < 4)
 {
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(Console.ReadLine());
   compteur += 1;
 }
```
<--->
#### Version 3
```csharp
compteur = 0;
while (compteur < 4)
 {
   Console.WriteLine("Saisir ca :");
   ca = Convert.ToDouble(Console.ReadLine());
   compteur += 1;
 }
```
{% endcol-n %}
**Pour chaque version, combien de chiffres d’affaires l’utilisateur pourra-t-il saisir ?**
{% bs-table %}

| **Nombre de CA saisis** |  **Version 1**  |  **Version 2**  |  **Version 3**  |
|-------------------------|:---------------:|:---------------:|:---------------:|
| **1**                   |        ☐        |        ☐        |        ☐        |
| **2**                   |        ☐        |        ☐        |        ☐        |
| **3**                   |        ☐        |        ☐        |        ☐        |
| **4**                   |        ☐        |        ☐        |        ☐        |
| **5**                   |        ☐        |        ☐        |        ☐        |
{% endbs-table %}
**Quel sera le contenu de la variable COMPTEUR au terme de l’exécution de chaque version :**
{% bs-table %}

| **Contenu de COMPTEUR** |  **Version 1**  |  **Version 2**  |  **Version 3**  |
|-------------------------|:---------------:|:---------------:|:---------------:|
| **3**                   |        ☐        |        ☐        |        ☐        |
| **4**                   |        ☐        |        ☐        |        ☐        |
| **5**                   |        ☐        |        ☐        |        ☐        |
{% endbs-table %}
## 7 - Le test de saisie
Soit l’extrait de versions suivant permettant de calculer la somme de chiffre d’affaires :
{% col-n %}
#### Version 1

```csharp
somme = 0;
ca = 1;
while (ca != 0)
 {
    Console.WriteLine("Saisir ca :");
    ca = Convert.ToDouble(Console.ReadLine());
    somme += ca;
 }
Console.WriteLine($"La somme des CA est de {somme}");
```
<--->
#### Version 2
```csharp
somme = 0;
ca = 1;
while (ca != 0)
 {
    somme += ca;
    Console.WriteLine("Saisir ca :");
    ca = Convert.ToDouble(Console.ReadLine());
 }
Console.WriteLine($"La somme des CA est de {somme}");
```
{% endcol-n %}
**Si l’utilisateur saisit les valeurs 10, 20, 30 et 0, quel sera le contenu de la variable SOMME pour chaque version ?**

{% bs-table %}

|   | Version 1 |   | Version 2 |
|:-:|----------:|:-:|----------:|
| ☐ |         0 | ☐ |         0 |
| ☐ |        10 | ☐ |        10 |
| ☐ |        10 | ☐ |        30 |
| ☐ |        60 | ☐ |        60 |
| ☐ |        61 | ☐ |        61 |
{% endbs-table %}

## 8 - Saisie de notes
Extrait de 3 versions :
{% col-n %}
#### Version 1

```csharp
moyenne = 0;
Console.WriteLine("Saisir note1 :");
note01 = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("Saisir note2 :");
note02 = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("Saisir note3 :");
note03 = Convert.ToDouble(Console.ReadLine());
moyenne = (note01 + note02 + note03 )/3;
Console.WriteLine(moyenne);
```
<--->
#### Version 2
```csharp
moyenne = 0;
somme = 0;
compteur = 0;
Console.WriteLine("Saisir note :");
note = Convert.ToDouble(Console.ReadLine());
while (note != 0)
    {
        somme += note;
	    compteur += 1;
	    Console.WriteLine("Saisir note:");
        note = Convert.ToDouble(
                   Console.ReadLine());
    }
moyenne = somme /compteur;
Console.WriteLine(moyenne);
```
<--->
#### Version 3
```csharp
moyenne = 0;
somme = 0;
compteur = 0;
Console.WriteLine("Saisir nbrnote :");
nbrnote = Convert.ToDouble(Console.ReadLine());
while (compteur < nbrnote)
    {
        Console.WriteLine("Saisir note:");
        note = Convert.ToDouble(
                   Console.ReadLine());
        somme += note;
	    compteur += 1;
    }
moyenne = somme /compteur;
Console.WriteLine(moyenne);
```
{% endcol-n %}

**Quelle est l’inconvénient de la version 3 :**  
☐ on ne peut pas avoir de zéro  
☐ il faut saisir le nombre de notes  
☐ on ne peut pas s’arrêter quand on veut  
**Quel est l’inconvénient de la version 2 :**  
☐ on ne peut pas avoir de zéro  
☐ il faut saisir le nombre de notes  
☐ on ne peut pas s’arrêter quand on veut  
**Selon vous quelle est la meilleure version :**  
☐ Version 1  
☐ Version 2  
☐ Version 3
## 9 - Equivalence
Voici deux boucles :
{% col-n %}
#### Version 1

```csharp
int s = 0;
for (int i=4;i<100;i=i+2)
    {
        s += i;
    }
Console.WriteLine($"s = {s} ");
```
<--->
#### Version 2
```csharp
int s = 0;
int k = 4;
while (k < 100)
    {
        s += k;
       // code à rajouter
    }
Console.WriteLine($"s = {s} ");
```
{% endcol-n %}
**Comment modifier le code pour rendre les deux boucles équivalentes ?**

☐ k=k+1  
☐ k=s+1  
☐ k=k+2  
☐ k=s+2  
