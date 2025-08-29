---
layout : "layouts/docs.njk"
title : "Gestion Pizzas"
description : "Gestion des pizzas"
group : "winform"
section : "csharp"
toc : true
date : "2022-09-01T14:43:04+02:00"
draft : false
---
## Le modèle
{% figure-abs "images/winform/pizzadiagram.png" "pizzadiagram" "100%" "100%" %}

## Les classes
### a - Classe Pizza

{% questions %}
1. Modifier la classe pour prendre en compte du prix de la pizza
{% endquestions %}

### Classe Commande
{% questions %}
1. Créez la méthode `getNumCommande` qui renvoie le numéro de commande
2. Créez la méthode `AjouterNouvellePizza` qui prend en paramètres tous ceux du
   constructeur `Pizza` et qui ajoute la pizza à `mesPizzas`
3. Récrivez la methode `ToString` pour afficher :
   - le nom du client
   - le numéro de commande
   - la date de commande
   - la liste des pizzas commandées et de leur quantité, avec un saut de ligne aprés chaque pizza
      {% endquestions %}

### Classe Gestion
{% questions %}
1. Modifiez le constructeur.
2. Créez la méthode `AjouterClient` qui prend en paramètres tous ceux du constructeur `Client` et qui crée un objet client.
     L’ajouter à la collection mesClients
3. Créez la méthode `AjouterPizza` qui prend en paramètres tous ceux du constructeur `Pizza`, créez l’objet `Pizza` et l’ajouter à la collection `mesPizzas`.
4. Créez la méthode `GetListClient` qui renvoie la liste `mesClients`.
5. Créez la méthode `GetListPizza` qui renvoie la liste `mesPizzas`.
6. Créez la méthode `GetClient` qui renvoie l’objet `Client` avec en paramètre le nom du client
7. Créez la méthode `GetPrix` qui renvoie le prix d’une pizza en fonction de son nom
8. Créez la méthode `GetPizza` qui renvoie un objet `Pizza` en fonction de son nom
9. Créez la méthode `AfficherCommande` qui renvoie les détails de la commande
    {% endquestions %}

## Formulaires
### Formulaire Menu
{% figure-abs "images/winform/pizzamenustrip.png" "pizzamenustrip" "50%" "50%" %}

Le formulaire `Menu` est fourni dans le fichier, il se compose d'un menuStrip dont tous les liens sont correctement paramétrés.
### Formulaire FrmAjouterPizza 
{% figure-abs "images/winform/pizzaajouterpizza.png" "pizzaajouterpizza" "50%" "50%" %}
Le formulaire `FrmAjouterPizza` est fourni dans le fichier, les noms des objets sont détaillés dans l'image.

### Formulaire FrmAjouterClient 
{% figure-abs "images/winform/pizzaajouterclient.png" "pizzaajouterclient" "50%" "50%" %}

Le formulaire `FrmAjouterClient` est fourni dans le fichier, mais il est vide. Il faudra le construire en fonction des noms des objets sont détaillés dans l'image.
Le nom des objets correspond aux paramètres du constructeur `Client`.


### Formulaire FrmCommander 
{% figure-abs "images/winform/pizzacommander.png" "pizzacommander" "50%" "50%" %}

Le formulaire `FrmCommander` est fourni dans le fichier, mais il est vide. Il faudra le construire en fonction des noms des objets sont détaillés dans l'image.

{% questions %}
1. Créez le menu toolstrip et les 3 boutons à partir des icônes
   - icône 1 : Nouveau
   - icône 2 : Supprimer les commandes
   - icône 3 : A propos
2. Créez la méthode raz :
   {% endquestions %}
```csharp
private void raz()
{
cmbPizza.SelectedIndex = -1;
nudPizza.Value = 0;
lstCommClt.Items.Clear();
lblMtPizza.Text = "0.00";
}
```
{% questions %}
3. Pour l'icône `nouveau`, utilisez ce code :
   {% endquestions %}
```csharp
// Effacer les contrôles du groupe client
foreach (Control control in this.grbClients.Controls)
{
    if (control is TextBox textBox)
    {
        textBox.Clear();
    }
    if (control is CheckBox checkBox)
    {
        checkBox.Checked = false;
    }

}
// Réinitialiser la sélection client
cmbNom.SelectedIndex = -1;
clt = null;

// Réinitialiser le reste
raz();
```
{% questions %}
3. Pour l'icône `Supprimer`, appelez la fonction raz.
4. Pour l'icône `A propos`, affichez `ma première version`.
   {% endquestions %}
#### La Partie client
{% questions %}
1. Avec l'évènement `Load` charger le combobox client.
2. Avec l'évènement `SelectedIndexChanged` remplissez les champs correspondant
   {% endquestions %}
#### La partie Pizza
{% questions %}
1. Avec l'évènement `Load` charger le combobox pizza.
2. Le click sur le bouton `Ajouter` rempli la liste `lstCommClt`
   {% endquestions %}
### Commander
{% questions %}
1. Le click sur le bouton `Commander` rempli la liste de l'Objet `Gestion`
2. le click gère aussi l'affichage de la commande dans un `MessageBox`
   {% endquestions %}