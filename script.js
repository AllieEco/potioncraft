// Configuration du jeu
const GAME_CONFIG = {
    minIngredients: 2,
    maxIngredients: 4,
    recipesFile: 'recipes.json',
    apiUrl: 'http://localhost:3001'
};

// Base d'ingrédients magiques
const INGREDIENTS = [
    { id: 'mandrake', name: 'Racine de Mandragore', emoji: '🧙‍♀️', type: 'plante' },
    { id: 'dragon_blood', name: 'Sang de Dragon', emoji: '🐉', type: 'animal' },
    { id: 'moonstone', name: 'Pierre de Lune', emoji: '🌙', type: 'minéral' },
    { id: 'phoenix_feather', name: 'Plume de Phénix', emoji: '🔥', type: 'animal' },
    { id: 'unicorn_horn', name: 'Corne de Licorne', emoji: '🦄', type: 'animal' },
    { id: 'star_dust', name: 'Poussière d\'Étoile', emoji: '⭐', type: 'cosmique' },
    { id: 'crystal_shard', name: 'Éclat de Cristal', emoji: '💎', type: 'minéral' },
    { id: 'witch_herb', name: 'Herbe de Sorcière', emoji: '🌿', type: 'plante' },
    { id: 'demon_essence', name: 'Essence de Démon', emoji: '👹', type: 'démonique' },
    { id: 'angel_tears', name: 'Larmes d\'Ange', emoji: '👼', type: 'divin' },
    { id: 'shadow_moss', name: 'Mousse d\'Ombre', emoji: '🌑', type: 'ombre' },
    { id: 'lightning_bolt', name: 'Éclair', emoji: '⚡', type: 'élémentaire' },
    { id: 'fairy_dust', name: 'Poussière de Fée', emoji: '🧚‍♀️', type: 'féerique' },
    { id: 'vampire_bat', name: 'Chauve-souris Vampire', emoji: '🦇', type: 'animal' },
    { id: 'golden_apple', name: 'Pomme d\'Or', emoji: '🍎', type: 'plante' },
    { id: 'silver_water', name: 'Eau d\'Argent', emoji: '💧', type: 'élémentaire' },
    { id: 'fire_essence', name: 'Essence de Feu', emoji: '🔥', type: 'élémentaire' },
    { id: 'ice_crystal', name: 'Cristal de Glace', emoji: '❄️', type: 'élémentaire' },
    { id: 'thunder_heart', name: 'Cœur de Tonnerre', emoji: '💙', type: 'élémentaire' },
    { id: 'earth_core', name: 'Noyau de Terre', emoji: '🌍', type: 'élémentaire' },
    { id: 'wind_spirit', name: 'Esprit du Vent', emoji: '💨', type: 'élémentaire' },
    { id: 'time_sand', name: 'Sable du Temps', emoji: '⏳', type: 'cosmique' },
    { id: 'void_essence', name: 'Essence du Vide', emoji: '🕳️', type: 'cosmique' },
    { id: 'chaos_powder', name: 'Poudre du Chaos', emoji: '🌀', type: 'cosmique' },
    
    // Nouvelles plantes magiques
    { id: 'screaming_mandrake', name: 'Mandragore Hurlante', emoji: '🌱', type: 'plante' },
    { id: 'silver_moon_flower', name: 'Fleur de Lune Argentée', emoji: '🌙', type: 'plante' },
    { id: 'dragon_root', name: 'Racine de Dragon Endormi', emoji: '🐉', type: 'plante' },
    { id: 'temporal_ivy', name: 'Lierre Temporel', emoji: '⏰', type: 'plante' },
    { id: 'ticklish_mushroom', name: 'Champignon Chatouilleur', emoji: '🍄', type: 'plante' },
    { id: 'giant_sneeze_herb', name: 'Herbe à Éternuements Géants', emoji: '🤧', type: 'plante' },
    { id: 'reverse_clover', name: 'Trèfle de Malchance Inversée', emoji: '🍀', type: 'plante' },
    { id: 'dragon_breath_pepper', name: 'Piment du Souffle de Dragon', emoji: '🌶️', type: 'plante' },
    { id: 'electric_algae', name: 'Algue des Profondeurs Électriques', emoji: '⚡', type: 'plante' },
    { id: 'cloudy_moss', name: 'Mousse Nuageuse', emoji: '☁️', type: 'plante' },
    { id: 'ice_cactus', name: 'Cactus de Glace Éternelle', emoji: '🌵❄️', type: 'plante' },
    { id: 'whirlwind_rose', name: 'Rose de Vent Tourbillonnant', emoji: '🌹💨', type: 'plante' },
    { id: 'telepathic_orchid', name: 'Orchidée Télépathique', emoji: '🧠', type: 'plante' },
    { id: 'upside_down_banana', name: 'Bananier Inversé', emoji: '🍌', type: 'plante' },
    { id: 'rainbow_dandelion', name: 'Pissenlit Multicolore', emoji: '🌈', type: 'plante' },
    { id: 'basilisk_basil', name: 'Basilic du Basilisk', emoji: '🐍', type: 'plante' },
    { id: 'giant_miniature_tree', name: 'Arbre Miniature Géant', emoji: '🌳', type: 'plante' },
    { id: 'lost_time_flower', name: 'Fleur du Temps Perdu', emoji: '🕰️', type: 'plante' },
    { id: 'mirror_mushroom', name: 'Champignon Miroir', emoji: '🪞', type: 'plante' },
    { id: 'universal_laughter_herb', name: 'Herbe de Rigolade Universelle', emoji: '😂', type: 'plante' },
    
    // Poudres Magiques
    { id: 'rainbow_dragon_scales', name: 'Poudre d\'Écailles de Dragon Arc-en-Ciel', emoji: '🐲✨', type: 'poudre' },
    { id: 'clumsy_phoenix_ashes', name: 'Cendres de Phénix Maladroit', emoji: '🔥🤦', type: 'poudre' },
    { id: 'insomniac_fairy_dust', name: 'Poussière d\'Ailes de Fée Insomniaque', emoji: '🧚💤', type: 'poudre' },
    { id: 'grumpy_unicorn_bone', name: 'Poudre d\'Os de Licorne Grinchue', emoji: '🦄😤', type: 'poudre' },
    { id: 'broken_hourglass_sand', name: 'Sable de Sablier Temporel Cassé', emoji: '⏳', type: 'poudre' },
    
    // Huiles Enchantées
    { id: 'shy_kraken_oil', name: 'Huile de Kraken Timide', emoji: '🐙😳', type: 'huile' },
    { id: 'cold_salamander_essence', name: 'Essence de Salamandre Frileuse', emoji: '🦎🧥', type: 'huile' },
    { id: 'dimensional_snail_slime', name: 'Bave Raffinée d\'Escargot Dimensionnel', emoji: '🐌🌀', type: 'huile' },
    { id: 'lazy_troll_elbow_oil', name: 'Huile de Coude de Troll Paresseux', emoji: '💪😴', type: 'huile' },
    { id: 'sincere_crocodile_tears', name: 'Larmes de Crocodile Sincère', emoji: '🐊😭', type: 'huile' },
    
    // Extraits d'Animaux Fantastiques
    { id: 'sick_sea_unicorn_mucus', name: 'Mucus de Licorne des Mers Enrhumée', emoji: '🦄🌊🤧', type: 'extrait' },
    { id: 'vegetarian_basilisk_saliva', name: 'Salive de Basilic Végétarien', emoji: '🐍🥗', type: 'extrait' },
    { id: 'deaf_giant_earwax', name: 'Cire d\'Oreille de Géant Sourd', emoji: '👂👹', type: 'extrait' },
    { id: 'vegan_vampire_blood', name: 'Sang de Vampire Végan', emoji: '🧛🌱', type: 'extrait' },
    { id: 'awkward_griffon_feather', name: 'Plume Fondue de Griffon Malaisant', emoji: '🦅🦁😅', type: 'extrait' },
    
    // Extraits Bizarres et Rares
    { id: 'cheshire_cat_smile', name: 'Extrait de Sourire de Chat de Cheshire', emoji: '😸✨', type: 'extrait' },
    { id: 'sleeping_dragon_snore', name: 'Essence de Ronflement de Dragon Endormi', emoji: '🐲💤', type: 'extrait' },
    { id: 'philosopher_octopus_ink', name: 'Suc de Tentacule de Poulpe Philosophe', emoji: '🐙🎓', type: 'extrait' },
    { id: 'scared_lion_courage', name: 'Extrait de Courage de Lion Peureux', emoji: '🦁😰', type: 'extrait' },
    { id: 'rebel_unicorn_curse', name: 'Essence de Malédiction de Licorne Rebelle', emoji: '🦄😈', type: 'extrait' }
];

