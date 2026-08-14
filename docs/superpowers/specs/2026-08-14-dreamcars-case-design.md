# Dreamcars portfolio-case revival — design

## Purpose
Turn the preserved Dreamcars design/motion artifacts into a clear, modern portfolio repository without implying that this repository contains the native iOS/Android application source.

## Verified source
The repository contains `demo.html`, `demo.json`, `loader.aep`, `loader)/`, and `README.md`. The existing README explicitly identifies the checkout as a historical product/UI design archive rather than native app source.

## Presentation architecture
Add a static `index.html` portfolio layer. It contains project context, a Lottie loader preview driven by the existing `demo.json`, and an optional historical-demo panel that embeds `demo.html` in a sandboxed iframe. The original artifacts remain unchanged.

## Interaction and accessibility
Provide play/pause/restart/speed controls, explicit loading/error states, keyboard-native controls, responsive layout, and reduced-motion-aware autoplay. The legacy demo iframe is opt-in to avoid loading generated third-party/runtime content immediately.

## Validation
A Node script validates required artifacts, parses `demo.json` as Lottie data, checks the new viewer markers, and confirms that historical files still exist. GitHub Actions runs the validation.

## Ten completion tasks
1. Preserve original design/motion artifacts.
2. Add authored portfolio entry page.
3. Add premium responsive case-study presentation.
4. Add interactive loader preview from existing JSON.
5. Add playback and speed controls.
6. Respect reduced-motion preferences.
7. Add opt-in sandboxed historical-demo viewer.
8. Add artifact/Lottie integrity validation.
9. Add CI repository checks.
10. Rewrite README around verified design scope and current usage.
