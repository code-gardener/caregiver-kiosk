
#!/bin/bash

# Ensure you're in the project root
echo "🔄 Building Angular app..."
ng build || { echo "❌ Angular build failed"; exit 1; }

echo "📦 Syncing with Capacitor..."
npx cap sync ios || { echo "❌ Capacitor sync failed"; exit 1; }

echo "🚀 Opening Xcode to select iPad simulator..."
npx cap open ios
