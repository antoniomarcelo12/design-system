import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@amb-test-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  argTypes: {
    variant: {
      options: ['error', 'success'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ToastProps>

export const SuccessToast: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}

export const ErrorToast: StoryObj<ToastProps> = {
  args: {
    variant: 'error',
    title: 'Erro ao realizar agendamento.',
    description:
      'Perdoem a estilização. Toast de erro somente para praticar as variants. (:',
  },
}
