# GOSTOCK

Stock management app (Next.js, Supabase, Capacitor, Android)

[![CI](https://github.com/Lepeulh80/GOSTOCK/actions/workflows/ci.yml/badge.svg)](https://github.com/Lepeulh80/GOSTOCK/actions/workflows/ci.yml)
[![Android Build](https://github.com/Lepeulh80/GOSTOCK/actions/workflows/android-build.yml/badge.svg)](https://github.com/Lepeulh80/GOSTOCK/actions/workflows/android-build.yml)

## 🚀 Fonctionnalités principales
- Gestion des produits, mouvements de stock, statistiques
- Authentification Supabase
- Export statique Next.js
- Application Android via Capacitor
- Tests automatisés (Jest, Testing Library)

## 📦 Installation
```bash
git clone https://github.com/Lepeulh80/GOSTOCK.git
cd GOSTOCK
npm install
```

## 🧪 Lancer les tests
```bash
npm test
```

## 🖥️ Lancer en développement
```bash
npm run dev
```

## 🏗️ Export statique (pour Android)
```bash
npm run export
```

## 📱 Générer l'APK Android
```bash
npx cap sync android
npx cap open android
# Puis build APK dans Android Studio
```

## 🔄 CI/CD
- **Tests & export** : `.github/workflows/ci.yml`
- **Build APK Android** : `.github/workflows/android-build.yml`

## 🔗 Liens
- [Supabase](https://supabase.com/)
- [Next.js](https://nextjs.org/)
- [Capacitor](https://capacitorjs.com/)
- [Dépôt GitHub](https://github.com/Lepeulh80/GOSTOCK)

---

*Made with ❤️ by Lepeulh80*
