import {fastify} from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const database = new DatabaseMemory()

// GET/ POST/ PUT/ DELETE
server.post('/videos', () => {
  database.create({
    title: 'Video 01'
  })
})

server.get('/videos', () => {
  return("hello exemplo")
})

server.put('/videos/:id', () => {
  return("oi")
})

server.listen({
  port: 3333,
})