// Couleurs de potions basées sur les types d'ingrédients
const POTION_COLORS = {
    plante: '#10b981',
    animal: '#ef4444',
    minéral: '#6b7280',
    cosmique: '#8b5cf6',
    élémentaire: '#3b82f6',
    démonique: '#dc2626',
    divin: '#fbbf24',
    ombre: '#1f2937',
    féerique: '#ec4899',
    poudre: '#f59e0b',
    huile: '#8b5cf6',
    extrait: '#ef4444'
};

// État du jeu
let gameState = {
    selectedIngredients: [],
    recipes: {},
    isBrewing: false,
    ollamaStatus: 'unknown'
};

// Éléments DOM
const elements = {
    cauldron: document.getElementById('cauldron'),
    potionLiquid: document.getElementById('potion-liquid'),
    steam: document.getElementById('steam'),
    ingredientsGrid: document.getElementById('ingredients-grid'),
    ingredientsList: document.getElementById('ingredients-list'),
    brewButton: document.getElementById('brew-button'),
    potionResult: document.getElementById('potion-result'),
    potionName: document.getElementById('potion-name'),
    potionDescription: document.getElementById('potion-description'),
    saveRecipeButton: document.getElementById('save-recipe-button'),
    recipesList: document.getElementById('recipes-list')
};

// Initialisation du jeu
async function initGame() {
    await checkOllamaStatus();
    loadRecipes();
    renderIngredients();
    setupEventListeners();
    updateUI();
}

// Chargement des recettes sauvegardées
async function loadRecipes() {
    try {
        const response = await fetch(GAME_CONFIG.recipesFile);
        if (response.ok) {
            gameState.recipes = await response.json();
        }
    } catch (error) {
        console.log('Aucune recette sauvegardée trouvée, création d\'un nouveau fichier');
        gameState.recipes = {};
    }
    renderSavedRecipes();
}

// Vérification du statut d'Ollama
async function checkOllamaStatus() {
    try {
        const response = await fetch(`${GAME_CONFIG.apiUrl}/api/ollama-health`);
        const data = await response.json();
        gameState.ollamaStatus = data.ollamaRunning ? 'connected' : 'disconnected';
        
        updateOllamaStatusIndicator();
        
        if (data.ollamaRunning) {
            showNotification('🔮 Ollama connecté - Génération IA activée !', 'success');
        } else {
            showNotification('⚠️ Ollama non disponible - Mode fallback activé', 'warning');
        }
    } catch (error) {
        console.error('Erreur vérification Ollama:', error);
        gameState.ollamaStatus = 'error';
        updateOllamaStatusIndicator();
        showNotification('❌ Erreur de connexion à Ollama', 'error');
    }
}

