# Ahmed Salama — Electrical Design & Automation Engineer

A high-end, multi-page corporate engineering consultancy website engineered for **Eng. Ahmed Salama**, inspired by the visual authority, structural hierarchy, and industrial presentation of leading engineering firms (such as [KMT for Industrial Solutions](https://kmt4is-eg.com/en)).

---

## 🎨 Visual Identity & Design System

- **Button Color**: **`RGB(16, 112, 177)` (`#1070B1`)** with deep corporate hover `#0D5B91`.
- **Typography**: **`Space Grotesk`** (Headings in weight `700`) with fallback font stack:
  ```css
  "Space Grotesk", "Space Grotesk Fallback", Inter, "Inter Fallback", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  ```
- **Text Color**: High-contrast, authoritative solid **`#000000`** on clean light corporate backgrounds (`#FFFFFF` and `#F8FAFC`).
- **Icons**: Strictly **Lucide React** (`lucide-react`) — `Zap`, `Phone`, `Mail`, `MapPin`, `Linkedin`, `ShieldCheck`, `CheckCircle2`, `Activity`, `Cpu`, `Layers`, `ArrowRight`, `ChevronRight`, `Menu`, `X`.
- **UI Components**: **shadcn/ui** design patterns (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `Button`, `Badge`, `Separator`).
- **Zero AI Slop**: Free of fake telemetry coordinates watermarks, cyber grids, or pulsing live indicators.

---

## 🗺️ Multi-Page Routing Architecture (React Router)

Every section is an independent route with its own complete page, persistent Navbar, and persistent Footer:

| Route | Page | Key Content |
|---|---|---|
| **`/`** | **Home Page** | Editorial hero with Ahmed's photo, featured credentials, introduction, top disciplines preview, services highlights, case studies showcase, and consultation CTA. |
| **`/about`** | **About the Engineer** | Complete professional profile, verified B.Sc. engineering degree, experience highlights, 4 core principles of engineering practice, and philosophy. |
| **`/services`** | **Engineering Services** | Comprehensive consulting breakdown of services `SRV-01` to `SRV-08`, detailed scope checklists, primary deliverables, and commercial engagement structures. |
| **`/expertise`** | **Areas of Expertise** | 10 technical power & automation disciplines, voltage ratings, key deliverables, and governing international standards matrix. |
| **`/projects`** | **Projects Portfolio** | Complete project gallery with category filters, high-resolution photography, equipment lists, and links to in-depth case studies. |
| **`/projects/:id`** | **Project Case Study** | Dedicated technical dossier with executive overview, engineering challenge, calculated solution, performance results, and equipment BOM. |
| **`/technical-skills`** | **Technical Skills & Tools** | Software matrix (ETAP, Siemens TIA Portal, DIgSILENT, AutoCAD Electrical, EPLAN, Revit, Dialux), Standards library, and interactive electrical sizing calculators! |
| **`/contact`** | **Contact & Consultation** | Direct phone (`+20 15 53077712`), email (`ahmeddragab.2001@gmail.com`), LinkedIn, WhatsApp instant CTA, and interactive project inquiry form. |

---

## 🚀 Running the Project Locally

```powershell
# 1. Install dependencies (if needed)
npm install

# 2. Run local development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

```powershell
# 3. Build optimized production bundle
npm run build
```
Generates production files into the `/dist` directory.
