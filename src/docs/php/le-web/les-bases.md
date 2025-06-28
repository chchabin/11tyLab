---
layout : "layouts/docs.njk"
title : "Les Bases"
description : "Introduction au développement"
group : "le-web"
section : "php"
toc : true
date : "2022-08-19T13:43:10+02:00"
draft : false
---
## 1 - Anatomie d’un fichier source PHP
Le code PHP est écrit dans des fichiers source portant l’extension `.php`. Le plus souvent, un fichier source PHP contient un mélange de balises HTML et de code PHP. Au moment où un client demande ce fichier à un serveur Web, le code PHP est exécuté par le serveur pour produire dynamiquement une page Web.

{% figure-abs "images/php/bases-langage/web_php_htmlcss.png" "web_php_htmlcss.png" %}

{% callout  warning%}
#### **Attention**
Un fichier contenant du code PHP, mais portant l’extension .html sera renvoyé directement par le serveur sans exécution du code PHP qu’il contient.
{% endcallout %}
Il est fortement conseillé d’adopter le standard HTML5 ainsi que le jeu de caractères Unicode UTF-8 (sans BOM). Tous les fichiers source doivent être encodés avec ce jeu de caractères pour que les caractères accentués soient affichés correctement et la structure HTML doit être identique à celle ci-dessous.
```html
<!doctype html>
  <head lang="fr">
    <meta charset="utf-8"/>
       ...
  </head>
  <body>
        ...
  </body>
</html>
```
{% callout  warning%}
#### **Mise en évidence de la syntaxe**
L’utilisation d’un éditeur avec coloration syntaxique permet de voir rapidement si quelque chose est une chaîne ou un code. Les chaînes seront affichées dans une couleur différente du code à traiter
{% endcallout %}
## 2 - Définition d’un bloc de code PHP
Dans un fichier source PHP, on définit une portion de code PHP grâce aux balises `<?php` et `?>`. Il est possible de définir plusieurs blocs de code dans un même fichier source PHP. À l’intérieur d’un bloc de code, on peut utiliser les fonctionnalités du langage. Considérons le petit script suivant, que nous appellerons essai.php
```html
<!doctype html>
    <head lang="fr">
        <meta charset="utf-8"/>
        <title>Ma première page PHP</title>
    </head>
    <body>
        <p>Affichons du texte avec PHP...</p>
        <p>Ce titre est écrit directement en HTML</p>
        <p>Celui-ci contient une partie <?php echo'générée avec PHP'?></p>
        <p><?php echo'Celui-là est entièrement généré avec PHP'?></p>
    </body>
</html>
```
En l’exécutant, nous obtiendrons le résultat suivant :
{% callout success%}
#### Résultat :
Ce titre est écrit directement en HTML  
Celui-ci contient une partie générée avec PHP  
Celui-là est entièrement généré avec PHP  
{% endcallout %}
Les fichiers php peuvent ne contenir que du code php. Considérons le petit script suivant, que nous appellerons essaiBis.php (notez la casse Camel !)
```php
<?php 
echo'Ce titre est écrit directement générée avec PHP';
echo'Celui-là est entièrement généré avec PHP';
```
En l’exécutant, nous obtiendrons le résultat suivant :
{% callout success%}
#### Résultat :
Ce titre est écrit directement générée avec PHP  
Celui-là est entièrement généré avec PHP  
{% endcallout %}
{% callout warning%}
#### **Avec ou sans `;` ?**
Lorsque la balise php entoure une seule ligne de code, il n’est pas nécessaire de mettre un ; à la fin de la ligne
Par contre, quand les lignes de code se suivent, il est nécessaire de terminer chaque ligne par un ;
{% endcallout %}
{% callout %}
#### **Avec ou sans `?>` ?**
Vous avez peut-être remarqué que le fichier ne se termine pas par un ?> pour correspondre à l’ouverture `<?php`. Vous pouvez le mettre si vous le souhaitez vraiment, mais ce n’est pas nécessaire. Si un fichier PHP se termine par du code PHP, il n’est pas nécessaire d’indiquer où ce code se termine ; la fin du fichier le fait pour vous. Les grands cerveaux du monde PHP préfèrent généralement le laisser à la fin de fichiers comme celui-ci qui ne contiennent que du code PHP
{% endcallout %}
## 3 - Affichage de texte
### a - La commande `echo
L’affichage de texte s’effectue grâce à la commande `echo`.
```php
<?php echo’Bonjour tout le monde !’;?>
```
On peut inclure des balises HTML dans le texte affiché par `echo`, ou bien inclure l’appel à `echo` dans des balises HTML. Ainsi, les deux appels suivants produisent exactement le même résultat.
```php
<?php echo'<p>Bonjour tout le monde !</p>';?>
<p><?php echo'Bonjour tout le monde !';?></p>
```
{% callout %}
#### **Conseil**
Sauf cas particulier, on utilisera plutôt la seconde technique, qui préserve mieux la structure HTML de la page.
{% endcallout %}
{% callout %}
#### **Note**
Il existe une syntaxe plus concise pour afficher du texte. Le code PHP `<?= 'Hello' ?>` équivaut à `<?php echo 'Hello'; ?>`.
{% endcallout %}
### b - Choisir les quotes
PHP prend en charge les simples quotes ' et les doubles quotes " pour encapsuler les chaînes. Dans la plupart des cas, ils sont interchangeables. Les développeurs PHP ont tendance à privilégier les guillemets simples, car nous traitons beaucoup de code HTML, qui a tendance à contenir beaucoup de guillemets doubles. Par exemple :
```php
echo '<a href="https://www.sitepoint.com">Click here</a>';
```
Si des guillemets doubles étaient utilisés ici, nous aurions besoin de dire à PHP que le guillemet après href= n’est pas la fin de la chaîne en plaçant un \ devant lui (connu sous le nom de caractère d’échappement) et de faire de même avec les guillemets que nous voulons réellement envoyer le navigateur dans le framework du HTML :
```php
echo "<a href=\"https://www.sitepoint.com\">Click here</a>";
```
Pour cette raison, les développeurs PHP utilisent des guillemets simples, bien qu’il existe des différences entre les deux guillemets. Pour nos besoins, ils sont effectivement interchangeables.

