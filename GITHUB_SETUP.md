# GitHub Setup - Step by Step

## Step 1: Create Repository on GitHub

1. **Open GitHub:**
   - Go to: https://github.com/new
   - Or click the "+" icon (top right) → "New repository"

2. **Repository Settings:**
   - **Repository name:** `ledger-leadership`
   - **Description:** (optional) "Ledger Leadership website and LLOps Control Center"
   - **Visibility:** 
     - Choose **Public** (anyone can see) or **Private** (only you)
   - **Important:** 
     - ❌ **DO NOT** check "Add a README file"
     - ❌ **DO NOT** check "Add .gitignore"
     - ❌ **DO NOT** check "Choose a license"
   - (We already have all these files)

3. **Click "Create repository"**

## Step 2: Copy Your Repository URL

After creating, GitHub will show you a page with setup instructions. You'll see a URL like:

```
https://github.com/YOUR_USERNAME/ledger-leadership.git
```

**Copy this URL** - you'll need it in the next step.

## Step 3: Connect Local Repository to GitHub

Once you have the URL, come back here and I'll help you run the commands, or run these yourself:

```bash
cd "/Users/jeffburke/Library/Mobile Documents/com~apple~CloudDocs/Ledlead/LL5/ledger-leadership"

# Add the remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git

# Verify it was added
git remote -v

# Push to GitHub
git push -u origin main
```

## Step 4: Authentication

When you run `git push`, you may be asked for credentials:

### Option A: Personal Access Token (Recommended)
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `ledger-leadership`
4. Select scopes: Check **`repo`** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When `git push` asks for password, paste the token

### Option B: GitHub CLI (if installed)
```bash
gh auth login
git push -u origin main
```

### Option C: SSH (if you have SSH keys set up)
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/ledger-leadership.git
git push -u origin main
```

## Step 5: Verify

After pushing, visit your repository:
```
https://github.com/YOUR_USERNAME/ledger-leadership
```

You should see all your files!

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/ledger-leadership.git
```

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Check the token has `repo` scope
- Try using GitHub CLI: `gh auth login`

### "Permission denied"
- Verify the repository name matches exactly
- Check you have access to the repository
- Try creating the repository again

## Next Steps

After GitHub is set up:
- ✅ Step 2 Complete
- ⏭️ Move to Step 3: Set up Supabase
- ⏭️ Then Step 4: Connect to Netlify
