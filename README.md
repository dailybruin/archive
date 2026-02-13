# archive
The Daily Bruin's print archive.

Note: this project is NOT future-proofed and needs to be updated annually (preferrably don't wait until April like me 😚✌️). At the beginning of each year, go through the index.html and script.js files, search for comments starting with "UPDATE:", and make changes accordingly.

## Getting Started

This is a static website that can be run locally using a simple HTTP server. Here are a few options:

### Option 1: Python HTTP Server
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Node.js http-server
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

This is a **static site** (no build step). Deploy the folder as-is.

### Option 1: Netlify (recommended for this project)

1. Push the repo to **GitHub** (or GitLab/Bitbucket).
2. Go to [netlify.com](https://www.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your Git provider and select the `archive` repo.
4. **Build settings:** leave **Build command** empty; set **Publish directory** to `.` (root).
5. Deploy. Netlify will serve `index.html` at the root.

**Drag-and-drop:** You can also go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `archive` folder to deploy without Git.

### Option 2: Vercel

1. Install the CLI: `npm i -g vercel`
2. In the project folder: `vercel` and follow the prompts (root directory = current folder).
3. Or connect the repo at [vercel.com](https://vercel.com) and deploy; no build command needed.

### Option 3: GitHub Pages

1. Push the repo to GitHub.
2. **Settings** → **Pages** → Source: **Deploy from a branch**.
3. Branch: `main` (or `master`), folder: **/ (root)**. Save.
4. The site will be at `https://<username>.github.io/<repo-name>/`.
5. If the repo is named `archive`, set the site’s **base URL** in your app if you use relative links (this project uses relative links, so they work as-is under a subpath).

### Before each deployment

1. Update the code for the new year’s papers (search for `UPDATE:` in `index.html` and `script.js`).
2. Increment maximum ids by 1 where indicated (see previous commits for reference).
3. After deploying, confirm the site loads and that date/year ranges work as expected.