Vous verrez souvent qu’echo est codé avec des parenthèses entourant le nom du fichier, comme s’il s’agissait d’une fonction include comme date ou, htmlspecialchars ce qui est loin d’être le cas. Les parenthèses, lorsqu’elles sont utilisées, ne servent qu’à compliquer l’expression du nom de fichier et sont donc à éviter.
## 4 - Commentaires
Les commentaires vous permettent de décrire ce que fait votre code. Ils insèrent un texte explicatif dans votre code - texte que l’interpréteur PHP les ignorera. À l’intérieur d’un bloc de code PHP, on peut ajouter des commentaires avec les symboles communs à de nombreux langages de programmation :

- `//` pour un commentaire sur une seule ligne ;
- `/* ... */` pour un commentaire sur plusieurs lignes.

À l’extérieur d’un bloc PHP, on utilise la syntaxe HTML `<!-- ... -->` pour ajouter des commentaires.
```php
<h1>Affichons du texte avec PHP...</h1>
    <!-- un commentaire HTML -->
    ...
<h3><?php echo'Celui-là est entièrement généré avec PHP'?></h3>
// un commentaire PHP ?>
```
## 5 - l’indentation
Revenons à notre exemple. Le code n’est pas, en totalité, positionné à droite. À chaque nouveau bloc le code est décalé vers la droite. C’est ce qu’on appelle l’indentation. Elle existe dans tous les langages, c’est une bonne pratique qui rend le code plus lisible.
```html
<!doctype html>
  <head lang="fr">
    <meta charset="utf-8"/>
    <title>Ma première page PHP</title>
  </head>
  <body>
    <p>Affichons du texte avec PHP...</p>
    <p>Ce titre est écrit directement en HTML</p>
    <p>Celui-ci contient une partie <?php echo'générée avec PHP';?></p>
    <p><?php echo'Celui-là est entièrement généré avec PHP'?></p>
  </body>
</html>
```
{% callout %}
#### **Note**
Si avec des IDE comme Visual Studio Code l’indentation est souvent automatique, préférez les **tabulations** à des espaces.
{% endcallout %}
Si vous souhaitez couper une expression les bonnes pratiques sont les suivantes :

