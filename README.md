# Brew and Haven

> NA

![License](https://img.shields.io/badge/license-MIT-blue)

**Project type:** Static Landing Page

AI_Coffee website

> 👋 **New to coding?** Don't worry — this README walks you through every step in plain English.
> You don't need to understand how everything works under the hood.
> Just follow the numbered steps and you'll have this project running in minutes.

---

## What Does This Project Do?

This is a **static website** — meaning it is made up of plain HTML, CSS, and JavaScript files. There is no server required. You can open it directly in any web browser, or upload the files to a free hosting service and share it with the world.

### How it works

When someone visits the site, their browser downloads the HTML file and displays it. The CSS file controls how everything looks (colours, fonts, layout), and the JavaScript file adds interactive behaviour (button clicks, animations, etc.).

---

## Technologies Used

Here is every tool this project uses, and a plain-English explanation of what each one does.

| Technology | What it does |
|------------|-------------|
| **HTML5** | The skeleton of the page — defines headings, buttons, images, sections, etc. |
| **CSS3** | Controls everything visual: colours, fonts, layout, spacing, hover effects, and animations. |
| **JavaScript** | Adds interactivity — scroll effects, mobile menu toggle, form validation, animations. |

---

## What's Inside This Repository?

Here is every file that was generated, and a plain-English explanation of what each one does.
You don't need to edit most of these — but it's good to know where things live.

```
  index.html
  script.js
  style.css
```

### File descriptions

| File | What it does |
|------|-------------|
| `index.html` | The homepage — the first page visitors see. |
| `script.js` | Main JavaScript file — handles navigation, animations, and general interactivity. |
| `style.css` | The main stylesheet — controls colours, fonts, layout, and spacing across the site. |

---

## Running This Project on Your Computer

This is a **static website** — no installation, no server, and no terminal commands required.
Just open the files and you're done.

---

### Option A — Open directly in your browser (simplest)

1. Find the downloaded project folder on your computer.
2. Double-click `index.html`.
3. It opens in your default browser instantly.

> **Note:** Some browsers restrict certain features (like web fonts or API calls) when opening
> a file directly from your hard drive. If something looks broken, use Option B instead.

---

### Option B — VS Code Live Server (recommended)

This gives you a proper local web server that auto-refreshes the page every time you save a file.

1. Install [Visual Studio Code](https://code.visualstudio.com) — it's free.
2. Open VS Code, then open the project folder: **File → Open Folder**.
3. Click the **Extensions** icon on the left sidebar (looks like four squares).
4. Search for **Live Server** and install it (published by Ritwick Dey).
5. Right-click `index.html` in the file explorer on the left → **Open with Live Server**.
6. Your browser opens at `http://127.0.0.1:5500` and auto-refreshes on every save.

---

### Option C — Python's built-in server (if you have Python installed)

```bash
# In your terminal, navigate into the project folder, then run:
python -m http.server 8000
```

Open your browser and go to **http://localhost:8000**

---

## Putting Your Site Online (Deployment)

Once you are happy with the site locally, you can publish it to the internet for free.

### Option 1 — GitHub Pages (free, instant, no setup required)

Your code is already on GitHub ✓ — publishing is just a few clicks.

1. Go to your repository page on GitHub.
2. Click the **Settings** tab near the top of the page.
3. In the left sidebar, scroll down and click **Pages**.
4. Under **Branch**, select `main` from the dropdown.
5. Leave the folder set to `/ (root)` and click **Save**.
6. Wait about 30 seconds, then refresh the Settings → Pages page.
7. A green box will appear with your live URL:
   ```
   https://<your-github-username>.github.io/<repo-name>/
   ```
8. Share that link — your site is now live and accessible to anyone.

> Every time you push changes to the `main` branch, GitHub Pages automatically updates the live site.

---

### Option 2 — Netlify (drag & drop — even easier)

1. Go to [https://netlify.com](https://netlify.com) and create a free account.
2. On your Netlify dashboard, click **Add new site** → **Deploy manually**.
3. Open your project folder on your computer.
4. Drag the entire folder onto the Netlify upload area.
5. Netlify uploads and deploys it instantly — you get a live public URL in seconds.

> You can also connect Netlify to your GitHub repository so it automatically re-deploys every time you push new code.

---

## Customising the Look & Feel

You don't need to understand all the code to make this site your own.
Here are the most common things people change, and exactly where to find them.

> 💡 **Fastest way to rename the brand:**
> In VS Code, press **Ctrl + Shift + H** (Windows) or **Cmd + Shift + H** (Mac)
> to open Find & Replace across all files. Search for `Brew and Haven` and replace it with your brand name everywhere at once.

### Colours

Open `style.css` and look for the `:root` block near the top of the file:
```css
:root {
  --primary-color: #ffffff;   /* Main brand colour — buttons, links, highlights */
  --secondary-color: #a0a0a0;  /* Accent colour — hover states, borders */
}
```
Change the hex values to any colour you want. Pick colours at [coolors.co](https://coolors.co).

### Text content

| What to change | File to open | What to look for in that file |
|----------------|-------------|------------------------------|
| Company name (`Brew and Haven`) | All `.html` files | Use Find & Replace to update it everywhere |
| Hero headline | `index.html` | The `<h1>` tag inside the section with class `.hero` |
| Hero subheading / description | `index.html` | The `<p>` tag directly beneath the `<h1>` |
| Navigation menu links | All `.html` files | The `<nav>` tag → the `<ul>` list items inside it |
| Footer text and links | All `.html` files | The `<footer>` tag at the bottom of each page |
| Browser tab title | All `.html` files | The `<title>` tag inside `<head>` at the top |

### Fonts

Open `style.css` and find `font-family` on the `body` selector.
To switch to a Google Font, add this `@import` at the very top of the CSS file:
```css
/* Add this at the very top of the CSS file (before everything else) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;  /* Replace 'Inter' with your chosen font */
}
```
Browse free fonts at [fonts.google.com](https://fonts.google.com) and copy the `@import` link they provide.

### Images

Open `index.html` and look for `<img src="...">` tags.
Replace the `src` value with a link to your own image or a local file path.
For background images defined in CSS, open `style.css` and search for `background-image`.

---

---

*This project was generated on 2026-03-24 by **AI Website Generator**.*

If you get stuck, re-read the relevant section above carefully — every step is explained in plain English.
For further help, open an issue on the GitHub repository.