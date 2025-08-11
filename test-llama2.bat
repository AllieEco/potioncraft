@echo off
echo.
echo ========================================
echo    🧪 Test Llama 2 - PotionCraft
echo ========================================
echo.

echo 🔍 Test de Llama 2...
ollama run llama2 "Crée une potion magique avec Racine de Mandragore et Sang de Dragon" --timeout 30

echo.
echo ✅ Test terminé !
echo.
echo 🎮 Pour tester le jeu complet :
echo    http://localhost:3001
echo.
pause 