- faire un saut après une virgule,
- faire un saut après un opérateur (un + par exemple)
- aligner le début de la nouvelle ligne au même niveau que la précédente.
```php
function longMethodCall(expr1, expr2,
                   expr3, expr4, expr5);

Mauvais saut

$var = a * b / (c - g +

                     f) + 4 \* z;
```
Meilleure méthode
```php
$var = a * b / (c - g +f) +

                    4 \* z;
```
## 6 - Conventions de nommage
##### La notation hongroise
- On ajoute un préfixe à chaque variable pour indiquer son type.
- Exemple : `$btnRetour` pour bouton Retour
- Toutefois, les préfixes ne sont pas standardisés et on doit en inventer pour les nouveaux types.
- Puisque C# est un langage fortement typé et que la hiérarchie de classes est très stricte, on ne suggère pas d’utiliser cette notation.
##### La casse Pascal
- La première lettre est en majuscule.
- On sépare les mots en mettant leur première lettre en majuscule.
- Exemple : `$AfficherCustomer`
- Vous remarquerez que les espaces de noms et les classes de bases du Framework respectent cette casse.
##### La casse Camel
- La première lettre est en minuscule.
- On sépare les mots en mettant leur première lettre en majuscule.
- Exemple : `$testCompteur`
##### La casse Majuscule
- Toutes les lettres sont en majuscule pour les constantes d’une ou deux lettres
- Exemple : `$PI`
- Si le nom est trop long, utilisez la casse Pascal
  {% callout %}
#### Note
Il est fortement déconseillé de séparer les mots par des traits de soulignement (underscore) : `$Afficher\_Customer` est donc déconseillé.
{% endcallout %}
##### Nommage des noms
{% bs-table %}

| **Espaces de noms** | **On suggère d’utiliser le nom de la compagnie ou du produit en notation Pascal.**   |
|---------------------|--------------------------------------------------------------------------------------|
| Variables           | On utilise des noms en notation Camel.                                               |
| Classes             | On utilise un nom qui décrit les objets en notation Pascal.                          |
| Méthodes            | On utilise un verbe qui décrit exactement ce que fait la méthode en notation Pascal. |
| Paramètres          | On utilise des noms significatifs en notation Pascal.                                |
| Interfaces          | On utilise des noms en notation Pascal précédés d’un I majuscule.                    |
| Membres             | On utilise des noms en notation Camel.                                               |
{% endbs-table %}
## 7 - Inclure des portions de page
Les fichiers d’inclusion (également connus sous le nom d’includes) contiennent des extraits de code PHP que vous pouvez 
charger dans vos autres scripts PHP au lieu d’avoir à les retaper. Un fichier PHP peut inclure le contenu d’un autre 
fichier grâce à l’instruction `include`.
```php
<?php include 'monfichier.php';?>
```
Au moment de l’exécution, cette instruction sera remplacée par le contenu du fichier inclus.

