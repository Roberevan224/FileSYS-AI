# FileSYS AI

Local-first file organization and AI dataset preparation client with a Vercel backend.

## Architecture

- `client/` — portable HTML client
- `api/` — Vercel serverless API endpoints
- `lib/` — shared backend helpers

The client keeps filesystem access local and sends only selected metadata/content to the backend.
