# Configuration Supabase pour GOSTOCK

1. Créez un projet sur https://app.supabase.com/
2. Récupérez l’URL et la clé anonyme (Settings > API)
3. Ajoutez-les dans `.env.local` :
   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
4. Configurez les tables (produits, mouvements, utilisateurs, etc.) selon le schéma du projet
5. Pour la production, sécurisez vos clés et rôles

Voir aussi : [docs Supabase](https://supabase.com/docs)
