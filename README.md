# 📝 Gestionnaire de Tâches

> Application web simple de gestion de tâches quotidiennes  
> Développé par Lamine

## 📋 Description du projet

Une application web simple de gestion de tâches qui permet aux utilisateurs d'organiser leurs activités quotidiennes.

**🎯 Objectif pédagogique :** Comprendre et implémenter les opérations CRUD (Create, Read, Update, Delete) côté client, ainsi que la persistance des données avec localStorage.

## ✨ Fonctionnalités

### Fonctionnalités principales
- ➕ **Ajouter une tâche** : Créer une nouvelle tâche en tapant dans le champ et en cliquant sur "Ajouter" ou en appuyant sur Entrée
- ✅ **Marquer comme terminée** : Cocher/décocher une tâche pour indiquer son état
- 🗑️ **Supprimer une tâche** : Supprimer définitivement une tâche (avec confirmation)
- 🔄 **Filtrer les tâches** : Voir toutes les tâches, seulement celles à faire, ou seulement celles terminées
- 💾 **Sauvegarde automatique** : Les tâches sont sauvegardées dans le navigateur (localStorage)

### Fonctionnalités techniques
- 📱 Design responsive (s'adapte aux mobiles)
- 🎨 Interface claire et accessible
- ⚡ Mise à jour en temps réel des compteurs
- 🔒 Protection contre les injections XSS
- 🧹 Fonctions de debug et d'export des données

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique de la page
- **CSS3** : Mise en forme, animations et design responsive
- **JavaScript (Vanilla)** : Logique métier et manipulation du DOM
- **localStorage** : Persistance des données côté client

*Choix technologique* : J'ai volontairement utilisé du JavaScript vanilla (sans framework) pour bien comprendre les fondamentaux du langage et de la manipulation du DOM.

## 🚀 Comment utiliser l'application

### Démo en ligne
🌐 **[Voir la démo](https://todo-app-lamine.onrender.com/)** *(lien sera mis à jour après déploiement)*

### Installation locale
1. Télécharger ou cloner ce projet
2. Ouvrir le fichier `index.html` dans un navigateur web moderne
3. Commencer à ajouter des tâches !

### Utilisation
1. **Ajouter une tâche** : Tapez votre tâche dans le champ et cliquez sur "➕ Ajouter"
2. **Marquer comme terminée** : Cliquez sur la case à cocher à côté de la tâche
3. **Filtrer** : Utilisez les boutons "Toutes", "À faire" ou "Terminées"
4. **Supprimer** : Cliquez sur l'icône 🗑️ (une confirmation sera demandée)

## 📸 Captures d'écran

### Interface principale
![Interface principale](screenshots/main-interface.png)
*Vue d'ensemble de l'application avec quelques tâches*

### Filtres en action
![Filtres](screenshots/filters.png)
*Démonstration du système de filtres*

### Version mobile
![Version mobile](screenshots/mobile.png)
*Application adaptée aux écrans mobiles*

## 🏗️ Structure du projet

```
todo-app-portfolio/
├── index.html          # Page principale
├── style.css           # Feuilles de style
├── script.js           # Logique JavaScript
├── README.md           # Documentation
└── screenshots/        # Captures d'écran
    ├── main-interface.png
    ├── filters.png
    └── mobile.png
```

## 💡 Ce que j'ai appris

En réalisant ce projet, j'ai pu :

### Compétences techniques développées
- **Manipulation du DOM** : Création, modification et suppression d'éléments HTML avec JavaScript
- **Gestion d'événements** : Écoute des clics, pression de touches, changements d'état
- **localStorage** : Sauvegarde et récupération de données dans le navigateur
- **CSS responsive** : Adaptation de l'interface pour différentes tailles d'écran
- **Organisation du code** : Structure claire avec commentaires et séparation des responsabilités

### Défis rencontrés et solutions
- **Persistance des données** : J'ai d'abord eu du mal avec localStorage, mais j'ai appris à gérer les erreurs et la sérialisation JSON
- **Filtres dynamiques** : Comprendre comment réafficher la liste selon différents critères
- **Design responsive** : Adapter les boutons et l'interface pour les mobiles

## 🔄 Améliorations possibles

Ce projet étant un exercice d'apprentissage, plusieurs améliorations pourraient être apportées :

### À court terme
- 📅 Ajouter des dates d'échéance aux tâches
- 🏷️ Système de catégories ou tags
- ↕️ Réorganisation par glisser-déposer
- 🔍 Barre de recherche dans les tâches

### À long terme
- 🌐 Synchronisation cloud (backend + base de données)
- 👥 Partage de listes entre utilisateurs
- 📊 Statistiques et graphiques de productivité
- 🔔 Système de notifications

## 🎯 Objectifs du projet

Ce projet démontre :

- La capacité à **mener un projet à terme** avec documentation complète
- La compréhension des **concepts de base** du développement web
- Une approche **méthodique** du développement (planification, réalisation, test)
- La volonté d'**apprendre et s'améliorer** continuellement

## 📝 Notes de développeur débutant

En tant que débutant dans le domaine, je suis conscient que ce code peut être amélioré. J'ai privilégié :
- La **clarté** : code lisible avec beaucoup de commentaires
- La **simplicité** : fonctionnalités essentielles bien implémentées
- La **robustesse** : gestion d'erreurs de base et validation des données
- L'**apprentissage** : utilisation de JavaScript vanilla pour comprendre les bases

Je suis ouvert aux retours et suggestions d'amélioration !

---

**Développé avec 💙 par Lamine**
