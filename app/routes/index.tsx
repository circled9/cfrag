import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute(async (c) => {
  const response = await c.env.AI.run('@cf/meta/llama-3-8b-instruct', {
      prompt: "What is the origin of the phrase Hello, World"
    }
  );
  return c.render(
    <div class={className}>
      <div>
        {JSON.stringify(response)}
      </div>
      <Counter />
    </div>,
  )
})