Cette technique permet de centraliser le code des éléments communs à plusieurs fichiers PHP, comme des menus ou des pieds de page, pour éviter la duplication de code.
```html
<!doctype html>
  <head lang="fr">
    <meta charset="utf-8"/>
    <title>Une page PHP modulaire</title>
  </head>
  <body>
    <h3><?php include 'header.php';?></h3>
    <h3><?php include 'menu.php';?></h3>
    <!-- ... (contenu spécifique) -->
    <h3><?php include 'footer.php';?></h3>
  </body>
</html>
```
Vous verrez souvent qu'`include` est codé avec des parenthèses entourant le nom du fichier, comme s’il s’agissait d’une fonction include comme date ou, htmlspecialchars ce qui est loin d’être le cas. Les parenthèses, lorsqu’elles sont utilisées, ne servent qu’à compliquer l’expression du nom de fichier et sont donc à éviter. Vous pouvez considérer l’instruction include comme une sorte de copier-coller. Vous obtiendrez le même résultat en ouvrant un fichier PHP, en copiant le contenu et en le collant, en écrasant la ligne include.
{% callout %}
#### **Les types d’inclusions**
L’instruction include que nous avons présenté jusqu’à présent n’est en fait qu’une des quatre instructions qui peuvent être utilisées pour inclure un autre fichier PHP dans un script en cours d’exécution :
- include
- require
- include_once
- require_once
{% endcallout %}
La seule différence entre eux est ce qui se passe lorsque le fichier spécifié ne peut pas être inclus (c’est-à-dire s’il n’existe pas ou si le serveur Web n’a pas la permission de le lire). Avec `include`, 
un avertissement s’affiche et le script continue de s’exécuter. Avec `require`, une erreur s’affiche et le script s’arrête. 
 (Dans les environnements de production, les avertissements et les erreurs sont généralement désactivés dans `php.ini`. 
 Dans de tels environnements, un échec d’`include` n’a aucun effet visible (mis à part le manque de contenu qui aurait 
normalement été généré par l’inclusion fichier), tandis qu’un échec de `require` entraîne l’arrêt de la page au point d’échec. 
Lorsqu’un échec de require survient avant qu’un contenu ne soit envoyé au navigateur, l’utilisateur malchanceux ne verra rien d’autre qu’une page vierge !)

En général, vous devez utiliser `require` chaque fois que votre application ne fonctionnerait tout simplement pas sans 
le chargement du code requis. Cependant, je recommande d’utiliser `include` autant que possible. Même si le fichier de votre site ne peut pas se charger, par exemple, vous souhaiterez peut-être laisser le script de votre page d’accueil continuer à se charger. Aucun contenu de la base de données ne s’affichera, mais l’utilisateur pourra sûrement utiliser le lien Contactez-nous en bas de la page pour vous informer du problème !

`include_once` et `require_once` fonctionnent exactement comme include et require, respectivement - mais si le fichier spécifié a déjà été inclus au moins une fois pour la demande de page en cours (en utilisant l’une des quatre instructions décrites ici), l’instruction sera ignorée. C’est pratique pour inclure des fichiers qui exécutent une tâche qui ne doit être effectuée qu’une seule fois, comme la connexion à la base de données.

`include_once` et `require_once` sont également utiles pour charger des bibliothèques de fonctions.
## 8 - Je cherche mon chemin
{% callout %}
#### **Le chemin absolu**
Un chemin, dans le jargon du net, est une adresse d’une ressource. (La ressource étant un document, une image, une musique ... bref un fichier en général, ou encore un dossier). Par exemple, sous linux, pour désigner un fichier nommé "inscrits.php" dans un dossier "Documents", lui-même contenu dans le dossier "home" :
- Sous Linux/macOS, on notera : home/Documents/inscrits.php
- Sous Windows : `C:\home\Documents\inscrits.php`.
  {% endcallout %}
  Le début de chaine est le lecteur (C : sous Windows, mais cela n’existe pas sous Linux/MacOS) puis le (ou les) dossier(s) - ici, il y en a 2 - ensuite le nom du fichier pour finir.

N.B. : le caractère séparateur des noms de dossiers et des fichiers est le "slash" (symbole division) sous Linux ou MacOS : /. Sous Windows, c’est l’anti-slash (barre oblique inverse) : \.
{% callout %}
#### **Le chemin relatif**
C’est une méthode interne au site qui permet de se rendre d’une ressource à l’autre en se promenant dans l’arborescence. (L’arborescence est l’ensemble des dossiers contenant des dossiers ou des fichiers). Cette méthode ne dépend pas du nom de domaine, il suffit juste d’indiquer la marche à suivre pour aller d’une origine à une destination.

