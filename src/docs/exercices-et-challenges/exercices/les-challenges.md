---
layout : "layouts/docs.njk"
title : "Les challenges"
description : "Relevez les !"
group : "exercices"
section : "exercices-et-challenges"
toc : true
date : "2022-08-18T21:30:23+02:00"
draft : false
---
## 1 - Hercule et le jardin des Hespérides
Histoire

Les Hespérides, filles d’Atlas, habitaient un merveilleux jardin dont les pommiers donnaient des pommes en or.

Pour son 11e travail, Eurysthée demanda à Hercule de ramener ces pommes.

Une fois atteint le jardin merveilleux, l’oracle Nérée apprit à Hercule qu’il pourrait repartir avec une partie des pommes... à condition qu’il montre ses facultés en calcul mental.

Nérée lui tint ce propos manipulation\_de\_nombres :
J’ai empilé les pommes d’or pour toi, sous la forme d’une pyramide.
L’étage le plus haut ne contient qu’une pomme.
L’étage juste en dessous forme un carré 2x2 (contenant 4 pommes), l’étage juste en dessous forme un carré 3x3 (contenant 9 pommes).
La pyramide que tu vois contient 50 étages. L’étage de base contient donc 2 500 pommes...
Je suis d’accord pour te laisser partir avec les pommes contenues dans certains étages.
Précisément, si un étage contient un nombre de pommes multiple de 3, tu peux l’emporter.
Si tu m’annonces combien de pommes, tu emporteras au total, je te laisserai partir avec les pommes...
Pour relever ce défi, vous devez aider Hercule en lui indiquant le nombre de pommes qu’il pourra emporter.

Exemple

*Par exemple, si la pyramide n’avait compté que 6 étages comme indiqué sur la figure suivante, chaque étage aurait été composé de : 1, 4, 9, 16, 25 et 36 pommes.*

*Hercule aurait pu emporter les 9 pommes de l’étage 3 (car 9 est un multiple de 3) et les 36 pommes de l’étage 6 (parce que 36 est un multiple de 3).*

*Au total, il aurait donc emporté 45 pommes.*
{%questions %}
#### Défi
Écrire la fonction permettant à Hercule de calculer le nombre de pommes pouvant être emportées étant donné le nombre d’étages
{% endquestions %}
## 2 - Le lion de Némée
Histoire

Le premier travail qu’Eurysthée demanda à Hercule fut de lui ramener la peau du lion de Némée. Le terrible animal vivait dans la forêt d’Argolide et terrorisait les habitants de la région.

Hercule traversa donc la forêt d’Argolide à la recherche du lion. Là, il vit que des petits panneaux avaient été fixés sur certains arbres. Sur chaque panneau, le nom d’une divinité, était inscrit. Hercule nota tous les noms qu’il rencontra.

Approchant de l’antre du lion, il vit, gravé dans la pierre :
*La lettre "A" vaut 1, la lettre "B" vaut 2, jusqu’à la lettre "Z" qui vaut 26. Ainsi, le mot : "BABA" vaut 6 (=2+1+2+1). Cherche la valeur de chaque mot, classe-les de la plus petite valeur à la plus grande et prononce les mots dans cet ordre : le lion se rendra à toi.*

Hercule considéra sa liste de divinités :

ARTEMIS, ASCLEPIOS, ATHENA, ATLAS, CHARON, CHIRON, CRONOS, DEMETER, EOS, ERIS,
EROS, GAIA, HADES, HECATE, HEPHAISTOS, HERA, HERMES, HESTIA, HYGIE, LETO, MAIA,
METIS, MNEMOSYNE, NYX, OCEANOS, OURANOS, PAN, PERSEPHONE, POSEIDON, RHADAMANTHE,
SELENE, THEMIS, THETIS, TRITON, ZEUS.

Voyons : ARTEMIS vaut 85, donc il faut la placer avant ASCLEPIOS qui vaut 99...
{%questions %}
#### Défi
Pouvez-vous aider Hercule, en lui indiquant dans quel ordre il doit citer les divinités ?
Donnez simplement la liste des dieux, dans le bon ordre (les mots seront séparés par des espaces).
{% endquestions %}
## 3 - L’anniversaire de cheryl
Albert et Bernard viennent de rencontrer Cheryl. "C’est quand votre anniversaire ?" Albert a demandé à Cheryl. Cheryl a réfléchi un instant et a dit : « Je ne vous le dirai pas, mais je vais vous donner quelques indices ». Elle a écrit une liste de dix dates :

