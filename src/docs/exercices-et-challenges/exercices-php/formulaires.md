---
layout : "layouts/docs.njk"
title : "Formulaires"
description : ""
group : "exercices-php"
section : "exercices-et-challenges"
toc : true
date : "2022-08-25T23:08:51+02:00"
draft : false
---
### 1 - l’envoi de requêtes
Voici du code HTML sans mise en forme css
{% col-n %}
#### Version 1

```html
<form action="action_page.php">
 <label for="log">Login:</label>
 <input type="text" id="log" value="tonton">
 <label for="mdp">mot de passe:</label>
 <input type="password" id="mdp" name="mdp" value="">
 <input type="submit" value="Submit">
</form>
```
<--->
#### Version 2
```html
<form method="post" action="action_page.php">
  <label for="log">Login:</label>
  <input type="text" id="log" name="log" value="">
  <label for="mdp">mot de passe:</label>
  <input type="text" id="mdp" name="mdp" value="">
  <input type="submit" value="Submit">
</form>
```
{% endcol-n %}
**Complétez le tableau d’analyse suivant :**
{% bs-table %}

|                                                                           | **Version 1** | **Version 2** | **Aucune Version** |
|---------------------------------------------------------------------------|:-------------:|:-------------:|:------------------:|
| L’envoi des données se fait via l’URL                                     |       ☐       |       ☐       |         ☐          |
| L’envoi des données ne se fait pas via l’URL                              |       ☐       |       ☐       |         ☐          |
| La saisie du mot de passe est visible                                     |       ☐       |       ☐       |         ☐          |
| Un des champs contient déjà une valeur                                    |       ☐       |       ☐       |         ☐          |
| Toutes les valeurs saisies se retrouvent dans le fichier action\_page.php |       ☐       |       ☐       |         ☐          |
{% endbs-table %}
### 2 - la Récupération des données
Voici le code d’un formulaire :

```html
 <form method="get" action="action_page.php">
  <label for="label">Nom:</label>
  <input type="text" id="label" name="nom">
  <label for="prenom">Prénom:</label>
  <input type="text" id="mdp" name="prenom">
  <input type="submit" value="Submit">
 </form>
```

Quelle(s) ligne(s) de code écrire dans la page action\_page.php ?
```php
☐  <p>Bonjour, <?php echo $\_GET[’prenom’]." ".$\_GET[’nom’]; ?>.</p> 
☐  <p>Bonjour, <?php echo $\_GET[’prenom’]." ".$\_GET[’label’]; ?>.</p>  
☐  <p>Bonjour, <?php echo $\_POST[’prenom’]." ".$\_GET[’nom’]; ?>.</p>  
☐  <p>Bonjour, <?php echo $\_POST[’prenom’]." ".$\_POST[’label’]; ?>.</p>  
☐  <p>Bonjour, <?php echo $\_REQUEST[’prenom’]." ".$\_REQUEST[’nom’]; ?>.</p>
```
### 3 - le formulaire appelle un formulaire
Voici le code d’un formulaire `form2` :
```html
 <form method="get" action="action_page.php?age=<?php echo $_GET[’age’]?>">
  <label for="label">Nom:</label>
  <input type="text" id="label" name="nom">
  <label for="prenom">Prénom:</label>
  <input type="text" id="mdp" name="prenom">
  <input type="submit" value="Submit">
 </form>
```
Quel est le formulaire qui fait l’appel de `form2`

{% col-n %}
#### Version 1

```html
<form action="form2.php">
    <label for="age">Age:</label>
    <input type="text" id="age" name="age">
    <input type="submit" value="Submit">
</form>
```
<--->
#### Version 2
```html
<form method="get" action="form2.html">
    <label for="age">Age:</label>
    <input type="text" id="age" name="age">
    <input type="submit" value="Submit">
</form>
```
{% endcol-n %}
☐ Version 1  
☐ Version 2  
### 4 - formulaire origine
Soit le code de la page `recup.php`
```php
<p>Bonjour, <?php echo $\_POST[’login’]." votre mot de passe est ".$\_POST[’mdp’]; ?>.</p>
```
Quelle version choisir pour afficher ce résultat ?
{% col-n %}
#### Version 1

```html
<form method="post" action="recup.php">
    <label for="log">Login:</label>
    <input type="text" id="log"  name="login">
    <label for="mdp">mot de passe:</label>
    <input type="password" id="mdp" name="mdp">
    <input type="submit" value="Submit">
</form>
```
<--->
#### Version 2
```html
<form method="post" action="recup.php">
    <label for="log">Login:</label>
    <input type="text" id="log" name="log">
    <label for="mdp">mot de passe:</label>
    <input type="text" id="mdp" name="mdp">
    <input type="submit" value="Submit">
</form>
```
{% endcol-n %}

