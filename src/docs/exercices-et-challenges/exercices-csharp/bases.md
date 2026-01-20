---
layout : "layouts/docs.njk"
title : "Bases"
description : "Variables, Boucles, Tableaux, Fonctions"
group : "exercices-csharp"
section : "exercices-et-challenges"
toc : true
date : "2025-01-25T08:54:56+02:00"
draft : false
---

## EXERCICE 1 : VARIABLES
**Déclare les variables suivantes et affiche-les :**
- Un entier `age` avec la valeur 25
- Une chaîne de caractères `nom` avec la valeur "Alice"
- Un nombre décimal `taille` avec la valeur 1.75
- Un booléen `estEtudiant` avec la valeur true

Utilise `Console.WriteLine()` et l'interpolation de chaîne `$"..."` pour les afficher.

```csharp
// À compléter
int age = ...;
string nom = ...;
```

---

## EXERCICE 2 : BOUCLE SI (IF)
**Utilise des conditions pour :**
1. Vérifier si la personne est majeure (age >= 18)
2. Afficher un message si oui ou si non
3. Vérifier la taille et afficher :
    - "Grand(e)" si taille > 1.80
    - "Taille moyenne" si taille > 1.60
    - "Petit(e)" sinon

```csharp
if (...) 
{
    // À compléter
}
```

---

## EXERCICE 3 : BOUCLE FOR
**Utilise une boucle for pour :**
- Afficher les nombres de 1 à 5
- Pour chaque itération, affiche : "Itération X"

```csharp
for (int i = 1; i <= 5; i++)
{
    // À compléter
}
```

---

## EXERCICE 4 : TABLEAU
**Crée un tableau d'entiers contenant : 10, 25, 30, 45, 50**

Puis affiche tous les éléments de deux façons :
1. Avec une boucle `for` classique (en utilisant `nombres.Length`)
2. Avec une boucle `foreach`

```csharp
int[] nombres = ...;

// Affichage avec for
for (int i = 0; i < ...; i++)
{
    // À compléter
}

// Affichage avec foreach
foreach (int nombre in ...)
{
    // À compléter
}
```

---

## EXERCICE 5 : BOUCLE FOREACH
**Crée un tableau de chaînes de caractères contenant 5 prénoms : "Alice", "Bob", "Charlie", "Diana", "Eve"**

Puis utilise une boucle `foreach` pour :
1. Afficher chaque prénom
2. Afficher le prénom avec un numéro : "1. Alice", "2. Bob", etc.

**Astuce :** Tu peux combiner foreach avec un compteur ou utiliser la boucle for classique pour les numéros.

```csharp
string[] prenoms = ...;

// Affichage simple avec foreach
foreach (string prenom in ...)
{
    // À compléter
}

// Affichage avec numéro (tu dois trouver la solution !)
// À compléter
```

---

## EXERCICE 5bis : INSTRUCTION CONDITIONNELLE SWITCH
**Crée une fonction `AfficherNoteLettre` qui :**
- Prend un entier `note` en paramètre (entre 0 et 100)
- Utilise une instruction `switch` pour afficher la lettre correspondante :
    - 90-100 : "A"
    - 80-89 : "B"
    - 70-79 : "C"
    - 60-69 : "D"
    - < 60 : "F"

- Appelle la fonction avec différentes notes : 95, 85, 75, 65, 55

```csharp
static void AfficherNoteLettre(int note)
{
    // Attention : switch avec les nombres, c'est par cas exact
    // Tu devras utiliser des conditions ou adapter le switch
    // Voici une structure de base :
    
    switch (note)
    {
        case ...:
            // À compléter
            break;
        case ...:
            // À compléter
            break;
        default:
            // À compléter
            break;
    }
}
```

**Défi bonus :** Peux-tu convertir la fonction `AfficherNiveauDiplome` de l'exercice 8 en utilisant `switch` au lieu de `if/else` ?

---

## EXERCICE 6 : FONCTION SIMPLE
**Crée une fonction nommée `Additionner` qui :**
- Prend deux entiers en paramètres (a, b)
- Retourne leur somme
- Appelle cette fonction avec les valeurs 10 et 20, puis 5 et 15
- Affiche les résultats

