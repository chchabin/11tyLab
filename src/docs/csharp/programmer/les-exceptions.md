---
layout : "layouts/docs.njk"
title : "Les Exceptions"
description : ""
group : "programmer"
section : "csharp"
toc : true
date : "2022-09-02T11:36:26+02:00"
draft : false
---
{% callout %}
**Info**
Pour faciliter la compréhension du langage, nous utiliserons le mode console.
{% endcallout %}
## 1 - Principe et code
{% callout %}
**Définition**  
Une exception est un évènement qui apparaît pendant le déroulement d’un programme et qui empêche la poursuite normale de son exécution.
{% endcallout %}
Autrement dit, une exception représente un problème qui survient dans un certain contexte : base de données inaccessible, mauvaise saisie utilisateur, fichier non trouvé...  
Comme son nom l’indique, une exception traduit un évènement exceptionnel et a priori imprévisible. Pour essayer de répondre à ce problème, le programmeur doit mettre en place un mécanisme de gestion des exceptions.

En général, les instructions susceptibles de poser de tels problèmes sont placées dans un bloc try-catch.  
Lorsque le problème se pose effectivement, le programmeur est censé l’avoir anticipé et avoir prévu dans la partie catch 
du bloc une manière de récupérer la situation, un filet de sûreté, aﬁn de reprendre le code à ce stade.  

Sans cela, le code s’interrompt en déclenchant juste l’exception.  

En présence du `try-catch`, le code continue et exécute le remède que le programmeur a prévu en réponse à ce problème. Un ensemble d’exceptions déjà répertoriées (comme le fameux NullPointerException « en Java ») existent dans les librairies associées aux différents langages de programmation et ne demandent alors qu’à être simplement « rattrapées ». En héritant de la classe Exception (comme dans le code ci-après), le programmeur peut créer ses propres classes d’exception, en accord avec la logique de son code et de manière à bénéficier de ce mécanisme de gestion d’exceptions prêt-à-l’emploi.

Reprenons le code pour la lecture dans un fichier :
```csharp
using System;
namespace FileReadExample
{
    class HelloWorld {
    static void Main() {
        FileStream monFlux = null ;
        StreamReader reader = null;
        string fileContent = "";
        try  // code susceptible de lever des exceptions
        {
            if (reader != null)
            { throw new Exception ("Le buffer n’est pas vide"); }
            monFlux = new FileStream(@"e:\test.txt",FileMode.Open);
            reader = new StreamReader(monFlux, Encoding.UTF8);
            
            // Lecture
            Console.WriteLine("Votre fichier contient : ");
            fileContent = reader.ReadToEnd();
            Console.WriteLine(fileContent)3
        }
        catch (Exception ex) // code de gestion de l’exception qui s’est produite dans le bloc try
        {
            Console.WriteLine("Erreur de lecture !"+ex.Message);
        }
        finally // code qui sera exécuté sans ou avec une exception.
        {
            if (reader != null)
            { reader.Dispose(); }
            if (reader != null)
            { monFlux.Dispose();}
        }
    }
}
```
## 2 - Détail du fonctionnement des exceptions
Une exception est un objet
Intéressons-nous à la partie du code précédent qui lève une exception
```csharp
throw new Exception ("Le buffer n’est pas vide");
```
On voit que l’exception est instanciée comme un objet classique grâce au mot-clé new, puis levée (ou encore "jetée") grâce au mot-clé throw.

Analysons le contenu du bloc catch.
```csharp
Console.WriteLine("Erreur de lecture !"+ex.Message);
```
{% callout %}
**Bonne pratique**
L’usage des exceptions doit rester réservé aux cas exceptionnels, une méthode ne lève une exception qu’en dernier recours pour signaler qu’elle est incapable de continuer à s’exécuter normalement.
{% endcallout %}
## 3 - Créer ses exceptions
La classe Exception propose également des méthodes comme ToString, qui renvoient des informations plus détaillées sur l’erreur.

Il est possible de dériver cette classe afin de créer nos propres classes d’exception
```csharp
public class MonException:Exception
{
    public MonException(string message):base(message) { }
}
```
Elle pourra être appelée dans le programme :
```csharp
throw new MonException ("mon erreur");
```
En règle générale, on ne crée de nouvelles classes d’exception que dans les cas suivants :

- on souhaite distinguer ses propres exceptions des exceptions standards.
- on a besoin de véhiculer dans les exceptions des données spécifiques au programme.
{% callout %}
**Remarque**
Dans la plupart des situations courantes et pour des projets ne dépassant pas une certaine complexité, l’utilisation de la classe standard Exception suffit.
{% endcallout %}
Il existe d’autres solutions que l’utilisation des exceptions pour gérer les erreurs qui peuvent se produire durant l’exécution d’un programme. Cependant, les exceptions apportent de nombreux avantages. Le principal est qu’elles permettent de regrouper et de différencier le code de gestion des erreurs du code applicatif.

Sans utiliser d’exceptions, on est obligé de tester la réussite de chaque opération au fur et à mesure du déroulement.