// Mise à jour de l'indicateur de statut Ollama
function updateOllamaStatusIndicator() {
    const indicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    
    if (!indicator || !statusText) return;
    
    // Supprimer toutes les classes de statut
    indicator.classList.remove('connected', 'disconnected', 'error');
    
    switch (gameState.ollamaStatus) {
        case 'connected':
            indicator.textContent = '🟢';
            indicator.classList.add('connected');
            statusText.textContent = 'IA Ollama connectée';
            break;
        case 'disconnected':
            indicator.textContent = '🟡';
            indicator.classList.add('disconnected');
            statusText.textContent = 'IA Ollama déconnectée';
            break;
        case 'error':
            indicator.textContent = '🔴';
            indicator.classList.add('error');
            statusText.textContent = 'Erreur de connexion IA';
            break;
        default:
            indicator.textContent = '⚪';
            statusText.textContent = 'Vérification IA...';
    }
}

// Sauvegarde des recettes
async function saveRecipes() {
    try {
        const response = await fetch(GAME_CONFIG.recipesFile, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameState.recipes, null, 2)
        });
        if (response.ok) {
            console.log('Recettes sauvegardées avec succès');
        }
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
        // Fallback: sauvegarde locale
        localStorage.setItem('potionCraftRecipes', JSON.stringify(gameState.recipes));
    }
}

// Rendu des ingrédients
function renderIngredients() {
    elements.ingredientsGrid.innerHTML = '';
    
    INGREDIENTS.forEach(ingredient => {
        const ingredientElement = document.createElement('div');
        ingredientElement.className = 'ingredient-item';
        ingredientElement.setAttribute('data-ingredient-id', ingredient.id);
        ingredientElement.innerHTML = `
            <span class="ingredient-emoji">${ingredient.emoji}</span>
            <div class="ingredient-name">${ingredient.name}</div>
        `;
        
        ingredientElement.addEventListener('click', () => addIngredient(ingredient));
        elements.ingredientsGrid.appendChild(ingredientElement);
    });
}

// Ajout d'un ingrédient
function addIngredient(ingredient) {
    // Vérifier si l'ingrédient est déjà sélectionné
    const existingIngredient = gameState.selectedIngredients.find(i => i.id === ingredient.id);
    
    if (existingIngredient) {
        // Si l'ingrédient est déjà sélectionné, le supprimer
        removeIngredient(ingredient.id);
        showNotification(`${ingredient.name} retiré du chaudron`, 'info');
        return;
    }
    
    if (gameState.selectedIngredients.length >= GAME_CONFIG.maxIngredients) {
        showNotification('Vous ne pouvez pas ajouter plus de 4 ingrédients !', 'warning');
        return;
    }
    
    // Créer l'animation de l'emoji qui vole vers le chaudron
    animateIngredientToCauldron(ingredient);
    
    gameState.selectedIngredients.push(ingredient);
    showNotification(`${ingredient.name} ajouté au chaudron`, 'success');
    updateUI();
    animateCauldron();
}

