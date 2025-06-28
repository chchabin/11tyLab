---
layout : "layouts/docs.njk"
title : "Les Fonctions"
description : ""
group : "programmer"
section : "php"
toc : true
date : "2022-08-21T07:42:29+02:00"
draft : false
---
## 1 - Utilisation de fonctions prédéfinies
Une fonction est un code PHP que vous pouvez invoquer à volonté, où vous fournissez généralement un ou plusieurs arguments à utiliser, et que vous recevez souvent une valeur de retour en conséquence.

Les fonctions permettent de centraliser une portion de code utilisée régulièrement.

Vous pouvez utiliser la vaste bibliothèque de fonctions de PHP pour faire à peu près tout ce qu’un script PHP pourrait être amené à faire, de la récupération de la date actuelle (date) à la génération de graphiques à la volée. En voici quelques exemples :

- `count` permet de renvoyer la taille d’un tableau.
- `date` renvoie une date/heure qu’on peut ensuite formater pour affichage.
- `isset` vérifie si une variable existe ou non.
- `strlen` renvoie le nombre de caractères d’une chaîne.
```php
<?php
$langages = array('C#', 'PHP', 'HTML');
$nbLangages = count($langages);
if (isset($a) == false){
    `...
}
$date = date("d-m-Y H:i:s");
$msg = "Hello there";
$longueurMsg = strlen($msg);
?>
```
## 2 - Écriture de fonctions
Les fonctions personnalisées, une fois définies, fonctionnent exactement comme les fonctions intégrées de PHP et peuvent faire tout ce qu’un script PHP normal peut faire. Cela permet de décomposer un problème à résoudre en sous-parties plus simples, parfois réutilisables.

Lorsque qu’on a besoin d’utiliser une fonction, on effectue un appel à celle-ci. Cet appel provoque un "branchement" vers la fonction, qui s’exécute. Une fois l’exécution de la fonction terminée, le contrôle revient au niveau de l’appelant et l’exécution se poursuit.

Les paramètres utilisés dans la définition du sous-programme sont appelés paramètres formels. Au moment de l’exécution, leur valeur devient celle des variables utilisés pour l’appel, appelées paramètres effectifs ou encore arguments.
```php
<?php
// $a et $b sont les paramètres de la fonction
function multiplier($a, $b) {
`    `return $a \* $b;
}
$nb1 = 3;
$nb2 = 7.5;
// Appel de la fonction pour execution
$resultat = multiplier($nb1, $nb2);// $nb1 et $nb2 sont les arguments de l’appel de la fonction
// La variable $resultat vaut maintenant 22.5
?>
```
{% callout %}
### Signature d’une fonction
```php
function multiplier($a, $b)
```
La première ligne de l’écriture de la fonction est appelé signature, comme l’exemple précédent.
{% endcallout %}
Le mot-clé `function` indique à PHP que nous souhaitons déclarer une nouvelle fonction à utiliser dans le script actuel.
Ensuite, nous fournissons à la fonction un nom (dans ce cas, multiplier). Les noms de fonctions fonctionnent selon les
mêmes règles que les noms de variables - ils doivent commencer par une lettre ou un trait de soulignement ( `_` ) et peuvent
contenir des lettres, des chiffres et des traits de soulignement - sauf, bien sûr, qu’il n’y a pas de préfixe de signe dollar.
Au lieu de cela, les noms de fonction sont toujours suivis d’un ensemble de parenthèses ( `()` ), qui peuvent ou non être vides.
{% callout danger%}
### N’oubliez pas les parenthèses
C’est une erreur courante des débutants d’oublier les parenthèses quand il n’y a pas d’argument
{% endcallout %}

Les parenthèses qui suivent un nom de fonction entourent la liste des arguments que la fonction acceptera. Vous devriez
déjà vous familiariser avec cela grâce à votre expérience avec les fonctions intégrées de PHP. Par exemple, lorsque vous
utilisez rand pour générer un nombre aléatoire, vous pouvez lui fournir un nombre minimum et maximum entre parenthèses.
Lors de la déclaration d’une fonction personnalisée, au lieu de donner une liste de valeurs pour les arguments, vous donnez une liste de noms de variables. Dans cet exemple, nous listons deux variables : $a et $b. Lorsque la fonction est appelée, elle s’attendra donc à recevoir deux arguments. La valeur du premier argument sera affectée à $a, tandis que la valeur du second sera affectée à $b. Ces variables peuvent ensuite être utilisées pour effectuer le calcul dans la fonction.  
En parlant de calculs, le reste de la déclaration de fonction est le code qui effectue le calcul ou fait tout ce que la
fonction est censée faire. Ce code doit être entouré d’un ensemble d’accolades ( `{ … }` ), voici ainsi l’accolade ouvrante.
Vous pouvez considérer le code entre ces accolades comme un script PHP miniature. Cette fonction est simple, car elle ne contient qu’une seule instruction : une instruction `return`. Une instruction `return` peut être utilisée dans le code d’une fonction pour revenir immédiatement au script principal. Lorsque l’interpréteur PHP atteint une instruction `return`, il arrête immédiatement d’exécuter le code de cette fonction et retourne là où la fonction a été appelée. C’est une sorte de siège éjectable pour les fonctions !
En plus de sortir de la fonction, l’instruction `return` vous permet de spécifier une valeur pour que la fonction retourne au code qui l’a appelée.  
L’accolade fermante marque la fin de la déclaration de fonction.
L’écriture d’une fonction seule ne fait rien. Aucun code à l’intérieur de la fonction n’est exécuté tant que la fonction n’est pas appelée.
{% callout danger%}
### N’oubliez pas les arguments
Sauf si vous l’avez spécifié dans la signature, les paramètres, spécifiés dans l’écriture de la fonction, sont obligatoires quand vous l’exécutez.
{% endcallout %}
{% callout %}
### Écriture de Fonctions
Lorsque vous écrivez une fonction, il est généralement plus facile d’écrire des exemples de la façon dont vous pensez qu’elle devrait être appelée avant d’écrire le code à l’intérieur de la fonction elle-même. Cela vous donne une cible vers laquelle travailler et du code que vous pouvez exécuter pour voir s’il fonctionne correctement ou non.
{% endcallout %}
## 3 - Typage des fonctions
### Déclarations du type d’argument
Que se passe-t-il si la personne qui utilise votre fonction passe en paramètre des lettres au lieu de chiffre ? C’est une erreur innocente et facile à commettre par accident. Une erreur ne sera pas vue jusqu’à ce que la fonction soit appelée.
Pour les aider, il vaut mieux s’assurer que les arguments sont du bon type. PHP est mal typé, ce qui signifie qu’une variable peut être de n’importe quel type, comme une chaîne, un nombre, un tableau ou un objet. En les déclarant, vous pouvez appliquer des types lorsque vous créez une fonction. Ceci est particulièrement utile pour les constructeurs, où obtenir les arguments dans le mauvais ordre semble fonctionner. Voici un exemple, avec le code suivant :
```php
<?php
// $a et $b sont les paramètres de la fonction et ils sont de type int
function multiplier(int $a,int $b) {
    return $a \* $b;
}
```
{% callout warning%}
### Compatibilité des indications de type
L’indication de type pour les types de base (chaînes numériques, tableaux - tout ce qui n’est pas un objet) n’a été introduite que dans PHP 7. Il est possible que votre hébergeur soit toujours sur PHP 5, alors soyez prudent lorsque vous utilisez cette fonctionnalité !
{% endcallout %}
### Déclarations du type de retour
La déclaration du type de retour est surtout utile quand un autre programmeur doit créer la fonction à partir de sa signature. L’utilisation est identique à la précédente, sauf que son emplacement est different. Il se situe à la fin de la déclaration de paramètre.
```php
<?php
// $a et $b sont les paramètres de la fonction et ils sont de type int
function multiplier(int $a,int $b) : int {
    return $a \* $b;// le retour attendu est de type int 
}
```
{% callout %}
### Signature d’une fonction
Avec l’énoncé explicite du typage la signature devient :
```php
function multiplier(int $a,int $b) : int
```
{% endcallout %}
## 4 - Portée des variables
### Attention
En PHP, une variable définie à l’extérieur d’une fonction n’est pas accessible dans le corps de cette fonction. Il s’agit d’une différence importante avec la plupart des autres langages de programmation.
```php
<?php
$a = 1;
function test() : string {
    return '$a vaut ' . $a;// $a n’existe pas dans ce contexte
}
echo test(); // Affiche uniquement "$a vaut "
?>
```
Le plus souvent, on externalise la définition des fonctions dans un fichier dédié qui est inclus dans la page utilisant la fonction.
```php
<?php include "fonctions.php";?>
```
