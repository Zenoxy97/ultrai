# Ultrai

Plateforme de blog privée propulsée par l'IA.

## 🔧 Installation

1. Cloner le dépôt
2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement dans `.env`

4. Démarrer en développement :
```bash
npm start
```

## 🌿 Branches

- `main` : production
- `develop` : développement
- `feature/*` : nouvelles fonctionnalités

## 📝 Workflow

1. Créer une branche feature depuis develop
2. Développer et tester
3. Créer une Pull Request vers develop
4. Merge vers main via PR après validation

## 🔐 Sécurité

- Toutes les clés API doivent être dans les variables d'environnement
- Ne jamais commiter de fichiers .env
- Vérifier les permissions Firebase
