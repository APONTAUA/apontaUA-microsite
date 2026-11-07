# ApontaUA Microsite

Docusaurus documentation site for the ApontaUA project, deployed to GitHub Pages at <https://apontaua.github.io/apontaUA-microsite/>.

## Local development

Requirements: Node.js 20 or newer.

```sh
npm ci
npm run start
```

## Production build

```sh
npm run build
npm run serve
```

## Documentation structure

- `docs/`: project overview, summary, milestones, meetings, results and API status.
- `src/pages/`: homepage and Team page.
- `src/components/`: React components used by the site and MDX documents.
- `static/`: logo, original ApontaUA Hero illustration, MS1 presentation, meeting template and optional OpenAPI specs.
- `sidebars.js`: hierarchical documentation navigation. Meeting pages in `docs/meetings/minutes/` are discovered automatically.

When genuine OpenAPI JSON files are added to `static/openapi/`, Docusaurus exposes them through Scalar under `/api/<filename>`. No API endpoints are included until the backend specification exists.

Create a meeting page from the template with:

```sh
npm run new-meeting -- <number> <YYYY-MM-DD> "<author name>"
```

The generator creates `docs/meetings/minutes/minute-NNN.md` and refuses to overwrite an existing page. Fill in the template only with details confirmed by the meeting record.
