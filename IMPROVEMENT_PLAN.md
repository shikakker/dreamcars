# Completion plan

1. Classify `dreamcars` accurately as a motion/loader design artifact: the repository contains exported `demo.html`/JSON plus several After Effects `.aep` masters, not a complete automotive product.
2. Establish provenance and canonical version for root `demo.*`, `loader)/demo.*`, `loader.aep`, `inetloader.aep` and `loader dreamcars.aep`. The duplicate JSON SHA indicates at least some exports share the same animation data.
3. Document the original After Effects/Bodymovin/Lottie-style export pipeline only where verified from the files. Record required AE version/plugins/fonts if known; do not claim reproducible export without that information.
4. Preserve editable `.aep` masters separately from generated web exports. Avoid destructive cleanup of historical variants until visual differences and intended breakpoints/states are understood.
5. Create one lightweight static preview entry point that identifies the canonical loader and links historical variants, without rewriting the original motion design.
6. Audit embedded/remote dependencies inside the 263 KB exported HTML files. Vendor only redistributable dependencies or document network requirements; remove dead trackers/endpoints from a public archival preview.
7. Add motion accessibility around the showcase: descriptive title, static fallback/poster, `prefers-reduced-motion` handling and pause/stop behavior where the export runtime permits it.
8. Optimize only the public preview layer: compression/caching and lazy loading. Keep source/master assets lossless for archival provenance.
9. Add simple validation for missing local assets and successful loading of the canonical animation. A framework migration and fabricated application tests are unnecessary for this artifact.
10. Rewrite README as a verified motion-design case study: what files survive, source/export relationship, how to preview, archival limitations, and a clear distinction between animation/design work and software-product engineering.
