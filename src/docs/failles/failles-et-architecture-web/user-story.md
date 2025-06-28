---
layout : "layouts/docs.njk"
title : "`user story` "
description : ""
group : "failles-et-architecture-web"
section : "failles"
toc : true
date : "2022-12-03T08:53:25+01:00"
draft : false
---
Littéralement "histoire utilisateur", le terme "scénario client" est également utilisé. Dans les deux cas, il s'agit de mettre en avant l'aspect narratif ("voici ce qui se passe") et d'autre part le point de vue adopté, celui, non technique, de l'utilisateur ou du donneur d'ordres ("client").

## De quoi s'agit-il?
L'intégralité du travail à réaliser est découpée en incréments fonctionnels et les activités de développement s'organisent autour de ces incréments appelés "User Stories".

Adopter la pratique des User Stories implique de tenir pour généralement vraies un certain nombre d'hypothèses sur ces incréments : on peut les réaliser dans un ordre arbitraire, et chacun indépendamment des autres peut avoir une valeur pour l'utilisateur.

Pour rendre ces hypothèses très concrètes, on privilégie une représentation (on peut même parler de réification) de ces User Stories sous une forme bien précise : la fiche cartonnée ou le Post-It, qui en renforcent le caractère atomique et manipulable par tous les intervenants du projet.

## Quel est vraiment le besoin ?
Même si cela peut paraitre simple dans un grand nombre de cas, il n’est pas toujours si évident de définir l’utilisateur clé qui a le besoin. Pourquoi ?

Il n’est pas rare dans les entreprises que les demandes soient écrites par des « métiers » qui ne connaissent pas réellement leurs utilisateurs. Ils font des demandes en pensant bien faire… Mais parfois le besoin n’est pas réel.

Du coup le Product Owner qui est un intermédiaire supplémentaire n’a aucune information sur le besoin réel, voire peut avoir une vision erronée de celui-ci.

Savoir que le « client final » est l’utilisateur de la `user story` ci-dessous semble facile à deviner :


## Quels bénéfices en attendre ?
La pratique des User Stories conduit à un développement incrémental, et doit permettre d'en réaliser les bénéfices, notamment

- une réduction des risques liés à l'effet tunnel, d'autant plus importante

    - que les incréments sont de petite grandeur

    - que les mises en production ont lieu tôt et fréquemment

- pour le donneur d'ordres, la possibilité de changer d'avis en cours de route sur les détails d'implémentation ou la priorité donnée à une `user story` non encore réalisée

- pour les développeurs, l'obtention de critères d'acceptation et de validation clairs et précis, et la validation de leur travail au fil de l'eau

- la possibilité "d'auto-financer" le projet en réalisant très tôt les bénéfices d'une mise en exploitation rendue possible par l'approche incrémentale

- en scindant clairement le "quoi" et le "comment" (les donneurs d'ordre doivent se cantonner à décrire le "quoi" à savoir les objectifs, les développeurs restants une force de proposition sur le "comment"), permettre d'exploiter au mieux le talent et la créativité de chacun

Même si cela peut paraitre simple dans un grand nombre de cas, il n’est pas toujours si évident de définir l’utilisateur clé qui a le besoin. Pourquoi ?

Il n’est pas rare dans les entreprises que les demandes soient écrites par des « métiers » qui ne connaissent pas réellement leurs utilisateurs. Ils font des demandes en pensant bien faire… Mais parfois le besoin n’est pas réel.

Du coup le Product Owner qui est un intermédiaire supplémentaire n’a aucune information sur le besoin réel, voire peut avoir une vision erronée de celui-ci.

Savoir que le « client final » est l’utilisateur de la `user story` ci-dessous semble facile à deviner :
{% callout %}
"En tant que client, je souhaite ajouter un produit au panier"
{% endcallout %}
Mais ce ne sera pas toujours aussi simple… Partons sur un exemple de `user story` plus complexe cette fois.
{% callout %}
"En tant que logisticien, je souhaite cliquer sur un bouton pour indiquer qu'une commande est livrée"
{% endcallout %}
Si cette `user story` agile semble bien écrite au premier abord, elle n’est probablement pas correcte en réalité ; un logisticien a-t-il réellement un besoin de cliquer sur un bouton ? Cela ressemble plutôt à une action requise pour répondre à un besoin.

Voici la `user story` qui présente le besoin réel qui se cache derrière cette demande :
{% callout %}
"En tant que client, je souhaite être informé que ma commande va être livrée afin de pouvoir la réceptionner"
{% endcallout %}

En effet, c’est le client qui a le réel besoin d’être informé de la livraison du produit et non pas le logisticien qui a le besoin de cliquer sur un bouton. C’est tendancieux, je vous l’accorde, mais c’est très important de bien comprendre le besoin initial pour savoir y répondre au mieux.

Se focaliser sur le logisticien dans ce cas risque de nous faire oublier que c’est surtout sur le client qu’il faut se focaliser et de ne pas faire une fonctionnalité parfaite pour le client.

L’utilisation de « En tant que » n’est pas suffisant dans l’écriture d’une `user story` ; il est impératif de bien cerner le besoin réel de l’utilisateur clé comme vous pouvez le constater.

## Ma `user story` agile est-elle bien INVEST ?

Une `user story` doit vraiment être INVEST pour être de bonne qualité :

- I pour indépendante des autres user stories (au moins sur le sprint de prise en charge)
- N pour négociable (entre les différents acteurs et intervenants),
- V pour qui propose de la valeur pour les utilisateurs clés
- E pour estimable
- S pour suffisamment petite (de façon à être développable en 1 sprint)
- T pour testable.