- inscrits.php : je cherche le fichier dans le repertoire courant
- archive/inscrits.php : je cherche le fichier dans le repertoire enfant
- ../inscrits.php : je cherche le fichier dans le repertoire parent
  {% endcallout %}
  Bien que cette méthode fonctionne, elle n’est pas souhaitable, car elle lie le code de votre site à la configuration de votre serveur Web. Idéalement, vous devriez être en mesure de déposer votre site Web basé sur PHP sur n’importe quel serveur Web compatible PHP et de le regarder fonctionner. Ceci est particulièrement important, parce que de nombreux développeurs vont créer un site sur un serveur, puis le déployer publiquement sur un autre serveur. Cela n’est pas pratique si votre code fait référence à des lecteurs et des répertoires spécifiques à un serveur particulier. Même si vous n’avez le luxe de travailler sur un seul serveur, vous serez vous-même coups de pied si vous avez besoin de déplacer votre site vers un autre lecteur / répertoire sur ce serveur.

Une meilleure méthode consiste à utiliser un chemin relatif. Autrement dit, l’emplacement d’un fichier par rapport au fichier actuel.

Mais il y a un problème potentiel lorsque vous incluez des fichiers de cette manière. Les chemins relatifs sont relatifs au script qui a été exécuté, pas à chaque fichier. Le répertoire de travail courant est défini au début du script et s’applique à toutes les instructions include, quel que soit le fichier dans lequel elles se trouvent. Pour rendre les choses encore plus confuses, il est possible de changer le répertoire de travail courant.
{% callout %}
#### **L’utilisation des constantes PHP**
Pour surmonter cela, nous devons en fait utiliser des chemins relatifs. Heureusement, PHP fournit une constante appelée \_\_DIR\_\_ (c’est-à-dire deux traits de soulignement, avant et après le mot DIR) qui contiendra toujours le chemin contenant le fichier courant. De plus la variable dirname correspondra à ../.
- \_\_DIR\_\_.'inscrits.php' : je cherche le fichier dans le repertoire courant
- \_\_DIR\_\_.'archive/inscrits.php' : je cherche le fichier dans le repertoire enfant
- dirname(\_\_DIR\_\_).'inscrits.php' : je cherche le fichier dans le repertoire parent
  {% endcallout %}
  Cette approche fonctionnera sur n’importe quel serveur, car \_\_DIR\_\_ différera selon l’emplacement de stockage du fichier et ne dépendra pas du répertoire de travail actuel changeant

- Sous Linux/MacOs : \_\_DIR\_\_.'inscrits.php' == home/Documents/inscrits.php
- Sous Windows : \_\_DIR\_\_.'inscrits.php' == C:\home\Documents\inscrits.php
## 9 - Configuration du serveur Web
Les serveurs Web peuvent avoir différentes configurations et spécifier un fichier différent comme index de répertoire. 
Cependant, sur la plupart des serveurs Web `index.php` fonctionnera sans autre configuration.
## 10 - Sécurisation avec les répertoires
{% callout %}
#### **Problèmes de sécurité**
Il vaut mieux ne pas laisser les gens exécuter, via l’URL, le code d’une manière dont vous ne vous attendez pas. 
En fonction de ce que fait la page, cela peut leur permettre de contourner les contrôles de sécurité que vous avez en 
place et d’afficher le contenu auquel ils ne devraient pas avoir accès.  
{% endcallout %}
Par exemple, considérez le code suivant :
```php
  if($_POST['password'] == 'secret') {
     include 'protected.html.php';
    }
```
En regardant ce code, il semble que vous deviez soumettre un formulaire et taper secret dans la zone de mot de passe pour voir le contenu protégé dans protected.html.php. Cependant, si quelqu’un, peut accéder directement à protected.html.php et voir le contenu de la page, cela rend le contrôle de sécurité redondant. Il existe d’autres problèmes de sécurité potentiels introduits en rendant tous vos fichiers accessibles via une URL. Éviter de tels problèmes de sécurité est facile. Vous pouvez en fait inclure des fichiers d’un répertoire autre que le répertoire public.

À partir de maintenant, nous n’écrirons les fichiers que dans le répertoire public auquel nous voulons que les utilisateurs puissent accéder directement à partir de leur navigateur Web. Le répertoire public contiendra tous les scripts PHP auxquels l’utilisateur doit accéder directement, ainsi que les images, les fichiers JavaScript et CSS requis par le navigateur. Tous les fichiers référencés uniquement par une instruction include seront placés en dehors du répertoire public afin que les utilisateurs ne puissent pas y accéder directement.


