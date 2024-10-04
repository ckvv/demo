import fp from 'fastify-plugin'

export const auth = fp((fastify, opts, done) => {
  fastify.decorateRequest('user')
  fastify.addHook('preHandler', (req: any, reply, done) => {
    req.user = {
      id: Math.random(),
    }
    done()
  })
  done()
})
