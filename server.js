const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.js');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON server is running in ${port}`);
});
