# Supabase Integration - Notes

1. Créez un projet Supabase sur https://app.supabase.com
2. Dans "Table Editor" créez une table `products` avec ces colonnes :
   - id (uuid) PK default: gen_random_uuid()
   - name (text)
   - category (text)
   - stock (integer)
   - alert_threshold (integer)
   - buy_price (numeric)
   - sell_price (numeric)
   - notes (text)
   - created_at (timestamp with time zone, default: now())

3. Récupérez l'URL du projet et la clé anonyme (anon key) et copiez-les dans `.env.local` :
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...

4. Installer dépendances : `npm install`
5. Lancer en local : `npm run dev`

Remarques :
- Le client Supabase est instancié dans `src/lib/supabaseClient.js`
- Hooks CRUD : `src/hooks/useProducts.js`
- Pages et composants : `src/pages/products/*`
