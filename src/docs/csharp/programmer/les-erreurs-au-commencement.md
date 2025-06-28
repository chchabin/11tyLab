---
layout : "layouts/docs.njk"
title : "Les Erreurs Au Commencement"
description : "Les erreurs de débutant ou les antipattern"
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-02T11:36:53+02:00"
draft : false
---
## 1 - Le nommage ambigu
Dans le cas d’un programme avec beaucoup de lignes de code, le nommage des variables ou des fonctions, par exemple, permet au développeur ou à d’autres de suivre le cheminement de la logique du codeur.

L’utilisation des conventions de nommage permet aussi au développeur d’identifier les types complexes utilisés (de faire la différence entre une variable et un objet, par exemple).

Voici un exemple :
```csharp
string a = "Jean";
int b = 20;
if(b > 18) {
  Console.Write($"tu es majeur {a}");
}
```
Il serait plus judicieux de remplacer `a` par nom et `b` par age.
```csharp
string nom = "Jean";
int age = 20;
if(age > 18) {
 Console.Write($"tu es majeur {nom}");
}
```
Un autre exemple :
```csharp
void ok(int b){
if(b > 18) {
 Console.Write("tu es majeur");
}
```
Le nom de la fonction et la variable ne sont pas explicite. Il faudrait mieux écrire
```csharp
void estMajeur(int age){
if(age > 18) {
 Console.Write("tu es majeur");
}
```
## 2 - Les commentaires
### a - Ne pas documenter son code
**Il faut documenter son code**. Le code n’est pas quelque chose de fixe dans le temps, la technicité du programmeur évolue, ainsi que son analyse des problèmes. Ceci va donc influer sur sa façon de coder.
### b - Over - commenter son code
La seconde erreur est de trop commenter son code. Voici un exemple :
```csharp
// Le nom vaut Jean
string a = "Jean";
// si l’age est supérieur à 18
int b = 20;
if(b > 18) {
 // La personne est majeur
 Console.Write($"tu es majeur {a}");
}
```
Quand les variables sont suffisamment explicites, il n’est pas nécessaire de commenter ce code. Un autre exemple :
```csharp
// fonction permettant de savoir si une personne est majeur
bool ok(int b){
 // retourne vrai si majeur
if(b > 18) {
 return true;
}
```
Ici le commentaire n’a pas grand intérêt. Commenter son code, c’est avant tout, donner les exemples qui illustrent les intentions du programmeur. Dans le cas d’une fonction, c’est aussi, préparer les tests unitaires.
```csharp
// estMajeur(19) return true
// estMajeur(3) return null
bool estMajeur(int age){
if(age > 18) {
 return true;
}
```
Un code se butine, c’est-à-dire que son programmeur le fait évoluer, il le modifie, qu’il soit ou non débutant.

De plus, le code n’est pas forcément destiné à une seule personne, la programmation est le plus souvent un travail d’équipe et le code doit être "lisible" pour toute l’équipe.
## 3 - Les magic string et les magic numbers
Ce sont des chaines de caractères ou des nombres qui ne sont pas déclarés dans le code. Ils sont difficilement modifiables, 
car caché dans la masse du code. Il serait plus judicieux de changer le code suivant :
```csharp
// estMajeur(19) return true
// estMajeur(3) return null
bool estMajeur(int age){
if(age > 18) {
 return true;
}
```
par :
```csharp
const int ageMajeur = 18;
// estMajeur(19) return true
// estMajeur(3) return null
bool estMajeur(int age, int ageMajeur){
if(age > ageMajeur) {
 return true;
}
```
Cet exemple est peu explicite, car l’age de la majorité change peu. Si nous prenons un calcul de TVA l’exemple aura plus de sens, 
parce que la TVA change souvent.
```csharp
const int tvaNormal = 0.2;
double montantTTC(double montantHT, int tvaNormal){
 return montantHT \* (1 + tvaNormal);
}
```
## 4 - gibsy wagon & poltergeist
gibsy wagon & poltergeist peuvent être traduit comme diseuse de bonne aventure et esprit frappeur. L’objectif est de faire ce qui correspond aux besoins et ne pas trop anticiper les évolutions futures. Soit par exemple :
```csharp
class Animal{
 private string nom;
 Animal(nom){
    this.nom=nom
 }
}
```
Maintenant appliquons la class courir à l’animal :
```csharp
class Runner{
private Animal animal;
 Runner(animal){
    this.animal=animal
 }
 run(){
    Console.Write($"L’animal {this.animal.getNom()} cour");
 }
}
```
Maintenant appliquons la class parler à l’animal :
```csharp
class Speaker{
 private Animal animal;
 Speaker(animal){
    this.animal=animal
 }
 speak(){
    Console.Write($"L’animal {this.animal.getNom()} parle");
 }
}
```
Maintenant instancions ces classes
```csharp
Animal chien = new Animal("Mowgli");
Runner run= new Runner(chien);
Speaker speak= new Speaker(chien);
run.run();
speak.speak();
```


Ce code est trop lourd pour appeler 2 méthodes. Une écriture simple serait :
```csharp
class Animal{
 private string nom;
 Animal(nom){
    this.nom=nom
 }
 run(){
    Console.Write($"L’animal {this.nom} cour");
 }
 speak(){
    Console.Write($"L’animal {this.nom} parle");
 }
}
```
L’appel serait alors
```csharp
Animal chien = new Animal("Mowgli");
chien.run();
chien.speak();
```

## 5 - Le code mort ou le lava flow.
Le Lava Flow se trouve couramment dans les systèmes issus de la recherche, mais qui ont fini par être produits. Il se caractérise par des "flux" de lave des versions de développement précédentes éparpillées dans le paysage du code, qui se sont maintenant durcies en une masse de code semblable à du basalte, immobile et généralement inutile dont personne ne peut se souvenir de grand-chose, voire de rien.

{% figure-abs "/images/csharp/lavaflow.png" "lavaflow" "100%" "100%" %}

## 6 - Duplication de code et copier-coller
La duplication de code sans vérification entraîne des incohérences. La meilleure solution étant encore de factoriser les parties communes, ou de rajouter des paramètres, au lieu de les dupliquer.
{% callout %}
**Répétition :**  
Il ne faut pas faire plus de **3 fois** la même chose.
{% endcallout %}
Si vous voyez quelque chose qui se répète, votre premier réflexe doit être de chercher à factoriser le code, parce que moins de code, c’est moins de bugs, et c’est un programme plus facile à comprendre.

Le danger est d’obtenir une programmation spaghetti. Ceci fait référence à l’image d’un plat de spaghetti, dans lequel il serait impossible de modifier une petite partie du logiciel sans altérer le fonctionnement de tous les autres composants.
