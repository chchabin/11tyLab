---
layout : "layouts/docs.njk"
title : "Linq To Entity"
description : ""
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2023-01-25T22:44:42+01:00"
draft : false
---
Interroger la base de données via EF et le modèle généré se fait via un langage particulier
appelé Linq to Entity (Language Integrated Query)  
Ce langage permet d’écrire des requêtes qui seront ensuite transformées en langage SQL (ou Oracle ou MySQL) à partir 
d’un langage typé.  
Les requêtes LINQ s’exécutent toujours dans le contexte du modèle EF.

## SELECTION

Cette requête LINQ permet de récupérer tous les objets `Eleves` de votre base `AutoEcole` :
```csharp
var query = from el in context.eleves
            select el;
            
var allEleves = query.ToList();

 foreach (var eleve in allEleves)
 {
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
 }
```
La variable `query` représente la requête à exécuter sur votre base de données.
La variable `allEleves` représente la `List<Eleves>` issu de l’exécution de votre requête.
{% callout warning %}
Note : L’exécution de la requête se fait lors de l’appel de la méthode ToList() et non pas lors
de la déclaration de la requête !
{% endcallout %}
{% bt-collapse "select", success, "Equivalent SQL"%}
```sql
SELECT * FROM context.eleves el
(...)
```
{% endbt-collapse %}
### Clause `where`
Nous pouvons avoir aussi :
```csharp
var query = from el in context.eleves
            where el.creditHoraire >10
            select el;
            
var allEleves = query.ToList();

 foreach (var eleve in allEleves)
 {
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
 }
```
Dans ce cas, comme en SQL, nous affectons une contrainte `where` à la liste.
Les tests dans where peuvent contenir plusieurs critères, avec les opérateurs logiques `&&` (and), `||` (or) `==` (équivalent).
{% bt-collapse "where", success, "Equivalent SQL"%}
```sql
SELECT * FROM context.eleves el
WHERE el.creditHoraire >10    
...
```
{% endbt-collapse %}
### Types anonymes
Voici une nouvelle formulation.
```csharp
var query = from el in context.eleves
            where el.creditHoraire > 10
            select new { FirstName = el.nom, LastName = el.prenom };

var allEleves = query.ToList();

foreach (var eleve in allEleves)
{
    Console.WriteLine($"{eleve.FirstName} {eleve.LastName}");
}
```

Quelques explications :

1. `from` permet de définir la source de données (spécifiée après le mot clé `context`) et une variable de portée locale 
qui représente les éléments dans la séquence source (ici, c’est `el`). Pour le reste de la requête, on peut exploiter 
les champs de cette variable (avec `el.creditHoraire` par exemple).
2. `where` nous permet de définir les conditions de la requête, pour filtrer juste sur les valeurs qui nous intéressent
3. `select` permet de définir les variables de sortie. Ici, nous créons un type à la volée avec le mot clé `new`.
Le résultat est un ensemble de types Anonymes contenant les propriétés voulues `.FirstName` et `.LastName`.
4. L'affichage se fait à partir de ces nouvelles variables.
{% bt-collapse "alias", success, "Equivalent SQL"%}
```sql
SELECT el.nom AS FirstName, el.prenom AS LastName 
FROM context.eleves el
WHERE el.creditHoraire >10    
(...)
```
{% endbt-collapse %}
### Clause `orderby`
Cette instruction se place avant le `select`.
```csharp
var query = from el in m.eleves
            where el.creditHoraire > 10
            orderby el.creditHoraire descending
            select el;
            
var allEleves = query.ToList();

foreach (var eleve in allEleves)
{
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
}
```
Ici, nous avons ajouté une clause `orderby`, suivie du champ sur lequel faire le tri, et l’ordre.
{% bt-collapse "orderby", success, "Equivalent SQL"%}
```sql
SELECT * 
FROM context.eleves el
WHERE el.creditHoraire >10 
ORDER BY el.creditHoraire DESC   
(...)
```
{% endbt-collapse %}

### Les fonctions d'agrégation
1. Max() : valeur maximale dans la collection (ou dernier par ordre alphabétique)
2. Min() : valeur minimale dans la collection (ou premier par ordre alphabétique)
3. Count() : total d’éléments dans la collection
4. Average() : moyenne des valeurs de la collection (types numériques uniquement)
5. Sum() : total des valeurs de la collection (types numériques uniquement)
Voici des exemples d'application :
```csharp
var query = from el in m.eleves
            where el.creditHoraire > 10
            orderby el.creditHoraire descending
            select el.creditHoraire;
var maxEleves = query.Max();
var sumEleves = query.Sum();
var countEleves = query.Count() ;
```
{% bt-collapse "agregation", success, "Equivalent SQL"%}
Juste un exemple pour `MAX()` le reste est équivalent
```sql
SELECT MAX(*) 
FROM context.eleves el
WHERE el.creditHoraire >10 
ORDER BY el.creditHoraire DESC   
...
```
{% endbt-collapse %}
### L'opération de manipulation d'ensemble `DISTINCT`
- DISTINCT : supprime les doublons
  Voici des exemples d'application :
```csharp 
  var query = from el in m.eleves
  where el.creditHoraire > 10
  orderby el.creditHoraire descending
  select el.creditHoraire;
  
  var distinctEleves = query.Distinct()
``` 
{% bt-collapse "distinct", success, "Equivalent SQL"%}

