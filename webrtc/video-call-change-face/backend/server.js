const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const server = app.listen(3000);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
  allow_discovery: true,
});

app.use("/video", peerServer);
