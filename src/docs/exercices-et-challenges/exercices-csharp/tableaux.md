---
layout : "layouts/docs.njk"
title : "Tableaux"
description : ""
group : "exercices-csharp"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T12:14:50+02:00"
draft : false
---
## 1 - Déclaration
{% col-n %}
#### Version 1

```csharp
int[] t ={1,2,3,4,5};
Console.WriteLine($"Le tableau a {t[5]} éléments ");
Console.WriteLine($"La quatrième valeur est {t[4]} ");
```
<--->
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
{% endcol-n %}
**Complétez le tableau d’analyse suivant :**  
{% bs-table %}

|                                            | **Version 1** | **Version 2** | **Aucune Version** |
|--------------------------------------------|:-------------:|:-------------:|:------------------:|
| **la déclaration du tableau est correcte** |       ☐       |       ☐       |         ☐          |
| **le tableau a 5 éléments**                |       ☐       |       ☐       |         ☐          |
| **la quatrième valeur est 4**              |       ☐       |       ☐       |         ☐          |
{% endbs-table %}
## 2 - Afficher un tableau
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1 inverse.

{% col-n %}
#### Version 1

```csharp
int[] tableau1 ={1,2,3,4,5};
for (int i=0;i<tableau1.length;i++)
    {
        Console.WriteLine(tableau1[i]);
    }
```
<--->
#### Version 2
```csharp
int[] tableau1 ={1,2,3,4,5};
Console.WriteLine(tableau1);
```
{% endcol-n %}
**Selon vous, en l’expliquant, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2
## 3 - Copier un tableau
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1.

{% col-n %}
#### Version 1

```csharp
int[] tableau1 ={1,2,3,4,5};
int[] tableau2 = new int[5];
for (int i=0;i<tableau1.length;i++)
    {
        tableau2[i]=tableau1[i];
    }
```
<--->
#### Version 2
```csharp
int[] tableau1 ={1,2,3,4,5};
int[] tableau2 = new int[5];
tableau2=tableau1;
```
{% endcol-n %}
**Selon vous, en l’expliquant, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2
## 4 - Copier un tableau inversé
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1 dans l’ordre inverse.
```csharp
int[] tableau1 ={1,2,3,4,5};
int[] tableau2 = new int[5]
for (int i=0;i<tableau1.length;i++)
    {
        // Quel code ?
    }
```
**Quelle ligne de code faut-il mettre à la place des commentaires ?**  
☐ tableau2[i]=tableau1[n-i+1]  
☐ tableau2[i]=tableau1[n-i]  
☐ tableau2[i]=tableau1[i-n+1]  
☐ tableau2[i]=tableau1[n-i-1]
## 5 - Copier des cellules
Qu’affiche le code suivant :
```csharp
int[] k ={1,2,3};
int[] f ={4,5,6};
int[] m = f;
f[1] = k[2];
k = f;
f[2] = m[1];
Console.WriteLine(k[1]);
```
**Quelle ligne de code faut-il mettre à la place des commentaires ?**  
☐ 5  
☐ 3  
☐ 4  
☐ 1
## 6 - Afficher un tableau
Dans le code ci-dessous, on désire afficher les éléments du tableau1.

{% col-n %}
#### Version 1

```csharp
int[] tableau1 ={0,2,4,6};
for (int i=0;i<6;i++)
    {
        Console.WriteLine(tableau1[i]);
    }
```
<--->
#### Version 2
```csharp
char[] tableau1 ={’1’,’2’,"3",’4’,’5’};
for (int i=0;i<tableau1.length;i++)
    {
        Console.WriteLine(tableau1[i]);
    }
```
{% endcol-n %}
**Complétez le tableau d’analyse suivant :**
{% bs-table %}

|                                            | **Version 1** | **Version 2** | **Aucune Version** |
|--------------------------------------------|:-------------:|:-------------:|:------------------:|
| **la déclaration du tableau est correcte** |       ☐       |       ☐       |         ☐          | 
| **la taille du tableau est correcte**      |       ☐       |       ☐       |         ☐          |
{% endbs-table %}
