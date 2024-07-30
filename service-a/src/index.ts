import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

const SERVICE_B_URL = process.env.SERVICE_B_URL || 'http://localhost:3001'

app.get('/', async (c) => {
  const headers = c.req.header()
  console.log(headers)

  const res = await fetch(SERVICE_B_URL, {headers: {
    'from-servvice': 'service-a'
  }}).then((res) => res.text())

  return c.text(res)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
