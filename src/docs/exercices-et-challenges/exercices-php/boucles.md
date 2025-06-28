---
layout : "layouts/docs.njk"
title : "Boucles"
description : ""
group : "exercices-php"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T22:04:51+02:00"
draft : false
---
{% callout %}
#### Utiliser le script interactif
Saisir [php -a](https://www.php.net/manual/fr/features.commandline.interactive.php) dans le terminal
{% endcallout %}
## 1 - Utilité des boucles
Voici deux extraits de version permettant d’obtenir la somme de chiffres d’affaires :
{% col-n %}
#### Version 1

```php
$somme = 0;
$ca01 = readline("Saisir ca1 :");
readline_add_history($ca01);
somme = somme + ca01;
$ca02 = readline("Saisir ca2 :");
readline_add_history($ca02);
somme += ca02;
$ca03 = readline("Saisir ca3 :");
readline_add_history($ca03);
somme += ca03;
//--Reproduire le même code jusqu’à 19 fois
$ca020 = readline("Saisir ca20 :");
readline_add_history($ca020);
somme += ca20;
```
<--->

#### Version 2
```php
$somme = 0;
$i=0
$ca = 0;
while ($i < 21)
{
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $somme += $ca;
    $i++;
}
echo "La somme des CA  est de $somme";
```
{% endcol-n %}

Quel est l’avantage de la version 2 :

☐ la version est plus courte  
☐ elle donne un résultat exact  
☐ le traitement est plus rapide  
☐ la version peut être adaptée facilement
## 2 - Choix d’une version
Voici trois extraits de version permettant d’obtenir la somme de chiffres d’affaires :
```php
$somme = 0;
```
{% col-n %}
#### Version 1

```php
$ca = readline("Saisir ca :");
readline_add_history($ca);
while ($ca != 0)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $somme += $ca;
 }
echo "La somme des CA  est de $somme";
```

#### Version 2
```php
$ca = 0;
while ($i < 21)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $somme += $ca;
    $i++;
 }
echo "La somme des CA  est de $somme";
```
<--->
#### Version 3
```php
$ca = readline("Saisir ca :");
readline_add_history($ca);
while ($ca != 0)
 {
    $somme += $ca;
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
 }
echo "La somme des CA  est de $somme";

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
```php
$somme = 0;
$ca = 0;
$reponse = readline("Voulez vous saisir une note O/N :");
readline_add_history($reponse);
while ($reponse == "O")
 {
    $note = readline("Saisir une note :");
    readline_add_history($note);
    $somme += $note;
    $reponse = readline("Voulez vous saisir une autre note O/N :");
    readline_add_history($reponse);
  }
echo "La somme des notes est de $somme";
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
```php
$totalht = 0;
```
{% col-n %}
#### Version 1

```php
$vente = readline("Saisir les ventes :");
readline_add_history($vente);
while ($vente != 0)
 {
    $vente = readline("Saisir les ventes :");
    readline_add_history($vente);
    $totalht  += $vente;
}
echo "totalht : $totalht";
```

#### Version 2
```php
$vente = 0;
while ($vente != 0)
 {
    $vente = readline("Saisir les ventes :");
    readline_add_history($vente);
    $totalht  += $vente
 }
echo "totalht : $totalht";
```
<--->
#### Version 3
```php
$vente = readline("Saisir les ventes :");
readline_add_history($vente);
while ($vente != 0)
 {
   $totalht  += $vente;
 }
echo "totalht : $totalht";
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
```php
$reponse = 'n';
while ($reponse == "n" || $reponse == "N")
 {
    $chiffre = readline("Tape un chiffre entre 1 et 9");
    readline_add_history($chiffre);

	while ($chiffre != 5)
 	{
   		echo ’Tu as perdu ! Recommence :’;
  		$chiffre = readline("Tape un chiffre entre 1 et 9");
        readline_add_history($chiffre);
	}
    echo ’Bravo.Tu as gagné !’;
    $reponse = readline("Autre joueur ? O/N : ");
    readline_add_history($reponse);
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

```php
$compteur = 0;
$ca = readline("Saisir ca :");
readline_add_history($ca);
while ($compteur < 4)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $compteur += 1;
 }
```

#### Version 2
```php
$compteur = 1;
while ($compteur < 4)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $compteur += 1;
}
```
<--->
#### Version 3
```php
$compteur = 0;
while ($compteur < 4)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $compteur += 1;
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

```php
$somme = 0;
$ca = 1;
while ($ca != 0)
 {
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
    $somme += $ca;
 }
echo "La somme des CA est de $somme";
```
<--->
#### Version 2
```php
$somme = 0;
$ca = 1;
while ($ca != 0)
 {
    $somme += $ca;
    $ca = readline("Saisir ca :");
    readline_add_history($ca);
 }
echo "La somme des CA est de $somme";
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

```php
$moyenne = 0;
$note01 = readline("Saisir note 1 :");
readline_add_history($note01);
$note02 = readline("Saisir note 2 :");
readline_add_history($note02);
$note03 = readline("Saisir note 3 :");
readline_add_history($note03);
$moyenne = ($note01 + $note02 + $note03 )/3;
echo $moyenne;
```
<--->
#### Version 2
```php
$moyenne = 0;
$somme = 0;
$compteur = 0;
$note = readline("Saisir une note :");
readline_add_history($note);
while ($note < 0)
    {
        $somme += $note;
	    $compteur += 1;
        $note = readline("Saisir une note :");
        readline_add_history($note);
    }
$moyenne = $somme /$compteur;
echo $moyenne;
```
<--->
#### Version 3
```php
$moyenne = 0;
$somme = 0;
$compteur = 0;
$note = readline("Saisir une note :");
readline_add_history($note);
while ($compteur < $nbrnote)
    {
        $note = readline("Saisir une note :");
        readline_add_history($note);
        $somme += $note;
	    $compteur += 1;
    }
$moyenne = $somme /$compteur
echo $moyenne;
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

```php
$s = 0;
for ($i=4;$i<100;$i=$i+2)
    {
        $s += $i;
    }
echo "s = $s";
```
<--->
#### Version 2
```php
$s = 0;
$k = 4;
while ($k < 100)
    {
        $s += $k;
       // code à rajouter
    }
echo "s = $s";
```
{% endcol-n %}
**Comment modifier le code pour rendre les deux boucles équivalentes ?**

☐ k=k+1  
☐ k=s+1  
☐ k=k+2  
☐ k=s+2  
