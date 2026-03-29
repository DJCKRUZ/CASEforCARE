# CASEforCARE

Ce projet est une application web pour publier et consulter des cas médicaux. Il utilise :

- `Index.html` pour la structure HTML et le style intégré
- `data/cases.json` pour stocker les cas médicaux dans le dépôt GitHub
- `api/cases.js` pour exposer une API backend Vercel
- `vercel.json` pour la configuration de déploiement sur Vercel

## Déploiement Vercel

1. Se connecter avec `npx vercel login`.
2. Depuis le dossier du projet, exécuter `npx vercel --prod`.
3. Le site sera déployé sur un domaine Vercel et la route API disponible à `/api/cases`.

## Mise à jour du contenu

- Modifiez `data/cases.json` pour mettre à jour les cas médicaux.
- Le front-end recharge les données depuis l’API backend.
