---
layout : "layouts/docs.njk"
title : "Les Fichiers"
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

En C#, la plupart des périphériques sont considérés comme des ﬂux entrants et sortants. Cela signifie que si le ﬂux n’est pas mémorisé, les données transmises sont perdues (un peu comme une chaîne en direct : si vous êtes absent de l’écran, les informations sont perdues).

{% figure-abs "images/csharp/buffer.png" "Le buffer" "100%" "100%" %}


Comme la plupart des périphériques acceptent les entrées et les sorties, cela multiplie par deux les ﬂux et buffets à déclarer.
{% callout danger%}
**ATTENTION**
la lecture d’un ﬂux vide entraîne la génération d’une exception qui bloque l’exécution du programme.
{% endcallout %}
Ainsi, la plupart du temps (et c’est aussi vrai en Java), il faudra ouvrir le ﬂux et ouvrir un buffer :

1. Ouvrir le ﬂux du fichier
2. Ouvrir le buffet du ﬂux du fichier
3. Lire/Écrire dans le buffer
4. Fermer le buffer
5. Fermer le ﬂux

Code pour la lecture dans un fichier :
```csharp
using System;
namespace FileReadExample
{
    class HelloWorld {
    static void Main() {
        FileStream monFlux = null ; // Créer un objet flux (en direct)
        StreamReader reader = null; // Créer un objet lecteur de flux (bufferise)
        string fileContent = "";
        try
        {
            // Ouverture
            monFlux = new FileStream(@"e:\test.txt",FileMode.Open);
            reader = new StreamReader(monFlux, Encoding.UTF8);
            // Lecture
            Console.WriteLine("Votre fichier contient : ");
            fileContent = reader.ReadToEnd();
            Console.WriteLine(fileContent)3
        }
        catch (Exception ex)
        {
            Console.WriteLine("Erreur de lecture !"+ex.Message);
        }
        finally
        {
            // Fermeture
            if (reader != null)
            { reader.Dispose(); // Fermer le buffer (libère sa mémoire)}
            if (reader != null)
            { monFlux.Dispose(); // Fermer le fichier (libère 1e canal)}
        }
    }
}
```
Code pour l’écriture dans un fichier :
```csharp
using System;
namespace FileReadExample
{
    class HelloWorld {
    static void Main() {
        FileStream monFlux = null ; // Créer un objet flux (en direct)
        StreamWriter writer = null; // Créer un objet lecteur de flux (bufferise)
        string fileContent = "";
        try
        {
            // Ouverture pour ajouter une donnée
            monFlux = new FileStream(@"e:\test.txt",FileMode.Append);
            using (writer = new StreamWriter(monFlux, Encoding.UTF8));)
            {writer.WriteLine()"Écriture d’une ligne"; // Écriture}
            Console.WriteLine("L’écriture s’est correctement réalisée ");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Erreur de lecture !"+ex.Message);
        }
        finally
        {
            // Fermeture
            if (reader != null)
            { writer.Dispose(); // Fermer le buffer (libère sa mémoire)}
            if (reader != null)
            { monFlux.Dispose(); // Fermer le fichier (libère 1e canal)}
        }
    }
}
```
