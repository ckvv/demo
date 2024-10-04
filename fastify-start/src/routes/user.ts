import type { FastifyPluginCallback, FastifyRequest } from 'fastify'
import * as UserSchema from '../schemas/user'

export const userRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get<{ Querystring: UserSchema.Query }>('/', { schema: { querystring: UserSchema.QuerySchema } }, (request, reply) => {
    reply.send({
      params: request.params,
      query: request.query,
      body: request.body,
    })
  })

  fastify.route({
    method: 'GET',
    url: '/info',
    handler(request, reply) {
      reply.send(request.user)
    },
  })

  fastify.route({
    method: 'GET',
    url: '/:userId',
    schema: {
      params: UserSchema.GetSchema,
    },
    handler(request: FastifyRequest<{ Params: UserSchema.Get }>, reply) {
      reply.send({
        hello: request.params,
      })
    },
  })
  done()
}
