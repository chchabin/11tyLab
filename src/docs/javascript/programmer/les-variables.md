---
layout : "layouts/docs.njk"
title : "Les Variables"
description : "Nous ne détaillerons pas les concepts, vous pouvez les retrouver dans la partie guide C# de ce site"
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T08:15:55+02:00"
draft : false
---

## 1 - Les variables
### a - La déclaration avec `var`
La déclaration, avec `var`, était la seule déclaration possible avec la norme ES5. Elle avait un inconvenient majeur, sa portée est globale. Elle peut donc être réaffectée sans contrôle dans tout le programme, ce qui est générateur de bugs ou de conflits !
### b - La déclaration avec `let`
Comme la déclaration const, que nous verrons infra, let à une portée qui ne dépasse pas le bloc.  
Mais avec `let` il est possible de réassigner la valeur de la variable.
```javascript
<script>
    let age=18;
    console.log(age);// affiche 18
    age=20;
    console.log(age);// affiche 20
</script>
```
### c - La déclaration avec `const`
Avec `const` il n'est pas possible de réassigner la valeur de la variable, c'est un moyen sécurisé de déclarer une variable.  
Voici une méthode d’utilisation qui affiche une erreur :
```javascript
<script>
    cont age=18;
    console.log(age);// affiche 18
    age=20;// affiche erreur
</script>
```
L’erreur affichée sera Type error : Assignment to constant variable. La déclaration `const` rend, comme en C#, 
le code très robuste, elle évite des affectations **sauvages** des variables.
## 2 - Les types
Il existe plusieurs types en javascript : string, numbers, boolean, nul, undefined, symbol.
{% bs-table %}

| Type       | Déclaration | Variable | Valeur    | typeof(Variable) |
|------------|-------------|----------|-----------|------------------|
| String     | const       | name     | ’Robert’  | string           |
| Number     | const       | age      | 30        | number           |
| Booléen    | const       | estVrai  | true      | boolean          |
| Null       | const       | x        | null      | object           |
| Non défini | const       | y        | undefined | undefined        |
| Non défini | let         | z        |           | undefined        |
| Array      | const       | tab      | [1,2,3]   | object           |
{% endbs-table %}

## 3 - La concaténation
La concaténation ne concerne que les types String. Il existe deux moyens de la coder.
### a - La concaténation classique
Il s’agit d’une méthode qui se retrouve dans tous les languages :
```javascript
<script>
    const name = ’toto’;
    const age=18;
    console.log(’Mon nom est ’ + name + ’, mon age est de ’ + age + ’ ans’);
    // affiche : Mon nom est toto, mon age est de 18 ans
</script>
```
### b - L’utilisation d’un masque
```javascript
<script>
    const name = ’toto’;
    const age=18;
    console.log(`Mon nom est ${name}, mon age est de ${age} ans`);
    // affiche : Mon nom est toto, mon age est de 18 ans
</script>
```
{% callout danger%}
#### Attention
Pour que cela fonctionne la chaine doit être entourée de backticks (touches `ALT GR + 7`) et pas de cotes (touche `4`)
{% endcallout %}
## 4 - les opérateurs
Voici les opérations de bases. Elles sont communes à tous les langages, avec quelques particularités.
{% bs-table %}

| Opération | Résultat           | 
|-----------|--------------------|
| 4 + 3     | 7                  | 
| 0.1 + 0.2 | 0.30000004         |
| 4 + '3'   | '43'               | 
| 3.4 + '3' | '3.43'             |
| 2 * 3     | 6                  |
| 2 * '2'   | 4                  |
| 2 * 'a'   | NaN (not a number) | 
{% endbs-table %}