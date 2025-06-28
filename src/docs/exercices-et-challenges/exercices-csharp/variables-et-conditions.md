---
layout : "layouts/docs.njk"
title : "Variables Et Conditions"
description : ""
group : "exercices-csharp"
section : "exercices-et-challenges"
toc : true
date : "2022-08-21T21:38:14+02:00"
draft : false
---

## A - Afficher Saisir
### 1 - Test de code
Dire si les instructions sont valides et dans ce cas ce qu’elles font.
{% bs-table %}

| Data                                            | Résultat |
|-------------------------------------------------|----------|
| Console.Writeline(" Bonjour ");                 |          |
| Console.WriteLine(" Bonjour ");                 |          |
| Console.WriteLine(" Bonjour ")                  |          |
| string a = Console.WriteLine();                 |          |
| int a = Console.ReadLine();                     |          |
| string a = Console.ReadLine();                  |          |
| string a = Convert.ToInt16(Console.ReadLine()); |          |
| int a = Convert.ToInt16(Console.ReadLine());    |          |
{% endbs-table %}
### 2 - Que fait ce programme ?
Soit le programme suivant :
```csharp
            string chaine;
            int num;
            chaine = "435";
            num = 666;
            Console.WriteLine(chaine+num);
```
Quel le bon affichage ?

☐ 1101  
☐ 435666  
☐ Erreur d’affichage  
### 3 - HT -> TTC
On vous fournit le programme suivant qui calcule le montant TTC en fonction d’un montant HT :
```csharp
 string stva;
 double montantHT, montantTTC, tva;
 tva = .2;
```
{% col-n %}
#### Version 1

```csharp
stva = Console.ReadLine();
tva = Convert.ToDouble(stva);
montantTTC = montantHT * (1 + tva);
Console.WriteLine(montantTTC);
```
<--->
#### Version 2
```csharp
montantTTC = montantHT * tva;
Console.WriteLine(montantTTC);
```
<--->
#### Version 3
```csharp
montantTTC = montantHT * (1 + tva);
Console.WriteLine(montantTTC);
```
{% endcol-n %}

**Selon vous, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2  
☐ Version 3

Donnez-en les raisons.
## B - Les structures alternatives (`si`)
### 1 - CA et remise
Voici les règles de gestion permettant de calculer une remise en fonction d’un chiffre d’affaires : Pour un CA de 0 à 10 000 euros : 10% de taux de remise

- de 10 000 à 20 000 euros : 20 %
- au-delà de 20 000 euros : 30 %

On vous fournit 3 extraits de versions qui déterminent le taux de remise :

{% col-n %}
#### Version 1

```csharp
ca=Convert.ToDouble(sca);
if (ca<10000)
{
    taux=.1;
}
if (ca<20000)
{
    taux=.2;
}
else
{
    taux=.3;
}
```
<--->
#### Version 2
```csharp
ca=Convert.ToDouble(sca);
if (ca < 10000)
{
    taux = .1;
}
else
{
    if (ca < 20000)
    {
        taux = .2;
    }
    else
    {
        taux = .3;
    }
}
```
<--->
#### Version 3
```csharp
ca = Convert.ToDouble(sca);
if (ca < 10000)
{
    taux = .1;
}
if (ca < 20000)
{
    taux = .2;
}
if (ca > 20000)
{
    taux = .3;
}
```
{% endcol-n %}

**Pour un CA de 9 000 Euros quel est le montant du taux de remise ?**  
{% bs-table %}

|           | 10% | 20% | 30% |
|-----------|:---:|:---:|:---:|
| Version 1 |  ☐  |  ☐  |  ☐  |
| Version 2 |  ☐  |  ☐  |  ☐  |
| Version 3 |  ☐  |  ☐  |  ☐  |
{% endbs-table %}
**Selon vous, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2  
☐ Version 3  

Donnez-en les raisons.
### 2 - Calcul de prime
Soit le programme suivant qui calcule le montant de la prime de représentants en fonction du nombre de kilomètres parcourus sans accidents :
```csharp
    if (km < 100)
           {
                prime = 50;
            }
    else
    {
        if (km < 500)
        {
            prime = (km - 100) \* 0.10 + 500;
        }
        else
        {
            prime = (km - 500) \* 0.20 + 540;
        }
    }
```
**Pour un nombre de kilomètres de 1000, quel est le montant de la prime :**  
☐ 500  
☐ 590  
☐ 640  
**Pour un nombre de kilomètres de 500, quel est le montant de la prime :** 
☐ 500  
☐ 540  
☐ 590  
**on souhaite ajouter la borne 1 000 kilomètres ; quelle sera l’instruction de calcul pour la prime au-delà de 1 000 kilomètres :**  
☐ (km-500) \* 0,3 + 640  
☐ (km-1 000) \* 0,3 + 640  
☐ (km-1000) \* 0,3 + 540  

Modifiez le programme en conséquence.
## C - Les structures alternatives (`selon cas`)
### 1- Choisir un cas
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1 inverse.

{% col-n %}
#### Version 1

```csharp
int i = 2;
int j;
int result = 0;                                
j = Convert.
ToInt16(Console.ReadLine());
switch(i+j*2)
    {
        case 1:
        case 2:
            result = 2;
            break;
        case 3 to 10 :
             result = 3;
             break;
        default :
             result = 0;
             break;
     }
Console.WriteLine(result); 
```
<--->
#### Version 2
```csharp
int i = 2;
int j;
int result = 0;                                 
j = Convert.
ToInt16(Console.ReadLine());
switch(i+j*2)
    {
        case 1:
        case 2:
            result = 2;
            break;
        case 3 :
        case 10 :
             result = 3;
             break;
        default :
             result = 0;
             break;
     }
Console.WriteLine(result);
```
{% endcol-n %}

**Si l’utilisateur saisit la valeur O, il obtiendra**  
{% bs-table %}

|   | Version 1      |   | Version 2      |
|:-:|----------------|:-:|----------------|
| ☐ | 0              | ☐ | 0              |
| ☐ | 2              | ☐ | 2              |
| ☐ | 3              | ☐ | 3              |
| ☐ | Erreur système | ☐ | Erreur système |
{% endbs-table %}
**Si l’utilisateur saisit la valeur 4, il obtiendra**  
{% bs-table %}

|   | Version 1      |   | Version 2      |
|:-:|----------------|:-:|----------------|
| ☐ | 0              | ☐ | 0              |
| ☐ | 2              | ☐ | 2              |
| ☐ | 3              | ☐ | 3              |
| ☐ | Erreur système | ☐ | Erreur système |
{% endbs-table %}
### 2 - Choisir un résultat

```csharp
int i=2,k=3;
 switch (i - k)
            {
                case -1:
                    i++;
                    k++;
                    break;
                case 2:
                    i--;
                    k++;
                    break;
                default:
                    i += 3;
                    k += i;
                    break;
            }

Console.WriteLine($"{i}\t{k}");
```
**Qu’affiche ce programme ?**  
☐ 3 2  
☐ 2 3  
☐ 5 10  
☐ 3 4  
