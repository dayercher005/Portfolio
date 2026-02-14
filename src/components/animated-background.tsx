import type { FC } from 'react'
import { Circle } from '@/components/circle.tsx';

export const AnimatedBackground: FC = () => {

    return(
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden filter blur-[80px]">
            <Circle
                className="w-125 h-125 top-[22%] left-[10%] bg-[radial-gradient(circle,rgba(139,92,246,0.5)_0%,transparent_70%)]
                 [animation-delay:0s] animation-duration-[25s]"
             />
             <Circle className="w-100 h-100 top-2/4 right-[5%] bg-[radial-gradient(circle,rgba(236,72,153,0.4)_0%,transparent_70%)]
              [animation-delay:2s] animation-duration-[20s]" />
        </div>
    )
}