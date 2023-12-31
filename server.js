// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Adjust the path based on your data file
const middlewares = jsonServer.defaults();

const port = 8000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port http://localhost:${port}`);
});
