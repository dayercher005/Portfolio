import type { FC} from 'react';

interface CircleProps {
    className: string
}

export const Circle: FC<CircleProps> = ({
    className
}) => {

    return(
        <div className={`absolute rounded-full animate-float
        mix-blend-screen ${className}`}>
        </div>
    )
}