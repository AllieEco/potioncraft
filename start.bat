@echo off
echo.
echo ========================================
echo    🧪 PotionCraft - Serveur de demarrage
echo ========================================
echo.

echo 🔍 Verification d'Ollama...
ollama list >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Ollama n'est pas installe ou ne fonctionne pas
    echo 📖 Consultez OLLAMA_SETUP.md pour l'installation
    echo.
    echo 🚀 Demarrage en mode local uniquement...
) else (
    echo ✅ Ollama detecte
    echo 🤖 Verification du modele Llama 2...
    ollama list | findstr "llama2" >nul
    if %errorlevel% neq 0 (
        echo ⚠️  Modele Llama 2 non trouve
        echo 📥 Telechargement en cours...
        ollama pull llama2
    ) else (
        echo ✅ Modele Llama 2 disponible
    )
)

echo.
echo 🚀 Demarrage du serveur PotionCraft...
echo 📍 URL: http://localhost:3001
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

npm start 