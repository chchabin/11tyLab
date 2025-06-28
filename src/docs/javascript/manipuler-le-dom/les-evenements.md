---
layout : "layouts/docs.njk"
title : "Les Evenements"
description : "Associer Un Composant et Un Noeud Faire des modifications dans une page HTML sans avoir à y écrire de code."
group : "manipuler-le-dom"
section : "javascript"
toc : true
date : "2022-08-18T09:41:45+02:00"
draft : false
---
## 1 - Associer un évènement prédéfini
### a- Les évènements préprogrammés
Les événements sont des actions ou des occurrences qui se produisent dans le système que vous programmez et dont le système 
vous informe afin que vous puissiez y répondre d'une manière ou d'une autre si vous le souhaitez.
Les éléments qui constituent un document étant en général nombreux, les signaux, envoyés par l'interface, sont nombreux 
et constituent ce que l'on appelle un flux d'événements. Ce flux est envoyé par défaut sans que le programmeur JavaScript 
ait besoin de le demander.
Par contre, le programmeur a la possibilité d'écouter un événement faisant partie de ce flux et de programmer un code qui 
s'exécutera à chaque fois qu'il "entendra" cet événement passer dans le flux. Il le fera en mettant en place un gestionnaire d'événement.

Étapes de la gestion d'un événement :

1. Écouter un évènement,
2. Détecter l'évènement,
3. Traiter l'évènement (exécuter du code).

Soit le code html suivant :
```html
<button type="button" id="btn" class="btn">Changer</button>
```
Récupération de la balise, la classe ou de l'identifiant dans la page HTML
```javascript
const btn = document.querySelector('button')
```
Nous avons sélectionné un bouton, et lorsque ce bouton est cliqué (c'est l'évènement `click`), changeons le fonds de la page :
```javascript
btn.addEventListener('click',(e)=>onClick(e) )
function onClick(){
    document.body.style.backgroundColor ='black'
}
```
### b - exemple d'évènements
`on<nomévènement>`, comme `onclick` est un attribut HTML obsolète
que vous pouvez utiliser pour spécifier directement du code JavaScript à exécuter lors d'un clic sur un élément HTML.
`<nomévènement>`, comme `click` est un événement DOM standard que vous pouvez gérer avec `addEventListener()`.

L'utilisation de `addEventListener()` est la méthode recommandée pour gérer les événements de clic en JavaScript moderne
{% bs-table %}

