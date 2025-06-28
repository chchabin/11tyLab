---
layout : "layouts/docs.njk"
title : "Transmission Script"
description : ""
group : "transmission"
section : "php"
toc : true
date : "2022-09-02T21:24:32+02:00"
draft : false
---
## 1 - Récupération des données d’un formulaire
Les formulaires sont le moyen le plus pratique pour le visiteur de transmettre des informations à un site. PHP est capable de récupérer les données saisies par vos visiteurs et de les traiter.

Cette nouvelle valeur `POST` de l’attribut de méthode indique au navigateur d’envoyer les variables de formulaire de manière invisible à la page demandée, plutôt que de les incorporer dans la chaîne de requête de l’URL.

À l’intérieur d’un formulaire, les balises HTML <input> permettent de définir des champs de saisie pour l’utilisateur.
{% callout danger%}
**N’oubliez pas l’attribut name**  
L’attribut name d’une balise `<input>` définit le nom de **la variable** qui contiendra la valeur saisie.  
**Il est essentiel dans le formulaire.**  
L’attribut `name` est une propriété qui se retrouve dans tous les éléments HTML d'un formulaire.
{% endcallout %}
```html
⋮
<label for="inputLogin">Entrez votre login :</label>
<input type="text" name="login" id="inputLogin" required>

<label for="inputMdp">Entrez votre mot de passe :</label>
<input type="password" name="password" id="inputMdp" required>
⋮
```
Lorsque l’utilisateur soumet un formulaire, la ressource identifiée par l’attribut `action` de la balise `<form>` reçoit 
les données du formulaire et peut les traiter.

Si le formulaire est soumis avec la méthode `POST`, les données envoyées via un formulaire sont ajoutées dans le corps 
de la requête HTTP et se retrouvent dans un tableau associatif nommé `$_POST` défini automatiquement par PHP.

- Les clés de ce tableau sont les noms des champs du formulaire (attributs `name` des balises `<input>` du formulaire).
- Les valeurs associées aux clés sont les données saisies par l’utilisateur dans chaque champ.
```php
⋮
$login = $_POST["login"];
$mdp = $_POST["password"]
⋮
```
La variable peut aussi être un tableau, ce qui est d’ailleurs plus utile pour la traiter. Le tableau est mon_champ dans l’exemple suivant :
```html
// ...
<label for="inputLogin">Entrez votre login :</label>
<input type="text" name="mon_champ[login]" id="inputLogin" required>

<label for="inputMdp">Entrez votre mot de passe :</label>
<input type="password" name="mon_champ[password]" id="inputMdp" required>
// ...
```
Dans ce cas, La récupération des valeurs se fera par l’intermédiaire d’un tableau à double entrée.
```php
//Autre exemple récupération des zones de saisie dans une variable tableau
$login = $_REQUEST['mon_champ']['login'];
$mdp = $_REQUEST['mon_champ']['password']
⋮
```
{% callout %}
**Le tableau `$_REQUEST`**  
Pour récupérer les valeurs envoyées par le formulaire, il n’est pas nécessaire de specifier la même méthode que celle d’envoi, c’est-à-dire `POST` ou `GET`.
Le tableau associatif `$_REQUEST` récupérera les valeurs qu’elles soient envoyées par les méthodes `POST` ou `GET`.
{% endcallout %}
{% callout %}
**Débogage avec var_dump**  
A des fins de débogage, on peut afficher le contenu de `$_POST` en ajoutant une instruction `var_dump($_POST)`.
{% endcallout %}
{% callout danger%}
**L’auto appel**  
Rien n’empêche une page PHP intégrant un formulaire d’être définie comme cible de ce formulaire par l’attribut `action` 
(on parle parfois de *page ré-entrante*). Dans ce cas, cette page doit être capable aussi bien d’afficher le formulaire 
que de traiter ses données. On fait la distinction en testant le contenu de la variable `$_POST`, le plus souvent en début de page.

