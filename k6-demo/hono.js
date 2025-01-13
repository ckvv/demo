import { serve } from '@hono/node-server'
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  return c.json({
    hello: 'world'
  });
})


serve({
  fetch: app.fetch,
  port: 3000,
});