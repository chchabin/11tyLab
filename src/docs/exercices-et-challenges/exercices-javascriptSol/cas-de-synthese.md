---
layout : "layouts/docs.njk"
title : "Cas Synthese"
description : ""
group : "exercices-javascript"
section : "exercices-et-challenges"
toc : true
date : "2024-05-29T20:58:02+02:00"
draft : false
---
## Cas de synthèse javascript
{% aref "https://github.com/chchabin/laFolleParenthesEtudiant", "🚀 Version de démarrage sur github" %}
### Contexte
Vous disposez du site de présentation d’un club de voyages « La folle parenthèse ». Votre tuteur de stage a
pour mission de réaliser quelques mises à jour sur l’aspect global du site ; il vous charge d’effectuer cette activité
en respectant les contraintes suivantes :

### Travail à faire
1. Vous avez à votre disposition un fichier de styles (`style.css`) contenant des mises en forme utile à votre travail.
2. Dans le fichier `appClass.js`, écrire le code javascript qui permet d'obtenir avec les pages `index.html` et `accueil.html` le résultat suivant :
   {% figure-abs "images/exercices-et-challenges/accueil.png", "accueil"%}
3. Réaliser les modifications pour toutes les autres pages du site.
4. Écrire le code qui permet au fichier `formules.html` d'afficher les données de `chambre.json`
5. Toujours dans `formules.html` affichez les informations du formulaire et le montant à payer sachant les tarifs suivants :
   {% bs-table %}

| Type de chambre |  	Tarif |
|-----------------|--------:|
| Chambre simple  |   	65 € |
| Chambre double  |   	75 € |
| Chambre triple  |   	90 € |
{% endbs-table %}
6. Écrire le code qui permet au fichier `simulation.html` d'afficher les données de `chambreSaison.json`
7. Affichez les informations du formulaire et le montant à payer sachant les tarifs suivants :
   {% bs-table %}

| Type de chambre |  	Basse Saison |  Haute Saison |
|-----------------|---------------:|--------------:|
| Chambre simple  |          	65 € |          75 € |
| Chambre double  |          	75 € |          85 € |
| Chambre triple  |          	90 € |         105 € |
{% endbs-table %}

Les dates des saisons sont les suivantes :

**Basse saison** :
- Du 05/01 au 14/06
- Du 07/09 au 07/12

**Haute saison** :
- Du 15/06 au 06/09
8. Écrire le code qui permet d'avoir ou pas la description de la photo dans la page `accueil.html` en clickant dessus :
   État à l'ouverture de la page :
   {% figure-abs "images/exercices-et-challenges/descriptionOff.png" "descriptionOff" %}

   État aprés le click sur le lien :
   {% figure-abs "images/exercices-et-challenges/descriptionOn.png" "descriptionOn" %}


