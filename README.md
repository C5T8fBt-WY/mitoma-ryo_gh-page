# Ryo Mitoma profile

A small, bilingual English/Japanese profile site published at <https://c5t8fbt-wy.github.io/mitoma-ryo_gh-page/>. The site is plain HTML, CSS, and JavaScript; it has no build step or third-party runtime dependencies.

## Updating the site

The GitHub Actions workflow in `.github/workflows/deploy.yml` publishes the site to GitHub Pages whenever a commit is pushed to `main`. It uploads only the static site files; there is no build step. The workflow can also be run manually from GitHub Actions.

If the URL changes, update the canonical and social metadata in `index.html` and regenerate `assets/website-qr.svg`.
