const RISKY_NAME = /\b(porn|pornography|xxx|nsfw|nude|nudity|hentai|explicit)\b/i;
export function scanNames(files=[]) {
  return files.filter(f => RISKY_NAME.test(String(f.name||'')) || RISKY_NAME.test(String(f.path||'')));
}
export function excludeFlagged(files=[], flagged=[]) {
  const blocked = new Set(flagged.map(f => f.path));
  return files.filter(f => !blocked.has(f.path));
}
