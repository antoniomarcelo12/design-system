import { colors } from '@ignite-ui/tokens'
import { styled } from '@stitches/react'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <h1 style={{ color: colors.ignite300 }}>Hello World!</h1>
}
