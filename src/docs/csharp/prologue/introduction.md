---
layout : "layouts/docs.njk"
title : "Introduction"
description : ""
group : "prologue"
section : "csharp"
toc : true
date : "2022-08-18T14:08:58+02:00"
draft : false
---

## A - Qu’est-ce qu’une machine ?
Oubliez terminator ! La machine est un ensemble de composants électroniques.

{% figure-abs "images/csharp/machine.png" "la machine" "100%" "100%" %}
##### **La machine a des caractéristiques peu pratiques :**
1. elle est muette : pour connaitre une information, elle doit poser une question, le plus souvent à l’écran,
2. elle est sourde : pour obtenir une information, elle doit analyser les données saisies, le plus souvent au clavier,
3. elle est limitée : elle ne peut que faire des calculs, à partir des informations saisies et elle doit pouvoir les stocker,
4. elle est muette : une fois ses calculs faits, elle devra les restituer, le plus souvent à l’écran.
## B - L’art de bien programmer
### a - Principe de programmation
##### **Programmer, c’est quoi ?**
- Utiliser un **langage de programmation**,
- Donner des **ordres** clairs à l’ordinateur,
- Être capable de **structurer** ces ordres.
##### **Programmer c’est, répondre à un besoin !**
- **Analyse** des besoins et de l’application à mettre en place,
- **Développement** de l’application,
    - Mise en œuvre des éventuelles bases de données,
    - Programmation,
- **Déploiement** et maintenance.
##### **Avant de programmer...**
Donner des ordres à un ordinateur, c’est :

- Utiliser un **vocabulaire** qu’il comprend,
- Respecter un certain ordre afin d’aboutir au résultat souhaité.
### b - Les langages de programmation
Il existe plusieurs langages de programmation, certains sont propres à une technologie, d’autres n’existent plus tandis que de nouveaux langages naissent pour répondre à de nouveaux besoins.
##### **Le Langage Machine**
Il s’agit du langage le plus proche du binaire. Le microprocesseur ne peut comprendre que des codes binaires, mais les programmeurs préfèrent des mots.

Le langage machine utilise des codes binaires, et l’assembleur utilise donc un dictionnaire dans lequel chaque mot correspond à un code binaire compréhensible par le processeur.
```batch
MOV EAX, OXOlOZO3O4 A101020304
```
Si c’est le langage le plus rapide, il a comme inconvénient que chaque processeur utilise ses propres codes (EAX est un registre sur les processeurs Intel, qui n’existe pas sur ARM, Motorola, ...)
##### **Les Langages Compilés**
Pour éviter l’inconvénient de devoir taper plusieurs codes pour faire le même programme sur plusieurs processeurs, sont apparus les langages compilés.

Le langage de développement utilise des instructions proches des mots humains (en anglais) : for, if, else, print, etc.

Exemple de programme en Delphi (Pascal)
```php
procedure TForm1.Draw();

var
    i, j, k: Integer;
begin
    for j:=6 to 4 do
        for i:=0 to 4 do
            begin
                k:=tab\_int[i,j];
                img\_screen.Canvas.Draw(i\*100,j\*100,tab\_img[k].Picture.Graphic);
            end;
end;
```
Il faut ensuite utiliser un programme appelé compilateur, qui va traduire ces instructions en code machine. Il est donc évident qu’il faut créer autant de compilateur qu’il existe de processeur. Pour le développeur, c’est transparent (c’est la société, qui vend les compilateurs, qui fait le travail).

Il reste cependant un inconvénient : chaque machine utilise du matériel différent (résolution d’écran différente, emplacement mémoire différent, etc) et il reste difficile de créer un programme compatible avec plusieurs architectures.

Dans un langage compilé, le compilateur génère un nouveau fichier qui sera autonome, c’est-à-dire qui n’aura plus besoin d’un programme autre que lui pour s’exécuter ; on dit d’ailleurs que ce fichier est exécutable. Le programme est directement exécuté sur l’ordinateur, donc il sera en général plus rapide que le même programme dans un langage interprété.
##### **Les langages interprétés.**
L’interprétation du code source est un processus « pas à pas » : l’interpréteur va exécuter les lignes du code une par une, en décidant à chaque étape ce qu’il va faire ensuite.
L’interpréteur se trouve le plus souvent dans le navigateur. Il exécute les langages comme php, javascript, python ...
### c - Les versions
Le développeur découpe un numéro de version en trois parties : majeure, mineure et patch. Pour le numéro de version 1.2.3,
1 indique la version majeure, 2 la version mineure et 3 la version patch.

