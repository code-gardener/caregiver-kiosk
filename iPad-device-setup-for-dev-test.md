✅ iPad Development & Testing Device Setup Checklist
📱 Device 1: Unmanaged iPad (Dev iPad)
Purpose: Development, debugging, testing Face ID, running app directly from Xcode

1. Set up the iPad
 Erase and set up as a personal device

 Do not enroll in MDM

 Sign in with your Apple ID (linked to Apple Developer account)

 Enable Developer Mode:

Plug into Mac with Xcode installed

Confirm prompt on iPad to enable Dev Mode

Reboot if required

2. Xcode / Build Tools
 Pair with Mac via USB or Wi-Fi

 In Xcode:

Open the .xcworkspace project under ios/App

Select your dev iPad as build target

Ensure provisioning profile allows development deployment

3. Development Tasks
 Test Face ID / fallback PIN

 Sideload new builds instantly via npx cap run ios

 Use Safari’s Web Inspector for debugging

 Run ng build + npx cap sync after changes

🔐 Device 2: Managed iPad (Test iPad)
Purpose: Simulate final deployment environment (Single App Mode, MDM policies)

1. Enroll in MDM
 Factory reset the iPad

 Enroll in your org’s MDM (e.g., Intune, JAMF, Kandji)

 Apply supervision + MDM profile via Apple Configurator or ABM

 Device should now be non-removable from MDM

2. Configure MDM Policies
 Install .ipa (signed via GitHub Actions or Xcode export)

 Enable Single App Mode using the app’s bundle ID:

Copy
Edit
com.example.caregiverkiosk
 Enforce:

Wi-Fi auto-connect to corpnet

Disable App Store / Safari / Settings

Prevent USB debugging

Session timeout / lock rules

Optional: auto-launch app on reboot

3. Testing Tasks
 Confirm app auto-launches

 Attempt home button / swipe gestures → should be blocked

 Log in with AAD credentials or fallback PIN

 Complete a form, verify patient lock flow

 Hand iPad back → unlock via nurse Face ID or PIN

🪪 Signing & Apple Dev Setup (For Both Devices)
 Create an App ID in Apple Developer Console

Matches: com.example.caregiverkiosk

 Register both devices in your Developer Account

 Generate a development provisioning profile

 Generate a distribution provisioning profile for Test iPad (.ipa)

 Use automatic signing in Xcode for easier dev