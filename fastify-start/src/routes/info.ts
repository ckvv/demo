import type { FastifyPluginCallback } from 'fastify'

export const infoRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/', (request, reply) => {
    reply.send({
      hello: 'world',
    })
  })
  done()
}
