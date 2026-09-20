# Activity Log

Newest first. One entry per working session: what was done, what was found, what
was verified, and what's left.

---

## 2026-09-20 — Added a fourth case study: St. Peter's Agro

Terrence wanted to add a new project to the work section. No candidate was
picked yet going in, so the session started with a survey rather than a write-up.

**Candidate search.** Scanned local project folders under `~/Documents/Code` and
GitHub (`gh repo list`) for client work from the last couple of months not
already featured. Nine repos looked plausible; most were ruled out fast — two
had no git history yet (`farmio`, a crypto site), one had two commits
(`laddove-cookies`), two were real estate sites that would have duplicated each
other (`Appletop-Properties`, `JO Properties`), one overlapped the existing
Highend Escapes case study (`artsterix-website`, another no-backend brochure
site). Two real candidates remained: `sevenlugard` (apartments site + PHP
admin panel, not yet commercially live) and `St-Peters-Agro` (storefront +
admin dashboard, live, 82 commits, the most active of the set). Terrence chose
St. Peter's Agro.

**Case study content.** Read that project's own `ACTIVITY_LOG.md` and `README.md`
for real material rather than inventing a narrative. Deliberately left two
things out of the public write-up: the client's name, and the payment-platform
scope dispute documented in that log — both are private business between
Terrence and the client, not portfolio material. What made it in: the "No
products found" bug (empty catalog state rendered as an error state before the
first fetch even returned), the category-rename bug that would have silently
deleted wholesale pricing on dozens of products, and the deliberate choice to
route checkout through WhatsApp instead of a payment gateway. Terrence approved
the draft copy as-is.

**Screenshots.** The site is live at stpetersagro.com but there were no
Claude-side admin credentials, so admin-dashboard shots (like Box 55 has)
weren't possible this round. Captured four screenshots of the public site
instead — home, the shop/catalog grid, a product page, and the cart with the
"Order via WhatsApp" handoff — using headless Chrome via a one-off
`puppeteer-core` script in the scratchpad (not added to the project). Plain
`page.goto("/cart")` lost the cart item on the first attempt, since it's
client-only React state and a hard navigation reloads the SPA; switched to
clicking the in-page cart link instead, which preserved it. Resized and
converted to WebP (`cwebp`) to match the file-size range of the existing
case-study images (~26–160 KB).

**Wired in.** Added the project to `src/data/content.ts` as project `04`
(`FULL STACK DEVELOPMENT`, 2026), with the same `Project`/`Study` shape as the
other three. `Work.tsx` (used on both the homepage and `/work`) maps over
`projects` with no slice or limit, so it picked up the fourth entry
automatically — confirmed live on both the homepage feed and its own
`/work/st-peters-agro` page, gallery images all returning 200.

**"The work page is completely glitching."** Turned out to be the dev server,
not the new data. The Turbopack process was stuck in a crash-reload loop —
`preview_logs` showed a repeating panic (`Failed to write app endpoint
/work/page` → `Next.js package not found`) and the browser console had over
2,000 `[HMR] connected` / `[Fast Refresh] rebuilding` messages piled up in a
few seconds, i.e. rebuilding roughly every 140ms. Checked first whether the new
project broke anything: `Work.tsx` and `ProjectCard.tsx` have no per-index or
count-dependent logic, and the scroll-reveal (`Reveal.tsx`, `whileInView`) was
behaving exactly as designed — cards below the fold sit at `opacity: 0` until
scrolled into view, confirmed via `getComputedStyle` on each card, then
confirmed they revealed correctly on scroll. So the "glitch" was the crash
loop's constant re-render, not a real bug. Fixed by stopping the dev server,
deleting `.next` (the panic pattern looked like corrupted persistent Turbopack
cache, not just an in-memory hiccup), and restarting. Verified clean afterward:
no server errors, no console errors, all four cards render and reveal
correctly.

**Also confirmed, not changed:** Terrence renamed the project's local folder
(now `my portfolio`, was something else on disk). The GitHub remote is still
`git@github.com:Koukarai/portfolio-v4.git` and the repo/Vercel project name is
`portfolio-v4` — a local directory rename doesn't touch either, so there was
nothing to update.

**Post-merge sweep.** Terrence asked to check the rest of the site for anything
else that needed updating now that there's a fourth project. `sitemap.ts` maps
over `projects` with no hardcoded count, so it needed nothing. Two spots did:
the `/about` and `/work` page `<meta description>`s both still named only the
original three projects by name, and a comment in `/work/[slug]/page.tsx`
referenced "all three projects." Fixed all three, committed separately
(`fc0d56d`). Checked `Services.tsx`, `Footer.tsx`, `/contact`, `/services` and
the root layout/OG-image metadata too — nothing else references specific
projects or a project count.

**Left open:** no admin-dashboard screenshot for the new case study, since
Claude doesn't have (and shouldn't be given) the admin login. If Terrence wants
one to match Box 55's dashboard shots, he'd need to supply it or grant
temporary access.

---

## 2026-08-04 — Log started

Created while auditing global Claude memory files across machines. This project
was the only one of the three active repos without an activity log.

**Nothing was changed in this codebase.** No prior session history exists —
whatever work produced the current state predates this file and was not
recorded anywhere recoverable. Treat the first real entry below this one as the
start of the written record, not the start of the project.

Current state as observed, not as documented by anyone:

- Next.js project. `CLAUDE.md` is a one-line `@AGENTS.md` import.
- `AGENTS.md` is tool-generated by Next.js (`BEGIN:nextjs-agent-rules` markers)
  and contains only the "read the bundled docs before writing code" warning.
  Leave the generated block alone.
- There is no hand-written project context anywhere in the repo — no status, no
  standing decisions, no conventions. Worth adding a `CLAUDE.md` body (alongside
  the `@AGENTS.md` import) next time someone works here with the context to
  write it accurately.
