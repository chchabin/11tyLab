---
layout : "layouts/docs.njk"
title : "Vscode"
description : "Environnement de développement intégré"
group : "ide"
section : "apprentissage"
toc : true
date : "2022-09-03T22:49:44+02:00"
draft : false
---
## VScode
Dans cette page, vous trouverez quelques liens pour utiliser VScode et installer des extensions.

**Utiliser Emmet**, intégré par défaut pour vous simplifier le code. Emmet propose cette formidable 
[cheatsheet](https://docs.emmet.io/cheat-sheet/).
{% callout %}
**Exemple EMMET :**
Dans une page HTML vide, tapez ! puis utilisez la touche tabulation
{% endcallout %}

**Microsoft** a fait une introduction à [Visual Studio Code](https://docs.microsoft.com/fr-fr/learn/modules/develop-web-apps-with-vs-code/1-introduction)

**Alsacréation** a produit aussi un petit tuto sur les extensions [Visual Studio Code](https://www.alsacreations.com/outils/guidelines/Guidelines-VScode.md)

**Grafikart** donne sa configuration de [Visual Studio Code](https://grafikart.fr/tutoriels/vscode-settings-2096)

## Proposition de paramétrage
### Raccourcis clavier
- `Ctrl+Shift+P` Barre de recherche
- `Ctrl+Shift+L` Sélectionne toutes les occurrences d'un mot
- `Shift+Alt + ↓` Duplique la ligne courante 
- `Shift+Alt+F` Formatage du code
- `Ctrl+Shift+F` Rechercher dans le projet
- `Ctrl+H` Remplace dans un projet
Extensions de Visual Studio Code
### Theme de couleur
- TokyoNight
- Material Icon Theme
- Rainbow Brackets 2
### Pour git
- GitLens - Git supercharged
### Système de formatage 
- Prettier
- SonarLint
- HTML CSS Support
- Path Intellisense

## Configurer php en local
Avec VS code, vous n'êtes pas obligé d'utiliser un serveur web comme Wamp, Laragon, Xampp ou Uwamp, si vous n'utilisez pas 
de base de données. PHP a un serveur intégré.

Configurer PHP dans VS code vous permet de lancer directement le serveur depuis l'IDE.  
### Vérification de php
1. saisir `cmd` dans la barre de recherche et lancez le terminal,
2. saisir `php --version`, s'il n'y a pas de message d'erreur, paramétrez `VS code` - fin
3. saisir le chemin de php dans le path
3.1 avec Laragon : `Menu/Outils/Path/Ajouter Laragon au path` et fermer totalement et relancer Laragon - fin
4. Dans la barre de recherche tapez `Modifier les variables d'environnement système`
5. cliquez sur `Variables d'environnement`
6. cliquez sur `path` et modifier
7. Ajoutez le chemin du fichier php.exe par exemple `c:\php`

### Exécuter php uniquement avec son server interne
1. saisir `cmd` pour lancer le terminal
2. aller dans le répertoire de travail par exemple `cd C:\Users\etudiant\Documents\test`
3. saisir `php -S localhost:8080`
4. dans le navigateur saisir `localhost:8080`, cela lancera le fichier `index.php` s'il existe.

Voir cette [video](https://grafikart.fr/tutoriels/serveur-web-interne-778) pour plus d'informations.

### Configurer VS code
Voici la recette :
1. Saisir `Ctrl+,`,
2. saisir `php` dans la barre de saisie,
3. cliquer sur `Edit in settings.json`,
4. à côté de `php.validate.executablePath` mettre le chemin de votre fichier php, par exemple :
`"php.validate.executablePath": "c:/php/php.exe"`

### Exécuter en mode console
1. Extension : PHP Debug
2. `Ctrl+F5` : Run sans debugger

### Exécuter dans le navigateur
1. Extension : PHP Server
2. clic droit `PHP Server : server project`

### Les extensions à rajouter
- PHP Intellisense
- Live Server 