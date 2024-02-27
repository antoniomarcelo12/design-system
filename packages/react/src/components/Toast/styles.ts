import * as RadixToast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastRoot = styled(RadixToast.Root, {
  height: '70px',
  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',
  // gap: '1rem',
  justifyContent: 'space-between',
  padding: '$5',
  color: '$gray100',
  fontFamily: '$default',

  variants: {
    variant: {
      error: {
        background: '#b91c1c',
        boxShadow: '0 0 2px 1px $colors$gray500 inset',
        
        '.success-title': {
          display: 'none'
        },

        '.error-title': {
          fontSize: '$xl',
        },

        '.toast-description': {
          color: '$gray100',

        }
      },
      success: {
        backgroundColor: '$gray800',
        boxShadow: '0 0 2px 1px $colors$gray500 inset',

        '.error-title': {
          display: 'none'
        }
      }
    }
  }
})

export const ToastTitle = styled(RadixToast.Title, {
  fontWeight: 700,
  fontSize: '$2xl',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '95%'
})

export const ToastDescription = styled(RadixToast.Description, {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '95%',
})

export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: '$3',
  right: '$3',
  width: '390px',
  margin: 0,
  zIndex: 9999,
})

export const CloseButton = styled(RadixToast.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: '$4',
  right: '$4',

  variants: {
    variant: {
      error: {
        color: 'black'
      },
      success: {
        color: '$gray400',
      }
    }
  }
})