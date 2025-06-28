3 

**Architecture MVC en PHP – Présentation** 

**Conseils pratiques** 

À l’heure actuelle Laragon est l’utilitaire qui correspond le mieux à nos besoins en première et deuxième année. 

Si vous avez votre propre ordinateur installez la version full à cette adresse : 

[https://sourceforge.net/projects/laragon/files/releases/4.0/laragon-full.exe/download ](https://sourceforge.net/projects/laragon/files/releases/4.0/laragon-full.exe/download)

Si vous êtes sur les ordinateurs du lycée, installez dans le répertoire c : la version portable : [https://sourceforge.net/projects/laragon/files/Portable/laragon.7z/download ](https://sourceforge.net/projects/laragon/files/Portable/laragon.7z/download)

Cette version est très limitée. J’ai paramétré une version plus aboutie à l’adresse : 

[http://chchabin.free.fr/download/laragon-.7z ](http://chchabin.free.fr/download/laragon-.7z)

Pour coder préférez Visual Studio Code 

**Prérequis : Transmettre des données entre des pages** 

Le site web peut être statique ou dynamique. Un site statique est composé de pages HTML stockées dans un disque dur. Un site dynamique est constitué de pages de code, ici du php, qui sont interprétées pour fournir des pages HTML au navigateur. 

Une version plus complète se trouve sur le site : 

[http://chchabin.free.fr/php/php01Gintroduction.html#siteDyn ](http://chchabin.free.fr/php/php01Gintroduction.html#siteDyn)

Une URL représente l'adresse d'une page web et commence par http:// ou https://. Lorsqu'on fait un lien vers une autre page,
il est possible d'ajouter des paramètres sous la forme `bonjour.php?nom=Dupont&prenom=Jean` qui seront transmis à la page. 

![](Aspose.Words.ea69e2d6-46b5-4a77-8238-d7590389d532.001.png)

Dans ce cas, la page bonjour.php recevra ces paramètres dans la variable superglobale $\_GET et défini automatiquement par PHP : 

- $\_GET['nom'] aura pour valeur Dupont ; 
- $\_GET['prenom'] aura pour valeur Jean. 

Une version plus complète se trouve sur le site : 

[http://chchabin.free.fr/php/php04Transmission.html ](http://chchabin.free.fr/php/php04Transmission.html)

**Patron de conception MVC** 

Le développement d'une application web complexe, proposant de multiples fonctionnalités, par des équipes de plusieurs informaticiens nécessite d'établir des règles dans les étapes du développement et dans l'organisation du projet. 

Pour passer de l'écriture d'un simple programme au développement d'une application maintenable et évolutive, il est indispensable d'industrialiser, de rationaliser son codage. C'est ce que proposent les patrons de conception, notamment MVC. 

L'objectif de cette ressource est d'étudier un exemple concret d'une application web développée en suivant le patron de conception MVC. 

Cette ressource est scindée en cinq parties. 

La première partie introduit la notion de contrôleur, sans utilisation de modèle et avec les vues préexistantes. 

La deuxième partie introduit la notion de routes pour sécuriser l’accès aux actions. 

La troisième partie expose comment créer des actions pour accéder aux vues. Elle présente aussi le modèle et la liaison entre le contrôleur et le modèle. 

La quatrième partie expose comment configurer le contrôleur pour traiter les données envoyées par la vue 

**Le routeur** 

Le fichier index.php fait fonction de routeur. 

Il récupère les urls pour extraire la partie contrôleur et la partie action. Une url se présente de cette façon : 

index.php?uc=controleur&action=accueil 

Cette url est récupérée dans un tableau $\_REQUEST. Ce tableau fournit deux clés : 



| Clé                  | valeur     |
|----------------------|------------|
| $\_REQUEST[‘uc’]     | contrôleur |
| $\_REQUEST[‘action’] | accueil    |
**Le répartiteur** 

Le fichier index.php fait fonction de répartiteur. 

En fonction des valeurs du contrôleur, il appelle le contrôleur grâce à l’instruction include. Comme dans le fichier blog, il n’y a qu’un contrôleur le répartiteur est réduit à son strict minimum. 

Les actions qui sont appelées sont, quant à elles, incluses dans le contrôleur. En fonction de l’action, le contrôleur exécute des opérations, appel le modèle et appel des vues. 

**Les contrôleurs** 

Un contrôleur est l'élément central d'une fonctionnalité sur un site web MVC. Chaque fonctionnalité est gérée par un contrôleur. C'est le contrôleur qui a pour rôle de : 

- récupérer les données transmises par un formulaire, 
- récupérer ou envoyer les données dans la base en faisant appel aux fonctions gérées par le modèle, 
- traiter les données, 
- appeler les vues permettant d'afficher les données récupérées, calculées, ou d'afficher les messages à destination de l'utilisateur. 

![](Aspose.Words.ea69e2d6-46b5-4a77-8238-d7590389d532.002.png)

**Accès aux données** 

Dans l'approche MVC, il est important de séparer l'accès à la base de données du reste du code applicatif. 

L’accès aux données se par l’intermédiaire du modèle, où sont enregistrées toutes les requêtes, le plus souvent dans des fonctions. 

L’origine des données est multiple, il peut s’agir : 

- d’une base de données 
- de tableau, 
- de fichiers XML 

Le modèle est appelé à partir du contrôleur. 

**Contexte** 

![](Aspose.Words.ea69e2d6-46b5-4a77-8238-d7590389d532.003.jpeg)

Le site Annuaire est un petit site de création de membres. Dans sa version de base, il n’y a pas d’utilisateur spécifique, tout le monde est visiteur ou administrateur. 

L’utilisateur peut soit : 

- saisir un nouveau membre, 
- lister l’ensemble des membres. 

**Évolutions envisageables** 

Création d’un compte administrateur qui est l’unique personne habilitée à saisir les membres. 
