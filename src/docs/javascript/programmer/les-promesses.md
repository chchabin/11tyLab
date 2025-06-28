---
layout : "layouts/docs.njk"
title : "Les Promesses"
description : ""
group : "programmer"
section : "javascript"
toc : true
date : "2022-08-15T00:55:55+02:00"
draft : false
---
## 1 - Les Threads
### Traitement mono-thread
JavaScript s'exécute sur un seul thread de traitement. Lors de l'exécution dans un onglet de navigateur, tout le reste s'arrête. Ceci est nécessaire, car les modifications apportées au DOM de la page ne peuvent pas se produire sur des threads parallèles ; il serait dangereux qu'un thread redirige vers une URL différente tandis qu'un autre tente d'ajouter des nœuds enfants.  
Cela est rarement évident pour l'utilisateur, car le traitement se produit rapidement par petits morceaux. Par exemple, JavaScript détecte un clic sur un bouton, exécute un calcul et met à jour le DOM. Une fois terminé, le navigateur est libre de traiter l'élément suivant de la file d'attente.
{% callout%}
#### Note latérale :
D'autres langages tels que PHP utilisent également un seul thread, mais peuvent être gérés par un serveur multithread tel qu'Apache. Deux requêtes sur la même page PHP en même temps peuvent initier deux threads exécutant des instances isolées de PHP Durée.
{% endcallout%}
### Devenir asynchrone avec les rappels
Les threads simples posent un problème. Que se passe-t-il lorsque JavaScript appelle un processus « lent » tel qu'une requête Ajax dans le navigateur ou une opération de base de données sur le serveur ? Cette opération peut prendre plusieurs secondes, voire quelques minutes. Un navigateur se verrouillait en attendant une réponse. Sur le serveur, une application Node.js ne serait pas en mesure de traiter d'autres demandes d'utilisateurs. Voici un exemple :
```javascript
// tableau d'objets post

const posts=[
    {title:'post one',body:'est post1'},
    {title:'post two',body:'est post2'},
]
// fonction d'affichage des posts
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=<li>${post.title}</li>
        })

        document.body.innerHTML=output;
    },1000);
}
// function pour rajouter un post
function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000);
}
```
Appelez les méthodes :
```javascript
// Affichage des posts
getPosts();

//Création du post
createPost({title:'post three',body:'est post3'});
```
En exécutant ce code, vous constaterez que le post n'est jamais créé. En effet, l'exécution du code d'affichage, lancée par la fonction `setTimeout`, 1000, se fait avant l'exécution du code de création du post, 2000.
{% questions %}
#### Application mono thread
1. exécutez ce code
2. inversez les chiffres, vous verrez que l'exécution correspondra à ce que l'on attend.
{% endquestions%}
   

## 2 - Les Callback
La solution est le traitement asynchrone. Plutôt que d'attendre la fin, un processus est invité à appeler une autre fonction lorsque le résultat est prêt. C'est ce qu'on appelle un rappel et il est passé en tant qu'argument à toute fonction asynchrone.
Reprenons notre exemple avec un callback :
```javascript
// Modification de la fonction de création

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000);
}
```
L'appel de la fonction sera un peu différent, car il faut que la fonction de création soit finie pour effectuer l'affichage.
La fonction `getPosts` est passée en callback
```javascript
createPost({title:'post three',body:'est post3'},getPosts());
```
Mais cette méthode a un inconvénient, elle devient illisible lorsque les callbacks s'enchainent.

## 3 - Les Promesses
ES2015 (ES6) a introduit les promesses. Les rappels sont toujours utilisés sous la surface, mais les promesses fournissent 
une syntaxe plus claire qui enchaîne les commandes asynchrones afin qu'elles s'exécutent en série (plus à ce sujet dans 
la section suivante).
Pour activer l'exécution basée sur Promise, les fonctions basées sur le rappel asynchrone doivent être modifiées afin 
qu'elles renvoient immédiatement un objet Promise. Cet objet promet d'exécuter l'une des deux fonctions (passées en 
arguments) à un moment donné dans le futur :

- resolve: une fonction de rappel exécutée lorsque le traitement se termine avec succès, et
- reject: une fonction de rappel optionnelle s'exécute en cas d'échec.

Voici la modification de notre exemple :
```javascript
function createPost(post) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                const error = false;
                if (!error) {
                    resolve();
                } else {
                    reject('Erreur')
                }
            }, 2000)
        }
    );
}
```
La fonction renvoie une promesse qui exécutera la fonction `setTimeout` s'il n'y a pas d'erreurs. Dans le cas contraire, elle renverra une erreur.
L'appel de cette fonction doit tenir compte des deux cas.
```javascript
createPost({title: 'post three', body: 'est post3'})
    .then(getPosts) // Exécution de getposts s'il n'y a pas d'erreurs
    .catch(err => console.log(err)); // Exécution du tp-csharp où la promesse renvoie une erreur
```
Les promesses réduisent l'enfer des rappels, mais introduisent leurs propres problèmes.
Les didacticiels omettent souvent de mentionner que toute la chaîne Promise est asynchrone. 
Toute fonction en utilisant une série de promesses doit soit retourner ses propres fonctions de rappel Promise 
ou d'exécution dans les méthodes finales `.then()`, `.catch()` ou des `.finally()`.
## 4 - Async/Await
Les promesses peuvent être décourageantes, c'est pourquoi ES2017 a introduit `async` et `await`. 
Bien que ce ne soit que du sucre syntaxique, cela rend les promesses beaucoup plus douces et vous pouvez éviter les chaînes `.then()`.
Voici votre code modifié, au niveau de l'appel cette fois :
```javascript
// création d'une fonction anonyme de sortie
const output=async ()=>{
    try{
        //Création du post
        const rep= await createPost({title:'post three',body:'est post3'});
        console.log(rep);//affiche OK
        // Affichage des posts
        getPosts();
    }catch(err){
        console.log(err);
    }
}

// Appel de la fonction
output()
```
L'appel du code est ici plus conforme à l'enchainement logique des méthodes.
