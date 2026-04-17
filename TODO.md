# Wedding Project TODO - Fix Vercel Build (Dependencies Install Hang)

## Current Status
- package.json engines updated to ^20 || ^22
- package-lock.json regenerated (npm install successful)
- npm audit shows 2 moderate vulns (vite/esbuild; --force would break Vite 5 → ignore for now)

Local tests ✅.

## COMPLETED ✅
All steps done. Vercel build now succeeds:

- Fixed deps install hang (lockfile/engines).
- Fixed vite Permission denied 126 (package.json LF endings).

Monitor latest deployment (commit ca8e3a6). Local: `npm run preview`.

**Original TODO (Vercel.json):** Done.
