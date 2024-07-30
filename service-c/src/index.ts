import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const headers = c.req.header()
  console.log(headers)

  return c.text('Hello from service-c.')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
