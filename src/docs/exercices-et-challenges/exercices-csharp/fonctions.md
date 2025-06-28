---
layout : "layouts/docs.njk"
title : "Fonctions"
description : ""
group : "exercices-csharp"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T21:18:07+02:00"
draft : false
---
### 1 - les retours de fonction
Quels sont les retours attendus ?
{% bs-table %}

| **Signatures**                 |   |   |   | **Retour** |
|--------------------------------|:-:|---|:-:|------------|
| int[] carre(int val)           | ☐ |   | ☐ | void       |
| void afficher(string txt)      | ☐ |   | ☐ | string     |
| string toString(int[] tab)     | ☐ |   | ☐ | int        |
| void[] afficher(string txt)    | ☐ |   | ☐ | double     |
| double[] convert(string[] num) | ☐ |   |   |            |
{% endbs-table %}
### 2 - la déclaration des paramètres
La déclaration, des paramètres ou des valeurs de retour, est-elle correcte ?
{% bs-table %}

| **Signatures**                     | **Valide** | **Pas Valide** |
|------------------------------------|:----------:|:--------------:|
| int[] carre(int val)               |     ☐      |       ☐        |
| void afficher(string txt, int num) |     ☐      |       ☐        |
| string[] toString(int[] tab, tab2) |     ☐      |       ☐        |
| void[] afficher(string txt)        |     ☐      |       ☐        |
| double[] convert(string num[])     |     ☐      |       ☐        |
| double[] produire(void)            |     ☐      |       ☐        |
{% endbs-table %}
### 3 - retour
Qu’allez vous obtenir à l’affichage ?
```csharp
static void Main(string[] args)
{
    int [] a = {1, 2, 3, 4, 5};
    Console.WriteLine( fun(a) );
}
static string fun( int[] b )
{
    string ret="";
    int[] k = { 3, 4, 7, 8,’\0’ };
    for (int i = 0; i < b.Length; i++)
    {
        b[i] = b[i] + k[i] ;
        ret += b[i] + ", ";
    }
    return ret;
}
```
☐ 3, 4, 7, 8, 5  
☐ 3, 4, 7, 8, 5, 1, 2, 3, 4, 5  
☐ 4, 6, 10, 12, 5  
☐ Erreur de compilation
### 4 - retour attendu
Qu’allez vous obtenir à l’affichage ?   
```csharp
static void Main(string[] args)
 {
     int[] a = { 2, 21, 34, 46, 85, 88, 90};
     Console.WriteLine($"Les nombres obtenus sont : {fun(a)}");
 }

 static string fun(int [] b )
 {
     string ret="";
     int [] c = { 1, 2, 3, 4, 5, 6, 7};
     int i ;
     for (i = 0 ;i < b.Length ;i++)
     if (b[i] % 2 == 0)
     {
         c[i] = b[i];
     }
     for (i = 0 ;i <= b.Length ;i++)
     {
         ret += c[i] + ", ";
     }
     return ret

}
```
☐ 2, 21, 34, 4, 6, 46, 88, 90  
☐ 2, 4, 34, 46, 6, 88, 90  
☐ 2, 34, 46, 88, 90  
☐ Erreur de compilation  
### 5 - Traduire les chiffres
Qu’allez vous obtenir à l’affichage ?
```csharp
static void Main(string[] args)
 {
     int[] x = { 80, 82, 65, 72, 83, 67 };
     Console.WriteLine(fun(x));
 }
 static string fun(params int [] b )
 {
      string ret="";
     int i;
     for (i = 5; i >=0 ; i--)
     {
         ret +=Convert.ToChar(b[i])) + " ";
     }
    return ret;
 }
```
☐ 67 83 72 65 82 80  
☐ P R A H S C  
☐ C S H A R P  
☐ 80 82 65 72 83 67
### 6 - Ne pas faire un somme
```csharp
static void Main(string[] args)
 {
     int s = somme(3,somme(4,5));
     Console.WriteLine($"La somme est de {s}");
 }

 static int somme(int a, int b )
 {
     int ret = a + b;
     if (a == 5)
     {
         ret = 1;
     }
     return ret;
}
```
Qu’allez vous obtenir à l’affichage ?

☐ 8  
☐ 12  
☐ 4  
☐ Erreur de compilation  
