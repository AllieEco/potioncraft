const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Configuration Ollama
const OLLAMA_BASE_URL = 'http://localhost:11434';
let MODEL_NAME = 'llama2'; // Modèle par défaut

// Fonction pour détecter le modèle disponible
async function detectAvailableModel() {
    try {
        const response = await axios.get(`${OLLAMA_BASE_URL}/api/tags`);
        const models = response.data.models || [];
        
        // Priorité des modèles (Llama 2 en premier)
        const preferredModels = ['llama2', 'llama3', 'deepseek-r1:14b', 'mistral', 'codellama'];
        
        for (const preferredModel of preferredModels) {
            if (models.some(model => model.name.includes(preferredModel))) {
                MODEL_NAME = preferredModel;
                console.log(`🤖 Modèle détecté: ${MODEL_NAME}`);
                return MODEL_NAME;
            }
        }
        
        // Si aucun modèle préféré n'est trouvé, utiliser le premier disponible
        if (models.length > 0) {
            MODEL_NAME = models[0].name;
            console.log(`🤖 Modèle disponible utilisé: ${MODEL_NAME}`);
            return MODEL_NAME;
        }
        
        console.log('⚠️ Aucun modèle Ollama trouvé');
        return null;
    } catch (error) {
        console.error('❌ Erreur lors de la détection du modèle:', error.message);
        return null;
    }
}

// Fonction pour appeler Ollama
async function generateWithOllama(prompt) {
    try {
        const response = await axios.post(`${OLLAMA_BASE_URL}/api/generate`, {
            model: MODEL_NAME,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.8,
                top_p: 0.9,
                max_tokens: 500
            }
        });
        
        return response.data.response.trim();
    } catch (error) {
        console.error('Erreur Ollama:', error.message);
        throw new Error('Impossible de générer avec Ollama');
    }
}

// Fonction pour créer un prompt pour la génération de potion
function createPotionPrompt(ingredients) {
    const ingredientNames = ingredients.map(i => i.name).join(', ');
    const ingredientTypes = [...new Set(ingredients.map(i => i.type))].join(', ');
    
    return `Tu es un alchimiste expert dans un monde magique. Crée une potion magique basée sur ces ingrédients: ${ingredientNames}.

Types d'ingrédients: ${ingredientTypes}

Génère une réponse au format JSON exact suivant:
{
    "name": "Nom créatif de la potion",
    "description": "Description détaillée des effets magiques de la potion (2-3 phrases)",
    "effects": ["effet 1", "effet 2", "effet 3"],
    "rarity": "commun|rare|épique|légendaire",
    "power": 1-100
}

Sois créatif et cohérent avec les ingrédients. La description doit être magique et immersive.`;
}

// Route pour générer une potion
app.post('/api/generate-potion', async (req, res) => {
    try {
        const { ingredients } = req.body;
        
        if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
            return res.status(400).json({ error: 'Ingrédients requis' });
        }
        
        const prompt = createPotionPrompt(ingredients);
        const response = await generateWithOllama(prompt);
        
        // Essayer de parser la réponse JSON
        let potionData;
        try {
            // Extraire le JSON de la réponse (parfois Ollama ajoute du texte avant/après)
            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                potionData = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('Aucun JSON trouvé dans la réponse');
            }
        } catch (parseError) {
            console.error('Erreur parsing JSON:', parseError);
            // Fallback: créer une potion basique
            potionData = {
                name: `Potion Mystérieuse de ${ingredients.map(i => i.name.split(' ')[0]).join(' + ')}`,
                description: `Une potion mystérieuse créée avec ${ingredients.map(i => i.name).join(', ')}. Ses effets restent à découvrir.`,
                effects: ['Effet mystérieux'],
                rarity: 'commun',
                power: Math.floor(Math.random() * 50) + 25
            };
        }
        
        // Validation et nettoyage des données
        const potion = {
            name: potionData.name || `Potion de ${ingredients.map(i => i.name.split(' ')[0]).join(' + ')}`,
            description: potionData.description || 'Une potion aux propriétés mystérieuses.',
            effects: Array.isArray(potionData.effects) ? potionData.effects : ['Effet magique'],
            rarity: potionData.rarity || 'commun',
            power: Math.min(100, Math.max(1, parseInt(potionData.power) || 50)),
            ingredients: ingredients.map(i => i.name),
            type: getDominantIngredientType(ingredients)
        };
        
        res.json(potion);
        
    } catch (error) {
        console.error('Erreur génération potion:', error);
        res.status(500).json({ 
            error: 'Erreur lors de la génération de la potion',
            details: error.message 
        });
    }
});

// Fonction pour déterminer le type dominant
function getDominantIngredientType(ingredients) {
    const typeCounts = {};
    ingredients.forEach(ingredient => {
        typeCounts[ingredient.type] = (typeCounts[ingredient.type] || 0) + 1;
    });
    
    return Object.keys(typeCounts).reduce((a, b) => 
        typeCounts[a] > typeCounts[b] ? a : b
    );
}

// Route pour vérifier la santé d'Ollama
app.get('/api/ollama-health', async (req, res) => {
    try {
        const response = await axios.get(`${OLLAMA_BASE_URL}/api/tags`);
        res.json({ 
            status: 'ok', 
            models: response.data.models || [],
            ollamaRunning: true 
        });
    } catch (error) {
        res.json({ 
            status: 'error', 
            message: 'Ollama non disponible',
            ollamaRunning: false 
        });
    }
});

// Route pour lister les modèles disponibles
app.get('/api/models', async (req, res) => {
    try {
        const response = await axios.get(`${OLLAMA_BASE_URL}/api/tags`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Impossible de récupérer les modèles' });
    }
});

// Route par défaut
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, async () => {
    console.log(`🚀 Serveur PotionCraft démarré sur http://localhost:${PORT}`);
    console.log(`🔮 Ollama configuré sur ${OLLAMA_BASE_URL}`);
    
    // Détecter le modèle disponible au démarrage
    await detectAvailableModel();
    
    if (MODEL_NAME) {
        console.log(`🤖 Modèle actif: ${MODEL_NAME}`);
    } else {
        console.log('⚠️ Aucun modèle Ollama disponible - mode fallback activé');
    }
});

module.exports = app; 