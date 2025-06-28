---
layout : "layouts/docs.njk"
title : "Les Exercices"
description : "Entrainement"
group : "exercices"
section : "exercices-et-challenges"
toc : true
date : "2022-08-18T20:33:56+02:00"
draft : false
---
## 1 - Convention de nommage
Reliez les données à leur casse.
{% bs-table %}

| Data               |   |   |   | Casse              |
|--------------------|---|---|---|--------------------|
| PI                 | ☐ |   | ☐ | notation hongroise |
| AfficherCustomer   | ☐ |   | ☐ | casse Pascal       |
| Afficher\_Customer | ☐ |   | ☐ | casse Camel        |
| testCompteur       | ☐ |   | ☐ | casse Majuscule    |
| btnRetour          | ☐ |   |   |                    |

{% endbs-table %}
## 2 - Calcul du prix unitaire à partir d’un montant TTC
Soit la formule :
`HT = TTC / (TVA x qt)`

Écrire le programme qui réalise le cas d’utilisation suivant :

1. Le système (le programme) demande le montant TTC
2. L’utilisateur saisit la réponse
3. Le système demande les quantités achetées
4. L’utilisateur saisit la réponse
5. Le système effectue les calculs nécessaires et affiche le prix unitaire
## 3 - Affiche des nombres dans l’ordre croissant
Écrire le programme, qui réalise le cas d’utilisation, suivant :

1. Le système demande à l’utilisateur de saisir un nombre
2. L’utilisateur saisi un nombre.
3. Le système demande à l’utilisateur de saisir un deuxième nombre
4. L’utilisateur saisi un nombre.
5. Le système affiche les deux nombres dans l’ordre croissant (du plus petit au plus grand)
## 4 - Calcul par tranche
On veut établir la facture d’un abonné à l’EDF connaissant le dernier et l’avant-dernier relevé du compteur. On sait d’autre part, que la tarification se fait par tranches :

- si la quantité d’électricité est inférieure à 100 kwh, le prix du kwh est de 50 centimes ;
- si la quantité d’électricité est supérieure ou égale à 100 kwh, les 100 premiers kwh sont à 50 centimes et au-delà à 30 centimes.

*Exemple*

*Pour 90 kwh le montant sera 90 \* 0,50
Pour 110 kwh le montant sera 100 \* 0,5 + 10 \* 0,30*
## 5 - Calcul d’une surface de pièce
Pour calculer la surface d’un deux-pièces cuisine, demandez à l’utilisateur :

1. Le système demande la longueur de la pièce  
2. L’utilisateur saisi un nombre.  
3. Le système demande la Largeur de la pièce  
4. L’utilisateur saisi un nombre.  
5. Le système calcule la surface (sans l’afficher)  
6. Le système demande la longueur de la pièce 2  
7. L’utilisateur saisi un nombre.  
8. Le système demande la Largeur de la pièce 2  
9. L’utilisateur saisi un nombre.  
10. Le système calcule la surface (sans l’afficher)  
11. Le système demande s’il existe une cuisine  
12. L’utilisateur saisi une lettre.  

    1. Si le système enregistre une réponse positive
    2. Le système demande la longueur de la pièce
    3. L’utilisateur saisi un nombre.
    4. Le système demande la Largeur de la pièce
    5. L’utilisateur saisi un nombre.
    6. Le système calcule la surface (sans l’afficher)
13. Le système donne la somme des surfaces
## 6 - Trouvez l’opérateur manquant
{% bs-table %}

| 10  | \_  | 3   | =   | 3   |
|-----|-----|-----|-----|-----|
| 21  | \_  | 3   | =   | 0   |
| 2   | \_  | 3   | =   | 8   |
| 2   | \_  | 3   | =   | 6   |
{% endbs-table %}
## 7 - Conversion de temps
Saisir un temps en secondes. Traduire ce temps en heures, minutes, secondes.

Exemple
{% bs-table %}

| Temps saisi : | 3824    |                          |
|---------------|---------|--------------------------|
| Résultat :    | 1 heure | 3  44 secondes  secondes |
{% endbs-table %}
## 8 - Dessine-moi un triangle
Écrivez un programme à l’utilisateur un nombre et qui dessine un triangle rempli de "X" de hauteur ce nombre.

*Exemple pour une valeur de 5*
```
    X
    XX
    XXX
    XXXX
    XXXXX
```    
## 9 - Dessine-moi une pyramide
Écrivez un programme à l’utilisateur un nombre et qui dessine une pyramide remplie de "X" de hauteur ce nombre.

*Exemple pour une valeur de 5*
```
                    X
                   XXX
                  XXXXX
                 XXXXXXX
                XXXXXXXXX
```

