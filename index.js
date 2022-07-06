import { Server } from "@hocuspocus/server";
import { SQLite } from "@hocuspocus/extension-sqlite";

const server = Server.configure({
  port: 1234,
  extensions: [new SQLite({ path: "./database" })],
});

server.listen();
