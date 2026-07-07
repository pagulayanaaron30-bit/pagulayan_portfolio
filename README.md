# Aaron Pagulayan — Portfolio (React + Vite)

React conversion ng original `index.html` + `aaron-css.css` mo. Same design, same
sections, same scroll-reveal at active-nav-highlight behavior — nasa React na lang
ang structure.

## Paano patakbuhin

1. I-extract yung zip, tapos buksan yung folder sa terminal / VS Code.
2. Install dependencies:
   ```
   npm install
   ```
3. Run dev server:
   ```
   npm run dev
   ```
   Bubukas sa `http://localhost:5173`
4. Kapag ready na i-deploy:
   ```
   npm run build
   ```
   Lalabas yung production files sa `dist/` folder — pwede i-upload sa Netlify,
   Vercel, GitHub Pages, etc.

## Structure

```
src/
  components/
    Header.jsx        → nav bar + logo, may active-link highlighting
    Home.jsx           → hero section (profile pic, intro, CTA buttons, socials)
    About.jsx          → about me section
    Skills.jsx         → skills & tools (data-driven — dagdag ka lang sa array kung may bagong skill)
    Achievements.jsx    → projects grid (data-driven din — dagdag ka lang sa PROJECTS array)
    Contact.jsx         → contact links
    Footer.jsx          → footer
  hooks/
    useScrollReveal.js    → yung IntersectionObserver ('.reveal' → 'visible' class)
    useActiveSection.js   → yung scroll listener na nag-hi-highlight ng active nav link
  assets/              → lahat ng images (in-import na sa components, opinized ni Vite)
  styles/
    aaron-css.css       → yung original CSS mo, walang binago
public/
  Pagulayan-Curriculum-Vitae.pdf   → resume, direct-linked (hindi na-bundle, static file lang)
  weblogo.png                       → paginagamit bilang favicon
```

## Mga notes

- Yung dalawang `.htm` files mo dati (`about.htm`, `achievements.htm`, `contact.htm`)
  ay hindi na kasama — luma na sila mula nung multi-page pa yung site bago mo
  pinagsama sa isang single-page `index.html`. Yung current `index.html` + 
  `aaron-css.css` lang ang ginamit bilang basehan.
- Lahat ng image files na may space sa filename (hal. `Be Ready Mobile App.jpg`)
  ay pinalitan ng kebab-case (`be-ready-mobile-app.jpg`) para maging safe sa
  ES module imports. Walang binago sa laman/quality ng images.
- Kung gusto mo magdagdag ng bagong project sa Achievements, dagdag ka lang ng
  entry sa `PROJECTS` array sa `Achievements.jsx` — hindi mo na kailangan
  gumawa ng bagong `<article>` block manually.
