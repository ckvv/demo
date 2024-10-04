import type { FastifyInstance } from 'fastify'
import { infoRoutes } from './info'
import { userRoutes } from './user'

export function registerRoutes(fastify: FastifyInstance) {
  fastify.register(infoRoutes, {
    prefix: '/',
  })
  fastify.register(userRoutes, {
    prefix: '/user',
  })
}
