# Wedding Project TODO - Fix Vercel Build (Dependencies Install Hang)

## Current Status
- package.json engines updated to ^20 || ^22
- package-lock.json regenerated (npm install successful)
- npm audit shows 2 moderate vulns (vite/esbuild; --force would break Vite 5 → ignore for now)

Local tests ✅.

## Steps:
- [x] 1. Fix npm audit vulnerabilities (`npm audit fix`) ← Ignored (breaking)
- [x] 2. Update package.json engines for Node 22 compatibility
- [x] 3. Regenerate package-lock.json (`del package-lock.json && npm install`)
- [x] 4. Verify `npm run build` ← Successful (dist/ generated)
- [x] 5. Commit/push changes
- [x] 6. Retry Vercel deployment ← Fixed deps hang; now \"vite Permission denied 126\" (CRLF fix below)
- [x] 7. Fix package.json line endings (recreated with LF), regen lockfile, repush, redeploy ← package.json recreated, lockfile regenerated, build verified