```sql
SELECT DISTINCT el.creditHoraire  
FROM context.eleves el
WHERE el.creditHoraire >10 
ORDER BY el.creditHoraire DESC   
...
```
{% endbt-collapse %}
## JOINTURE
### Relation explicites
L’idée ici est de récupérer des éléments suivants une jointure SQL en utilisant la syntaxe `from` :
```csharp
var query =  from e in context.lecons
             from r in context.vehicules
             from t in context.eleves
             where t.id == 46
             select e;
```
Le gros avantage ici, c’est qu’il est inutile de spécifier les jointures à utiliser, car elles sont
déjà connues par le modèle AutoEcole.

### Relations non explicites
Ce n’est pas le cas dans notre modèle, mais si votre base de données ne contient pas de
relations (et donc le modèle ne les connaissant pas) vous pouvez réaliser une relation explicite
comme ceci :
```csharp
var query = from t in context.eleves
            join r in context.lecons on t.id equals r.idEleve
            where t.nom == "Ardi"
            select r;
```
{% callout warning %}
`join … in … on … equals` est la syntaxe qui permet d’établir la relation explicite entre
deux entités (donc 2 tables).
{% endcallout %}

## REGROUPEMENT
Il s’agit de grouper les éléments dans une nouvelle structure. Nous allons utiliser le
concept qde type anonyme dans la requête LINQ.  
Un type anonyme permet de créer un objet dynamiquement sans forcément avoir au préalable
écrit la classe correspondante.  
Dans une fonction de regroupement, on a souvent une structure différente de la structure de la
table d’où l’utilisation de type anonyme.  
Voici un exemple sur la table `Lecons` on souhaite avoir les `lecons` pour chaque `eleves` :
```csharp
var query = from p in context.lecons
            group p by new { p.id, p.idEleve } into LeconsGroupbyEleve
            select new
            {
            LeconId = LeconsGroupbyEleve.Key.id,
            EleveId = LeconsGroupbyEleve.Key.idEleve
            };
            
foreach (var p in query.ToList())
    {Console.WriteLine($"{p.LeconId} {p.EleveId}");}
```
### Les fonctions d’agrégation
#### Somme (sum) :
```csharp
var query = from l in this.mesDonnesEF.lecons
            group l by l.idEleve into groupeLecon
            join e in this.mesDonnesEF.eleves on groupeLecon.Key equals e.id
            select new
            { 
                nom = e.nom,
                totalHeure = groupeLecon.Sum(cumul => cumul.duree )
            };
```
{% callout warning %}
`cumul => cumul.duree` est une expression lambda. Elle gagne en performance par rapport à une expression classique.
{% endcallout %}

#### Cumul (Count)
```csharp
var query = from l in this.mesDonnesEF.lecons
            group l by l.numImmaVehicule into groupeVehicule
            join v in this.mesDonnesEF.vehicules on groupeVehicule.Key equals v.numImma
            select new
            {
                immatriculation = v.numImma,
                NombreDeFois = groupeVehicule.Count()
            };
```
Les types anonymes permettent une intégration des fonctions d'agrégation dans le select.

## FILTRE
L’idée ici est de passer une variable comme nous aurions passé un paramètre. EF va générer
une requête paramétrée et l’exécuter sur votre base :
```csharp
String filtre = "1123YA93";

var query = from l in context.lecons
            where l.numImmaVehicule.StartsWith(filtre)
            select l;
```
`StartWith()` est transformée en commande SQL `Like` et la
variable de type string est bien remplacée par un paramètre `nvarchar()`

## INSERTION

```csharp
using (var context = new autoecoleEntities())
{
    var nouvelEleve = new Eleve
    {
        Id = "e1",
        Nom = "dupont", 
        Prenom = "jean"
    };

    context.Eleves.Add(nouvelEleve);
    context.SaveChanges();
}
```
{% bt-collapse "insertion", success, "Equivalent SQL"%}
```sql
INSERT INTO context.eleves VALUES ('e1', 'dupont', 'jean')
...
```
{% endbt-collapse %}

## MISE A JOUR


```csharp
using (var context = new autoecoleEntities())
{
    var eleveAModifier = context.Eleves
        .Where(e => e.Prenom == "jean")
        .FirstOrDefault();

    if (eleveAModifier != null)
    {
        eleveAModifier.Nom = "yoyo";
        context.SaveChanges();
    }

}
```
{% bt-collapse "maj", success, "Equivalent SQL"%}
```sql
UPDATE context.eleves SET nom='yoyo' WHERE prenom='jean'
...
```
{% endbt-collapse %}

## SUPPRESSION


```csharp
using (var context = new VotreDbContext())
{
    // Méthode 1 : LINQ avec chargement
    var elevesASupprimer = context.Eleves
        .Where(e => e.Nom == "yoyo")
        .ToList();

    if (elevesASupprimer.Any())
    {
        context.Eleves.RemoveRange(elevesASupprimer);
        context.SaveChanges();
    }
}
```

{% bt-collapse "delete", success, "Equivalent SQL"%}
```sql
DELETE FROM Eleves WHERE nom='yoyo'
...
```
{% endbt-collapse %}