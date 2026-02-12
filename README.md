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
1. Update the code to include the new year's papers (remember to also increment all maximum ids by 1, check previous commits)
2. Check netlify to see if the website is deployed successfully

