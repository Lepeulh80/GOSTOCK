# Déploiement sur Vercel

Instructions rapides :

1. Créez un dépôt Git (GitHub / GitLab / Bitbucket) et poussez le projet.
2. Connectez votre dépôt à Vercel (https://vercel.com/new).
3. Lors de la configuration du projet sur Vercel, ajoutez les variables d'environnement :
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (server-only)
   - SERVICE_INTERNAL_SECRET
4. Déployez — Vercel utilisera `vercel-build` (configuré dans package.json) pour builder le projet.

Notes :
- Ne pas exposer `SUPABASE_SERVICE_ROLE_KEY` côté client. Configurez-la uniquement dans les "Environment Variables" de Vercel (Production and Preview).
- Pour les fonctions server-side (API routes) utilisez `process.env.SUPABASE_SERVICE_ROLE_KEY`.
