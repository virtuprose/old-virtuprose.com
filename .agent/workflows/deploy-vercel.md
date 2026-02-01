---
description: How to manually trigger a Vercel deployment when auto-deploy fails
---

# Manual Vercel Deployment

When pushing to GitHub doesn't trigger a Vercel deployment automatically (broken webhook), use this manual method.

## Prerequisites
- Your Vercel API token: `iykxwPXa4VjeESNme3ES7M6e`
- Project ID: `prj_5PmioI8pWOVugm6Uh23OeCQpP55s`
- GitHub Repo ID: `1145026855`

## Steps

### 1. Push your code to GitHub (if not already done)
```bash
git add -A && git commit -m "your commit message" && git push new-website main
```

### 2. Trigger deployment via Vercel API
// turbo
```bash
curl -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer iykxwPXa4VjeESNme3ES7M6e" \
  -H "Content-Type: application/json" \
  -d '{"name":"new-virtuprose-website","project":"prj_5PmioI8pWOVugm6Uh23OeCQpP55s","target":"production","gitSource":{"type":"github","ref":"main","repoId":"1145026855"}}'
```

### 3. Check deployment status
Go to: https://vercel.com/virtuproses-projects/new-virtuprose-website

---

## Fixing Auto-Deploy Permanently

To fix the broken webhook so pushes auto-deploy again:

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Git**
2. Click **"Disconnect"** from the current Git repository
3. Click **"Connect Git Repository"** and re-select `virtuprose/new-virtuprose-website`
4. This recreates the webhook in GitHub

Or check **GitHub** → **Settings** → **Webhooks** to manually fix the Vercel webhook.
