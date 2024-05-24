import { randomUUID } from "node:crypto"

export class DatabaseMemory {
  #videos = new Map()

  //set (nao aceita valores duplicados), map
 list() {
  return this.#videos.values()
 }

 create(id, video) {
  this.#videos.set(id, video)
 }

 delete(id) {
  this.#videos.delete(id)
 }

}