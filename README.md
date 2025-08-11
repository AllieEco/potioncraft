# 🧪 Potion Craft

Un jeu de création de potions magiques inspiré d'Infinite Craft, où vous mélangez des ingrédients mystérieux pour créer des potions uniques !

## ✨ Fonctionnalités

- **Chaudron interactif** : Un chaudron 3D animé sur une table en bois
- **25 ingrédients magiques** : De la Racine de Mandragore aux Larmes d'Ange
- **Système de brassage** : Mélangez 2 à 4 ingrédients pour créer des potions
- **Génération intelligente** : Les noms et descriptions des potions sont générés de manière cohérente
- **Sauvegarde des recettes** : Chaque combinaison d'ingrédients donne toujours le même résultat
- **Interface magique** : Design immersif avec animations et effets visuels
- **Responsive** : Compatible avec tous les appareils

## 🎮 Comment jouer

1. **Sélectionnez des ingrédients** : Cliquez sur les ingrédients dans le grimoire à droite
2. **Ajoutez-les au chaudron** : Les ingrédients apparaissent dans la zone du chaudron
3. **Brasez la potion** : Cliquez sur "Brasser la Potion" quand vous avez 2-4 ingrédients
4. **Découvrez le résultat** : Une nouvelle potion magique est créée !
5. **Sauvegardez la recette** : Gardez une trace de vos découvertes

## 🧙‍♀️ Types d'ingrédients

- **Plantes** : Mandragore, Herbe de Sorcière, Pomme d'Or
- **Animaux** : Sang de Dragon, Plume de Phénix, Corne de Licorne
- **Minéraux** : Pierre de Lune, Éclat de Cristal
- **Cosmiques** : Poussière d'Étoile, Sable du Temps, Essence du Vide
- **Élémentaires** : Éclair, Eau d'Argent, Essence de Feu
- **Démoniques** : Essence de Démon
- **Divins** : Larmes d'Ange
- **Féeriques** : Poussière de Fée

## 🎨 Design

- **Thème magique** : Couleurs violettes et dorées
- **Animations fluides** : Chaudron qui bouillonne, vapeur qui s'élève
- **Effets visuels** : Couleurs de potions qui changent selon les ingrédients
- **Typographie** : Polices élégantes (Cinzel et Crimson Text)
- **Interface intuitive** : Navigation claire et responsive

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations, gradients, effets visuels
- **JavaScript ES6+** : Logique du jeu, gestion d'état
- **LocalStorage** : Sauvegarde des recettes
- **Fetch API** : Gestion des fichiers JSON

## 📁 Structure du projet

```
potioncraft/
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Logique du jeu
├── recipes.json        # Recettes sauvegardées (créé automatiquement)
└── README.md           # Documentation
```

## 🚀 Installation et utilisation

1. **Clonez le projet** :
   ```bash
   git clone [url-du-repo]
   cd potioncraft
   ```

2. **Ouvrez le fichier** :
   - Double-cliquez sur `index.html`
   - Ou ouvrez avec un serveur local pour une meilleure expérience

3. **Commencez à jouer** :
   - Sélectionnez des ingrédients
   - Brasez des potions
   - Découvrez de nouvelles recettes !

## 🔮 Fonctionnalités avancées

### Système de génération de potions

Le jeu utilise un système intelligent pour générer des noms et descriptions de potions basés sur :
- Le type d'ingrédient dominant
- La combinaison d'ingrédients
- Des templates prédéfinis avec variations

### Sauvegarde persistante

- Les recettes sont sauvegardées dans `recipes.json`
- Chaque combinaison d'ingrédients donne toujours le même résultat
- Fallback vers localStorage si la sauvegarde fichier échoue

### Animations et effets

- Chaudron qui bouillonne avec des bulles
- Vapeur qui s'élève
- Couleurs de potions dynamiques
- Transitions fluides
- Notifications toast

## 🎯 Améliorations futures

- **Intégration LLM réel** : Connexion à un vrai modèle de langage
- **Plus d'ingrédients** : Extension de la base d'ingrédients
- **Système de rareté** : Ingrédients rares et légendaires
- **Partage de recettes** : Export/import de recettes
- **Mode multijoueur** : Compétition entre alchimistes
- **Sons et musique** : Ambiance sonore magique

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ajouter de nouveaux ingrédients
- Améliorer les animations
- Optimiser le code
- Corriger des bugs
- Suggérer de nouvelles fonctionnalités

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

**Créé avec ❤️ et magie par [Votre Nom]**

*Que la magie soit avec vous !* ✨ 