// Animation de l'ingrédient qui vole vers le chaudron
function animateIngredientToCauldron(ingredient) {
    // Trouver l'élément de l'ingrédient cliqué
    const ingredientElement = document.querySelector(`[data-ingredient-id="${ingredient.id}"]`);
    if (!ingredientElement) return;
    
    // Trouver le chaudron
    const cauldron = elements.cauldron;
    if (!cauldron) return;
    
    // Créer l'élément animé
    const flyingEmoji = document.createElement('div');
    flyingEmoji.className = 'flying-ingredient';
    flyingEmoji.textContent = ingredient.emoji;
    flyingEmoji.style.cssText = `
        position: fixed;
        z-index: 1000;
        font-size: 2rem;
        pointer-events: none;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    // Obtenir les positions
    const ingredientRect = ingredientElement.getBoundingClientRect();
    const cauldronRect = cauldron.getBoundingClientRect();
    
    // Position initiale (centre de l'ingrédient)
    const startX = ingredientRect.left + ingredientRect.width / 2;
    const startY = ingredientRect.top + ingredientRect.height / 2;
    
    // Position finale (centre du chaudron)
    const endX = cauldronRect.left + cauldronRect.width / 2;
    const endY = cauldronRect.top + cauldronRect.height / 2;
    
    // Appliquer la position initiale
    flyingEmoji.style.left = `${startX}px`;
    flyingEmoji.style.top = `${startY}px`;
    flyingEmoji.style.transform = 'translate(-50%, -50%) scale(1)';
    
    // Ajouter au DOM
    document.body.appendChild(flyingEmoji);
    
    // Délai pour permettre le rendu initial
    requestAnimationFrame(() => {
        // Animation vers le chaudron
        flyingEmoji.style.left = `${endX}px`;
        flyingEmoji.style.top = `${endY}px`;
        flyingEmoji.style.transform = 'translate(-50%, -50%) scale(0.5) rotate(360deg)';
        flyingEmoji.style.opacity = '0';
    });
    
    // Nettoyer après l'animation
    setTimeout(() => {
        if (flyingEmoji.parentNode) {
            flyingEmoji.parentNode.removeChild(flyingEmoji);
        }
    }, 800);
}

// Suppression d'un ingrédient
function removeIngredient(ingredientId) {
    gameState.selectedIngredients = gameState.selectedIngredients.filter(i => i.id !== ingredientId);
    updateUI();
    animateCauldron();
}

// Animation du chaudron
function animateCauldron() {
    if (gameState.selectedIngredients.length > 0) {
        elements.potionLiquid.classList.add('active');
        elements.steam.classList.add('active');
        
        // Changer la couleur de la potion basée sur les ingrédients
        const dominantType = getDominantIngredientType();
        const color = POTION_COLORS[dominantType] || '#8b5cf6';
        elements.potionLiquid.style.background = `linear-gradient(45deg, ${color}, ${adjustBrightness(color, 1.3)})`;
    } else {
        elements.potionLiquid.classList.remove('active');
        elements.steam.classList.remove('active');
    }
}

// Obtenir le type d'ingrédient dominant
function getDominantIngredientType() {
    const typeCounts = {};
    gameState.selectedIngredients.forEach(ingredient => {
        typeCounts[ingredient.type] = (typeCounts[ingredient.type] || 0) + 1;
    });
    
    return Object.keys(typeCounts).reduce((a, b) => 
        typeCounts[a] > typeCounts[b] ? a : b
    );
}

// Ajuster la luminosité d'une couleur
function adjustBrightness(color, factor) {
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.substr(0, 2), 16) * factor);
    const g = Math.min(255, parseInt(hex.substr(2, 2), 16) * factor);
    const b = Math.min(255, parseInt(hex.substr(4, 2), 16) * factor);
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

// Mise à jour de l'interface utilisateur
function updateUI() {
    // Mettre à jour la liste des ingrédients sélectionnés
    elements.ingredientsList.innerHTML = '';
    gameState.selectedIngredients.forEach(ingredient => {
        const tag = document.createElement('div');
        tag.className = 'ingredient-tag';
        tag.innerHTML = `
            <span>${ingredient.emoji} ${ingredient.name}</span>
            <button class="remove" onclick="removeIngredient('${ingredient.id}')">×</button>
        `;
        elements.ingredientsList.appendChild(tag);
    });
    
    // Mettre à jour le bouton de brassage
    const canBrew = gameState.selectedIngredients.length >= GAME_CONFIG.minIngredients && 
                   gameState.selectedIngredients.length <= GAME_CONFIG.maxIngredients;
    elements.brewButton.disabled = !canBrew;
    
    // Mettre à jour les ingrédients sélectionnés visuellement
    document.querySelectorAll('.ingredient-item').forEach(item => {
        const ingredientName = item.querySelector('.ingredient-name').textContent;
        const isSelected = gameState.selectedIngredients.some(i => i.name === ingredientName);
        item.classList.toggle('selected', isSelected);
    });
}

// Brassage de la potion
async function brewPotion() {
    if (gameState.isBrewing) return;
    
    gameState.isBrewing = true;
    elements.brewButton.disabled = true;
    elements.brewButton.textContent = '🧙‍♀️ Brassage en cours...';
    
    // Animation de brassage
    elements.cauldron.style.transform = 'scale(1.1)';
    elements.potionLiquid.style.animation = 'bubble 0.5s infinite';
    
    try {
        const recipeKey = getRecipeKey();
        let potion;
        
        // Vérifier si la recette existe déjà
        if (gameState.recipes[recipeKey]) {
            potion = gameState.recipes[recipeKey];
        } else {
            // Générer une nouvelle potion avec le LLM
            potion = await generatePotionWithLLM();
            gameState.recipes[recipeKey] = potion;
        }
        
        // Afficher le résultat
        showPotionResult(potion);
        
    } catch (error) {
        console.error('Erreur lors du brassage:', error);
        showNotification('Erreur lors du brassage de la potion', 'error');
    } finally {
        // Restaurer l'état
        setTimeout(() => {
            gameState.isBrewing = false;
            elements.brewButton.disabled = false;
            elements.brewButton.textContent = '🧙‍♀️ Brasser la Potion';
            elements.cauldron.style.transform = '';
            elements.potionLiquid.style.animation = '';
        }, 2000);
    }
}

// Génération de la clé de recette
function getRecipeKey() {
    return gameState.selectedIngredients
        .map(i => i.id)
        .sort()
        .join('+');
}

// Génération de potion avec Ollama
async function generatePotionWithLLM() {
    try {
        // Vérifier si Ollama est disponible
        if (gameState.ollamaStatus !== 'connected') {
            throw new Error('Ollama non disponible');
        }
        
        const response = await fetch(`${GAME_CONFIG.apiUrl}/api/generate-potion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ingredients: gameState.selectedIngredients
            })
        });
        
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status}`);
        }
        
        const potion = await response.json();
        return potion;
        
    } catch (error) {
        console.error('Erreur génération IA:', error);
        
        // Fallback vers la génération locale
        showNotification('🔄 Utilisation du mode fallback local', 'info');
        return generateLocalPotion();
    }
}

// Génération locale de potion (fallback)
function generateLocalPotion() {
    const ingredients = gameState.selectedIngredients;
    const ingredientNames = ingredients.map(i => i.name);
    
    // Analyse des ingrédients pour créer un nom cohérent
    const potionName = generateCreativePotionName(ingredients);
    const potionDescription = generateCreativePotionDescription(ingredients);
    
    return {
        name: potionName,
        description: potionDescription,
        ingredients: ingredientNames,
        type: getDominantIngredientType(),
        power: Math.floor(Math.random() * 100) + 1,
        effects: ['Effet magique'],
        rarity: 'commun'
    };
}

// Génération créative du nom de potion basée sur les ingrédients
function generateCreativePotionName(ingredients) {
    const prefixes = ['Élixir', 'Potion', 'Bréuvage', 'Philtre', 'Tisane', 'Infusion', 'Décoction', 'Concoction'];
    const suffixes = ['Mystérieux', 'Légendaire', 'Ancien', 'Puissant', 'Rare', 'Unique', 'Magique', 'Sacré'];
    
    // Analyser les ingrédients pour créer un nom cohérent
    const hasDragon = ingredients.some(i => i.name.includes('Dragon'));
    const hasPhoenix = ingredients.some(i => i.name.includes('Phénix'));
    const hasUnicorn = ingredients.some(i => i.name.includes('Licorne'));
    const hasAngel = ingredients.some(i => i.name.includes('Ange'));
    const hasDemon = ingredients.some(i => i.name.includes('Démon'));
    const hasMoon = ingredients.some(i => i.name.includes('Lune'));
    const hasStar = ingredients.some(i => i.name.includes('Étoile'));
    const hasTime = ingredients.some(i => i.name.includes('Temps'));
    const hasVoid = ingredients.some(i => i.name.includes('Vide'));
    const hasChaos = ingredients.some(i => i.name.includes('Chaos'));
    const hasFire = ingredients.some(i => i.name.includes('Feu'));
    const hasIce = ingredients.some(i => i.name.includes('Glace'));
    const hasLightning = ingredients.some(i => i.name.includes('Éclair'));
    const hasMandrake = ingredients.some(i => i.name.includes('Mandragore'));
    const hasFairy = ingredients.some(i => i.name.includes('Fée'));
    
    let potionName = '';
    
    // Logique de nommage basée sur les ingrédients spécifiques
    if (hasDragon && hasPhoenix) {
        potionName = 'Élixir des Créatures Légendaires';
    } else if (hasDragon) {
        potionName = 'Bréuvage du Dragon Ancestral';
    } else if (hasPhoenix) {
        potionName = 'Potion de Renaissance du Phénix';
    } else if (hasUnicorn) {
        potionName = 'Philtre de Pureté de la Licorne';
    } else if (hasAngel && hasDemon) {
        potionName = 'Élixir de l\'Équilibre Cosmique';
    } else if (hasAngel) {
        potionName = 'Potion de Grâce Divine';
    } else if (hasDemon) {
        potionName = 'Bréuvage des Ombres Démoniaques';
    } else if (hasMoon && hasStar) {
        potionName = 'Infusion des Lumières Célestes';
    } else if (hasMoon) {
        potionName = 'Tisane de la Lune Argentée';
    } else if (hasStar) {
        potionName = 'Décoction des Étoiles Éternelles';
    } else if (hasTime && hasVoid) {
        potionName = 'Concoction du Vide Temporel';
    } else if (hasTime) {
        potionName = 'Élixir de Maîtrise du Temps';
    } else if (hasVoid) {
        potionName = 'Potion de l\'Abîme Infini';
    } else if (hasChaos) {
        potionName = 'Bréuvage du Chaos Primordial';
    } else if (hasFire && hasIce) {
        potionName = 'Philtre de l\'Équilibre Élémentaire';
    } else if (hasFire) {
        potionName = 'Infusion de Flammes Éternelles';
    } else if (hasIce) {
        potionName = 'Tisane des Glaces Éternelles';
    } else if (hasLightning) {
        potionName = 'Décoction de la Foudre Céleste';
    } else if (hasMandrake) {
        potionName = 'Élixir de la Mandragore Ancestrale';
    } else if (hasFairy) {
        potionName = 'Potion de la Magie Féerique';
    } else if (ingredients.some(i => i.id === 'screaming_mandrake')) {
        potionName = 'Élixir de la Voix Tonitruante';
    } else if (ingredients.some(i => i.id === 'silver_moon_flower')) {
        potionName = 'Potion de Divination Lunaire';
    } else if (ingredients.some(i => i.id === 'dragon_root')) {
        potionName = 'Bréuvage de la Force Draconique';
    } else if (ingredients.some(i => i.id === 'temporal_ivy')) {
        potionName = 'Philtre de Maîtrise Temporelle';
    } else if (ingredients.some(i => i.id === 'ticklish_mushroom')) {
        potionName = 'Infusion de Joie Contagieuse';
    } else if (ingredients.some(i => i.id === 'giant_sneeze_herb')) {
        potionName = 'Tisane des Éternuements Magiques';
    } else if (ingredients.some(i => i.id === 'reverse_clover')) {
        potionName = 'Élixir de Chance Inversée';
    } else if (ingredients.some(i => i.id === 'dragon_breath_pepper')) {
        potionName = 'Concoction du Souffle de Dragon';
    } else if (ingredients.some(i => i.id === 'electric_algae')) {
        potionName = 'Potion de Contrôle Électrique';
    } else if (ingredients.some(i => i.id === 'cloudy_moss')) {
        potionName = 'Bréuvage de Lévitation Nuageuse';
    } else if (ingredients.some(i => i.id === 'ice_cactus')) {
        potionName = 'Élixir de Gel Éternel';
    } else if (ingredients.some(i => i.id === 'whirlwind_rose')) {
        potionName = 'Infusion de Téléportation Venteuse';
    } else if (ingredients.some(i => i.id === 'telepathic_orchid')) {
        potionName = 'Potion de Communication Mentale';
    } else if (ingredients.some(i => i.id === 'upside_down_banana')) {
        potionName = 'Philtre d\'Inversion Gravitationnelle';
    } else if (ingredients.some(i => i.id === 'rainbow_dandelion')) {
        potionName = 'Élixir de Camouflage Arc-en-Ciel';
    } else if (ingredients.some(i => i.id === 'basilisk_basil')) {
        potionName = 'Concoction de Protection Pétrifiante';
    } else if (ingredients.some(i => i.id === 'giant_miniature_tree')) {
        potionName = 'Potion de Paradoxe Spatial';
    } else if (ingredients.some(i => i.id === 'lost_time_flower')) {
        potionName = 'Bréuvage de Récupération Mnésique';
    } else if (ingredients.some(i => i.id === 'mirror_mushroom')) {
        potionName = 'Élixir d\'Illusion Miroir';
    } else if (ingredients.some(i => i.id === 'universal_laughter_herb')) {
        potionName = 'Infusion de Rigolade Universelle';
    } else if (ingredients.some(i => i.id === 'rainbow_dragon_scales')) {
        potionName = 'Élixir Prismatique Arc-en-Ciel';
    } else if (ingredients.some(i => i.id === 'clumsy_phoenix_ashes')) {
        potionName = 'Potion de Résurrection Maladroite';
    } else if (ingredients.some(i => i.id === 'insomniac_fairy_dust')) {
        potionName = 'Bréuvage d\'Énergie Infinie';
    } else if (ingredients.some(i => i.id === 'grumpy_unicorn_bone')) {
        potionName = 'Concoction de Purification Agressive';
    } else if (ingredients.some(i => i.id === 'broken_hourglass_sand')) {
        potionName = 'Philtre de Décalage Temporel';
    } else if (ingredients.some(i => i.id === 'shy_kraken_oil')) {
        potionName = 'Huile d\'Invisibilité Aquatique';
    } else if (ingredients.some(i => i.id === 'cold_salamander_essence')) {
        potionName = 'Essence de Chaleur Paradoxale';
    } else if (ingredients.some(i => i.id === 'dimensional_snail_slime')) {
        potionName = 'Bave de Téléportation Lente';
    } else if (ingredients.some(i => i.id === 'lazy_troll_elbow_oil')) {
        potionName = 'Huile de Force Minimale';
    } else if (ingredients.some(i => i.id === 'sincere_crocodile_tears')) {
        potionName = 'Larmes d\'Empathie Forcée';
    } else if (ingredients.some(i => i.id === 'sick_sea_unicorn_mucus')) {
        potionName = 'Mucus de Guérison Aquatique';
    } else if (ingredients.some(i => i.id === 'vegetarian_basilisk_saliva')) {
        potionName = 'Salive de Pétrification Végétarienne';
    } else if (ingredients.some(i => i.id === 'deaf_giant_earwax')) {
        potionName = 'Cire de Silence Assourdissant';
    } else if (ingredients.some(i => i.id === 'vegan_vampire_blood')) {
        potionName = 'Sang d\'Immortalité Végétarienne';
    } else if (ingredients.some(i => i.id === 'awkward_griffon_feather')) {
        potionName = 'Plume de Vol Malaisant';
    } else if (ingredients.some(i => i.id === 'cheshire_cat_smile')) {
        potionName = 'Extrait d\'Invisibilité Souriante';
    } else if (ingredients.some(i => i.id === 'sleeping_dragon_snore')) {
        potionName = 'Essence de Sommeil Dragonique';
    } else if (ingredients.some(i => i.id === 'philosopher_octopus_ink')) {
        potionName = 'Encre de Sagesse Tentaculaire';
    } else if (ingredients.some(i => i.id === 'scared_lion_courage')) {
        potionName = 'Extrait de Courage Tremblant';
    } else if (ingredients.some(i => i.id === 'rebel_unicorn_curse')) {
        potionName = 'Essence de Malédiction Rose';
    } else {
        // Combinaisons plus complexes basées sur les types
        const dominantType = getDominantIngredientType();
        const typeNames = {
            plante: 'de la Nature Sauvage',
            animal: 'des Créatures Mystiques',
            minéral: 'de la Terre Ancienne',
            cosmique: 'des Forces Cosmiques',
            élémentaire: 'des Éléments Primordiaux',
            démonique: 'des Ombres Démoniaques',
            divin: 'de la Lumière Divine',
            ombre: 'des Ténèbres Éternelles',
            féerique: 'de la Magie Féerique',
            poudre: 'des Poudres Prismatiques',
            huile: 'des Huiles Enchantées',
            extrait: 'des Extraits Bizarres'
        };
        
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const typeName = typeNames[dominantType] || 'Mystérieux';
        potionName = `${prefix} ${typeName}`;
    }
    
    // Ajouter un adjectif pour plus de variété
    const adjective = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${adjective} ${potionName}`;
}

