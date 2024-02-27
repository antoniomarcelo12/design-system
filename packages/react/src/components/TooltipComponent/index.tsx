import * as Tooltip from '@radix-ui/react-tooltip'
import { TestButton, TooltipArrow, TooltipContent, TooltipWrapper } from './styles';
import { Box } from '../Box';

export interface TooltipComponentProps {
    text: string
}

export function TooltipComponent({text}: TooltipComponentProps) {
    return(
        <Box style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <TestButton>Hover me!</TestButton>
                    </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <TooltipContent sideOffset={10}>
                                {text}
                                <TooltipArrow />
                            </TooltipContent>
                        </Tooltip.Portal>
                    </Tooltip.Root>
        </Tooltip.Provider>
      </Box>
    );
}

TooltipComponent.displayName = 'Tooltip'
