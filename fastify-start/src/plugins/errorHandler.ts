import localize from 'ajv-i18n'
import fp from 'fastify-plugin'

export const errorHandler = fp((fastify, opts, done) => {
  fastify.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      localize.zh(error.validation)
      return reply.send(error.validation)
    }
    reply.send(error)
  })
  done()
})