**Attention** : cette methode **ne fait partie des bonnes pratiques**, nous verrons avec le pattern MVC comment la contourner.
```php
if(isset($_POST['login'] && isset($_POST['password']) {
// Le formulaire a été soumis : récupération des informations
    $login = $_POST["login"];
    $mdp = $_POST["password"]
    ⋮
else {
    // Le formulaire n’a pas été soumis
    ⋮
}
// Code commun aux deux situations
⋮
```
{% endcallout %}
## 2 - Récupération à partir d’un `checkbox`
Pour faire saisir une donnée n’ayant que deux valeurs possibles, on utilise une balise `<input type="checkbox" ...>`. 
L’attribut `checked`, s’il est présent, précise que la case est cochée par défaut.
```html
<input type="checkbox" name="familier" checked >
<input type="checkbox" name="litteraire">
```
Lors de la récupération des données du formulaire, on vérifie l’état de la case (cochée ou non) à l’aide de la fonction `isset`.
```php
if(isset($_POST['familier']) {
    // La case est cochée
else {
    // La case est décochée
}
```
## 3 - Récupération à partir d’un `radio`
Pour faire saisir un choix parmi plusieurs, on utilise des balises `<input type="radio" ...`> ayant la même valeur pour l’attribut `name`. On crée ainsi une série de boutons radios dont seul, un, pourra être sélectionné par l’utilisateur.
```html
<input type="radio" name="civilite" value="1" checked >Mademoiselle<br>
<input type="radio" name="civilite" value="2">Madame<br>
<input type="radio" name="civilite" value="3">Monsieur<br>
```
Lors de la récupération des données du formulaire, on examine la valeur du champ. Cette valeur correspond à l’attribut 
`value` du bouton sélectionné.
```php
$message = 'Bonjour, ';

switch ($_POST['civilite']) {
    case 1:
        $message = $message . ' Mademoiselle.';
        break;
    case 2:
        $message = $message . ' Madame.';
        break;
    case 3:
        $message = $message . ' Monsieur.';
        break;
```
## 4 - Récupération à partir d’un `select`
Une autre possibilité pour faire saisir un choix parmi plusieurs est de définir une liste déroulante grâce à une balise `<select>`. 
À l’intérieur de cette balise, on ajoute des choix possibles grâce à la balise `<option>`. L’attribut `size` de la balise `<select>` 
définit le nombre d’éléments affichés par la liste. L’élément sélectionné par défaut est indiqué par l’attribut `selected`.
```html
<select name="catpro" size="1">
    <option value="CP1" selected>Étudiant</option>
    <option value="CP2">Salarié</option>
    <option value="CP3">Cadre</option>
</select>
```
Lors de la récupération des données du formulaire, on examine la valeur du champ pour trouver l’élément qui a été sélectionné. 
Cette valeur correspond à l’attribut `value` de l’élément choisi.
```php
$codecat = $_POST["catpro"];

if($codecat == "CP1") $categorie = "Étudiant";

elseif($codecat == "CP2") $categorie = "Salarié";

elseif($codecat == "CP3") $categorie = "Cadre";
```
## 5 - Récupération à partir d’un `datalist`
Il s’agit d’une méthode allégée par rapport au `select`
```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />
<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```
En choisissant vanille, le `var_dump($_REQUEST)` retournera :
```php
array (size=1)
  'ice-cream-choice' => string 'Vanilla' (length=7)
```
## 6 - Envoi de fichiers avec `file`
Les formulaires permettent également d’envoyer des fichiers. Pour faire choisir un fichier, on utilise une balise `<input type="file" ... >`. 
Il faut aussi ajouter l’attribut `enctype="multipart/form-data"` à la balise `<form>`.
```html
<form enctype="multipart/form-data" action="login.php" method="post">
    ...
    <input type="file" name="image">
    ...
</form>
```
On retrouve les informations sur les fichiers envoyés dans un tableau associatif nommé `$_FILES`. Chaque fichier envoyé correspond à un élément de ce tableau et est lui-même un tableau associatif contenant les informations sur le fichier : nom, type, taille, etc.

Pour gérer le transfert du fichier vers le serveur, on utilise les fonctions PHP `is_uploaded_file`, `basename` et `move_uploaded_file`. 
Par exemple, le code suivant télécharge dans le répertoire `images/` du serveur le fichier choisi avec la balise `<input>` nommée `image`.
```php
$tmpFile = $_FILES [’image’][’tmp_name’];
if(is_uploaded_file($tmpFile)) {
    $image = basename($_FILES[’image’][’name’]);
    $uploadedFile = "images/$image";
    move_uploaded_file($_FILES[’image’][’tmp_name’], $uploadedFile);
}
```
## 7 - Aide à la saisie et validation `placeholder` et `required`
Deux attributs des balises de saisie permettent d’aider l’utilisateur du formulaire dans sa saisie :

- `autofocus` (booléen) place le curseur de saisie sur le champ au chargement du formulaire.
- `placeholder` définit le contenu par défaut du champ.
```html
<input type="email" name="courriel" placeholder="name@example.com">
```
Il est également possible de rendre un champ obligatoire grâce à l’attribut booléen `required`.
```html
<input type="email" name="courriel"  placeholder="name@example.com" required >
```
Malgré tout, la validation finale des valeurs saisies dans un formulaire doit toujours se faire aussi côté serveur (par exemple avec PHP) pour des raisons de sécurité.
## 8 - Types de champs de saisie (rappel HTML)
L’attribut `type` d’une balise `<input`> permet de préciser le type de donnée à saisir.

La norme HTML5 a apporté de nouveaux types de champs comme `email`, `number` ou `date`.
```html
<input type="email" name="courriel">
```
Les navigateurs modernes interprètent ce type pour :

- Améliorer l’expérience utilisateur pendant la saisie (exemple : un calendrier déroulant pour un champ de type `date`).
- Valider la saisie avant envoi de la requête au serveur (exemple : vérification de la présence d’un `@` pour un champ de type `email`).

Les principales balises sont :

- Pour faire saisir un texte court (une seule ligne), on utilise une balise `<input type="text" ...>`. 
On peut définir la valeur initiale du champ en ajout l’attribut value. L’attribut `size` permet de préciser la taille
(nombre de caractères) du champ de saisie. L’attribut `id` permet de l’associer à un label, un texte de presentation.
```html
<input type="text" name="prenom" value="Baptiste" id="inputLabel" size=20>
```
- Pour faire saisir un mot de passe, on utilise une balise `<input type="password" ...>`. Dans ce cas, le navigateur masque les caractères saisis par l’utilisateur.
```html
<input type="password" name="password" id="inputMdp" required>
```
- Pour faire saisir un texte plus long (plusieurs lignes), on utilise une balise `<textarea`>. La balise fermante `</textarea>` 
- est obligatoire et l’éventuelle valeur initiale est ajoutée entre les balises ouvrante et fermante. L’attribut `rows` est utilisé pour préciser le nombre de lignes de la zone de saisie.
```html
<textarea name="message" rows="6"></textarea>
```
{% callout %} 
**Plus d’information ?**  
Vous pouvez consulter la documentation complète de la balise <input> sur [cette page](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input).
{% endcallout %} 
