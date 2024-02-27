import { TooltipComponent, TooltipComponentProps } from '@amb-test-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/TooltipComponent',
  component: TooltipComponent,
} as Meta<TooltipComponentProps>

export const DefaultTooltip: StoryObj<TooltipComponentProps> = {
  args: {
    text: '21 de Outubro - Indisponível',
  },
}