1. version publiée
2. ajout d’une fonctionnalité à la version 1
3. révision de la version 1.2

Pour plus de détails, vous pouvez consulter ce [site](https://semver.org/lang/fr/).
{% bs-table %}

| Différentes manières d’exprimer des versions |                  |                                    |                                |
|----------------------------------------------|------------------|------------------------------------|--------------------------------|
| **Symbole<br>-**                             | **Version<br>-** | **Représentation <br>alternative** | **Représentation <br>étendue** |
|                                              | 1.0.0            | -                                  | -                              |
| ^                                            | ^1.0.0           | 1.x.x                              | >=1.0.0 <2.0.0                 |
| ~                                            | ~1.0.0           | 1.0.x                              | >=1.0.0 <1.1.0                 |
| \*                                           | \*               | x.x.x                              | >=0.0.1                        |
{% endbs-table %}
### d - Phases d'un projet
En conception de programme, la terminologie des phases de développement indique l’état d’avancement à travers les étapes dans le respect des spécifications élaborées aux étapes précédentes et ce qui reste à accomplir.
Une phase de développement est associée à une des étapes d’un cycle de développement.
Suit en ordre chronologique, les différentes phases possibles d’un logiciel.
1. Au début né l’idée  
   *Etude des besoins.*
2. Cahier des charges  
   *Formalisation*.
3. Conception  
   *Sur le papier*
4. Maquette  
   *Comment se présente le logiciel aux yeux de ses requérants amont et aval - personnes physiques utilisatrices ou couches d’abstraction... Aucune fonctionnalité n’est encore implémentée. Simples modélisations, par exemple, des écrans (interfaces utilisateur) et des documents de sortie (mise en page des impressions, etc.). La maquette peut n’être qu’un simple crayonné.*
5. Prototype  
   *Juste les premières lignes de code et les entrées/sorties, à montrer au client*
6. Pré-Alpha  
   *Quelques formalisations*
7. Alpha test  
   *Phase du premier jet d’écriture du logiciel. Quelques fonctionnalités seulement commencent à être implémentées afin
   de confirmer ou infirmer l’architecture des composants et sa validité. Version de tests, sur des jeux d’essais, réservée aux techniciens de la chose, généralement en interne (au sein de la société de développement - chef de projet, analystes) ou à un pool très restreint de personnes de confiance, souvent cooptées. Il peut y avoir plusieurs versions alpha successives (alpha 1, alpha 2, alpha 3, alpha 4, alpha 5, etc.).*
8. Bêta test  
   *Version de test ouverte à un public s’attendant à des erreurs, s’engageant à tester et faire des rapports de tests. Il peut y avoir plusieurs versions bêta successives (bêta 1, bêta 2, bêta 3, bêta 4, bêta 5, etc.).*
9. Nightly  
   *Hors du cycle des Alpha, Beta, RC, etc. Il y a les versions servant de laboratoire en continu, à destination d’utilisateurs avancés observant de près les injections de codes nouveaux répondant à une demande ou une suggestion. Il s’agit de tester ce nouveau code. Les compilations ont lieu en flux continu, généralement de nuit, tous les jours, d’où le qualificatif de Nightly. On y trouve des ébauches de fonctionnalités qui seront probablement incorporées officiellement dans la troisième ou quatrième version stable suivant celle actuelle (ou totalement abandonnées), mais, en attendant, il faut voir comment elles se comportent dans un vaste ensemble de contextes utilisateurs différents, et simplement voir si l’implémentation de la fonctionnalité répond à la suggestion faite auparavant, est critiquée, fait l’objet de nouvelles suggestions, d’un autre interface homme/machine, etc. C’est une soumission aux testeurs (appelée « commit » en anglais).*
10. Phase RC (Release Candidate ou préversion)  
    *Version très proche de la version finale, mais pas encore totalement finalisée. Il s’agit de confronter l’application à d’innombrables combinaisons de matériels / logiciels / situations utilisateurs et de faire les derniers ajustements. Il peut y avoir plusieurs versions RC successives (RC 1, RC 2, RC 3, RC 4, RC 5, etc.).*
11. Version finale  
    *Version " stable " (bien qu’il n’existe pas de programme 100% sans erreurs). L’utilisateur " normal " (l’utilisateur final) ne doit utiliser que des versions finales des logiciels. Toutes les versions précédentes sont vivement déconseillées.*
12. Révisions  
    *Dans la vie d’un logiciel, il y aura plusieurs versions finales successives (révisions) apportant des correctifs (de sécurité ou de fonctionnalités).*

## C - La culture et les bonnes pratiques
### A - Garder des choses simples
L’art du technicien, c’est de chercher la simplicité. Plus c’est simple, plus c’est mignon.

La simplicité s’exerce à deux niveaux :

- le niveau technique,
- le niveau de temps

Que ce soit dans un cadre professionnel, scolaire ou personnelle, les journées ne font que 24 heures, et personne ne passe son temps à faire toujours et tout le temps la même chose

Pour appréhender un problème, il faut le faire **méthodiquement**, partir du simple pour aller au plus compliqué.
En informatique et souvent dans d’autres domaines, un problème compliqué est une somme de problèmes simple.
Le tout est de faire une bonne analyse, c’est ce à quoi doit aboutir un débutant, avant de foncer tête bêche.
##### **L’automatisation**
{% callout warning %}
#### **Répétition**
Il ne faut pas faire plus de **3 fois** la même chose.
{% endcallout %}
Si vous voyez quelque chose qui se répète, votre premier réflexe doit être de chercher à factoriser le code, parce que moins de code, c’est moins de bugs, et c’est un programme plus facile à comprendre.

Pour ne pas se répéter, il faut automatiser les processus.

Ceci est vrai :

- pour le code,
- pour des applications, comme votre title :"Éditeur de Développement Intégré" class="initialism">ide, que ce soit visual studio, sublime text ...

Il est nécessaire d’identifier :

- les points de répétition,
- les points à faible valeur ajoutée, qui peuvent être automatisés.
### B - La culture du savoir
Voici une petite vidéo qu’il est intéressant de voir et revoir plus tard :
[Mes projets web se passent toujours bien !](https://www.paris-web.fr/2014/conferences/mes-projets-web-se-passent-toujours-bien.php)
##### **Documentez vous**
{% callout warning %}
#### **Super Hero**
Personne ne connait tout sur tout, même les professionnels les plus aguerris. Cela ne se voit qu’à la **télévision** !
{% endcallout %}
Voilà pourquoi, il faut **toujours** avoir une **documentation avec soi**. Peu importe qu’elle soit technique, de cours ou de notes.
##### **Commentez votre code**
Le code n’est pas quelque chose de fixe dans le temps, la technicité du programmeur évolue, ainsi que son analyse des problèmes. Ceci va donc influer sur sa façon de coder.

Un code se butine, c’est-à-dire que son programmeur le fait évoluer, il le modifie, qu’il soit ou non débutant.

De plus, le code n’est pas forcément destiné à une seule personne, la programmation est le plus souvent un travail d’équipe et le code doit être "lisible" pour toute l’équipe.

Commenter son code, ce n’est pas commenter une boucle ou un si. C’est avant tout, **donnez les exemples** qui illustrent les intentions du programmeur.
##### **Tester son code**
Le test simple consiste à prévoir tous les cas possibles auxquels sera soumis le code. Ce sont d’ailleurs ces cas qui serviront le plus souvent de commentaire.

Lorsque les programmes sont plus longs et plus complexes, le programmeur aura recours aux tests automatisés. Ils limiteront les erreurs.
### c - Un travail qualitatif
La qualité est quelque chose de subjectif. Elle varie en fonction de la personne concernée.
Elle sera différente selon que l’on est :

- un débutant,
- un étudiant,
- un professeur,
- un développeur,
- un client.

Il faut se donner des **bonnes pratiques** pour soi et ses collègues.

Les bonnes pratiques sont souvent liées à une technologie ou un métier.