// Génération créative de la description basée sur les ingrédients
function generateCreativePotionDescription(ingredients) {
    const descriptions = [];
    
    // Analyser chaque ingrédient pour créer une description cohérente
    ingredients.forEach(ingredient => {
        switch(ingredient.id) {
            case 'mandrake':
                descriptions.push('La racine de mandragore confère des propriétés de guérison exceptionnelles');
                break;
            case 'dragon_blood':
                descriptions.push('Le sang de dragon apporte une force et une résistance légendaires');
                break;
            case 'moonstone':
                descriptions.push('La pierre de lune canalise l\'énergie lunaire et les émotions');
                break;
            case 'phoenix_feather':
                descriptions.push('La plume de phénix permet la régénération et la renaissance');
                break;
            case 'unicorn_horn':
                descriptions.push('La corne de licorne purifie et protège contre les malédictions');
                break;
            case 'star_dust':
                descriptions.push('La poussière d\'étoile ouvre les portes de la sagesse cosmique');
                break;
            case 'crystal_shard':
                descriptions.push('L\'éclat de cristal amplifie les pouvoirs magiques');
                break;
            case 'witch_herb':
                descriptions.push('L\'herbe de sorcière renforce les sorts et enchantements');
                break;
            case 'demon_essence':
                descriptions.push('L\'essence de démon accorde des pouvoirs sombres et destructeurs');
                break;
            case 'angel_tears':
                descriptions.push('Les larmes d\'ange apportent guérison divine et protection céleste');
                break;
            case 'shadow_moss':
                descriptions.push('La mousse d\'ombre permet de se fondre dans les ténèbres');
                break;
            case 'lightning_bolt':
                descriptions.push('L\'éclair confère vitesse et puissance électrique');
                break;
            case 'fairy_dust':
                descriptions.push('La poussière de fée accorde légèreté et magie féerique');
                break;
            case 'vampire_bat':
                descriptions.push('La chauve-souris vampire permet de se transformer en créature de la nuit');
                break;
            case 'golden_apple':
                descriptions.push('La pomme d\'or confère immortalité et sagesse divine');
                break;
            case 'silver_water':
                descriptions.push('L\'eau d\'argent révèle les vérités cachées et les illusions');
                break;
            case 'fire_essence':
                descriptions.push('L\'essence de feu maîtrise les flammes et la destruction');
                break;
            case 'ice_crystal':
                descriptions.push('Le cristal de glace permet de contrôler le froid et la stase');
                break;
            case 'thunder_heart':
                descriptions.push('Le cœur de tonnerre accorde puissance électrique et courage');
                break;
            case 'earth_core':
                descriptions.push('Le noyau de terre confère stabilité et connexion avec la nature');
                break;
            case 'wind_spirit':
                descriptions.push('L\'esprit du vent accorde liberté et vitesse aérienne');
                break;
            case 'time_sand':
                descriptions.push('Le sable du temps permet de manipuler le flux temporel');
                break;
            case 'void_essence':
                descriptions.push('L\'essence du vide ouvre les portes vers d\'autres dimensions');
                break;
            case 'chaos_powder':
                descriptions.push('La poudre du chaos crée des effets imprévisibles et puissants');
                break;
            case 'screaming_mandrake':
                descriptions.push('La mandragore hurlante amplifie la voix et confère des pouvoirs de confusion');
                break;
            case 'silver_moon_flower':
                descriptions.push('La fleur de lune argentée ouvre les portes de la divination et des rêves prophétiques');
                break;
            case 'dragon_root':
                descriptions.push('La racine de dragon endormi confère résistance au feu et force légendaire');
                break;
            case 'temporal_ivy':
                descriptions.push('Le lierre temporel permet de ralentir le temps et inverser le vieillissement');
                break;
            case 'ticklish_mushroom':
                descriptions.push('Le champignon chatouilleur provoque un fou rire incontrôlable et une joie euphorique');
                break;
            case 'giant_sneeze_herb':
                descriptions.push('L\'herbe à éternuements géants repousse les ennemis par la force de ses éternuements magiques');
                break;
            case 'reverse_clover':
                descriptions.push('Le trèfle de malchance inversée transforme la malchance en chance folle');
                break;
            case 'dragon_breath_pepper':
                descriptions.push('Le piment du souffle de dragon permet de cracher du feu temporairement');
                break;
            case 'electric_algae':
                descriptions.push('L\'algue des profondeurs électriques maîtrise l\'électricité aquatique');
                break;
            case 'cloudy_moss':
                descriptions.push('La mousse nuageuse permet la lévitation et la marche sur les nuages');
                break;
            case 'ice_cactus':
                descriptions.push('Le cactus de glace éternelle permet le gel instantané et la résistance à la chaleur');
                break;
            case 'whirlwind_rose':
                descriptions.push('La rose de vent tourbillonnant contrôle les courants d\'air et permet la téléportation courte');
                break;
            case 'telepathic_orchid':
                descriptions.push('L\'orchidée télépathique permet la communication mentale et la lecture de pensées');
                break;
            case 'upside_down_banana':
                descriptions.push('Le bananier inversé crée une inversion de gravité localisée');
                break;
            case 'rainbow_dandelion':
                descriptions.push('Le pissenlit multicolore change de couleur selon l\'humeur et permet le camouflage');
                break;
            case 'basilisk_basil':
                descriptions.push('Le basilic du basilisk protège contre les regards pétrifiants');
                break;
            case 'giant_miniature_tree':
                descriptions.push('L\'arbre miniature géant crée des paradoxes spatiaux et permet l\'agrandissement/rétrécissement');
                break;
            case 'lost_time_flower':
                descriptions.push('La fleur du temps perdu permet de récupérer les souvenirs oubliés');
                break;
            case 'mirror_mushroom':
                descriptions.push('Le champignon miroir crée des illusions et des doubles temporaires');
                break;
            case 'universal_laughter_herb':
                descriptions.push('L\'herbe de rigolade universelle fait rire dans toutes les langues, même les langues mortes');
                break;
            // Poudres Magiques
            case 'rainbow_dragon_scales':
                descriptions.push('La poudre d\'écailles de dragon arc-en-ciel amplifie tous les sorts avec un effet prismatique');
                break;
            case 'clumsy_phoenix_ashes':
                descriptions.push('Les cendres de phénix maladroit permettent une résurrection partielle et une régénération aléatoire');
                break;
            case 'insomniac_fairy_dust':
                descriptions.push('La poussière d\'ailes de fée insomniaque confère une énergie infinie et une hyperactivité magique');
                break;
            case 'grumpy_unicorn_bone':
                descriptions.push('La poudre d\'os de licorne grinchue effectue une purification agressive et un nettoyage excessif');
                break;
            case 'broken_hourglass_sand':
                descriptions.push('Le sable de sablier temporel cassé crée des décalages temporels imprévisibles');
                break;
            // Huiles Enchantées
            case 'shy_kraken_oil':
                descriptions.push('L\'huile de kraken timide permet l\'invisibilité aquatique et un camouflage embarrassé');
                break;
            case 'cold_salamander_essence':
                descriptions.push('L\'essence de salamandre frileuse produit une chaleur paradoxale et un feu qui réchauffe sans brûler');
                break;
            case 'dimensional_snail_slime':
                descriptions.push('La bave raffinée d\'escargot dimensionnel crée des portails miniatures et une téléportation lente');
                break;
            case 'lazy_troll_elbow_oil':
                descriptions.push('L\'huile de coude de troll paresseux confère une force minimale avec un effort maximum');
                break;
            case 'sincere_crocodile_tears':
                descriptions.push('Les larmes de crocodile sincère provoquent une empathie forcée et une vérité émotionnelle');
                break;
            // Extraits d'Animaux Fantastiques
            case 'sick_sea_unicorn_mucus':
                descriptions.push('Le mucus de licorne des mers enrhumée permet une guérison aquatique et crée des bulles curatives');
                break;
            case 'vegetarian_basilisk_saliva':
                descriptions.push('La salive de basilic végétarien provoque une pétrification temporaire des légumes seulement');
                break;
            case 'deaf_giant_earwax':
                descriptions.push('La cire d\'oreille de géant sourd crée un silence assourdissant et un effet anti-bruit');
                break;
            case 'vegan_vampire_blood':
                descriptions.push('Le sang de vampire végan confère une immortalité partielle et une soif de légumes');
                break;
            case 'awkward_griffon_feather':
                descriptions.push('La plume fondue de griffon malaisant permet un vol hésitant et une maladresse aérienne');
                break;
            // Extraits Bizarres et Rares
            case 'cheshire_cat_smile':
                descriptions.push('L\'extrait de sourire de chat de Cheshire permet une invisibilité avec un sourire visible');
                break;
            case 'sleeping_dragon_snore':
                descriptions.push('L\'essence de ronflement de dragon endormi provoque un sommeil magique instantané et des rêves épiques');
                break;
            case 'philosopher_octopus_ink':
                descriptions.push('Le suc de tentacule de poulpe philosophe confère une sagesse tentaculaire et une réflexion profonde');
                break;
            case 'scared_lion_courage':
                descriptions.push('L\'extrait de courage de lion peureux provoque un courage paradoxal et une bravoure tremblante');
                break;
            case 'rebel_unicorn_curse':
                descriptions.push('L\'essence de malédiction de licorne rebelle crée des bénédictions maudites et un bonheur diabolique');
                break;
        }
    });
    
    // Créer une description finale cohérente
    if (descriptions.length === 0) {
        return 'Une potion mystérieuse aux propriétés inconnues.';
    } else if (descriptions.length === 1) {
        return descriptions[0] + '.';
    } else {
        const lastDescription = descriptions.pop();
        return descriptions.join(', ') + ' et ' + lastDescription + '.';
    }
}

