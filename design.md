# JPBA — Design System & Specification

## Organization
- **Name:** Jharkhand Para Boccia Association (JPBA)
- **Hindi:** झारखंड पैरा बोच्चिया संघ
- **Type:** State Sports Association
- **Affiliation:** Boccia Sports Federation of India (BSFI)
- **Logo:** `public/jharkhand.PNG`

## Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary Dark | Deep Navy | `#0B1120` | Page background, loader |
| Primary Accent | Royal Blue | `#2563EB` | CTAs, links, active states |
| Secondary Accent | Gold Amber | `#F59E0B` | Highlights, badges, stats |
| Success | Emerald | `#10B981` | Approved status, positive indicators |
| Danger | Red | `#EF4444` | Rejected status, errors |
| Warning | Orange | `#F97316` | Pending status |
| Text Primary | White | `#FFFFFF` | Headings, body text on dark |
| Text Secondary | Light Gray | `#94A3B8` | Descriptions, labels |
| Card Background | Dark Slate | `#1E293B` | Cards, panels |
| Border | Slate | `#334155` | Borders, dividers |
| Surface | Darker Slate | `#0F172A` | Navbar, sidebar |

## Typography
- **Headings:** Inter / Geist (bold, tight tracking)
- **Body:** Inter / Geist Sans
- **Hindi:** Noto Sans Devanagari
- **Mono:** Geist Mono (code/numbers)

## Spacing & Layout
- Max content width: `1280px`
- Section padding: `py-20` (80px vertical)
- Card padding: `p-6` (24px)
- Grid gap: `gap-6` (24px)

## Components

### Loader
- Full-screen dark overlay (#0B1120)
- Centered logo with scale+opacity pulse animation
- Auto-dismisses after 2.5s

### Navbar
- Sticky top, glass-morphism (backdrop-blur)
- Height: 72px
- Mobile: hamburger → slide-out menu

### Cards
- Background: #1E293B
- Border: 1px solid #334155
- Border radius: 12px
- Hover: slight lift + glow

### Buttons
- Primary: #2563EB background, white text, rounded-full
- Secondary: transparent, border, hover fill
- Size: h-12 px-6

### Registration Form
- Multi-step wizard (4 steps)
- Progress indicator at top
- Form fields: inputs, selects, file uploads
- Client-side validation
- Submit → localStorage via RegistrationContext

### Admin Dashboard
- Dark theme consistent with public site
- Sidebar: 260px wide, collapsible on mobile
- Stats cards: icon + number + label
- Table: sortable columns, pagination, row actions
- Filters: dropdowns + search input

## Animations
- Scroll reveal: fade-up on viewport entry (Intersection Observer)
- Counter: count-up animation on stats
- Loader: scale 0.8→1 + opacity 0→1→0
- Card hover: translate-y(-2px) + shadow

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast: WCAG AA minimum
- Focus-visible outlines
