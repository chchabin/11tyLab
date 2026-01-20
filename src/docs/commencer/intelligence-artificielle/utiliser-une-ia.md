---
layout : "layouts/docs.njk"
title : "Utiliser Une IA"
description : "Les bases"
group : "intelligence-artificielle"
section : "commencer"
toc : true
date : "2025-01-19T07:14:48+02:00"
draft : false
---
# Maîtriser les Prompts avec une IA Générative en C#

## Objectifs pédagogiques

À la fin de ce TP, vous serez capable de :
- Comprendre les principes d'une bonne structuration de prompts
- Intégrer une API d'IA générative dans une application C#
- Appliquer différentes stratégies de prompts (zero-shot, few-shot, chain-of-thought)
- Gérer les réponses de l'IA et le traitement d'erreurs
- Documenter et tester vos prompts

---

## Partie 1 : Fondamentaux des Prompts (Théorie)

### 1.1 Qu'est-ce qu'un bon prompt ?

Un bon prompt est :
- **Clair et précis** : Évitez l'ambiguïté
- **Contextualisé** : Fournissez le contexte nécessaire
- **Structuré** : Organisez l'information logiquement
- **Concis** : Pas de contenu superflu

### 1.2 Techniques de prompting

**Zero-shot** : Demande directe sans exemple
Exemple :
```text
Génère une fonction Csharp qui calcule la factorielle d'un nombre
```

**Few-shot** : Avec un ou deux exemples
Exemple :
```text
Voici deux exemples de fonctions C# :
1. Addition(a, b) { return a + b; }
2. Multiplication(a, b) { return a * b; }
Génère une fonction Division(a, b) qui suit le même style
```

**Chain-of-thought** : Décomposition en étapes
Exemple :
```text
Pense étape par étape :
1. Vérifie les conditions d'erreur
2. Implémente la logique métier
3. Retourne le résultat
Écris une fonction qui valide une adresse email en C#
```

## Partie 3 : Exercices Pratiques

### Exercice 1 : Zero-Shot Basique

**Objectif** : Générer une fonction simple avec un prompt direct.

**Consigne** : Écrivez un prompt pour demander une fonction C# qui convertit les degrés Celsius en Fahrenheit.

```text
Écris une fonction C# nommée CelsiusToFahrenheit 
qui prend un double en paramètre et retourne le résultat en double.
Ajoute des commentaires XML pour la documentation.

```

### Exercice 2 : Few-Shot avec Cohérence de Style

**Objectif** : Générer du code cohérent avec des exemples fournis.

**Consigne** : Fournissez deux exemples de méthodes et demandez à l'IA d'en générer une troisième dans le même style.

```text
Voici deux méthodes C# pour valider des données :

Exemple 1 :
public bool IsValidEmail(string email)
{
    return email.Contains('@') && email.Contains('.');
}

Exemple 2 :
public bool IsValidPhone(string phone)
{
    return phone.Length >= 10 && phone.All(char.IsDigit);
}

En suivant exactement le même style et la même structure, 
écris une fonction IsValidPassword(string password) 
qui vérifie qu'un mot de passe contient au moins 8 caractères, 
une majuscule et un chiffre.

```


### Exercice 3 : Chain-of-Thought pour Logique Complexe

**Objectif** : Décomposer un problème complexe avec du raisonnement étape par étape.

**Consigne** : Écrivez un prompt qui demande à l'IA de penser avant d'implémenter.

```text
Réfléchis étape par étape avant de coder :

1. Vérifie les paramètres d'entrée
2. Gère les cas limites (nombres négatifs, zéro)
3. Implémente l'algorithme de manière efficace
4. Ajoute des commentaires explicatifs

Maintenant, écris une fonction C# qui calcule le nombre de Fibonacci 
à la position N, avec gestion d'erreur. 
Le paramètre N doit être entre 0 et 50.
```

### Exercice 4 : Prompt pour Documentation et Tests
Soit le prompt suivant :
```text
Fais un code C# pour calculer une réduction.
```

{% questions %}
🎯 Mission : Transformez ce prompt en demande professionnelle.

- Rôle : Expert .NET / C#.

- Contexte : Une application de e-commerce.

- Tâche : Créer une méthode CalculerRemise qui prend un montant et un pourcentage.

Contrainte : Utiliser le type decimal (pas double), lever une exception si le pourcentage est hors de [0-100].
{% endquestions %}


### Exercice 5 : Débogage logique (Gestion de stock)

Situation : Ce code est censé vérifier si on peut vendre une quantité, mais il y a un bug logique.

```csharp
public bool PeutVendre(int stock, int quantiteCommandee) {
    if (stock - quantiteCommandee < 0);
    {
        return false;
    }
    return true;
}

```
{% questions %}
🎯 Mission : Utilisez l'IA pour comprendre l'erreur sans lui demander de réécrire le code immédiatement. 

Demandez-lui : "Explique l'impact du point-virgule après le if et pourquoi ce code retourne toujours false."
{% endquestions %}


## Exercice 6 : Comparaison de prompts

Testez ces trois versions et comparez les résultats :

**Version 1 (Imprécise)** :
```text
Fais une fonction de tri
```

**Version 2 (Précise)** :
```text
Écris une fonction C# public static List<int> SortNumbers(List<int> numbers) 
qui trie une liste d'entiers en ordre croissant en utilisant l'algorithme bubble sort. 
Ajoute des commentaires pour chaque étape.
```

**Version 3 (Optimisée)** :
```text
Écris une fonction C# public static List<int> BubbleSort(List<int> numbers) 
qui trie une liste d'entiers en ordre croissant avec ces critères :
- Algorithme : Bubble Sort
- Type de retour : List<int>
- Validation : Vérifier que la liste n'est pas null
- Documentation : Commentaires XML
- Complexité : O(n²)
```
{% questions %}
**Analyse** : Quel prompt génère le meilleur code ? 

Pourquoi ?
{% endquestions %}


## Exercice 7 : Refactoring (Qualité de code)
Situation : Ce code "fonctionne" mais ne respecte pas les standards C#.

```csharp

public class p {
    public List<string> n = new List<string>();
    public void add(string s) {
        n.Add(s);
    }
}
```
{% questions %}
🎯 Mission : Rédigez un prompt pour :

- Utiliser les conventions de nommage PascalCase.

- Encapsuler la liste (utiliser une propriété ou ReadOnlyCollection).

- Ajouter des commentaires XML (///).
  {% endquestions %}


