---
layout : "layouts/docs.njk"
title : "Request Simple"
description : "query - Requêtes simples"
group : "sgbd"
section : "php"
toc : true
date : "2022-09-03T12:13:50+02:00"
draft : false
---
La méthode `query` de la classe `PDO` permet d’exécuter une requête SQL simple (sans paramètres).
```php
⋮
$requete = "select * from employe";
$resultat = $bdd->query($requete);
⋮
```
Le symbole `->` est l’équivalent PHP du symbole `.` utilisé dans d’autres langages comme Java ou C#.
L’instruction `$bdd->query` se lit : "J’appelle la méthode `query` sur mon objet `$bdd`".

Après l’appel à query, on peut parcourir le résultat, ligne par ligne, en appelant à la méthode `fetch` sur le résultat de la requête.
## 1 - Le cas où une seule ligne est renvoyée
- Dans le cas d’une requête qui renvoie une seule ligne de résultat, un seul appel à `fetch`, suffit. C’est notamment le cas lorsqu’on recherche un enregistrement à partir de sa clé primaire.
```php
⋮
$requete = "select * from employe where id=1;";
$resultat = $bdd->query($requete);
$ligne = $resultat->fetch();
// On accède à la valeur de macolonne avec $ligne['macolonne'];
⋮
```
## 2 - Le cas où plusieurs lignes sont renvoyées
- Si la requête renvoie plusieurs lignes de résultats, on peut itérer sur ces lignes avec une boucle `while` ou une boucle `foreach`.
#### a - boucle `while`
```php
⋮
$requete = "select * from employe";
$resultat = $bdd->query($requete);

// Itération sur les résultats de la requête SQL
while($ligne = $resultat->fetch()) {
    // On accède à la valeur de macolonne avec $ligne['macolonne'];
    ⋮
}
⋮
```
#### b - boucle `foreach`
```php
⋮
$requete = "select * from employe";
$resultat = $bdd->query($requete);

// Récupération de tous les résultats de la requête dans un tableau
$donnees = $resultat->fetchAll();
// Itération sur le contenu du tableau
foreach($donnees as $ligne) {
    // On accède à la valeur de macolonne avec $ligne['macolonne'];
    ⋮
}
⋮
```

Dans tous les cas, la variable `$ligne` s’utilise comme un tableau associatif. Elle rassemble les valeurs des différentes colonnes pour une ligne de résultat SQL.
{% callout %}
**`fetch` ou `fetchAll`**  
`fetch` est utilisé dans le cas où vous êtes **sûr** que votre requête renvoie une seule ligne.

`fetchAll` est utilisé dans le cas où la requête vous renvoie plusieurs lignes. Généralement, c’est un tableau qui est renvoyé. Mais avec la gestion des paramètres, il est possible d’obtenir un objet, par exemple.
{% endcallout %}
