import {} from 'hono'

type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    Variables: {}
    Bindings: {
      AI: Ai,
    }
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
