# FileSYS AI

FileSYS AI is a local-first filesystem intelligence client with a Vercel serverless backend. The portable client is one HTML file; the backend provides provider-neutral APIs for organization, analysis, dataset preparation, and future web/AI knowledge updates.

## Current features

- iOS-26-inspired glass UI
- Folder selection and tree visualization using browser filesystem permissions
- Local filename safety review queue
- Safety flags are excluded from dataset generation
- AI-ready JSONL export
- Backend health check
- Organization and analysis API endpoints
- Provider-neutral knowledge-update endpoint
- PIN hash stored locally in the client
- CORS configured for portable-file use

## Deploy backend

1. Import this repository into Vercel.
2. Deploy with the default settings.
3. Copy the deployment URL.
4. In `client/FileSYS-AI.html`, replace `https://YOUR-PROJECT.vercel.app/api` with `https://YOUR-DEPLOYMENT.vercel.app/api`.
5. Open the HTML locally and choose a folder.

## Security model

The browser keeps actual filesystem access local and only sends selected metadata to the backend. Do not put API provider secrets in the HTML client; configure them as Vercel environment variables when a provider is added.

The safety scanner is intentionally review-first and does not automatically delete files. The current client scanner is filename-based; deeper image/video classification should be added as a separate, privacy-conscious module.

## Future AI pipeline

`filesystem -> local index -> safety filter -> dataset builder -> JSONL/embeddings -> model training or retrieval system`
