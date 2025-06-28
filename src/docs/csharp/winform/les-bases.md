---
layout : "layouts/docs.njk"
title : "Les Bases"
description : ""
group : "winform"
section : "csharp"
toc : true
date : "2022-09-01T14:43:04+02:00"
draft : false
---
## 1 - Création d’un projet
{% figure-abs "images/winform/winform1.png" "le projet" "60%" "60%" %}

### a - la gestion de Form
{% figure-abs "images/winform/winform2a.png" "le projet" "100%" "100%" "Titre" %}

## b - Les principaux composants et règles de nommage
Il existe de très nombreux composants fournis par l’IDE qui figurent dans la boîte à outils. et il existe de nombreux autres
composants
vendus ou fournis gratuitement par des prestataires sur le Web. Selon les besoins du développeur, les composants utilisés 
seront différents. Toutefois, on retrouve classiquement :
-	Bouton
-	Label
-	Zone de texte
-   Listbox ou ComboBox


Pour placer un composant sur un formulaire, il faut utiliser la technique classique du glisser/déplacer. 

Par exemple, si on place un composant **Button** sur un formulaire, l’IDE le nomme **Button1** (propriété **Name** à ne pas confondre avec la propriété **Text** qui est le texte exposé par le composant).
Il faut alors impérativement renommer le bouton afin de lui donner un nom explicite.
La règle de nommage préconisé par toutes les communautés de développeur est la suivante :
{% callout %}
3 lettres caractéristiques du composant + 5-10 caractères explicatifs Pas de caractères accentués, uniquement lettres, 
chiffres, _ ou -
{% endcallout %}

{% bs-table %}

| Ccomposant    | Abréviation |
|---------------|-------------|
| Bouton        | Btn         |
| Label         | Lbl         |
| Zone de texte | Txt         |
| Listbox       | Lst         |
| ComboBox      | Cmb         |
| etc.          | etc.        |

{% endbs-table %}
Plus de détails sur [gist](https://gist.github.com/andyyou/3052671)
{% callout %}
Exemples : BtnQuitter, BtnFin, BtnRecherche, BtnMiseAJor LblNom, LblAdresse, Lbl_Numero, TxtNom, TxtNomClient, TxtQuantite, LstClients
{% endcallout %}

## c - Accès à la propriété d’un composant en programmation
Un composant accède toujours à une propriété à l’aide de l’opérateur . : 

TxtNom.Text : la propriété Text du composant TxtNom

Certaines propriétés sont en lecture seule (elles ne peuvent pas être modifiées). 
Une propriété de composant se gère comme une variable :

```csharp
TxtNom.Text = "Bonjour";
```
