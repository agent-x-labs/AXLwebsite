# motion/ — Agent X Labs animation clips

A HeyGen HyperFrames project that renders the site's looping clips. They embed in the
agent cards (`#agents`) and the how-it-works steps (`#how`), played by
`src/components/hyper-video.tsx`. **Sources** are `clips/*.html`; the **rendered output**
(MP4 / WebM / poster) is committed into the site's `/public`, not here.

## Clips → where they embed

| clip source | `/public` output | shown in |
|---|---|---|
| `clips/reception.html` | `agents/reception-agent.*` | agent card |
| `clips/lead-reactivation.html` | `agents/lead-reactivation-agent.*` | agent card |
| `clips/after-sales.html` | `agents/after-sales-agent.*` | agent card |
| `clips/content-marketing.html` | `agents/content-marketing-agent.*` | agent card |
| `clips/how-01.html … how-03.html` | `how/01.* … 03.*` | how-it-works steps |

Shared design tokens + UI primitives live in `clips/_kit.css`. The how-step clips are
*visual only* — the step number/title come from the page (`STEPS` in `src/content/site.ts`),
so don't bake labels into those clips.

## Workflow (edit → ship a clip)

1. Edit `clips/<name>.html`.
2. `node build.mjs` — **inlines `_kit.css`** into each clip → `build/`. The external
   `<link rel="stylesheet" href="_kit.css">` does NOT load under standalone `-c` rendering,
   so always render from `build/`, never `clips/`.
3. `npx hyperframes@0.7.6 render -c build/<name>.html -o renders/<name>.mp4 -q high`
   (do NOT use `npm run render` — that targets `index.html`, the gallery view).
4. WebM + poster via ffmpeg: WebM `-c:v libvpx-vp9 -b:v 0 -crf 33 -an`; poster = a
   representative mid-animation frame (`-ss <t> -frames:v 1`).
5. Copy all three into `/public` at the path above, `git add` them plus the `clips/`
   source, and deploy as usual (push to `master`).

`build/` and `renders/` are gitignored (regenerable). `clips/` is the source of truth.

## Hard rules (violating these silently breaks the render)

- **Visual state changes must be GSAP tweens — never timeline callbacks or `classList`
  toggles.** The renderer seeks the timeline (plus a static-frame pass), so callbacks fire
  non-deterministically. Cross-fade duplicated elements, fade overlay rings, animate
  properties.
- **`immediateRender: false` on every loop-back `from`/`fromTo`.** The default (`true`)
  applies the "from" state at t=0, hiding something that should be visible in the first frame.
- **`index.html` must exist** or `render -c` fails with "No composition found" — and
  `--quiet` hides that, so a stale earlier render ships silently. After re-rendering, confirm
  the output file's size/mtime actually changed before copying to `/public`.
- Deterministic only: no `Math.random()`, `Date.now()`, `new Date()`, or network fetches.
- Design each clip to **loop seamlessly** (t0 visual state == t_end state); the reset tweens
  at the end of the timeline restore the start state.
- **No em dashes** in on-clip text (site-wide style — use hyphens).

Verify a render by extracting frames with ffmpeg and looking at them — there is no automated test.

---

## HyperFrames framework reference

For authoring/animation patterns, use the HyperFrames skills (`/hyperframes-animation`,
`/hyperframes-core`); `/hyperframes` is the capability map. Terminal docs (no network):
`npx hyperframes docs <topic>` (`data-attributes`, `gsap`, `compositions`, `rendering`,
`troubleshooting`). If the skills aren't installed: `npx skills add heygen-com/hyperframes`
and restart the session.

Framework essentials every composition relies on:
- Timed elements need `class="clip"` + `data-start` / `data-duration` / `data-track-index`.
- The timeline must be created `paused` and registered:
  `window.__timelines["<composition-id>"] = gsap.timeline({ paused: true })`.
- `meta.json` holds the project id/name; sub-compositions load via `data-composition-src`.
