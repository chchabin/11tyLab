---
layout : "layouts/docs.njk"
title : "Variables"
description : ""
group : "exercices-php"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T21:35:34+02:00"
draft : false
---
{% callout %}
#### Utiliser le script interactif
Saisir [php -a](https://www.php.net/manual/fr/features.commandline.interactive.php) dans le terminal
{% endcallout %}
## A - Afficher Saisir
### 1 - coder en php
{% col-n %}
#### Version 1

```php
<p>Ceci est une phrase en HTML
<?php echo ’qui se continue en php’ ?></p> 
```
<--->
#### Version 2
```php
<?php echo’<p>Ceci est une phrase en HTML
qui se continue en php</p>’ ?> 
```
{% endcol-n %}
**Selon vous, en l’expliquant, quelle est la meilleure version ?**
☐ Version 1  
☐ Version 2
### 2 - différentes façons d’afficher

{% col-n %}
#### Version 1

```php
<?php
$nom = ’Dupont’;
$prenom = ’Louis’;
echo $nom;
echo $prenom;
?>
```
<--->
#### Version 2
```php
<?php
$nom = ’Dupont’;
$prenom = ’Louis’;
echo "$nom $prenom";
?>
```
<--->
#### Version 3
```php
<?php
$nom = ’Dupont’;
$prenom = ’Louis’;
echo $nom." ".$prenom;
?>
```
{% endcol-n %}

**Identifiez les versions d’affichage :**
{% bs-table %}

|                                 | **Version 1** | **Version 2** | **Version 3** |
|---------------------------------|:-------------:|:-------------:|:-------------:|
| **1 seule chaine de caractère** |       ☐       |       ☐       |       ☐       |
| **2 instructions**              |       ☐       |       ☐       |       ☐       |
| **concaténation**               |       ☐       |       ☐       |       ☐       |
{% endbs-table %}
### 3 - Affichage des nombres
Soit le programme suivant :
```php
<?php
    $tva = 0.206;
    $prix = 150;
    $quantite = 10;
    echo "Le prix est de $tva \* $prix \* $quantite";
?>  
```                 
**Identifiez les types de variables :**
{% bs-table %}

|                        | **integer** | **double** | **float** |
|------------------------|:-----------:|:----------:|:---------:|
| **gettype($tva)**      |      ☐      |     ☐      |     ☐     |
| **gettype($prix)**     |      ☐      |     ☐      |     ☐     |
| **gettype($quantite)** |      ☐      |     ☐      |     ☐     |
{% endbs-table %}
### 4 - Affichage de la date
{% col-n %}
#### Version 1

```php
 <?php
 echo ’Nous sommes le :’
. date("d/ m/ Y ")
. ’ Il est ’
. date("H:i")
. ’ Merci’
```
<--->
#### Version 2
```php
<?php
 echo "Nous sommes le :
date("d/ m/ Y ")
Il est
date("H:i")
Merci"
```
{% endcol-n %}

Selon vous, en l’expliquant, laquelle de ces versions va afficher l'heure et la date courante ?

☐ Version 1  
☐ Version 2
## B - Les structures alternatives (`si`)
### 1 - CA et remise
Voici les règles de gestion permettant de calculer une remise en fonction d’un chiffre d’affaires : Pour un CA de 0 à 10 000 euros : 10% de taux de remise

- de 10 000 à 20 000 euros : 20 %
- au-delà de 20 000 euros : 30 %

On vous fournit 3 extraits de versions qui déterminent le taux de remise :

{% col-n %}
#### Version 1

```php
if ($ca<10000)
{
    $taux=.1;
}
if ($ca<20000)
{
    $taux=.2;
}
else
{
    $taux=.3;
} 
```
<--->
#### Version 2
```php
if ($ca < 10000)
{
    $taux = .1;
}
else
{
    if ($ca < 20000)
    {
        $taux = .2;
    }
    else
    {
        $taux = .3;
    }
}
```
<--->
#### Version 3
```php
if ($ca < 10000)
{
    $taux = .1;
}
if ($ca < 20000)
{
    $taux = .2;
}
if ($ca > 20000)
{
    $taux = .3;
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
```php
if ($km < 100)
            {
                $prime = 50;
            }
    else
    {
        if ($km < 500)
        {
            $prime = ($km - 100) * 0.10 + 500;
        }
        else
        {
            $prime = ($km - 500) * 0.20 + 540;
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

```php
$i = 2;
$j = readline("Saisir une valeur : ");
readline_add_history($j);
switch($i+$j*2)
    {
        case 1:
        case 2:
            $result= ’2’;
            break;
        case 3 to 10 :
             $result= ’3’;
             break;
        default :
             $result= ’0’;
             break;
     }
echo $result;  
```
<--->
#### Version 2
```php
$i = 2;
$j = readline("Saisir une valeur : ");
readline_add_history($j);
switch($i+$j*2)
    {
        case 1:
        case 2:
            $result= ’2’;
            break;
        case 3 :
        case 10 :
             $result= ’3’;
             break;
        default :
             $result= ’0’;
             break;
     }
echo $result;  
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
```php
$i=2;
 $k=3;
 switch($i - $k)
            {
                case -1:
                    $i++;
                    $k++;
                    break;
                case 2:
                    $i--;
                    $k++;
                    break;
                default:
                    $i += 3;
                    $k += i;
                    break;
            }
echo "$i\t$k";
```
##### **Qu’affiche ce programme ?**
**Qu’affiche ce programme ?**  
☐ 3 2  
☐ 2 3  
☐ 5 10  
☐ 3 4 
