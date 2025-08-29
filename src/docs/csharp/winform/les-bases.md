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
## 1 - Création d’un projet.
{% figure-abs "images/winform/winform1.png" "le projet" "60%" "60%" %}

## 2 - la gestion de Form
{% figure-abs "images/winform/winform2a.png" "le projet" "100%" "100%" "Titre" %}

## 3 - Les principaux composants et règles de nommage.
Il existe de très nombreux composants fournis par l’IDE qui figurent dans la boîte à outils, et il existe de nombreux autres composants vendus ou fournis gratuitement par des prestataires sur le Web. 
Selon les besoins du développeur, les composants utilisés seront différents. Toutefois, on retrouve classiquement :
-	Bouton
-	Label
-	Zone de texte
-   Listbox ou ComboBox


Pour placer un composant sur un formulaire, il faut utiliser la technique classique glisser/déplacer. 

Par exemple, si on place un composant **Button** sur un formulaire, l’IDE le nomme **Button1** (propriété **Name** à ne pas confondre avec la propriété **Text** qui est le texte exposé par le composant).
Il faut, alors, impérativement renommer le bouton afin de lui donner un nom explicite.
La règle de nommage préconisé par toutes les communautés de développeur est la suivante :
{% callout %}
3 lettres caractéristiques du composant + 5-10 caractères explicatifs Pas de caractères accentués, uniquement lettres, 
chiffres, _ ou -
{% endcallout %}

{% bs-table %}

| Composant     | Abréviation |
|---------------|-------------|
| Bouton        | Btn         |
| Label         | Lbl         |
| Zone de texte | Txt         |
| Listbox       | Lst         |
| ComboBox      | Cmb         |
| RadioButton   | Rdo         |  
| etc.          | etc.        |

{% endbs-table %}
Plus de détails sur [gist](https://gist.github.com/andyyou/3052671)
{% callout %}
Exemples : BtnQuitter, BtnFin, BtnRecherche, BtnMiseAJor LblNom, LblAdresse, Lbl_Numero, TxtNom, TxtNomClient, TxtQuantite, LstClients
{% endcallout %}

## 4 - Accès à la propriété d’un composant en programmation.
Un composant accède toujours à une propriété à l’aide de l’opérateur : 

TxtNom.Text : la propriété Text du composant TxtNom

Certaines propriétés sont en lecture seule (elles ne peuvent pas être modifiées). 
Une propriété de composant se gère comme une variable :

```csharp
TxtNom.Text = "Bonjour";
```
## 5 - Utilisation du BindingSource.
{% callout %}
le BindingSource est une classe intermédiaire qui sert à lier des données à des contrôles d'interface utilisateur (notamment dans les applications Windows Forms). 

Il facilite la gestion des données, le tri, la navigation et la synchronisation entre la source de données (comme une liste ou une base de données) et les contrôles (comme DataGridView, ListBoc TextBox, etc.).
Il encapsule des données pour un formûlaire.
{% endcallout %}

### Exemple simple.
Imaginons que vous ayez une liste de clients que vous souhaitez afficher dans un DataGridView (**Client** est une classe simple avec nom et prenom).

```csharp
// Création  de la liste
List<Client> clients = new List<Client>()
{
    new Client { Nom = "Dupont", Age = 30 },
    new Client { Nom = "Martin", Age = 45 }
};

// Création du BindingSource
BindingSource bs = new BindingSource();

// Affectation de la liste aux clients
bs.DataSource = clients;

// Liaison au DataGridView
dataGridView1.DataSource = bs;

```
### Navigation dans les enregistrements
   BindingSource fournit des méthodes comme :

- MoveNext(), MovePrevious(), MoveFirst(), MoveLast()

- Position, Count


### Ajout Suppression Modification
**BindingSource** permet de gérer les ajouts/suppressions dans la collection. 
**ResetBindings** force le BindingSource à rafraîchir tous les contrôles liés à ses données, comme un DataGridView, des TextBox, etc.
```csharp
private void btnAjouter_Click(object sender, EventArgs e)
{
     if (!string.IsNullOrWhiteSpace(txtNom.Text) && int.TryParse(txtAge.Text, out int age))
     {
         var nouveau = new Client { Nom = txtNom.Text, Age = age };
         clients.Add(nouveau);     // Ajout dans la liste
         bs.ResetBindings(false);  // Rafraîchir la vue
         bs.Position = bs.Count - 1; // Aller à la fin
         txtNom.Clear(); // Effacer les champs de saisie
         txtAge.Clear();
     }
}
private void btnModifier_Click(object sender, EventArgs e)
{
        // la ligne est séléctionnée dans le DataGridView
        if (bs.Current is Client client)
                {
                    client.Nom = txtNom.Text;
                    if (int.TryParse(txtAge.Text, out int age))
                        client.Age = age;

                    bs.ResetCurrentItem(); // Mise à jour visuelle
                    txtNom.Clear(); // Effacer les champs de saisie
                    txtAge.Clear()
                }
}
private void btnSupprimerr_Click(object sender, EventArgs e)
{
        // la ligne est séléctionnée dans le DataGridView
        if (bs.Current is Client clientToRemove)
                {
                    clients.Remove(clientToRemove); // Supprime de la liste
                    bs.ResetBindings(false);        // Rafraîchir
                }
}
```

{% callout "warning" %}
Voici le code exemple sur [github](https://github.com/chchabin/WinBindingSource)
{% endcallout %}