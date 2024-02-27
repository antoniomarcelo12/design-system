import * as RadixToast from '@radix-ui/react-toast'
import { Dispatch, SetStateAction, useState } from 'react';
import { CloseButton, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './styles';
import { X } from 'phosphor-react';
import { Text } from '../Text';

export interface ToastProps {
    variant?: 'error' | 'success'
    title: string
    description?: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
  }

export function Toast({open, title, setOpen, description, variant = 'success', ...props}: ToastProps) {

  return (
    <RadixToast.Provider {...props}>
      <ToastRoot variant={variant} forceMount onOpenChange={setOpen} open={open}>
        <ToastTitle className='success-title'>{title}</ToastTitle>
        <ToastTitle className='error-title'>{title}</ToastTitle>
            <ToastDescription className='toast-description'>
                  {description}
            </ToastDescription>
        <CloseButton variant={variant}>
          <X height={22} width={22} />
        </CloseButton>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'