## 10 - Initialisation d’un tableau
Vous allez créer un programme qui effectue les exigences suivantes :

- Déclarer un tableau d’entier de taille 5
- Demander à l’utilisateur de saisir ces 5 entiers et mettez-les dans le tableau
- Faites la somme de ces 5 éléments
- Afficher ces 5 éléments
- Afficher la somme des éléments
## 11 - Le nombre de voyelles
1. Le système demande à l’utilisateur de saisir un mot en minuscule sans caractères accentués
2. L’utilisateur saisi un mot.
3. Le système renvoie le nombre de voyelles dans le mot.
## 12 - Palindrome
Soit la signature de la fonction :
{% bs-table %}

| Nom           | Rôle                                | Paramètres | Valeur de retour                                 |
|---------------|-------------------------------------|------------|--------------------------------------------------|
| estPalindrome | Vérifie qu’un mot est un palindrome | un mot     | un booléen, vrai si est un palindrome faux sinon |
{% endbs-table %}
Écrivez la fonction qui permet de dire si un mot envoyé en paramètre est un palindrome (mot qui peut être lu de gauche à droite ou de droite à gauche en gardant le même sens)

*Exemple :*

*"ELLE" est un palindrome,  
"ICI" est un palindrome,  
"TRUC" n’est pas un palindrome*  
## 13 - calcul de l’IMC
Soit la signature de la fonction :
{% bs-table %}

| Nom       | Rôle                       | Paramètres                         | Valeur de retour      |
|-----------|----------------------------|------------------------------------|-----------------------|
| resultIMC | Donne le résultat de l’IMC | poids : entier <br>Taille : entier | resultat IMC : string |
{% endbs-table %}
Le calcul de l’IMC est :

`IMC = poids / (taille*taille/10000)`

Le résultat à afficher selon l’IMC est :

IMC de 25 à 29.9 = Surcharge pondérale  
IMC de 18 à 24.9 = Poids de forme  
IMC supérieur à 30 = Obésité  
IMC supérieur à 35 = Obésité 1  
IMC supérieur à 40 = Obésité 2  
## 14 - Transport de marchandises
Un transporteur routier vous demande d’écrire un programme lui permettant de calculer les frais de transport des colis qu’il véhicule sachant que :

- La taxe de base applicable à tout colis est de 25 €.
- Si le colis pèse plus de 60 Kg, une surtaxe de 6 € par kilo supplémentaire est ajoutée.
- Si une des dimensions (largeur, longueur, hauteur) du colis dépasse 1mètre, 9 € sont perçus.
- Pour tout trajet supérieur à 100 km, il y a une majoration de 10% du total.

Cas d’utilisation :

1. Le système (le programme) demande la largeur du colis,
2. L’utilisateur saisit la réponse
3. Le système demande la hauteur du colis,
4. L’utilisateur saisit la réponse
5. Le système demande la longueur du colis,
6. L’utilisateur saisit la réponse
7. Le système demande le poids du colis,
8. L’utilisateur saisit la réponse
9. Le système demande la distance à parcourir,
10. L’utilisateur saisit la réponse,
11. Le système effectue les calculs nécessaires et affiche le prix à payer pour le transport d’un colis
## 15 - Dessine-moi un losange
Écrivez un programme à l’utilisateur un nombre et qui dessine une pyramide inversée remplie de "X" de hauteur ce nombre.

*Exemple pour 15*
```
                      X
                     XXX
                    XXXXX
                   XXXXXXX
                  XXXXXXXXX
                  XXXXXXXXX
                   XXXXXXX
                    XXXXX
                     XXX
                      X

```
## 16 - Chiffres romains
Faire une fonction qui converti un chiffre latin en chiffre romain. Les chiffres doivent être inférieurs à 4000

Petit rappel, les symboles utilisés pour les chiffres romains :
{% bs-table %}

| I   | V   | X   | L   | C   | D   | M    |
|-----|-----|-----|-----|-----|-----|------|
| 1   | 5   | 10  | 50  | 100 | 500 | 1000 |
{% endbs-table %}
## 17 - Scrabble
Donner la valeur au Scrabble d’un mot (Pour ce faire, vous utiliserez les deux tableaux décrits ci-dessous).

`tablettre`
{% bs-table %}

| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   | N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
{% endbs-table %}
`vallettre`
{% bs-table %}

