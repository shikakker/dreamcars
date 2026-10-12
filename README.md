# Dreamcars — luxury car rental product-design archive

Historical product/UI and motion-design materials for **Dreamcars**, a luxury-car rental experience designed for mobile.

This repository does **not** contain the native iOS or Android application source. It preserves presentation and motion artifacts and now includes a small authored portfolio viewer around them.

## View the case

Serve the repository over HTTP:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`.

The portfolio viewer provides an interactive preview of the preserved loader animation, playback controls, reduced-motion-aware behavior, and an opt-in sandboxed view of the original generated demo.

## Preserved historical artifacts

```text
demo.html       generated product/design presentation
demo.json       animation/export data
loader.aep      Adobe After Effects loader source
loader)/        historical loader-related exports
```

These files remain the historical source artifacts. The modern viewer does not replace them.

## Portfolio layer

```text
index.html            authored case-study entry
assets/case.css       responsive presentation
assets/case.js        loader and legacy-demo controls
scripts/validate.mjs  artifact/Lottie validation
.github/workflows/    automated repository checks
```

## Verified scope

The checkout supports claims around product/UI design, interaction/motion work, After Effects source artifacts and browser-oriented animation handoff. There is no Xcode project, Android Studio project, Flutter project, React Native package, backend or database in this repository.

Accordingly, this repository should not be used as evidence that the native Dreamcars application was engineered here.

## Historical positioning

The previous project materials described Dreamcars as a luxury-car rental experience for iOS/Android. Historical links referenced `dreamcars4rent.com` and a Behance case. Those links are archival references and should be independently verified before reuse in current portfolio materials.

## Validation

Requires Node 20+ and no npm dependencies:

```bash
npm test
```

The check verifies that the original After Effects, HTML and JSON artifacts still exist, parses `demo.json` as Lottie-style animation data, validates core frame/layer metadata and checks that the new historical-demo iframe remains sandboxed.

GitHub Actions runs the same validation on pushes and pull requests.

## Current status

**Portfolio-ready historical product-design/motion archive.** Original artifacts are preserved alongside a maintainable static presentation layer for review.

## License

No repository-wide software or media license is assumed. Vehicle photography, logos, fonts, UI assets, generated runtime material and After Effects source may have separate ownership or redistribution constraints.
