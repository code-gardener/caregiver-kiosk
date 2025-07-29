#!/bin/bash

# Customize these values
PERSONAL_EMAIL="your.personal@email.com"
WORK_EMAIL="your.work@email.com"

PERSONAL_KEY_NAME="id_ed25519_github_personal"
WORK_KEY_NAME="id_ed25519_github_work"

# Step 1: Generate SSH Keys
echo "🔐 Generating personal SSH key..."
ssh-keygen -t ed25519 -C "$PERSONAL_EMAIL" -f ~/.ssh/$PERSONAL_KEY_NAME -N ""

echo "🔐 Generating work SSH key..."
ssh-keygen -t ed25519 -C "$WORK_EMAIL" -f ~/.ssh/$WORK_KEY_NAME -N ""

# Step 2: Create ~/.ssh/config entries
echo "📝 Updating ~/.ssh/config..."

cat <<EOF >> ~/.ssh/config

# Personal GitHub Account
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/$PERSONAL_KEY_NAME
    IdentitiesOnly yes

# Work GitHub Account
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/$WORK_KEY_NAME
    IdentitiesOnly yes
EOF

chmod 600 ~/.ssh/config

# Step 3: Output Public Keys
echo "📎 Personal public key (copy to https://github.com/settings/keys):"
cat ~/.ssh/${PERSONAL_KEY_NAME}.pub
echo ""
echo "📎 Work public key (copy to https://github.com/settings/keys or https://github.com/org/settings/keys):"
cat ~/.ssh/${WORK_KEY_NAME}.pub
echo ""

# Step 4: Optional instructions
echo "✅ Now go to GitHub and add these keys:"
echo "  Personal: https://github.com/settings/keys"
echo "  Work:     https://github.com/settings/keys or your GitHub Enterprise Org"
echo ""
echo "💡 When cloning:"
echo "  Personal: git@github-personal:your-username/your-repo.git"
echo "  Work:     git@github-work:your-org/your-repo.git"