| 1   | 3   | 3   | 2   | 1   | 4   | 2   | 4   | 1   | 9   | 10  | 1   | 2   | 2   | 1   | 2   | 8   | 1   | 1   | 1   | 1   | 3   | 10  | 10  | 10  | 10  |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
{% endbs-table %}
*Exemple :* le mot ORDINATEUR vaut 11
## 18 - Météo
Météo France Côte-d'Or a besoin de vos services pour mettre en œuvre une application pluviométrique. Elle dispose de données par ville (Dijon, Beaune, Montbard). Pour chaque ville, vous aurez un tableau résumant la pluviosité par mois.

Dijon
{% bs-table %}

| 35  | 38  | 40  | 24  | 18  | 11  | 5   | 4   | 12  | 19  | 21  | 29  |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
{% endbs-table %}
Beaune
{% bs-table %}

| 31  | 35  | 38  | 25  | 19  | 10  | 6   | 5   | 13  | 17  | 20  | 27  |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
{% endbs-table %}
Montbard
{% bs-table %}

| 36  | 36  | 39  | 23  | 15  | 9   | 4   | 3   | 14  | 20  | 22  | 28  |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
{% endbs-table %}
- Dire pour chaque mois quelle ville a le niveau de pluviosité le plus important ?
- Quel mois a le niveau de pluviosité le plus important (On regroupera les 3 villes) ?
- Quelle ville a le niveau de pluviosité le plus important de l’année ?
## 19 -Master Mind
**Règle du jeu**  
Le jeu se joue à deux. L’ordinateur choisit une combinaison de 4 chiffres (compris entre 0 et 9). Sauf indications contraires, rien n’interdit que la combinaison comporte plusieurs exemplaires d’un même chiffre.  

Chaque fois que le joueur propose une combinaison, l’ordinateur indique le nombre de chiffres bien placés et le nombre de chiffres mal placés.  

Le nombre de chiffres dont dispose l’ordinateur pour sa combinaison sera un paramètre.  

*Exemple 1 :*
Nombre de chiffres = 6  
Chiffres disponibles = 0 à 5  
Le joueur a droit à 6 essais, pour déterminer la combinaison.  

*Exemple 2 :*
Nombre de chiffres = 8  
Chiffres disponibles = 0 à 7  
Le joueur a droit à 8 essais, pour déterminer la combinaison  
**Affichage souhaité**  
choix
{% bs-table %}

| 5   | 2   | 1   | 5   |
|-----|-----|-----|-----|
{% endbs-table %}
Saisi
{% bs-table %}

| 4   | 2   | 1   | 5   |
|-----|-----|-----|-----|
{% endbs-table %}
Résultat
{% bs-table %}

| Nb  | pos 1 | pos 2 | pos 3 | pos 4 | BP  | MP  |
|-----|-------|-------|-------|-------|-----|-----|
| 1   | 1     | 2     | 3     | 4     | 0   | 2   |
| 2   | 0     | 0     | 5     | 5     | 1   | 1   |
{% endbs-table %}
...
## 20 - Dessine-moi un triangle inversé
Écrivez un programme à l’utilisateur un nombre et qui dessine un triangle inversé rempli de "X" de hauteur ce nombre.

*Exemple pour 5*
```
    XXXXX
    XXXX
    XXX
    XX
    X
```    
## 21 - Dessine-moi une pyramide inversée
Écrivez un programme à l’utilisateur un nombre et qui dessine une pyramide inversée remplie de "X" de hauteur ce nombre.

*Exemple pour 5*
```
                  XXXXXXXXX
                   XXXXXXX
                    XXXXX
                     XXX
                      X
```

## 22 - les permutations
Écrire l’algorithme qui permet d’effectuer les permutations suivantes :
{% bs-table %}

| AVANT | APRES |
|-------|-------|
| X = 1 | X = 3 |
| Y = 2 | Y = 1 |
| Z = 3 | Z = 2 |
{% endbs-table %}
## 23 - les séquences
Donnez l'état de chaque variable à chaque séquence (les séquences se suivent).
{% bs-table %}

| variable     | a   | b   | c   | d | e      | f      | g    |
|--------------|-----|-----|-----|---|--------|--------|------|
| type         | int | int | int | ? | double | string | char |
| a = 10       |     |     |     |   |        |        |      |
| b = a/2      |     |     |     |   |        |        |      |
| c = a + b +1 |     |     |     |   |        |        |      |
| d = (c>12)   |     |     |     |   |        |        |      |
| b = c ^(1/2) |     |     |     |   |        |        |      |
| c = a % b    |     |     |     |   |        |        |      |
| e = a / b    |     |     |     |   |        |        |      |
| b = a / b    |     |     |     |   |        |        |      |
| f = “baba”   |     |     |     |   |        |        |      |
| g = ’r’      |     |     |     |   |        |        |      |
| g = g + f    |     |     |     |   |        |        |      |
{% endbs-table %}

