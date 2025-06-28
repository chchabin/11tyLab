---
layout : "layouts/docs.njk"
title : "Exercices Simples"
description : "Les WINFORM"
group : "winform"
section : "csharp"
toc : true
date : "2022-09-01T14:43:04+02:00"
draft : false
---
## Exercice 1 : Une première application

### a - Réalisation de l'interface

Nous allons réaliser une petite application de gestion d'une liste déroulante. L'utilisateur peut ajouter et supprimer des items à la liste.

{% figure-abs "images/winform/exercices-simples1.png" "exercices-simples1" "50%" "50%" %}

- Lancez VS (Visual Studio) et créez un nouveau projet. Nommez-le **WinFiche1** et enregistrez-le dans votre répertoire. 
    Le premier formulaire de l'application est créé automatiquement. Renommez le **FrmPrincipal** (propriété **name**)

- Il vaut mieux nommer les composants dès leur création... Ne confondez pas les propriétés **Text** et **Name** !!!

- Attention ne touchez pas au code généré par VS, vous risquez de tout casser!!!!!!!

{% questions %}

1. Ajouter un composant **ListBox**, éditez les propriétés de la liste créée à l'aide de la fenêtre des propriétés et nommez-la **lstListe**. Demandez une liste triée.

2. Ajoutez un composant **TextBox** et nommez-le **txtSaisie**.

3. Ajoutez deux composants **Button**, nommez-les **btnAjouter** et **btnSupprimer**, changez le texte des boutons et faites du bouton **btnAjout** le bouton par défaut (il s'agit d'une propriété du
  formulaire).

4. Ajoutez un composant **Label** dont la propriété text sera **Une liste déroulante** et la police fonte Ms Sans sérif 14 gras.

5. Indiquez le texte de la barre de titre de la fenêtre : **Premier programme** (propriété **Text** du formulaire). 
6. Testez votre interface en cliquant sur le bouton **Démarrer** de la barre d'outils. Il existe plusieurs méthodes :
    - Par le menu déboguer :
    
    - Par le bouton de raccourci :
    
    - Par la touche F5
{% endquestions %}
  
### b - Ajout du code

 *Bouton **Ajouter***

Faire un double click sur le bouton pour éditer la méthode correspondant à un clic sur ce bouton de commande (Evénement Click du bouton). Complétez-la avec le code suivant :
```csharp
private void btnAjout_Click(object sender, System.EventArgs e)
{
    lstListe.Items.Add(txtSaisie.Text); 
    txtSaisie.Text=""; // ou txtSaisie.Clear() ; txtSaisie.Focus();
}
```
En appuyant sur F1 après avoir sélectionné un élément du formulaire, on obtient une aide sur le composant concerné. N'hésitez pas à parcourir cette aide en ligne :)

*Bouton **Supprimer***

