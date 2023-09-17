# Github Search Interface

Ce projet est une interface de recherche Github développée en React et TypeScript, et créée avec ViteJS. Elle permet aux utilisateurs de rechercher des dépôts sur Github et de les marquer comme favoris. La liste des favoris est conservée en mémoire tant que l'utilisateur est sur l'application.

## Fonctionnalités

### Recherche en temps réel :

La recherche se fait en temps réel avec une fonctionnalité de debounce pour éviter les appels API excessifs.

### Marquage des favoris :

Chaque résultat de recherche dispose d'un bouton permettant de le marquer comme favori.

### Liste des favoris :

Les utilisateurs peuvent accéder à une liste de leurs dépôts favoris.

### Évaluation des favoris :

Dans la liste des favoris, chaque dépôt peut être évalué de 1 à 5.

### Suppression des favoris :

Les utilisateurs ont également la possibilité de retirer des dépôts de leur liste de favoris.

## Comment démarrer ?

1- Cloner le dépôt

Effectuez les actions suivantes dans votre ligne de commande :

`git clone https://github.com/Pierre-ptlt/github-search-interface.git`

2- Une fois à la racine du projet, installez les dépendances

`npm install`

3- Démarrez le serveur de développement

`npm run dev`

Une fois l'application lancée, elle sera accessible à l'adresse [http://localhost:5173/](http://localhost:5173/) sur votre navigateur
