# --- az-create-app-registration.sh ---
# Bash script to create an App Registration in Azure AD with redirect URIs for mobile

# Variables
APP_NAME="CaregiverKioskApp"
BUNDLE_ID="com.example.caregiverkiosk"
REDIRECT_URI="msauth.$BUNDLE_ID://auth"

# Create the app registration
az ad app create \
  --display-name "$APP_NAME" \
  --available-to-other-tenants false \
  --native-app true \
  --reply-urls "$REDIRECT_URI" \
  --query "appId"

# Notes:
# - The REDIRECT_URI must match the one configured in the iOS app's Info.plist
#   Add this inside Info.plist:
#   <key>CFBundleURLTypes</key>
#   <array>
#     <dict>
#       <key>CFBundleURLSchemes</key>
#       <array>
#         <string>msauth.com.example.caregiverkiosk</string>
#       </array>
#     </dict>
#   </array>

# - You may need to run 'az login' and ensure you have permissions to create App Registrations
# - This script sets a single redirect URI for iOS. Add web URLs if you're supporting browser auth too.
