---
layout : "layouts/docs.njk"
title : "Cas Particuliers"
description : "Le cas particulier avec INSERT, UPDATE, DELETE et exec"
group : "sgbd"
section : "php"
toc : true
date : "2022-09-03T12:14:46+02:00"
draft : false
---
## 1 - `INSERT`
**Les deux types d’`INSERT`**  
Je profite de cette opportunité pour vous rafraîchir la mémoire sur les deux types de syntaxe de requête. Ils font tous deux exactement le même travail et ont le même résultat, c’est donc à vous que vous utilisez, et cela se résume principalement à des préférences personnelles plutôt qu’à une raison pratique.
### a - Première forme d’INSERT
```sql
⋮
// première forme
INSERT INTO `employe` SET
    `id` = 1,
    `name` = 'Annie Matteur',
    `email` = 'annie.matteur@libre.com';
⋮
```
Ici l’insertion se fait comme dans un tableau php

### b - Deuxième forme d’INSERT
```sql
⋮
// deuxième forme
INSERT INTO `employe` (`id`, `name`, `email`)
VALUES(1,'Annie Matteur','annie.matteur@libre.com');  
⋮
```
Cette formulation est plus classique, elle est acceptée par toutes les bases de données. Pour insérer plusieurs valeurs, il suffit d’enchainer les données comme ceci :
```sql
⋮
// deuxième forme
INSERT INTO `employe` (`id`, `name`, `email`)
VALUES  (1,'Annie Matteur','annie.matteur@libre.com'),
        (2,'Henri Golant','henri.golant@libre.com') 
⋮
```
 **Et le PDO ?**  
Il est plus pratique d’ajouter l’instruction `exec` plutôt que `query`, car dans ce cas PDO renvoie le nombre de lignes, ajoutée. Elle donne une information supplémentaire, utile, en cas de problèmes. On aura alors :

```php
⋮
$requete = "INSERT INTO `employe` (`id`, `name`, `email`)
VALUES  (1,'Annie Matteur','annie.matteur@libre.com'),
        (2,'Henri Golant','henri.golant@libre.com')";
$resultat = $bdd->exec($requete);
⋮
```

Nous devrions avoir dans ce cas 2 dans `$resultat`.
Avec une requête paramétrée, nous aurions :
```php
⋮
$requete = $bdd->prepare("INSERT INTO `employe` (`id`, `name`, `email`)
VALUES  (:id,:nom,:mel);
$requete->bindParam(':id', $id, PDO::PARAM_INT);
$requete->bindParam(':nom', $nom, PDO::PARAM_STR);
$requete->bindParam(':mel', $mel, PDO::PARAM_STR);

// ... Insertion du premier jeu
$id=1;
$nom='Annie Matteur';
$mel='annie.matteur@libre.com';
$requete->execute();

// ... Insertion du deuxième jeu
$id=2;
$nom='Henri Golan';
$mel='henri.golant@libre.com';
$requete->execute();
⋮
```

La structure est plus lourde, mais plus sécurisée.
`PDO::PARAM_STR` dit à MYSQL que le type envoyé est `string`. L'analogie pour `PDO::PARAM_INT` est évidente. Pour plus de détails, allez sur [Constantes PDO](https://www.php.net/manual/fr/pdo.constants.php)

## 2 - `UPDATE`
Après avoir entré des données dans une table de base de données, vous constaterez peut-être que vous souhaitez la modifier. 
Que vous corrigiez une faute d’orthographe ou que vous changiez la date associée à une blague, de telles modifications sont
effectuées à l’aide de la commande `UPDATE`. Cette commande contient des éléments des commandes `SELECT` et `INSERT`, 
car la commande sélectionne à la fois les entrées à modifier et définit les valeurs de colonne. La forme générale de la commande `UPDATE` est la suivante :
```sql
⋮
UPDATE table
SET NomColonne = Nouvelle condition
WHERE condition;
⋮
```
Par exemple, nous aurons :
```sql
⋮
UPDATE `employe`
SET `name` = 'Jérémie Macoulotte'
WHERE `id` = 1;
⋮
```
**Et le PDO ?**  
Comme pour le `Insert` il faudra faire appel à la fonction `exec` pour vérifier que la ligne est bien ajoutée.
```php
⋮
$requete = "UPDATE `employe`
SET `name` = 'Jérémie Macoulotte'
WHERE `id` = 1";
$resultat = $bdd->exec($requete);
⋮
```
Avec une requête paramétrée, nous aurions :
```php
⋮
$requete = $bdd->prepare("UPDATE `employe`
SET `name` = 'Jérémie Macoulotte'
WHERE `id` = :id");
$requete->bindParam(':id', 1);
$requete->execute();
⋮
```

## 3 - `DELETE`
La suppression d’entrées avec le SQL est dangereusement facile. Voici la syntaxe de la commande :

```sql
⋮
DELETE FROM table
WHERE condition;
⋮
```

Par exemple, nous aurons :

```sql
⋮
DELETE FROM `employe`
WHERE `name` = 'Laure Dinateur';
⋮
```
{% callout danger%}
**WHERE est facultatif**  
Croyez-le ou non, la clause `WHERE` de la commande `UPDATE` et `DELETE` est facultative. 
Par conséquent, vous devez être très prudent lorsque vous tapez cette commande ! Si vous laissez la clause `WHERE` de côté, 
la commande `UPDATE` ou `DELETE` s'appliquera alors à toutes les entrées de la table.
{% endcallout %}
**Et le PDO ?**  
Comme pour le `Insert` il faudra faire appel à la fonction `exec` pour vérifier que la ligne est bien ajoutée.

```php
⋮
$requete = "DELETE FROM `employe`
WHERE `name` = 'Laure Dinateur';
$resultat = $bdd->exec($requete);
⋮
```

Avec une requête paramétrée, nous aurions :

```php
⋮
$requete = $bdd->prepare("DELETE FROM `employe`
WHERE `name` = :name");
$requete->bindParam(':name', 'Laure Dinateur');
$requete->execute();
⋮
```
