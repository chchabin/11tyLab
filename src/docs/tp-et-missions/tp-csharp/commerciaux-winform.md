---
layout : "layouts/docs.njk"
title : "Commerciaux Winform"
group : "tp-csharp"
section : "tp-et-missions"
toc : true
date : "2024-10-18T11:34:50+02:00"
draft : false
---
{% callout %}
### BLOC 2
2.1.2 Modéliser une solution applicative  
2.1.3 Utiliser des composants d’accès aux données  
2.1.5 Réaliser des tests nécessaires à la validation ou à la mise en production
{% endcallout %}

Vous disposez d’un début d’application ; les données sont déjà présentes dans un fichier sérialisé.
Vous devez fournir une version graphique de l'application grâce aux objets WinForm de Visual Studio.
## Missions
## 1 - Créer un Menu et un container MDI
{% questions %}
1. Ajoutez la DLL au projet
2. Renommer `Form1` en `Menu`
3. Ajouter en menu principal `Fichier` et `Commercial`
4. Ajouter en sous menu de `Fichier` : `Ouvrir`, `Enregistrer`
5. Ajouter en sous menu de `Commercial` : `Nouveau`, `Nouvelle note de frais`, `Visualiser Notes`
   {% endquestions %}

**Résultat attendu :**
{% figure-abs "images/exercices-et-challenges/cas/wfcommerciaux01.png" "wfcommerciaux01" "100%" "100%" %}

Nous allons nous intéresser à présent à une autre façon de gérer les multi fenêtres, il s’agit des MDI
{% callout %}
6. Ajoutez un container MDI en mettant, dans la fenêtre du menu, la propriété `IsMdiContainer` à True
   {% endcallout %}

**Résultat attendu :**
{% figure-abs "images/exercices-et-challenges/cas/wfcommerciaux03.png" "wfcommerciaux03" "100%" "100%" %}

**Résultat pour le WinForm :**
{% figure-abs "images/exercices-et-challenges/cas/wfcommerciaux02.png" "wfcommerciaux02" "100%" "100%" %}

**Ajouter les sous menus**
{% figure-abs "images/winform/winformMenu.png" "winformMenu.png" "100%" "100%" %}

**Ajouter le code**
1. Afficher le code du formulaire et ajouter le code suivant dans la classe.
```csharp
private ServiceCommercial leService;
private string nomFichier;
```
2. Double clicker sur le sous menu ouvrir et copier ce code
```csharp
try
 {
    OpenFileDialog openFileDialog1 = new OpenFileDialog();
    openFileDialog1.ShowDialog();
    nomFichier = openFileDialog1.FileName;// contient le chemin
    this.leService = PersisteCommercial.Charge(nomFichier);
  }
 catch (Exception ex)
 {
     MessageBox.Show(ex.Message);
 }
```
2. Double clicker sur le sous menu `enregistrer` et copier ce code
```csharp
 try
 {
     PersisteServiceCommercial.Sauve(this.leService, nomFichier);
 }
 catch (Exception ex)
 {
     MessageBox.Show(ex.Message);
 }
```
## 2 - Ajouter le formulaire FrmAjoutCommercial
**cas d’utilisation**
{% bs-table %}

| **Cas** | **Cas d’utilisation ajout commercial**                                                                 |
|---------|--------------------------------------------------------------------------------------------------------|
| 1       | L’utilisateur demande l’ajout d’un commercial                                                          |
| 2       | Le système retourne le formulaire correspondant                                                        |
| 3       | L’utilisateur sélectionne une puissance parmi les puissances de la liste  et une catégorie de véhicule |
| 4       | Le système enregistre ce nouveau commercial                                                            |

{% endbs-table %}
### a- création du formulaire
{% questions %}
1. Créez les formulaires `FrmAjoutCommercial `
2. Ajouter les objets à `FrmAjoutCommercial` selon le schéma suivant. Nommez-les en fonction de leur type, par exemple `lblNom` pour le label nom et
   `txtNom` pour la zone de text ou encore `btnValider` pour le bouton valider.

   {% endquestions %}

**Résultat attendu `FrmAjoutCommercial` :**
{% figure-abs "images/winform/wfcom01.png" "wfcom01" "100%" "100%" %}
### b- ajout du code dans le formulaire
**Pour lier le formulaire au menu**
{% questions %}
1. Ouvrir le formulaire `Menu`
2. Double clicker sur le Menu Nouveau
3. Résultat attendu
   {% endquestions %}