- 15 mai, 16 mai, 19 mai
- 17 juin, 18 juin
- 14 juillet, 16 juillet
- 14 août, 15 août, 17 août

L’un d’eux est mon anniversaire", a-t-elle déclaré.

Cheryl a chuchoté à l’oreille d’Albert le mois, et seulement le mois, de son anniversaire. À Bernard, elle chuchotait le jour,
et uniquement le jour. « Peux-tu le comprendre maintenant ? » Demanda-t-elle à Albert

- Albert : "Je ne sais pas quand est ton anniversaire, mais je sais que Bernard ne le sait pas non plus."
- Bernard : « Je ne le savais pas à l’origine, mais maintenant, je le sais. »
- Albert : "Eh bien, maintenant je sais aussi !"

{%questions %}
#### Défi
Quand est l’anniversaire de Cheryl ?
{% endquestions %}
## 4 - FizzBuz
Le FizzBuzz, où il faut écrire un programme qui affichera les entiers de 1 à 100 inclusivement, mais où les multiples de trois qui ne sont pas aussi multiples de cinq seront remplacés par Fizz, les multiples de cinq qui ne sont pas des multiples de trois seront remplacés par Buzz et les multiples de trois qui sont aussi des multiples de cinq seront remplacés par FizzBuzz.
## 5 - Statistiques
Il s'agit d'afficher des distributions de notes. Les notes sont générées par une fonction aléatoire donnée au point `a`. Le programme fournit le menu suivant :

{% figure-abs "images/exercices-et-challenges/statistique.png" "statistiques" "100%" "100%" %}

Ce menu est programmé grâce à aux instructions `switch case`
### a - Fonctions de base
Le code est écrit en algorithmique pour faciliter son adaptation dans différents langages.
{% bs-table %}

| **Nom**        | **Rôle**                     | **Paramètres**                                                        | **Valeur de retour**                 |
|----------------|------------------------------|-----------------------------------------------------------------------|--------------------------------------|
| chargerTableau | Charge le tableau de données | nbr : entier → le nombre de notes<br>valSup : réel → la note maximale | tNotes : tableau DE réel → les notes |
{% endbs-table %}

{% bt-collapse "notes0" %}
```batch
 fonction ChargerTableau(nbr :entier, valSup :réel) :tableau

 VAR

 tNotes : TABLEAU[0,...nbr] DE réels

 i : entier

 DEBUT

    i <- 0

	Pour i de 0 à tab.longueur Faire

		tNotes [i] <- ABS((ENTIER(COS(REEL(i+1)))%valSup)

	FinPour

    RESULTAT <- tNotes

 FIN

 // En C# la fonction est : tNotes[i] = Math.Abs(((int)(Math.Cos((float)i + 1) \* 1000)) % valSup);

 // En PHP la fonction est : $tNotes[$i] = abs(((int) (cos((float) $i + 1) \* 1000)) % valSup);
```
{% endbt-collapse %}
{% bs-table %}

| **Nom**         | **Rôle**                      | **Paramètres**                       | **Valeur de retour** |
|-----------------|-------------------------------|--------------------------------------|----------------------|
| afficherTableau | Affiche le tableau de données | tNotes : tableau DE réel → les notes | void                 |
{% endbs-table %}

{% bt-collapse "notes1" %}
```batch
fonction afficherTableau(tNotes :tableau DE réel) :void

 VAR

 i : entier

 DEBUT

    i <- 0

	Pour i de 0 à tab.longueur Faire

		Afficher(tNotes [i])

	FinPour

 FIN   
``` 
{% endbt-collapse %}
### b - Affichage de la distribution des notes
1. Écrire les fonctions min et max,
2. Écrire la fonction qui indique le nombre de notes inférieur à 5,
3. Écrire la fonction qui indique le nombre de notes dans un intervalle de 4 notes.
   {% bs-table %}

