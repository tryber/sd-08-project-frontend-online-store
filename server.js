const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const portNumber = 3500;

const fileName = process.argv[2] || './src/services/api.js';
const port = process.argv[3] || portNumber;

let router;

const app = express();

const createServer = () => {
  delete require.cache[require.resolve(fileName)];
  setTimeout(() => {
    router = jsonServer.router(fileName.endsWith('.js')
      ? require(fileName)() : fileName);
  }, 100);
};

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api', (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on('change', () => {
  console.log('Reloading web service data...');
  createServer();
  console.log('Reloading web service data complete.');
});

app.listen(port, () => console.log(`Web service running on port ${port}`));
