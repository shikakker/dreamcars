# Product Completion Status — Dreamcars

Updated: 2026-10-13
Product family: historical Dreamcars UI/motion-design archive.
Canonical preservation branch: `revive/dreamcars-2026` · [Draft PR #2](https://github.com/shikakker/dreamcars/pull/2).
Production native mobile app: **NOT PRESENT**. Archive artifacts must not be described as native product implementation.

## Current repair and exact-HEAD evidence

- **P1:** Original loader viewer left its Play, Restart and Speed controls active after the `data_failed` event and still allowed them to show false playback state. Missing external Lottie runtime also left Speed enabled.
- **Test-first:** `scripts/viewer-error.test.mjs` commit `cae8e1e`, isolated Node 22 RED: **0/2**.
- **Fix:** `assets/case.js` commit `90d8eed`, disables all playback controls and reports a retryable reload reason. Independently hash-matched source blob `62b2f5b2d47ffebd427ec612c3e5c84c67ab9f7b`, focused Node 22 GREEN **2/2**.
- **CI:** `npm test` now runs preserved-archive validation followed by error-state tests; package commit `8320116`. Exact-head GitHub Actions runs `38309195400` and `38309190021` **PASS**, including artifact validation (**146 × 70, 60 fps, 8 Lottie layers**) and **2/2 tests**. No deps/npm install required.
- **Missing:** live deployed case link, visual/browser QA at 375/768/1024/1440, historical license/use-rights review. Do not auto-merge or promote. **PARTIAL portfolio publication; repository CI PASS**.

## T01–T10 core tasks

| ID | Status | Task and verification |
|---|---|---|
| T01 | DONE | Preserve original AEP/demo HTML/JSON; automated access checks PASS |
| T02 | DONE | Validate Lottie payload frame/size/layers; CI PASS |
| T03 | DONE IN CODE / BROWSER PENDING | Playback and restart controls on original motion asset |
| T04 | DONE | Disable controls on missing runtime/data; executable Node regression PASS |
| T05 | DONE IN CODE / BROWSER PENDING | Respect prefers-reduced-motion on autoplay |
| T06 | DONE | Historical demo only mounts on user click with allow-scripts sandbox |
| T07 | DONE IN CODE / BROWSER PENDING | CSS responsive layout for viewer/sidebar |
| T08 | DONE | README states design archive and no native app source |
| T09 | DONE | GitHub archive + behavior regression CI PASS at exact HEAD |
| T10 | BLOCKED | Hosted HTTPS preview and 375/768/1024/1440 browser QA; no canonical connected Vercel project |

## I01–I10 improvements

| ID | Status | Reliability / accessibility |
|---|---|---|
| I01 | DONE | Explicit Lottie load-status messages |
| I02 | DONE | Disabled controls when animation data fails |
| I03 | DONE | Disabled speed selector when Lottie is unavailable |
| I04 | DONE | Behavior tests for error paths |
| I05 | DONE | Tests run in existing CI workflow |
| I06 | DONE | Sandboxed historical iframe |
| I07 | DONE IN CODE / BROWSER PENDING | Mobile-first media-query layout |
| I08 | DONE IN CODE / BROWSER PENDING | OS reduced-motion preference |
| I09 | DEFERRED WITH REASON | Keyboard/focus and screen-reader browser QA need hosted/local browser |
| I10 | DEFERRED WITH REASON | License/media permission review requires asset owner |

## F01–F10 viewer feature inventory

| ID | Status | User need and feature |
|---|---|---|
| F01 | EXISTS | Read original Dreamcars design case |
| F02 | EXISTS | Inspect preserved loader animation |
| F03 | EXISTS | Pause/play preview |
| F04 | EXISTS | Restart preview |
| F05 | EXISTS | Change playback speed |
| F06 | EXISTS | Respect reduced motion |
| F07 | EXISTS | Open isolated historical demo on demand |
| F08 | EXISTS | View artifact provenance and scope |
| F09 | DEFERRED WITH REASON | Hosted case share/preview needs linked deployment |
| F10 | DEFERRED WITH REASON | Native iOS/Android app not part of archive; do not simulate it |

**Release:** Draft PR only; do not merge automatically; overall **PARTIAL**, not a production car-rental app.
