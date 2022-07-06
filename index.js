import { Server } from '@hocuspocus/server'
import { RocksDB } from '@hocuspocus/extension-rocksdb'

const server = Server.configure({
  port: 80,
  extensions: [
    new RocksDB({ path: './database' }),
  ],
})

server.listen()
