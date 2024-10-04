import Fastify from 'fastify'
import { plugins } from './plugins'
import { registerRoutes } from './routes'

const fastify = Fastify({
  logger: true,
})

fastify.register(plugins)
registerRoutes(fastify)

async function start() {
  try {
    await fastify.listen({ port: 3010 })
  }
  catch (err) {
    fastify.log.error(err)
    // process.exit(1)
  }
}

start()
