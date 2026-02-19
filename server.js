import http from 'node:http';
import { createApp } from './src/app.js';
import { config } from './src/config.js';

const server = http.createServer(createApp());

server.listen(config.PORT, config.HOST, () => {
  console.log(`FLSS listening on http://${config.HOST}:${config.PORT}`);
});