Voici le code correspondant à un clic sur ce bouton (n'oubliez pas de consulter l'aide et d'examiner attentivement)...
```csharp
private void btnsupprimer_Click(object sender, System.EventArgs e)
{
    lstListe.Items. RemoveAt(lstListe.SelectedIndex);
}
```

*Messages d'erreur*

Vous allez ajouter un message d'erreur dans le cas où l'utilisateur clique sur **Ajouter** avec une zone de saisie vide et un autre dans le cas où il clique sur **Supprimer** sans item sélectionné dans la liste. Utilisez pour cela la classe **MessageBox**, consultez l'aide...

### c - Dernières retouches

Mettez au point les derniers petits détails avec la gestion des évènements : 

*focus au lancement*
Allez chercher l'évènement **Load** du formulaire, clicker et saisir le code suivant :
```csharp
private void FrmPrincipal_Load(object sender, EventArgs e)
{
    this.WindowState = FormWindowState.Normal; 
    this.txtSaisie.Focus();
}
```
*Le bouton **Quitter***
Ajoutez un bouton Quitter, **btnQuitter**. Quand vous choisissez un des composants (ici **BtnQuitter**), vous obtenez la liste des évènements sur lesquels vous pourrez programmer la réaction de votre application.
Dans l'exemple, c'est l'évènement **Click** qui est choisi.

{% figure-abs "images/winform/exercices-simples2.png" "exercices-simples2" "50%" "50%" %}

L'IDE vous propose alors une structure vous permettant de programmer votre application :
```csharp
private void btnQuitter_Click(object sender, EventArgs (e)
{
    Application.Exit();
}
```
Ici, on quittera l'application pour fermer une seule feuille, on utilisera la méthode **Close()**.

La structure se compose ainsi :

- **Private** : la structure est liée au formulaire FrmPrincipal et
  uniquement ce formulaire,

- **void** : la structure proposée est une procédure,

- **btnQuitter_Click** : nom de la procédure,

- **object sender**: objet avec lequel la procédure est appelée ici **btnQuitter**,

- **EventArgs e**: c'est l'évènement sur BtnQuitter qui déclenchera la procédure. 
 
Testez...
## Résultat
{% figure-abs "images/gif/premierProgramme.gif" "premierProgramme" "50%" "50%" %}

## Exercice 2:
Nous allons réaliser une petite calculatrice.

- Créez un nouveau projet. Nommez-le **Fiche2**, n'oubliez pas de définir votre projet en tant que projet de démarrage (le nom du projet doit être en gras)
  Le premier formulaire de l'application est créé automatiquement. Renommez le **FrmCalculs** (propriété **name**)

  {% figure-abs "images/winform/exercices-simples4.png" "exercices-simples4" "50%" "50%" "" %}

{% questions %}
1. Créer l'interface ci-dessus avec deux zones de texte pour la saisie et une zone label pour le résultat et deux boutons.
2. Faire en sorte que l'ouverture du formulaire se fasse sur le premier champs

3. Modifier les noms des contrôle texte(**txtNb1** et **txtNb2**) du résultat (**lblResult**).

4. Le bouton ajouter doit :
      - Vérifier que les 2 nombres saisis ne sont pas blancs, prendre soin de saisir du float (virgule) ou un entier (cf. à la fin).
   *Un message sera affiché par MessageBox si un champ n'est pas renseigné ou n'est pas numérique.*
      - Le bouton **Effacer** remet à blanc les 2 champs texte et le label résultat.
      - Le programme doit calculer la somme des deux nombres, écrire le code correspondant pour chaque bouton.

5. Tester votre application.

{% endquestions %}

### Résultat
{% figure-abs "images/gif/calculatriceSimple.gif" "calculatriceSimple" "50%" "50%" %}

## Exercice 3:

- Créez un nouveau projet. Nommez-le **Fiche3**, n'oubliez pas de définir votre projet en tant que projet de démarrage (le nom du projet doit être en gras)
- Copiez-collez le formulaire precédent,
  - dans la partie code changer le nom du namespace en **Fiche3**
  - dans la partie **FrmCalculs.Designer.cs** changer le nom du namespace en **Fiche3**
- Adaptez le code bouton **Ajouter**.

{% questions %}
1. Écrire une classe **Calcul** qui comporte en données privées deux nombres et des méthodes publiques pour :
    - ajouter les nombres,
    - multiplier les nombres,
    - diviser,
    - soustraire.
    
2. Tester en instanciant la classe et en l'utilisant dans le code du bouton **Ajouter**.

{% endquestions %}

## Exercice 4
Nous allons réaliser une calculatrice plus avancée.

- Créez un nouveau projet. Nommez-le **Fiche4**, n'oubliez pas de définir votre projet en tant que projet de démarrage (le nom du projet doit être en gras)
- Copiez-collez le formulaire precédent,
    - dans la partie code changer le nom du namespace en **Fiche4**
    - dans la partie **FrmCalculs.Designer.cs** changer le nom du namespace en **Fiche4**
- Utilisez la class **Calcul**

  {% figure-abs "images/winform/exercices-simples6.png" "exercices-simples5" "50%" "50%" %}

{% questions %}

1. Modifier l'interface pour obtenir l'écran ci-dessus. (Utiliser un contrôle **groupBox** pour contenir les **radio button**),

2. En cliquant sur le bouton **Calculer**, on doit avoir le résultat approprié selon la case option sélectionné. (propriété **checked**),

3. Programmer le bouton **Effacer**,
4. Programmer le bouton **Quitter**,

5. Testez votre application.

{% endquestions %}   

### Résultat
{% figure-abs "images/gif/calculatriceAvancee.gif" "calculatriceAvancee" "50%" "50%" %}

## Exercice 5

Il s'agit de réaliser une application gérant deux listes déroulantes dont l'interface est la suivante :

{% figure-abs "images/winform/exercices-simples6.jpg" "exercices-simples6" "50%" "50%" %}

- Les boutons **+** et **-** permettent d'ajouter et de supprimer des éléments aux listes déroulantes.

- Le bouton **>>** fait passer l'élément sélectionné dans la liste de gauche vers la liste de droite.

- Le bouton **<<** a l'effet inverse.

- Le bouton **Quitter** permet de quitter l'application après une demande de confirmation.

*Quelques indications utiles*
- Ajoutez un nouveau projet Winform **Fiche5**, n’oubliez pas de définir votre projet en tant que projet de démarrage (le nom du projet doit être en gras)
- Le premier formulaire de l'application est créé automatiquement. Renommez le **FrmListes** (propriété **name**)
{% questions %}

1. Donnez au Formulaire le nom **Deux listes**
2. Réalisez l'interface en prenant soin de respecter les règles de nommage ex: txtSaisie1, lst1, btnPlus1...

3. Réalisez le code associé aux boutons **+** et **-** qui ajoute le texte saisi dans la liste ou retire le texte sélectionné de la liste. Testez !

4. Réalisez le code des boutons **<<** et **>>** qui fait passer d'une liste à l'autre les éléments sélectionnés.

- Il est possible de définir des méthodes (fonctions) personnelles dans le code d'un formulaire.
  Créer une fonction ajoutant le contenu d'une zone d'édition à une zone de liste et utilisez-la dans le code.
  De même pour le passage d'une liste à l'autre.

{% endquestions %}

## Exercice 6
{% figure-abs "images/winform/exercices-simples7.png" "exercices-simples7" "50%" "50%" %}

1.  Créer un nouveau projet **TpWin4** et créer les interfaces suivantes : **frmSaisie** et **frmListe**

2.  **Dans le projet:**, ajouter une classe Client (nom, prénom, cp, ville) créer le
    constructeur, la méthode **ToString,** etc.

3.  **frmsaisie:**, déclarer en début de la classe une collection de type Client dans lequel on va ajouter les clients
    ```csharp
    static public List<Client>
    mesClients = new List<Client>();
    ``` 
4. Le click sur le bouton **Ajouter** permettra d'ajouter un client à la collection. les données saisies seront ensuite effacées.

5.  **Lister** affichera le deuxième formulaire.

6.  **frmListe**, **Afficher** du deuxième formulaire permettra d'afficher la liste à partir de la collection. 
    Pour utiliser la liste créee dans **frmSaisie**, il faut la préfixer par **frmSaisie**.

7. Les boutons **Quitter** et **Fermer** permettent de quitter l'application.

8. Testez votre application