| **Nom**         | **Rôle**                 | **Paramètres**                       | **Valeur de retour** |
|-----------------|--------------------------|--------------------------------------|----------------------|
| distributionMin | Affiche la note minimale | tNotes : tableau DE réel → les notes | void                 |
{% endbs-table %}
{% bs-table %}

| **Nom**         | **Rôle**                 | **Paramètres**                       | **Valeur de retour** |
|-----------------|--------------------------|--------------------------------------|----------------------|
| distributionMax | Affiche la note maximale | tNotes : tableau DE réel → les notes | void                 |
{% endbs-table %}
{% bs-table %}

| **Nom**            | **Rôle**                                 | **Paramètres**                       | **Valeur de retour** |
|--------------------|------------------------------------------|--------------------------------------|----------------------|
| distributionJalon5 | Affiche le nombre de notes inférieur à 5 | tNotes : tableau DE réel → les notes | void                 |
{% endbs-table %}
{% bs-table %}

| **Nom**            | **Rôle**                                                 | **Paramètres**                       | **Valeur de retour** |
|--------------------|----------------------------------------------------------|--------------------------------------|----------------------|
| distributionEcart4 | Affiche le nombre de notes dans un intervalle de 4 notes | tNotes : tableau DE réel → les notes | void                 |
{% endbs-table %}
{% bt-collapse "notes3", info, "Indice pour distributionEcart4" %}
```
créez un tableau stat[0,...5] : tableau DE entier  
stat[0] contiendra le nombre de notes <4  
stat[1] contiendra le nombre de notes <8  
etc.
```
{% endbt-collapse %}
L’affichage doit ressembler à :

{% figure-abs "images/exercices-et-challenges/distrib.png" "distrib.PNG" %}

### c - Histogramme horizontal
Ajoutez la fonction qui permet d’afficher un histogramme horizontal.

| **Nom**               | **Rôle**                                              | **Paramètres**                       | **Valeur de retour** |
|-----------------------|-------------------------------------------------------|--------------------------------------|----------------------|
| histogrammeHorizontal | Affiche les notes sous forme d’histogramme horizontal | tNotes : tableau DE réel → les notes | void                 |
Le nombre d’étoiles correspond au nombre de valeurs.  
L’affichage doit ressembler à :

{% figure-abs "images/exercices-et-challenges/histoH.png" "histoH.PNG" %}

### d - Histogramme vertical
Ajoutez la fonction qui permet d’afficher un histogramme vertical.

| **Nom**             | **Rôle**                                            | **Paramètres**                       | **Valeur de retour** |
|---------------------|-----------------------------------------------------|--------------------------------------|----------------------|
| histogrammeVertical | Affiche les notes sous forme d’histogramme vertical | tNotes : tableau DE réel → les notes | void                 |
Le nombre d’étoiles correspond au nombre de valeurs.  
L’affichage doit ressembler à :

{% figure-abs "images/exercices-et-challenges/histoV.png" "histoV.png" %}

{%questions %}
#### Défi
Écrire le code qui affichera les histogrammes.  
Reprenez votre code et reprogrammez votre application avec une classe.
{% endquestions %}

## 6 - Passage de variables
On désire construire les 3 formulaires suivants qui s’enchaînent :
{% figure-abs "images/exercices-et-challenges/passVarNom.png" "passVarNom.png"  %}

⬇️

{% figure-abs "images/exercices-et-challenges/passVarPrenom.png" "passVarPrenom.png"  %}

⬇️

{% figure-abs "images/exercices-et-challenges/passVarAdresse.png" "passVarAdresse.png"  %}

⬇️ Un dernier formulaire présente un état des trois précédentes saisies :

{% figure-abs "images/exercices-et-challenges/passVarRecap.png" "passVarRecap.png"  %}

{%questions %}
**Écrire 3 versions différentes de cet exercice :**
-	En faisant passer les informations dans les URL
-	En utilisant des champs cachés
-	En utilisant des variables de session. 
{% endquestions %}

{% aref "https://chchabinlab.gitlab.io/labslides/formulaires/#/", "➡️ Résumé de cours" %}

⚠️ La méthode des formulaires est toujours en POST ⚠️