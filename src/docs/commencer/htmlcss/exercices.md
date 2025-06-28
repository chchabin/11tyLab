---
layout : "layouts/docs.njk"
title : "Exercices"
description : "Création d’un site Internet à l’aide de HTML et de CSS"
group : "htmlcss"
section : "commencer"
toc : true
date : "2022-09-03T22:50:07+02:00"
draft : false
---
{% callout%}
**Objectifs de l’activité :**  
Création d’un site « vitrine » présentant l’activité de l’entreprise en utilisant le HTML5 et le CSS3  
Clonez avec `git` le [dossier technique](https://github.com/chchabin/Office-Master-VerEtudt)
```bash
`git` clone https://github.com/chchabin/Office-Master-VerEtudt.
```
{% endcallout%}
## 1 - Contexte
**OFFICEMASTER** est un nouveau centre d’affaires à Aulnay-sous-bois qui accueille le public du lundi au vendredi de 9h à 18h.

**OFFICEMASTER** c’est 37 bureaux équipés, fonctionnels et climatisés de 12 à 20 m², 2 salles séminaires de 40 m², avec Accès internet et wifi pour tous.

**OFFICEMASTER** offre à ses clients toute la souplesse et des avantages d’un centre d’affaires :

- Location de bureaux meublés sans bail commercial
- Location de bureau de coworking pour les employés itinérants ou en télétravail
- Domiciliation commerciale et/ou postale avec ou sans renvoi de courrier
- Une salle de réunion et une salle de séminaire pour organiser vos évènements
- Accueil des clients
- Réception des appels téléphoniques
- Secrétariat
- Un espace détente pour échanger avec les autres locataires et partager un moment avec vos clients
## 2 - Objectifs et contraintes
**OFFICEMASTER** souhaite la création d’un site afin de présenter :

- Le centre d'affaires.
- La partie domiciliation.
## 3 - Cas d'utilisation
### Internautes
Les internautes se rendant à l’adresse du site OFFICEMASTER peuvent naviguer sur celui-ci afin de visualiser les informations présentant le centre d'affaires et la partie domiciliation.

- **Partie centre d’affaires :**
    - Location de bureaux meublés sans bail commercial
    - Une salle de réunion et une salle de séminaire pour organiser vos évènements
    - Accueil des clients
    - Réception des appels téléphoniques
    - Secrétariat
    - Un espace détente pour échanger avec les autres locataires et partager un moment avec vos clients
- **Partie domiciliation :** Domiciliation commerciale et/ou postale avec ou sans renvoi de courrier
## 4 - les missions de réalisation
### mission 1  
Réalisation du fichier HTML selon le modèle : 
[Fichier de la mission 1]({% aref "download/mission1.pdf"%})

1. Le texte est toujours entouré par des balises `p`
2. les titres sont en `h3`
3. les sous-titres en `h3`
4. le texte, lié au `titre 2`, est entouré d'une balise `article`
5. le texte, lié au `titre 3`, est entouré d'une balise `section`
6. ne pas oublier le `copyright` en fin de page avec votre nom
7. le plan accès se fait grâce à une balise `iframe`
8. Ajoutez les `id` dans les `titres 2` et copiez-les dans le menu. Le résultat attendu est qu'un clic sur le menu 
renvoie directement au titre choisi.


### mission 2  
Réalisation du css : [Fichier de la mission 2]({% aref "download/mission2.pdf"%})

1. Récupérer le css du site d'[alsacréation](https://www.alsacreations.com/tuto/lire/555-design-css-complet-5-etapes.html)
2. Changer le `background` du menu
3. Changer la hauteur du menu
4. Modifier les parties de css inadéquates

### mission 3  
Ajoutez des images
