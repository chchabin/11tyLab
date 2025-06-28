---
layout : "layouts/docs.njk"
title : "Introduction"
description : "Les bases"
group : "programmer"
section :  "javascript"
toc : true
date : "2022-08-14T21:13:03+02:00"
draft : false
---
## 1 - Introduction javascript
Qu’est-ce que javascript ?
- C’est un langage de programmation interprété de haut niveau,
- Il est conforme aux spécifications [ECMAScript](https://fr.wikipedia.org/wiki/ECMAScript),
- Il est multiparadigme,
- Il fonctionne sur tous les navigateurs, mais aussi sur les serveurs comme Node.js.

Pourquoi apprendre javascript

- C’est un langage de programmation coté client, il fonctionne sur le navigateur,
- Il permet de faire des interfaces utilisateur très réactives avec des frameworks comme React,
- Il est utilisé dans la création d’applications très rapides coté serveur et coté client
- Il est utilisé pour le développement mobile (React Native, NativeScript, Ionic),
- Il est utilisé pour des applications de bureau (Electron js),
## 2 - Anatomie d’un fichier source
### a - Avec un fichier HTML
Commençons par envisager le javascript coté client. Nous verrons le javascript coté serveur avec `ExpressJs`
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Cours JavaScript</title>
        <meta charset="utf-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no">
        <link rel="stylesheet" href="cours.css">
        <script>

            <!-- Mettre ici un script javascript -->

        </script>
    </head>
    <body>
        <h1>Titre principal</h1>
        <script>
            <!-- Bonne pratique : mettre ici un script javascript -->
        </script>
    </body>
</html>
````
Les scripts javascript peuvent être placés à deux endroits :

- dans la balise Head, dans ces conditions, le script sera exécuté avant le chargement du body
- à la fin du body, le script sera exécuté après le chargement du body
  {% callout %}
#### Bonnes pratiques
Comme le langage script est tès rapide, il est préférable de mettre les scripts à la fin du body, pour permettre au langage HTML de se charger d’abord.
{% endcallout %}
La forme du script peut-être soit :

- des lignes de code
- le nom d’un fichier, comme `script.js`, ce qui permet de séparer les langages, comme dans le cas du css.
### b - Avec un serveur javascript comme NodeJs
[Aller à la partie 2]({% aref "/docs/javascript/nodejs-et-expressjs/introduction" %})
## 3 - Commentaires
Les commentaires dans un fichier javascript sont les mêmes que pour le C# ou le PHP.

Il y a deux façons de placer des commentaires :

- soit en utilisant `\* Commentaire *\`, qui permet aussi un commentaire sur plusieurs lignes,
- soit en utilisant `//`. Le reste de la ligne est un commentaire où le commentaire se termine à la fin de la ligne.
## 4 - La syntaxe
Le point-virgule est généralement utilisé en informatique pour indiquer la fin d’une instruction, c’est-à-dire pour séparer deux instructions l’une de l’autre et cela va également être le cas en JavaScript.

Le langage JavaScript est très bien fait et ne nous oblige pas strictement à utiliser un point-virgule pour notifier la fin de chaque instruction. En effet, le JavaScript va être capable de « deviner » quand une instruction se termine et va ajouter automatiquement des points-virgules là où ça lui semble pertinent.
{% callout warning%}
#### Attention aux évolutions
Le langage javascript est en perpétuelle évolution, si tous les navigateurs répondent à la norme ES5 les plus récents, répondent à celle de ES6 et sa modification ES7. Ce sont ces dernières normes que nous prendrons en compte, en particulier pour la déclaration de variables ou la création d’objets.
{% endcallout %}
