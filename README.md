# Support de cours informatique

Site statique généré avec [Eleventy (11ty)](https://www.11ty.dev/), servant de support pédagogique pour des cours d'informatique.

## Présentation

Ce projet publie des cours, exercices, TP et quiz couvrant plusieurs domaines :

- **C#** – programmation orientée objet, WinForms
- **JavaScript** – manipulation du DOM, Node.js, Express.js
- **PHP**
- **Programmation objet**
- **Failles de sécurité**
- **Exercices & challenges**, **TP & missions**

Le site est déployé sur [http://chchabin.free.fr/](http://chchabin.free.fr/).

## Prérequis

- Node.js ≥ 18
- npm

## Installation

```bash
npm install
```

## Commandes

| Commande | Description |
|---|---|
| `npm start` | Build + Pagefind + serveur local avec rechargement automatique |
| `npm run build` | Build simple (développement) |
| `npm run build:prod` | Build pour la production |
| `npm run watch` | Surveille les modifications sans serveur |

Le site est généré dans le dossier `_site/`.

## Structure du projet

```
├── src/
│   ├── docs/            # Contenu des cours (Markdown)
│   │   ├── csharp/
│   │   ├── javascript/
│   │   ├── php/
│   │   ├── quizz/
│   │   ├── failles/
│   │   ├── programmation-objet/
│   │   ├── exercices-et-challenges/
│   │   └── tp-et-missions/
│   ├── content/         # Fichiers statiques (HTML, quiz)
│   ├── _includes/       # Layouts et partials Nunjucks
│   ├── _data/           # Données globales (YAML/JSON)
│   ├── css/             # Feuilles de style
│   ├── js/              # Scripts client
│   └── images/          # Images
├── _11ty/               # Shortcodes personnalisés
├── config/              # Configurations serveur (local, free.fr, GitHub, GitLab)
└── .eleventy.js         # Configuration Eleventy
```

## Shortcodes disponibles

| Shortcode | Type | Description |
|---|---|---|
| `aref` | simple | Lien avec chemin relatif à la base du site |
| `figure-abs` | simple | Figure avec chemin d'image absolu |
| `kbd` | simple | Touche clavier stylisée |
| `hamburger` | simple | Icône menu hamburger |
| `questions` | paired | Bloc de questions interactives |
| `bs-table` | paired | Tableau Bootstrap |
| `callout` | paired | Bloc callout (info, warning…) |
| `bt-collapse` | paired | Contenu repliable Bootstrap |
| `col-n` | paired | Mise en colonnes Bootstrap |

## Plugins

- `@11ty/eleventy-plugin-syntaxhighlight` – coloration syntaxique
- `eleventy-plugin-toc` – table des matières automatique (h2, h3)
- `markdown-it-anchor` – ancres sur les titres Markdown
- `markdown-it-mermaid` – diagrammes Mermaid dans Markdown
- `pagefind` – recherche full-text côté client

## Configurations de déploiement

Le fichier `config/index.js` expose plusieurs profils serveur. Le profil actif se choisit dans `.eleventy.js` :

```js
const selectedConfig = siteConfigs.configFree  // free.fr
// siteConfigs.configGithub  → GitHub Pages
// siteConfigs.configGitlab  → GitLab Pages
// siteConfigs.config8080    → localhost:8080
```