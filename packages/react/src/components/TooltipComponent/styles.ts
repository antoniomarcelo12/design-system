import { Content, Root, Arrow } from '@radix-ui/react-tooltip'
import { styled } from "../../styles";
import { ComponentProps } from 'react';

type TooltipArrowProps = ComponentProps<typeof Content> & {
    forceMount?: boolean
}

export const TooltipWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
})

export const TestButton = styled('div', {
    all: 'unset',
    background: '$gray200',
    padding: '$2 $6',
    boxShadow: '0px 0px 10px 2px black',
    borderRadius: '$lg',
    cursor: 'pointer'

})

export const TooltipContent = styled(Content, {
    borderRadius: '$md',
    padding: '$3 $6',
    fontSize: '$sm',
    backgroundColor: '$gray900',
    color: '$gray100',
    fontFamily: '$default',
    fontWeight: '$medium',
    lineHeight: '$base',
    boxShadow: '0 0 2px 1px $colors$gray600',

    
})
export const TooltipArrow = styled(Arrow, {
    fill: '$gray900',
    height: '7px',
    width: '16px'
})