```csharp
FrmAjoutCommercial f = new FrmAjoutCommercial(leService);
f.MdiParent = this;
f.Show();
```
{% questions %}
1. Double clicker sur le sous menu correspondant
2. Modifier le code ci dessous
3. Tester l'ouverture du formulaire
{% endquestions %}
**Résultat attendu**
```csharp
 private ServiceCommercial leService;
 public FrmAjoutCommercial(ServiceCommercial leService)
 {
      InitializeComponent();
      this.leService = leService;
 }
```
**Le formulaire doit s’ouvrir avec la listBox chargé avec les numéros de puissances**
{% questions %}
1. Lancer l'évènement Load
2. Résultat attendu
{% endquestions %}
```csharp
for (int i = 5; i < 25; i++)
this.lstPuissance.Items.Add(i);
```
**Pour enregistrer ce nouveau commercial, on écrit le code dans l’événement click du bouton :**
{% questions %}
1. Double clicker sur le bouton Valider
2. Résultat attendu
{% endquestions %}
```csharp
int puissance = Convert.ToInt32(this.lstPuissance.SelectedItem.ToString());
char c = 'A';
if (this.rdBtB.Checked)
    c = 'B';
if (this.rdBtC.Checked)
    c = 'C';
Commercial cm = new Commercial(this.txtNom.Text, this.txtPrenom.Text, puissance, c);
leService.AjouterCommercial(cm);
```


**Pour Fermer Le Formulaire**
{% questions %}
1. Double clicker sur le bouton Fermer
2. Résultat attendu
   {% endquestions %}
```csharp
 this.Close();
```

## 3 - Saisir une note de frais
**cas d’utilisation**
{% bs-table %}

| **Cas** | **Cas d’utilisation ajout une note de frais**                           |
|---------|-------------------------------------------------------------------------|
| 1       | L’utilisateur demande l’ajout d’une note de frais                       |
| 2       | Le système retourne le formulaire avec la liste de tous les commerciaux |
| 3       | L’utilisateur sélectionne un commercial, une date et type de frais      |
| 4       | Le système enregistre cette nouvelle note de frais                      |

{% endbs-table %}
**Scénario Alternatif**
{% bs-table %}

| **Cas** | **Cas Alternatif**                                       |
|---------|----------------------------------------------------------|
| 3a      | l’utilisateur sélectionne le type de frais « transport » |
|         | Le système affiche le nombre de km à saisir              |
| 3b      | l’utilisateur sélectionne le type de frais « repas »     |
|         | Le système affiche le nombre de km à saisir              |
| 3c      | l’utilisateur sélectionne le type de frais « nuite »     |
|         | Le système affiche le nombre de km à saisir              |

{% endbs-table %}
### a- création du formulaire
{% questions %}
1. Créez les formulaires `FrmAjoutNote `
2. Ajouter les objets à `FrmAjoutNote` selon le schéma suivant. 
{% endquestions %}
**Résultat attendu `FrmAjoutNote` :**
   {% figure-abs "images/winform/wfcom02.png" "wfcom02" "100%" "100%" %}
### b- ajout du code dans le formulaire
**Pour lier le formulaire au menu**
{% questions %}
1. Ouvrir le formulaire `Menu`
2. Double clicker sur le Menu Ajouter une note de frais
3. Résultat attendu
   {% endquestions %}
```csharp
FrmAjoutNote f = new FrmAjoutNote(leService);
f.MdiParent = this;
f.Show();
```
**En vous aidant du formulaire précedent**
   {% questions %}
1. Modifier le formulaire `Menu` pour appeler le formulaire
2. Modifier `FrmAjoutNote` pour récupérer les informations de l'objet `leService`
3. Ajouter la propriété privée `type`
   {% endquestions %}
**Le formulaire doit s’ouvrir avec la listBox**
   {% questions %}
1. Lancer l'évènement Load
2. Résultat attendu
   {% endquestions %}
```csharp
 string s;
 foreach(Commercial c in leService.LesCommerciaux)
 {
     s = $"{c.Nom} {c.Prenom}";
     lstCommerciaux.Items.Add(s);
 }
```
**En fonction du type des notes de frais, on affecte une valeur à l’attribut type**
{% questions %}
1. Double click sur le radio bouton
2. Résultat attendu en fonction du radio bouton
   {% endquestions %}
**Pour Transport**
```csharp
 this.grbKm.Visible = true;
 this.grbMontant.Visible = false;
 this.grbZone.Visible = false;
 this.type = 'T';
```
**Pour Repas**
```csharp
this.grbKm.Visible = false;
this.grbMontant.Visible = true;
this.grbZone.Visible = false;
this.type = 'R';
```
**Pour Nuité**
```csharp
this.grbKm.Visible = false;
this.grbMontant.Visible = false;
this.grbZone.Visible = true;
this.type = 'N';
```
{% questions %}
1. Dans ServiceCommercial écrire la méthode `getCommercial` avec la signature suivante :
   {% endquestions %}
