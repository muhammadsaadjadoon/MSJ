# Portfolio backend

This portfolio intentionally uses Netlify's production services instead of a fake localhost API.

- Contact submissions: Netlify Forms (`portfolio-contact`)
- Serverless endpoint: `/.netlify/functions/portfolio-status`
- Static frontend: `index.html` + `assets/css/style.css` + `assets/js/main.js`

When previewing with VS Code Live Server, the design and navigation work locally. Netlify Forms and Functions become active after deployment to Netlify.
