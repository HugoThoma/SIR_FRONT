# Lancement du Front

Avant de commencer à visualiser le front, il est impératif de lancer le RestServeur qui represente le back en y accédant sur le git https://github.com/HugoThoma/JaxRSOpenAPI/tree/back

Il faudra aussi veiller à lancer le VPN de l'ISTIC
1. Il faut se seplacer dans le dossier  ``fiches`` et lancer le serveur
```bash
cd fiches
ng serve
```

2. Il faut ensuite accéder au lien suivant : http://localhost:4200

Le site recupère les données du back : les fiches et les personnes.
Les formulaires ne fonctionnent pas à cause du problème CORS et donc les requêtes POST ne s'executent pas à partir du Front mais fonctionnent correctement dans le Back
