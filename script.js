// Configuration du jeu
const GAME_CONFIG = {
    minIngredients: 2,
    maxIngredients: 4,
    recipesFile: 'recipes.json'
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
    { id: 'chaos_powder', name: 'Poudre du Chaos', emoji: '🌀', type: 'cosmique' }
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
    féerique: '#ec4899'
};

// État du jeu
let gameState = {
    selectedIngredients: [],
    recipes: {},
    isBrewing: false
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
function initGame() {
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

// Génération de potion avec LLM (simulation)
async function generatePotionWithLLM() {
    // Simulation d'un délai de génération
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const ingredients = gameState.selectedIngredients;
    const ingredientNames = ingredients.map(i => i.name);
    const types = [...new Set(ingredients.map(i => i.type))];
    
    // Analyse des ingrédients pour créer un nom cohérent
    const potionName = generateCreativePotionName(ingredients);
    const potionDescription = generateCreativePotionDescription(ingredients);
    
    return {
        name: potionName,
        description: potionDescription,
        ingredients: ingredientNames,
        type: getDominantIngredientType(),
        power: Math.floor(Math.random() * 100) + 1
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
            féerique: 'de la Magie Féerique'
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
            if (confirm('Voulez-vous vider le chaudron ?')) {
                gameState.selectedIngredients = [];
                updateUI();
                animateCauldron();
                elements.potionResult.style.display = 'none';
            }
        }
    });
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