// Affichage du résultat de la potion
function showPotionResult(potion) {
    elements.potionName.textContent = potion.name;
    elements.potionDescription.textContent = potion.description;
    
    // Ajouter les effets si disponibles
    if (potion.effects && potion.effects.length > 0) {
        const effectsHtml = potion.effects.map(effect => `<li>${effect}</li>`).join('');
        elements.potionDescription.innerHTML += `<br><strong>Effets:</strong><ul>${effectsHtml}</ul>`;
    }
    
    // Ajouter la rareté si disponible
    if (potion.rarity) {
        const rarityColors = {
            'commun': '#6b7280',
            'rare': '#3b82f6',
            'épique': '#8b5cf6',
            'légendaire': '#fbbf24'
        };
        const rarityColor = rarityColors[potion.rarity] || '#6b7280';
        elements.potionDescription.innerHTML += `<br><span style="color: ${rarityColor}; font-weight: bold;">Rareté: ${potion.rarity}</span>`;
    }
    
    elements.potionResult.style.display = 'block';
    
    // Animation d'apparition
    elements.potionResult.style.animation = 'fadeIn 0.5s ease';
    
    // Scroll vers le résultat
    elements.potionResult.scrollIntoView({ behavior: 'smooth' });
}

// Sauvegarde de la recette
async function saveRecipe() {
    const recipeKey = getRecipeKey();
    gameState.recipes[recipeKey] = {
        name: elements.potionName.textContent,
        description: elements.potionDescription.textContent,
        ingredients: gameState.selectedIngredients.map(i => i.name),
        type: getDominantIngredientType(),
        power: Math.floor(Math.random() * 100) + 1
    };
    
    await saveRecipes();
    renderSavedRecipes();
    showNotification('Recette sauvegardée avec succès !', 'success');
}

