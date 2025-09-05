# 🚀 Guide de déploiement sur Render

## Étapes pour déployer sur Render

### 1. Préparer le repository GitHub
1. Créer un nouveau repository sur GitHub : `todo-app`
2. Uploader tous les fichiers du projet
3. Faire un commit initial

### 2. Déployer sur Render
1. Se connecter sur [render.com](https://render.com)
2. Cliquer sur "New +" → "Static Site"
3. Connecter votre repository GitHub
4. Configurer le déploiement :
   - **Name** : `todo-app-lamine` (ou autre nom de votre choix)
   - **Branch** : `main`
   - **Root Directory** : (laisser vide)
   - **Build Command** : (laisser vide)
   - **Publish Directory** : `.` (point pour indiquer la racine)

### 3. Configuration automatique
Le fichier `render.yaml` configure automatiquement :
- Le type de service (site statique)
- Les redirections nécessaires
- Le nom du service

### 4. URL finale
Une fois déployé, l'application sera accessible à une URL du type :
`https://[nom-choisi].onrender.com`

**Exemple de cette application** : https://todo-app-19es.onrender.com

## Vérifications avant déploiement

✅ Tous les fichiers sont présents :
- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `package.json`
- `render.yaml`

✅ L'application fonctionne localement
✅ Pas de liens externes cassés
✅ Design responsive testé

## Notes importantes

- **Render gratuit** : Le site peut se mettre en veille après inactivité
- **HTTPS automatique** : Render fournit automatiquement un certificat SSL
- **Déploiement automatique** : Chaque push sur GitHub redéploie automatiquement

## Dépannage

Si le déploiement échoue :
1. Vérifier que tous les fichiers sont bien poussés sur GitHub
2. S'assurer qu'`index.html` est à la racine du projet
3. Consulter les logs de déploiement sur Render
