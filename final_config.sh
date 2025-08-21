#!/bin/bash

# ────────────────────────────────────────────────────────────────────────────────
# 8) Pin pnpm & Node; add vercel.json; exclude README from deployment
echo "⚙️ Configuring package.json..."
node - <<'NODE'
const fs = require('fs');
const p = 'package.json';
const j = JSON.parse(fs.readFileSync(p, 'utf8'));
j.packageManager = "pnpm@10.4.0";
j.engines = Object.assign({}, j.engines, { node: "22.x" });
j.scripts = Object.assign({
  dev: "next dev",
  build: "next build",
  start: "next start",
  lint: "next lint",
  typecheck: "tsc --noEmit"
}, j.scripts || {});
fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n");
console.log('✅ package.json pinned to pnpm@10.4.0 & Node 22.x with scripts.');
NODE

echo "📋 Creating vercel.json..."
cat > vercel.json <<'JSON'
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "installCommand": "corepack enable && pnpm install --frozen-lockfile",
  "buildCommand": "pnpm build",
  "outputDirectory": ".next"
}
JSON

echo "🚫 Creating .vercelignore..."
touch .vercelignore
grep -qxF 'README.md' .vercelignore || echo 'README.md' >> .vercelignore
grep -qxF 'readme.md' .vercelignore || echo 'readme.md' >> .vercelignore
grep -qxF 'docs/**' .vercelignore   || echo 'docs/**'   >> .vercelignore
grep -qxF '*.mdx' .vercelignore     || echo '*.mdx'     >> .vercelignore

echo "22" > .nvmrc

# ────────────────────────────────────────────────────────────────────────────────
# 9) README (excluded from deployment)
echo "📝 Creating README..."
cat > README.md <<'MD'
# ITF — Solar CRM (Next.js 14)
iPad-first floating-card UI with bottom nav. No mock/demo data. Neon Postgres will be added after first successful Vercel deploy.
- Dev: `pnpm dev`
- Build: `pnpm build`
- Deploy: Push to GitHub → Import in Vercel
**Note:** README is excluded from Vercel upload via `.vercelignore`.
MD

echo "✅ Configuration complete!"