```csharp
static int Additionner(int a, int b)
{
    // À compléter
}

// Appel de la fonction
int resultat = Additionner(..., ...);
```

---

## EXERCICE 7 : FONCTION AVEC BOUCLE
**Crée une fonction `AfficherMultiples` qui :**
- Prend deux paramètres : `nombre` et `limite`
- Affiche les multiples du nombre jusqu'à limite (avec une boucle for)
- Exemple : AfficherMultiples(3, 5) affiche 3×1=3, 3×2=6, ..., 3×5=15

```csharp
static void AfficherMultiples(int nombre, int limite)
{
    // À compléter avec une boucle for
}
```

---

## EXERCICE 8 : FONCTION AVEC TABLEAU
**Crée une fonction `CalculerMoyenne` qui :**
- Prend un tableau d'entiers en paramètre
- Calcule la somme avec une boucle
- Retourne la moyenne (somme / nombre d'éléments)
- Appelle la fonction avec le tableau : {15, 18, 12, 19, 16}

```csharp
static double CalculerMoyenne(int[] tableau)
{
    // À compléter
}
```

---

## EXERCICE 9 : FONCTION AVEC CONDITIONS
**Crée une fonction `AfficherNiveauDiplome` qui :**
- Prend un entier `age` en paramètre
- Affiche le niveau d'études selon l'âge :
    - < 10 ans : "École primaire"
    - < 15 ans : "Collège"
    - < 18 ans : "Lycée"
    - >= 18 ans : "Université"
- Appelle la fonction avec différents âges (10, 16, 25)

```csharp
static void AfficherNiveauDiplome(int age)
{
    if (...) 
    {
        // À compléter
    }
}
```

---

## EXERCICE COMPLET : COMBINAISON DE TOUS LES CONCEPTS
**Crée une fonction `ExerciceComplet` qui :**

1. Déclare deux tableaux :
    - `prenoms` : {"Alice", "Bob", "Charlie", "Diana", "Eve"}
    - `ages` : {20, 25, 22, 28, 21}

2. Avec une boucle for, affiche pour chaque personne :
    - Son nom
    - Son âge
    - Son statut ("Adulte" si age >= 21, "Jeune" sinon)

3. Crée une fonction `TrouverMinimum` qui retourne l'âge minimum du tableau

4. Affiche : "L'âge le plus jeune est : X ans"

```csharp
static void ExerciceComplet()
{
    string[] prenoms = { "Alice", "Bob", "Charlie", "Diana", "Eve" };
    int[] ages = { 20, 25, 22, 28, 21 };
    
    // À compléter
}

static int TrouverMinimum(int[] tableau)
{
    // À compléter
}
```

---

---

## EXERCICE 11 : INTERACTION AVEC LA CONSOLE
**Crée un programme interactif qui :**

1. Demande à l'utilisateur son nom avec `Console.ReadLine()`
2. Demande son âge avec `Console.ReadLine()` et convertis-le en entier avec `Convert.ToInt32()` ou `Convert.ToInt16()`
3. Demande son animal préféré

Puis affiche un message personnalisé :
```
Bonjour [nom] ! Tu as [âge] ans et tu aimes les [animal].
```

**Astuce bonus :**
- `Console.ReadLine()` lit ce que l'utilisateur tape
- `int.Parse("25")` convertit une chaîne en entier
- Tu peux utiliser `Console.ForegroundColor = ConsoleColor.Green;` pour changer la couleur du texte
- `Console.Clear();` efface l'écran

```csharp
Console.WriteLine("Quel est ton nom ?");
string nom = Console.ReadLine();

Console.WriteLine("Quel est ton âge ?");
int age = Convert.ToInt32(Console.ReadLine());

// À compléter pour demander l'animal préféré

Console.WriteLine(...);
```

**Défi bonus :**
- Demande 3 nombres à l'utilisateur
- Calcule leur somme
- Affiche le résultat en couleur rouge

---

## CONSEILS
- Utilise `Console.WriteLine()` pour afficher du texte
- Utilise `$"Texte avec {variable}"` pour l'interpolation de chaîne
- N'oublie pas les accolades `{}` après if, for et les fonctions
- Une fonction `void` n'a pas besoin de `return`
- Une fonction qui retourne une valeur doit utiliser `return`

Bon courage ! 🚀