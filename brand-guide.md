# parke.dev — Brand Guide

**Concept: "Server Room at Night."** Your brand is the glow of a homelab in a dark room — deep navy-black like an unlit rack aisle, blue as the color of data moving, and gold as the status LEDs that say *everything is online*. It's the visual version of `luke@parke:~$`.

---

## 1. Who the brand is

Pulled from your actual footprint (GitHub, OpenAPIGuy blog, dev.to):

- **Builder of developer tools.** OpenAPI tooling (Arbiter, Telescope, OpenAPI.gg), the community Plex API spec + SDKs in 9 languages, SvelteKit templates and adapters.
- **The infrastructure guy.** Homelab, Coolify, Docker, Pocketbase images, many servers. You don't just write software — you *run* it.
- **DevEx + Identity professional.** SailPoint OSS, "passionate about Identity and Developer Experience."
- **Open-source native.** Everything public, everything documented.

**Positioning statement:**
> Luke Parke builds the boring-but-critical plumbing of the developer world — API specs, SDKs, and self-hosted infrastructure — and makes it feel effortless.

**Tagline options:**
- `luke@parke:~$ _` (the prompt — use as a visual motif everywhere)
- "Specs, SDKs, and servers."
- "Self-hosted, well-documented."
- Migration easter egg: `$ mv lukehagar.com parke.dev`

## 2. The name migration (Hagar → Parke)

- **Primary identity everywhere:** Luke Parke / `parke.dev`.
- Keep `lukehagar.com` live with a 301 redirect to parke.dev for at least 1–2 years (SEO + the Plex/OpenAPI communities know the old name).
- One line in your site footer/about for continuity: *"Formerly publishing as Luke Hagar."* Remove it once traffic on the old name dies down.
- Update in this order (most-seen first): GitHub display name ✓ (already done), LinkedIn vanity URL, dev.to, Bluesky handle (currently `@lukehagar.com` — move to `@parke.dev`), blog footers (openapiguy.dev footer still says "Made by LukeHagar" and links lukehagar.com).
- Keep **OpenAPIGuy** as a content sub-brand — it has its own equity. Just rebrand its footer to Parke.

## 3. Color palette

Dark mode is the default and the brand. Light mode exists only as a courtesy.

### Backgrounds — "rack aisle depths"
| Token | Hex | Use |
|---|---|---|
| `void` | `#060A13` | Page background |
| `panel` | `#0B1220` | Cards, nav, sidebars |
| `raised` | `#121C30` | Hover, raised surfaces |
| `overlay` | `#182441` | Modals, active states |
| `line` | `#223153` | Borders |

### Uplink Blue — primary
| Token | Hex | Use |
|---|---|---|
| `blue-400` | `#5EA1FF` | Links, interactive text |
| `blue-500` | `#3D8BFF` | Primary buttons, brand blue |
| `blue-600` | `#2566D8` | Pressed |
| `blue-900` | `#0E2A5C` | Tinted fills, badges |

### LED Gold — accent
| Token | Hex | Use |
|---|---|---|
| `gold-400` | `#FFC53D` | **The** gold: brand dot, highlights, active indicators |
| `gold-500` | `#E6A817` | Hover on gold |
| `gold-300` | `#FFD97A` | Glow gradients |

### Status + text
Online `#3DDC97` · Warn = gold `#FFC53D` · Error `#FF6B6B`
Text `#E6EDF8` · Dim `#94A3B8` · Muted `#5B6B85`

### The one rule that makes it work
**Gold is a status LED, not a paint color.** It appears in small doses — a dot, an underline, a glowing border, one highlighted word — never large fills. Blue does the heavy lifting; gold makes it feel alive. If gold exceeds ~10% of a screen, it stops feeling like a server light and starts feeling like a casino.

Signature move: gold elements get a soft glow — `box-shadow: 0 0 12px rgba(255,197,61,.35)` — like an LED in a dark room.

**Accessibility (verified):** text `16.8:1`, dim `7.7:1`, blue-400 links `7.6:1`, gold-400 `12.6:1` on `void` — all AA/AAA. White on `blue-500` is 3.3:1, so use it only for large/bold button labels; for small white text use `blue-600` (5.3:1).

## 4. Typography

| Role | Font | Why |
|---|---|---|
| Display/headings | **Space Grotesk** | Technical-geometric, distinctive, free (Google Fonts) |
| Body | **Inter** | Reads perfectly on dark backgrounds |
| Mono (labels, code, hostnames, nav) | **JetBrains Mono** | The terminal voice of the brand |

Usage rules: headings in Space Grotesk, medium weight, tight tracking. Small labels/eyebrows in JetBrains Mono, uppercase, letter-spaced, usually `text-dim` with one gold element. Anything machine-flavored (paths, versions, hostnames, dates) goes mono — `~/projects`, `v2.4.1`, `austin.tx`.

## 5. Voice

Plainspoken, competent, a little wry. You explain like a senior engineer in a hallway, not a marketer. Say "I run this on a server in my closet" — that's the brand. Avoid: "passionate," "innovative," exclamation points. Allowed geekery: terminal prompts, HTTP status codes (404 page: `503 — probably restarting the rack`), uptime jokes.

## 6. Motifs & texture

- **The prompt:** `luke@parke:~$ _` with a blinking gold cursor — hero sections, READMEs, email signatures.
- **LED dots:** small colored circles (green/gold/blue) as bullet points and status indicators.
- **Rack bars:** stacked horizontal rounded bars as a graphic device (and the logo).
- **Subtle scanline or dot-grid texture** on `void` backgrounds at ~3% opacity, never more.

## 7. Logo

See `logo-concepts.svg` — three directions:

1. **Rack Mark (recommended):** rounded square, three horizontal rack bars in blue, one gold LED dot. Reads at 16px favicon size.
2. **Prompt Mark:** `>_` with gold cursor — good for OpenAPIGuy/blog sub-brand.
3. **LP Monogram:** geometric LP with gold node.

Wordmark: `parke.dev` in JetBrains Mono, "parke" in text color, ".dev" in gold-400.

## 8. Quick-start checklist

- [ ] Add `tokens.css` (or the Tailwind `@theme` block) to parke.dev
- [ ] Fonts: Space Grotesk, Inter, JetBrains Mono via Google Fonts/Fontsource
- [ ] Favicon from Rack Mark
- [ ] 301 redirect lukehagar.com → parke.dev
- [ ] Update openapiguy.dev footer + Bluesky handle
- [ ] GitHub profile README header: the prompt motif + Rack Mark
