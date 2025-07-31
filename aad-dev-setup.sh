#!/bin/bash

# aad-dev-setup.sh
# Script to create a basic Azure AD setup for development:
# - Creates 3 users: Admin, Nurse1, Nurse2
# - Registers an app with a redirect URI for mobile

# --- CONFIGURE THESE ---
APP_NAME="CaregiverKioskApp"
BUNDLE_ID="com.scottsharpe44gmail.caregiverkiosk"
REDIRECT_URI="msauth.$BUNDLE_ID://auth"

# Log in and set tenant context
az login

# 1. Create users
echo "Creating test users..."
az ad user create \
  --display-name "Admin" \
  --user-principal-name "admin@$BUNDLE_ID.onmicrosoft.com" \
  --password "TestPass123!" \
  --force-change-password-next-sign-in true

az ad user create \
  --display-name "Nurse1" \
  --user-principal-name "nurse1@$BUNDLE_ID.onmicrosoft.com" \
  --password "TestPass123!" \
  --force-change-password-next-sign-in true

az ad user create \
  --display-name "Nurse2" \
  --user-principal-name "nurse2@$BUNDLE_ID.onmicrosoft.com" \
  --password "TestPass123!" \
  --force-change-password-next-sign-in true

# 2. Register the mobile app

echo "Creating app registration..."
az ad app create \
  --display-name "$APP_NAME" \
  --sign-in-audience AzureADMyOrg \
  --public-client-redirect-uris "$REDIRECT_URI"

# 3. Print instructions for Info.plist configuration
echo ""
echo "✅ App Registration created. Use the following in your Info.plist:"
echo ""
echo "<key>CFBundleURLTypes</key>"
echo "<array>"
echo "  <dict>"
echo "    <key>CFBundleURLSchemes</key>"
echo "    <array>"
echo "      <string>msauth.$BUNDLE_ID</string>"
echo "    </array>"
echo "  </dict>"
echo "</array>"
echo ""
echo "Done."
