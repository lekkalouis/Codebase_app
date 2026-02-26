# Migrating an Existing App into `Codebase_app`

This guide explains how to move an existing product/app into this repository **without rebuilding from scratch**, while preserving the native FLSS/Codebase layout patterns.

## 1) Understand the host template first

The current app is a static Codebase-style UI shell under `src/`:

- Existing FLSS prototype entry: `src/katana_mrp_clone.html`
- NextGen module entry: `src/nextgen/flss_nextgen.html`
- Shared CSS/theme: `src/assets/css/codebase.min.css`
- Shared JS helpers/toasts/layout behaviors: `src/assets/js/codebase.app.min.js`
- Page-level module scripts pattern: `src/assets/js/pages/*.js`

### Key migration rule
Always embed your app features into this shell (header/sidebar/content blocks), instead of introducing a standalone root app with a separate design system.

## 2) Pick migration mode (recommended order)

### Mode A — Embed as a module/page-set (recommended)
Use this when your old app is mostly dashboards/tables/forms.

1. Create a module folder under `src/` (example: `src/<module>/`).
2. Copy the structure pattern from `src/nextgen/flss_nextgen.html`.
3. Move your old views into routeable hash/page sections inside the module.
4. Move old JS into `src/assets/js/pages/<module>.js` and keep state/data local.
5. Use centralized mock/static data file(s) in `src/assets/js/pages/<module>_data.js`.

### Mode B — Wrap an existing micro-frontend
Use this when your old app is large and already bundled.

1. Keep the shell page in `src/<module>/<module>.html`.
2. Mount your bundle inside a single content container (`<div id="app-root"></div>`).
3. Re-map your side navigation to Codebase nav classes so it looks native.
4. Replace your component library styles incrementally with Codebase classes.

## 3) Map old architecture to this repo

| Legacy concept | Map to this repo |
|---|---|
| App shell/layout | `src/<module>/<module>.html` using `#page-container`, `#sidebar`, `#page-header`, `#main-container` |
| Global styles | `src/assets/css/codebase.min.css` (avoid adding a second global CSS framework) |
| Feature routes | Hash routes or additional HTML entries under `src/<module>/` |
| Data stores | `src/assets/js/pages/<module>_data.js` for static/mock data |
| View logic | `src/assets/js/pages/<module>.js` |
| Drawer/modal/details | Reuse Bootstrap Offcanvas/Modal patterns used by existing pages |
| Notifications | `Codebase.helpers('jq-notify', ...)` |

## 4) Sidebar and navigation migration

1. Add only a **single top-level entry** from an existing FLSS page first (non-breaking).
2. Build nested submenus with:
   - `.nav-main-item`
   - `.nav-main-link`
   - `.nav-main-link-submenu`
   - `.nav-main-submenu`
3. Keep old pages reachable until migration is complete.
4. Add badges (`NEW`, counters) as visual hints, not route blockers.

## 5) UI conversion checklist

When porting each legacy screen:

- [ ] Title + short description at top of content block
- [ ] Primary actions (create/book/export/etc.)
- [ ] Filters/search area
- [ ] Table/cards with realistic columns
- [ ] Row click -> details drawer (summary/items/events etc.)
- [ ] Toast feedback for action buttons
- [ ] “Coming Soon” badge for incomplete sub-features (never blank screens)

## 6) Data migration strategy

### Phase 1 (safe)
- Keep mock JSON/static arrays to mirror old backend entities.
- Normalize keys to FLSS naming (order id, courier ref, lot code, BB/expiry date, etc.).

### Phase 2
- Introduce an adapter layer that maps real API payloads into the same UI shape.
- Keep the UI schema unchanged to avoid rewrites.

### Phase 3
- Replace mock sources endpoint-by-endpoint with fetch calls.
- Keep static fallback data for demo mode.

## 7) Interaction parity strategy

If your old app had advanced workflows:

1. Recreate the flow with static state first (click-through complete).
2. Match labels/statuses/workflow states exactly.
3. Add detail tabs for operational depth (summary/items/shipping/notes/events).
4. Add empty/loading/error states in the same visual style.

## 8) Non-breaking rollout plan

1. Add module link from existing FLSS page.
2. Roll out one domain area at a time (Orders -> Dispatch -> Inventory -> Traceability...).
3. Keep legacy routes/pages untouched until each domain is validated.
4. Switch entry links only after domain acceptance.

## 9) Suggested acceptance criteria

- Existing pages still load unchanged.
- New module opens from an existing page link.
- Every new nav item renders a full layout (no blank routes).
- Search/filter works on data grids.
- Row detail drawer opens reliably.
- Primary actions show toast feedback.
- UI appears native to Codebase/FLSS styling.

## 10) Typical run/preview commands

From repository root:

```bash
cd src
python -m http.server 4173
```

Then open:

- `http://127.0.0.1:4173/katana_mrp_clone.html`
- `http://127.0.0.1:4173/nextgen/flss_nextgen.html`

---

If you want, a next step can be a **screen-by-screen migration matrix** (legacy page -> target module route -> data source -> completion state) added to this repo.
