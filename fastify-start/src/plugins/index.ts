import fp from 'fastify-plugin'
import { auth } from './auth'
import { errorHandler } from './errorHandler'

export { auth } from './auth'
export { errorHandler } from './errorHandler'

export const plugins = fp((fastify, opts, done) => {
  fastify.register(auth)
  fastify.register(errorHandler)
  done()
})
