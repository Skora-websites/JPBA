# Boccia Photos Directory

All site photos now live in `/public/jpba images/` (66 real JPBA photographs)
and are referenced via the central registry at `lib/images.ts`.

Do **not** add stock/placeholder images — the site uses only real JPBA photos.

## Usage

Import from the registry:

```ts
import { IMG, GALLERY } from "@/lib/images";
```

- `IMG.hero1..hero6` — large showcase / hero candidates
- `IMG.event*`, `IMG.award*`, `IMG.athlete*`, `IMG.training*`, `IMG.community*` — categorized photos
- `GALLERY` — full typed photo list used by `/gallery` (66 photos, 4 categories)

The old stock images (`boccia.png`, `boccia1.png`, `footer-ref.webp`) have been
removed from the project.