```csharp
public Commercial getCommercial(string nom,string prenom)
```
**Pour enregistrer cette nouvelle note, on écrit le code dans l’événement click du bouton :**
```csharp
try
{
    // On récupère le nom et le prénom dans une chaine de caractères 
    string s = this.lstCommerciaux.SelectedItem.ToString();
    // la variable tc est le séparateur
    char[] tc = { ' ' };
    // Slipt permet de découper une chaine de caractères en respectant le séparateur 
    string[] t = s.Split(tc);
    string nom = t[0];
    string prenom = t[t.Length - 1];
    DateTime dt = this.dateTP.Value.Date;
    Commercial c = leService.getCommercial(nom, prenom);
    
    // Gestion de la region
    char region = '1';
    if (this.rdb2.Checked)
        region = '2';
    if (this.rdb3.Checked)
        region = '3';
        
   // Gestion du type de frais
    switch (this.type)
    {
        case 'T': leService.AjouterNote(c, dt, Convert.ToInt32(this.txtKm.Text)); break;
        case 'R': leService.AjouterNote(c, dt, Convert.ToDouble(this.txtMontant.Text)); break;
        case 'N': leService.AjouterNote(c, dt, Convert.ToDouble(this.txtMontant.Text), region); break;
    }
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
```

**Pour Fermer Le Formulaire**
{% questions %}
1. Double clicker sur le bouton Fermer
2. Résultat attendu
   {% endquestions %}
```csharp
 this.Close();
```

## 4 - Voir les notes de frais
**cas d’utilisation**
{% bs-table %}

| **Cas** | **Cas d’utilisation ajout une note de frais**                                         |
|---------|---------------------------------------------------------------------------------------|
| 1       | L’utilisateur demande à voir les notes de frais                                       |
| 2       | Le système retourne le formulaire avec la liste de tous les commerciaux               |
| 3       | L’utilisateur sélectionne un commercial                                               |
| 4       | Le système retourne la liste de toutes les notes de frais correspondant au commercial |

{% endbs-table %}

{% questions %}
1. Créez les formulaires `FrmVoirNotes `
2. Ajouter les objets à `FrmVoirNotes` selon le schéma suivant. 
   {% endquestions %}

**Résultat attendu `FrmVoirNotes` :**
{% figure-abs "images/winform/wfcom03.png" "wfcom03" "100%" "100%" %}
### b- ajout du code dans le formulaire
**Pour lier le formulaire au menu**
{% questions %}
1. Ouvrir le formulaire `Menu`
2. Double clicker sur le Menu Voir les notes
3. Résultat attendu
   {% endquestions %}
```csharp
FrmVoirNotes f = new FrmVoirNotes(leService);
f.MdiParent = this;
f.Show();
```
{% questions %}
1. Double clicker sur le sous menu correspondant
2. Modifier le code ci dessous
3. Tester l'ouverture du formulaire
   {% endquestions %}
   **Résultat attendu**
```csharp
 private ServiceCommercial leService;
 public FrmVoirNotes(ServiceCommercial leService)
 {
      InitializeComponent();
      this.leService = leService;
 }
```
**Le formulaire doit s’ouvrir avec la listBox chargé avec les numéros de puissances**
{% questions %}
1. Lancer l'évènement Load
2. Résultat attendu
   {% endquestions %}
```csharp
   string s;
   foreach (Commercial c in leService.LesCommerciaux)
   {
       s = $"{c.Nom} {c.Prenom}";
       cmbCommerciaux.Items.Add(s);
   }
```
**En fonction du commercial sélectionné, chargement des notes de frais**
{% questions %}
1. Double click sur le combobox
2. Résultat attendu
   {% endquestions %}
```csharp
            this.lstNotes.Items.Clear();
            string s = this.cmbCommerciaux.SelectedItem.ToString();
            char[] tc = { ' ' };
            string[] t = s.Split(tc);
            string nom = t[0];
            string prenom = t[t.Length - 1];
            Commercial c = leService.getCommercial(nom, prenom);
            foreach (NoteFrais nf in leService.MesNotes)
            {
                if (nf.LeCommercial.Nom == nom && nf.LeCommercial.Prenom == prenom)
                {
                    string sn = nf.ToString();
                    this.lstNotes.Items.Add(sn);
                }

            }
```

**Pour Fermer Le Formulaire**
{% questions %}
1. Double clicker sur le bouton Fermer
2. Résultat attendu
   {% endquestions %}
```csharp
 this.Close();
```
