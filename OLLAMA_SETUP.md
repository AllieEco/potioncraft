# 🔮 Configuration Ollama pour PotionCraft

Ce guide vous explique comment installer et configurer Ollama pour utiliser l'IA dans PotionCraft.

## 📋 Prérequis

- Windows 10/11, macOS, ou Linux
- Au moins 8 Go de RAM (16 Go recommandé)
- Au moins 4 Go d'espace disque libre

## 🚀 Installation d'Ollama

### Windows
1. Téléchargez Ollama depuis [ollama.ai](https://ollama.ai)
2. Installez le fichier `.exe` téléchargé
3. Redémarrez votre terminal/PowerShell

### macOS
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Linux
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

## 🤖 Téléchargement du modèle Llama 2

Une fois Ollama installé, téléchargez le modèle Llama 2 :

```bash
ollama pull llama2
```

**Note :** Le téléchargement peut prendre plusieurs minutes selon votre connexion internet (environ 3.8 GB).

**Alternative :** Si vous préférez un modèle plus léger ou plus rapide :
- `ollama pull mistral` (4.1 GB, plus rapide)
- `ollama pull llama3` (4.7 GB, plus récent)

## 🎮 Démarrage de PotionCraft

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Démarrer le serveur :**
   ```bash
   npm start
   ```

3. **Ouvrir dans votre navigateur :**
   ```
   http://localhost:3001
   ```

## 🔧 Vérification de l'installation

### Vérifier qu'Ollama fonctionne :
```bash
ollama list
```

Vous devriez voir `llama2` dans la liste.

### Tester Ollama :
```bash
ollama run llama2 "Bonjour, comment allez-vous ?"
```

## 🎯 Utilisation dans PotionCraft

1. **Statut IA :** Regardez l'indicateur en haut de la page
   - 🟢 **Vert** : IA connectée et fonctionnelle
   - 🟡 **Jaune** : IA déconnectée (mode fallback)
   - 🔴 **Rouge** : Erreur de connexion

2. **Génération de potions :**
   - Avec IA : Les potions sont générées dynamiquement par Llama 2
   - Sans IA : Mode fallback avec génération locale

## 🔄 Modèles alternatifs

Vous pouvez utiliser d'autres modèles Ollama :

### Mistral (plus rapide, moins de RAM)
```bash
ollama pull mistral
```

### CodeLlama (spécialisé code)
```bash
ollama pull codellama
```

### Modifier le modèle dans le serveur :
Le serveur détecte automatiquement le modèle disponible. Si vous voulez forcer un modèle spécifique, éditez `server.js` ligne 12 :
```javascript
let MODEL_NAME = 'mistral'; // ou 'llama3', 'deepseek-r1:14b', etc.
```

## 🛠️ Dépannage

### Ollama ne démarre pas
- Vérifiez que le service Ollama est en cours d'exécution
- Redémarrez Ollama : `ollama serve`

### Erreur de connexion
- Vérifiez que le port 11434 n'est pas bloqué
- Assurez-vous qu'Ollama écoute sur `localhost:11434`

### Modèle non trouvé
- Vérifiez que le modèle est téléchargé : `ollama list`
- Retéléchargez le modèle : `ollama pull llama2`

### Performance lente
- Utilisez un modèle plus léger comme `mistral`
- Fermez d'autres applications gourmandes en RAM

## 📊 Ressources système

### Llama 2
- **RAM** : ~4-8 Go
- **GPU** : Optionnel (CUDA/Metal)
- **Temps de génération** : 2-5 secondes

### Mistral
- **RAM** : ~2-4 Go
- **GPU** : Optionnel
- **Temps de génération** : 1-3 secondes

## 🎨 Personnalisation

### Modifier le prompt de génération
Éditez la fonction `createPotionPrompt()` dans `server.js` pour personnaliser la génération des potions.

### Ajouter de nouveaux types d'ingrédients
Modifiez le tableau `INGREDIENTS` dans `script.js` et ajoutez les nouveaux types dans `POTION_COLORS`.

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs du serveur dans la console
2. Consultez la documentation d'Ollama : [ollama.ai/docs](https://ollama.ai/docs)
3. Vérifiez que tous les ports sont accessibles

---

**Amusez-vous bien avec PotionCraft et l'IA ! 🧪✨** 