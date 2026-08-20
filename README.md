# dyalog.com (unofficial)

An **unofficial fan‑fiction website for [Dyalog APL](https://www.dyalog.com/)**, built with
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

> [!IMPORTANT]
> This is a personal fan project. It is **not affiliated with, nor endorsed by, Dyalog Ltd**,
> and it does not represent Dyalog Ltd in any official capacity.

## Licensing

I work for Dyalog Ltd — including on the official website — so re‑using Dyalog material here is
not a licensing problem for me. There is **intentionally no licence file**: the proprietary
content in this repository is "source available" only, exactly as it would be when served from a
public‑facing website. Please don't treat it as open source or reuse it as such.

## Developing

```bash
python -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve            # live preview at http://127.0.0.1:8000
.venv/bin/mkdocs build --strict   # production build into ./site
```

## Deployment

Published to **GitHub Pages** from the `gh-pages` branch, produced by:

```bash
mkdocs gh-deploy --strict
```

(An automated GitHub Actions workflow can be added under `.github/workflows/` later; committing
one requires a token with the `workflow` scope.)
