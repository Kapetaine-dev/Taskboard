# Explication cours : 
Un observable :  Un Observable est un flux de données asynchrones qui émet des valeurs au fil du temps.
                Il peut : émettre des valeurs avec next(), signaler des erreurs et se compltérer avec complete() pour
                signaler la fin d'un flux !




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