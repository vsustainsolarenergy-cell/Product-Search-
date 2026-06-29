# Luminous Dealer Price List

A single-page web app for browsing the Luminous dealer catalogue and generating WhatsApp-ready customer quotes. No build step, no dependencies — just open `index.html` in a browser, or serve the folder with any static HTTP server.

---

## File structure

| File | Purpose |
| ---- | ------- |
| `index.html` | Page shell: header, control bar, message panel |
| `styles.css` | Dark theme styling, type badges, layout |
| `app.js` | Embedded product data (`DATA` at the top) + all UI/render logic |
| `products.json` | Human-editable copy of the same product list, kept in sync with `app.js` |
| `README.md` | This file |

---

## How to update the catalogue

**Important:** product data currently lives in **two places** that must stay identical:

1. `products.json` → `products[]` array
2. `app.js` → `DATA.products` array (inside the `const DATA = { … }` near the top of the file)

Edit both files when you change prices, add a SKU, or remove an item. Reload `index.html` to see the change.

### Add a new product

Append to the `products[]` array in **both** files:

```json
{
  "src": "INBT",
  "type": "Inverter",
  "wave": "Sine Wave",
  "series": "Series Name (optional)",
  "model": "MODEL NAME",
  "dcV": "12V",
  "gstPrice": 9580,
  "mrp": 14500,
  "warranty": "3 Years",
  "qty": 1
}
```

Accepted `src` values: `INBT`, `HKVA`, `HELIOS`, `SOLAR`, `GTI`.

If you introduced a new `type`, also:

1. Add an `<option>` for it inside the **Product Type** `<select>` in `index.html` (`#filterType`).
2. (Optional) add a coloured badge for it in `styles.css` under `.type-xxx` to keep the table visually consistent.

### Change a price

- Find the model name in **both** `products.json` and `app.js`.
- Update `gstPrice` (and `mrp` if present).
- Reload `index.html`.

### Remove a product

Delete the entry from both files.

### Add a new price-list source

1. Add a key under `sources` in both files:
   ```json
   "NEWSRC": { "label": "NEWSRC – Description", "color": "#hexcolor" }
   ```
2. Add `"NEWSRC"` to the `sourceOrder` array in `app.js`.
3. Add an `<option value="NEWSRC">` to the **Price List** filter in `index.html`.
4. Add `<span id="cnt-NEWSRC">0</span>` to the stats bar in `index.html` (so the running count appears).

### Update the meta header

Edit `meta.effectiveDate` and `meta.applicableRegion` in both files to refresh the "W.e.f. …" line in the header.

---

## Per-product schema

| Field | Required | Notes |
| ----- | -------- | ----- |
| `src` | ✅ | `INBT` / `HKVA` / `HELIOS` / `SOLAR` / `GTI` |
| `type` | ✅ | Free-form (used by the filter and badge class) |
| `model` | ✅ | Display name |
| `gstPrice` | ✅ | Number, GST inclusive |
| `mrp` | — | Number or `null` |
| `dcV` | — | System/battery voltage; use `"–"` if not applicable |
| `warranty` | — | Free text; use `""` if unknown |
| `wave` | — | `Sine Wave` / `Square Wave` (inverters) |
| `series` | — | Used as a sub-line in the message |
| `range` | — | Battery range (`Short Tubular`, `Tall Tubular`, …) |
| `ah` | — | Battery capacity in Ah |
| `inbuiltBattery` | — | Boost Charge products only |
| `maxExternalAh` | — | Boost Charge products only |
| `qty` | — | Default quantity shown in the table. Defaults to `1`. |

---

## Features

### Search & filter
- **Search** matches model, type, series, voltage, AH, warranty, and source labels.
- **Price List** filter narrows to a single source.
- **Product Type** filter narrows to one type.
- **Max Price** slider hides items above the threshold.
- **Reset** clears every filter.

### Selection
- Tick the row checkbox to include a product in the quote.
- The header checkbox in each section selects every visible product in that section.
- `Clear selection` empties the selection.
- The status bar shows running `X selected` count.

### Quantity (per product)
- Every row has a **Qty** stepper (`−` / direct input / `+`).
- Default is `1`.
- Quantities affect every figure in the generated message (unit price, line total, grand total).
- Quantities persist for the session — un-ticking and re-ticking the same product keeps the qty you last set.

### Global discount
- Enter `+2` to mark prices up by 2 %, `-2` to mark down by 2 %.
- Live updates the displayed prices.
- If a generated draft is on screen and you have **not** edited it manually, the message auto-refreshes with the new price.
- Once you edit the message text, the discount no longer auto-refreshes it (your edits are preserved).

### Message builder
- Click **Generate Message** to populate the textarea with a WhatsApp-friendly quote.
- Each product line shows model, type, DC voltage, quantity, unit/line price, warranty.
- For multi-product quotes a **Grand Total** line is added.
- **Copy Message** places the text on the clipboard.

---

## Customising

| To change… | Edit |
| ---------- | ---- |
| Brand logo / tag | The `<header>` block in `index.html` |
| Colours | CSS variables at the top of `styles.css` (`--accent`, `--bg`, `--surface`, …) |
| Discount suffix format in message (`I2` / `D2`) | `discountSuffix()` in `app.js` |
| Default qty | The `qty` field on each product in both data files |

---

## Known limitations

- Product data is duplicated in `products.json` and `app.js` (the embedded `DATA`). Future work: load `products.json` via `fetch()` and drop the embedded copy.
- Quantities and selection are in-memory only; a page reload resets them. The **global discount** persists via `localStorage` under `luminousGlobalDiscountRaw`.
- No backend, no account — this is a single-dealer, single-device tool.

---

## Quick checklist for the next update

1. Open both `products.json` and `app.js`.
2. Find the model you want to change (search the file for the model name).
3. Update `gstPrice`, `mrp`, `warranty`, etc. identically in both files.
4. For new SKUs: copy an existing entry block, change the fields, paste into both `products[]` arrays.
5. If you added a new `type`, add it to the **Product Type** filter in `index.html`.
6. Reload `index.html` and spot-check that the change appears in the table and the generated message.
