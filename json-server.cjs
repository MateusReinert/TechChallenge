const express = require("express");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = 3001;

server.use(middlewares);
server.use(
  express.json({
    limit: "25mb",
  })
);

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server disponível em http://localhost:${port}`);
});
