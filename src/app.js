import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '..', 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

const parseBody = async (req) => {
  if (req.method === 'GET' || req.method === 'HEAD') return null;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return null;
  const raw = Buffer.concat(chunks).toString('utf8');
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const sendJson = (res, code, payload) => {
  res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' });
  res.end(JSON.stringify(payload));
};

const serveFile = async (res, filePath) => {
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, { 'content-type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
    return true;
  } catch {
    return false;
  }
};

export const createApp = () => {
  return async (req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'content-type'
      });
      res.end();
      return;
    }

    if (url.pathname.startsWith('/api/v1')) {
      const apiPath = url.pathname.replace('/api/v1', '') || '/';
      const key = `${req.method} ${apiPath}`;
      const handler = routes[key];
      if (!handler) return sendJson(res, 404, { error: 'Not found' });
      const body = await parseBody(req);
      const payload = await handler({ query: url.searchParams, body, method: req.method, path: apiPath });
      return sendJson(res, 200, payload);
    }

    const localPath = path.join(publicDir, url.pathname === '/' ? 'index.html' : url.pathname);
    if (await serveFile(res, localPath)) return;

    const indexPath = path.join(publicDir, 'index.html');
    await serveFile(res, indexPath);
  };
};