| événement | descriptif                                                                     |
|-----------|--------------------------------------------------------------------------------|
| blur      | Perte du focus.                                                                |
| change    | Quand on change le contenu.                                                    |
| click     | Quand je clic.                                                                 |
| dblclick  | Quand on fait un double-clic.                                                  |
| error     | Lorsqu'il se produit une erreur de script.                                     |
| focus     | Quand un élément gagne le focus.                                               |
| input     | Quand je saisis une valeur dans un champ input.                                |
| keydown   | Quand j'appuie sur la touche.                                                  |
| keypress  | Quand j'appuie sur une touche.                                                 |
| keyup     | Quand je relâche la touche.                                                    |
| load      | Quand la page est totalement chargée (images incluses).                        |
| mousedown | Quand le bouton de la souris est appuyé.                                       |
| mouseout  | Quand je sors de l'élément.                                                    |
| mouseover | Quand je passe sur l'élément.                                                  |
| mouseup   | Quand le bouton de la souris est relâché.                                      |
| mousemove | Quand je bouge la souris                                                       |
| move      | Quand je déplace la fenêtre.                                                   |
| reset     | Quand je réinitialise.                                                         |
| resize    | Quand je redimensionne la fenêtre (seulement sur window )                      |
| select    | Quand je sélectionne.                                                          |
| submit    | Quand j'envoie un formulaire.                                                  |
| unload    | Quand on ferme la fenêtre, peut être ignoré par certain navigateur.            |
| scroll    | Quand on déplace la barre de scroll.<br>sur window ou un element avec overflow |
{% endbs-table %}
## 2 - l'objet event
### a - `addEventListener`
La méthode `addEventListener(nomEvent, nomFonction, typePropagation)` appelée par un élément écoute un événement sur cet élément. 
Lorsque cet événement est détecté, la méthode appelle une fonction `callback` que vous devez lui passer en argument. 
C'est dans cette fonction que vous placez votre code.
```javascript
myForm.addEventListener('submit', (e)=>onSubmit(e))
```
Ici, la méthode `addEventListener` est associé au formulaire `myForm`. L'évènement écouté est submit (pour d'autres besoins, 
se référencer à la liste supra). À cet évènement est associée la fonction `onSubmit`. La fonction peut ressembler à ça :
```javascript
function onSubmit(e) {
    // Le paramètre e capture l'évènement
    // Blocage de l'exécution de l'évènement ici le rechargement de la page
    e.preventDefault()
    //Test si les champs sont vides
    if(nameInput.value === '' || emailInput.value === '') {
        // Envoi d'un message
        msg.classList.add('error')
        msg.textContent = 'Please enter all fields'

        // Le message disparait après 3 secondes
        setTimeout(() => msg.remove(), 3000)
    }
}
```
{% callout %}
**Remarque :**  
Il existe aussi la méthode `removeEventListener()` pour enlever un gestionnaire d'événement.
{% endcallout %}
### b - `event.target`
C'est une référence à l'objet qui a envoyé l'événement. Capturons le bouton, présenté plus haut :
```javascript
const btn = document.querySelector('.btn')
```
Associons-lui à l'événement clic, l'affichage de la cible :
```javascript
btn.addEventListener('click', (e) => {
     // Blocage de l'exécution de l'évènement
    e.preventDefault()
    console.log(e.target) // affiche <button type="button" id="btn" class="btn">Changer</button>
    console.log(e.target.className) // affiche btn
})
```
À partir de `e.target`, il est possible d'accéder à toutes les propriétés de l'objet `event`, c'est-à-dire les propriétés HTML.
### c - Flux d'événements
Dans l'exemple précédent, nous avons cliqué sur le bouton d'un formulaire, on pourrait penser que seul le paragraphe a reçu 
l'événement et l'a traité. Il n'en est rien, car certains événements se propagent. Pas tous mais la plupart et c'est le cas du `click`.

Il y a eu une première phase que l'on appelle la phase de **capture** dans laquelle l'événement est parti de la racine 
du document pour descendre jusqu'au bouton.

Ensuite, il y a eu une deuxième phase que l'on appelle phase de **bouillonnement** dans laquelle l'événement est remonté 
du paragraphe vers la racine du document en traversant une nouvelle fois la liste de ses ancêtres.
Lorsque vous cliquez sur le bouton, l'événement click se propage dans l'ordre suivant :
{% bs-table %}

| Phase capture                 | Phase bouillonnement          |
|-------------------------------|-------------------------------|
| 1. document r                 | 1. button                     |
| 2. html                       | 2. div avec l'id du container |
| 3. body                       | 3. body                       |
| 4. div avec l'id du container | 4. html                       |
| 5. button                     | 5. document                   |
{% endbs-table %}

### d - Gestion du flux
On peut changer ce comportement par défaut si on souhaite, et on peut même interrompre le flux de propagation de l'événement.

**preventDefault()** : Cette méthode empêche le navigateur d'entamer une action par défaut. Par exemple, le fait de cliquer 
sur un bouton de type submit redirige le navigateur vers la page définie dans l'attribut action du formulaire, ce qui 
représente le comportement par défaut. Or, si on déclare convenablement la méthode preventDefault(), le navigateur 
n'entamera pas la redirection.

**stopPropagation()** : Cette méthode empêche la propagation du flux d'événement. Si le flux se propage automatiquement 
sur les deux phases qu'on a vues dans le paragraphe précédent, la méthode stopPropagation() permet de rompre ce flux de 
telle sorte à empêcher la capture répétée de l'événement par les objets qui s'emboîtent les uns dans les autres et exécuter 
la même fonction plusieurs fois. 
