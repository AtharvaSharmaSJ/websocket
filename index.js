import { Server } from '@hocuspocus/server'
import { RocksDB } from '@hocuspocus/extension-rocksdb'

const server = Server.configure({
  port:  process.env.PORT || 8080,
  extensions: [
    new RocksDB({ path: './database' }),
  ],
})

server.listen()
