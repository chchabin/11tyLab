---
layout : "layouts/docs.njk"
title : "Tableaux"
description : ""
group : "exercices-php"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T22:38:41+02:00"
draft : false
---
## 1 - Déclaration
{% col-n %}
#### Version 1

```php
$t = [1,2,3,4,5];
echo "Le tableau a $t[5] éléments";
echo "La quatrième valeur est $t[4]";;
```
<--->
#### Version 2
```php
$t = array(1,2,3,4,5);
echo ’Le tableau a ’.count($t).’ éléments’;
echo "La quatrième valeur est $t[4]";
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

```php
$tableau1 =[1,2,3,4,5];
$somme = 0;
for ($i=0;i<count($tableau1);$i++)
    {
         $somme += tableau1[i];
    }
echo "$somme";
```
<--->
#### Version 2
```php
$tableau1 =[1,2,3,4,5];
$somme = 0;
foreach ($tableau1 as $v)
{
    $somme += $v;
}
echo "$somme"; 
```
{% endcol-n %}
**Selon vous, en l’expliquant, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2
## 3 - Copier un tableau
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1.

{% col-n %}
#### Version 1

```php
$tableau1 =[1,2,3,4,5];
for ($i=0;$i<count($tableau1);$i++)
    {
        $tableau2[i]=$tableau1[i];
    }
```
<--->
#### Version 2
```php
$tableau1 =[1,2,3,4,5];
tableau2=tableau1;
```
{% endcol-n %}
**Selon vous, en l’expliquant, quelle est la meilleure version ?**  
☐ Version 1  
☐ Version 2
## 4 - Copier un tableau inversé
Dans le code ci-dessous, on désire que le tableau2 contienne les éléments du tableau1 dans l’ordre inverse.
```php
$tableau1 =[1,2,3,4,5];
for ($i=0;$i<count($tableau1);$i++)
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
```php
$k =[1,2,3];
$f =[4,5,6];
$m = $f;
$f[1] = $k[2];
$k = $f;
$f[2] = $m[1];
echo $k[1];
```
**Quelle ligne de code faut-il mettre à la place des commentaires ?**  
☐ 5  
☐ 3  
☐ 4  
☐ 1
## 6 - Afficher un tableau associatif
Dans le code ci-dessous, on désire afficher les clés et les valeurs du tableau suivant :
```php
$tab  = array(
’un’ => 12,
’trois’ => "fraise",
"deux" => 2.5,
42 => "el5");
```
{% col-n %}
#### Version 1

```php
foreach ($tab  as $k => $v) {
    echo "Clé: $k\t Val: $v \n";
```
<--->
#### Version 2
```php
foreach ($tab  as $k) {
    echo "Clé: $k\t Val: $tab[$k] \n";
```
{% endcol-n %}
**Complétez le tableau d’analyse suivant :**
{% bs-table %}

|                                           | **Version 1** | **Version 2** | **Aucune Version** |
|-------------------------------------------|:-------------:|:-------------:|:------------------:|
| **les valeurs du tableau sont correctes** |       ☐       |       ☐       |         ☐          |
| **les clés du tableau sont correctes**    |       ☐       |       ☐       |         ☐          |
{% endbs-table %}
**Quel code permet :**
{% bs-table %}

|                                | **\t** | **\n** | **Aucune Version** |
|--------------------------------|:------:|:------:|:------------------:|
| **de faire une tabulation**    |   ☐    |   ☐    |         ☐          |
| **de faire un saut de lignes** |   ☐    |   ☐    |         ☐          |
{% endbs-table %}
## 7 - Afficher un tableau multidimensionnel
Soit le tableau multidimensionnel suivant :
```php
$client =array(
    0=>array(’Nom’ => ’Annie ZETTE’,
              ’Ville’ => ’Lyon’,
              ’Courriel’ => ’annie.zette@libre.fr’),
    1=>array(’Nom’ => ’Jean Bon’,
              ’Ville’ => ’Bayonne’,
              ’Courriel’ => ’jean.bon@libre.fr’),
);// Notation abrégée pour créer un tableau multidimensionnel
```
{% col-n %}
#### Version 1

```php
foreach ($client  as $k => $v) {
    echo "Client: $k\t Nom: $v[’Nom’] \n";
 } 
```
<--->
#### Version 2
```php
foreach ($client  as $key => $value) {
    echo "Client: $key";
    foreach ($value as $k => $v){
        echo "$k: $v \n";
 }
}    
```
{% endcol-n %}
**Quelle version choisir pour afficher ce tableau dans une zone de liste d’un formulaire ?**  
☐ Version 1  
☐ Version 2