☐ Version 1  
☐ Version 2  
### 5 - la liste déroulante
Voici un tableau des pays de la zone euro :[](#index3)

{% bt-collapse "notes0" %}
```php
$tabPays=array(
    ’de’ => ’Allemagne’,
    ’at’ => ’Autriche’,
    ’be’ => ’Belgique’,
    ’cy’ => ’Chypre’,
    ’es’ => ’Espagne’,
    ’ee’ => ’Estonie’,
    ’fi’ => ’Finlande’,
    ’fr’ => ’France’,
    ’gr’ => ’Grèce’,
    ’it’ => ’Italie’,
    ’ie’ => ’Irlande’,
    ’lv’ => ’Lettonie’,
    ’lt’ => ’Lituanie’,
    ’lu’ => ’Luxembourg’,
    ’mt’ => ’Malte’,
    ’nl’ => ’Nederland’,
    ’pt’ => ’Portugal’,
    ’sk’ => ’Slovaquie’,
    ’si’ => ’Slovénie’
    );
```
{% endbt-collapse %}
{% col-n %}
#### Version 1

```php
<input type="select" name="langue">
<nom>langue</nom>
<libellé>
    Quelle est pays choisissez vous ?
</libellé>
<?php foreach($tabPays): ?>
<option valeur="<?= $tabPays[’langue’] ?>">
    <?= $pays ?>
</option>
<?php endforeach; ?>
</input>
```
<--->
#### Version 2
```php
<input type="select">
<nom>langue</nom>
<libellé>
    Quelle est pays choisissez vous ?
</libellé>
<?php foreach($tabPays as $k => $v): ?>
<option valeur="<?= $k ?>" name="langue">
    <?= $v ?>
</option>
<?php endforeach; ?>
</input>
```
{% endcol-n %}
**Quelle version choisir pour afficher ce tableau dans une zone de liste d’un formulaire ?**  
☐ Version 1  
☐ Version 2  
**Dans quelle version, serait-il possible de récupérer la valeur choisie ?**  
☐ Version 1  
☐ Version 2  
**Quelle sera le nom récupéré par le tableau $\_REQUEST ?**  
☐ $tabPays[’langue’]
☐ $tabPays[$k]
☐ langue
### 6 - les cases à cocher
Voici un tableau des pays de la zone euro :[](#index4)

{% bt-collapse "notes1" %}

```php
$tabPays=array(
    ’de’ => ’Allemagne’,
    ’at’ => ’Autriche’,
    ’be’ => ’Belgique’,
    ’cy’ => ’Chypre’,
    ’es’ => ’Espagne’,
    ’ee’ => ’Estonie’,
    ’fi’ => ’Finlande’,
    ’fr’ => ’France’,
    ’gr’ => ’Grèce’,
    ’it’ => ’Italie’,
    ’ie’ => ’Irlande’,
    ’lv’ => ’Lettonie’,
    ’lt’ => ’Lituanie’,
    ’lu’ => ’Luxembourg’,
    ’mt’ => ’Malte’,
    ’nl’ => ’Nederland’,
    ’pt’ => ’Portugal’,
    ’sk’ => ’Slovaquie’,
    ’si’ => ’Slovénie’
    );
```
{% endbt-collapse %}
{% col-n %}
#### Version 1

```php
<libellé>
        Quelle est pays choisissez vous ?
</libellé>
<?php foreach($tabPays as $v): ?>
   <input type="hidden" value="0">
   <input type="checkbox" name="mon_pays"
                id="<?= $v;?>">
   <label for="<?= $v; ?>">
       <?php echo $v ?>
   </label>
   <br>
<?php endforeach; ?>
```
<--->
#### Version 2
```php
<libellé>
        Quelle est pays choisissez vous ?
</libellé>
<?php foreach($tabPays as $k => $v): ?>
   <input type="hidden" value="0">
   <input type="checkbox" name="mon_pays[]"
                id="<?= $k;?>">
   <label for="<?= $k; ?>">
       <?php echo $v ?>
   </label>
   <br>
<?php endforeach; ?>
```
{% endcol-n %}
**Quelle version choisir pour afficher ce tableau avec une case à cocher devant chaque nom de pays ?**  
☐ Version 1  
☐ Version 2  
**Dans quelle version, serait-il possible de choisir plusieurs valeurs ?**  
☐ Version 1  
☐ Version 2  
**Quelle sera le nom récupéré par le tableau $\_REQUEST ?**  
☐ $tabPays[$v]  
☐ $tabPays[$k]  
☐ mon\_pays  
☐ mon\_pays = array(...)
{% callout %}
#### **Défi**
Cochez des pays et relancer le formulaire avec les pays choisis, déjà cochés.
{% endcallout %}
