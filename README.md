# Explication cours : 
Un observable :  Un Observable est un flux de données asynchrones qui émet des valeurs au fil du temps.
                Il peut : émettre des valeurs avec next(), signaler des erreurs et se compltérer avec complete() pour
                signaler la fin d'un flux !

Le LAZY LOADING : Au lieu de charger tout le code de l'app au démarrage, tu charges seulement ce qui est nécessaire quand l'utilisateur en a besoin.

À quoi ça sert ?

Démarrage plus rapide — la page initiale charge moins de code, donc elle s'affiche plus vite.
Moins de données téléchargées — si l'utilisateur ne visite jamais la page tasks, ce code n'est jamais téléchargé.
Meilleure expérience utilisateur — surtout important sur mobile / connexions lentes.



### Structure du flux
Le service TaskService utilise un BehaviorSubject pour stocker et diffuser la liste des tâches.
Le composant 'Home s'abonne à ce flux via 'tasks$' et le pipe async.
### Mise à jour des données
La méthode addTask() ajoute une tâche puis appelle next() pour émettre la nouvelle liste.
La méthode removeTask()* supprime une tâche puis émet à nouveau la liste mise à jour.
La vue est automatiquement réactualisée sans rechargement.
### Points clés retenus
Pas besoin d'appeler. getTasks() à chaque fois : la donnée est vivante.
-'| async' gère l'abonnement et le désabonnement automatiquement.
Le flux reste cohérent entre le service et la vue.