// Rendu des recettes sauvegardées
function renderSavedRecipes() {
    elements.recipesList.innerHTML = '';
    
    Object.values(gameState.recipes).forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h4>${recipe.name}</h4>
            <div class="recipe-ingredients">
                <strong>Ingrédients:</strong> ${recipe.ingredients.join(', ')}
            </div>
            <div class="recipe-description">${recipe.description}</div>
        `;
        elements.recipesList.appendChild(recipeCard);
    });
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    elements.brewButton.addEventListener('click', brewPotion);
    elements.saveRecipeButton.addEventListener('click', saveRecipe);
    
    // Clic sur le chaudron pour vider
    elements.cauldron.addEventListener('click', () => {
        if (gameState.selectedIngredients.length > 0) {
            showEmptyCauldronPopup();
        }
    });
    
    // Écouteurs pour la popup personnalisée
    document.getElementById('popup-close').addEventListener('click', hideEmptyCauldronPopup);
    document.getElementById('popup-cancel').addEventListener('click', hideEmptyCauldronPopup);
    document.getElementById('popup-confirm').addEventListener('click', emptyCauldron);
    document.getElementById('popup-overlay').addEventListener('click', hideEmptyCauldronPopup);
}

// Afficher la popup de vidage du chaudron
function showEmptyCauldronPopup() {
    const popup = document.getElementById('custom-popup');
    const ingredientsList = document.getElementById('popup-ingredients');
    
    // Afficher la liste des ingrédients dans la popup
    const ingredientsText = gameState.selectedIngredients
        .map(ingredient => `${ingredient.emoji} ${ingredient.name}`)
        .join(', ');
    
    ingredientsList.textContent = `Ingrédients actuels : ${ingredientsText}`;
    
    // Afficher la popup
    popup.classList.add('show');
    
    // Empêcher le scroll de la page
    document.body.style.overflow = 'hidden';
}

// Masquer la popup de vidage du chaudron
function hideEmptyCauldronPopup() {
    const popup = document.getElementById('custom-popup');
    popup.classList.remove('show');
    
    // Restaurer le scroll de la page
    document.body.style.overflow = '';
}

// Vider le chaudron
function emptyCauldron() {
    gameState.selectedIngredients = [];
    updateUI();
    animateCauldron();
    elements.potionResult.style.display = 'none';
    hideEmptyCauldronPopup();
    showNotification('Chaudron vidé !', 'info');
}

// Affichage de notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : type === 'error' ? '#ef4444' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Styles CSS pour les animations de notification
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initGame); 