import type { FC } from 'react'
import { ExperienceData } from '@/data/experience.ts'
import { RiseUp } from '@/components/animations/riseUp.tsx';
import { Badge } from '@/components/ui/badge';
import { HoverCard,
         HoverCardContent,
         HoverCardTrigger
        } from '@/components/ui/hover-card'

export const Experience: FC = () => {

    const {
        title,
        experiences
    } = ExperienceData

    return(
        <div className="md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15">
            <h1 className="text-3xl md:text-4xl max-md:text-center font-bold ">{title}</h1>

            <RiseUp
                delay={150}
            >
                <div
                    className="py-10 mx-1.5"
                >
                    {experiences.map((experience)=> 
                        <div className="border-b-3 last:border-none py-5">
                            <img 
                                className="size-15 max-md:mx-auto"
                                src={experience.logo}
                            />
                            <h1
                                className="font-medium text-md max-md:text-center italic text-zinc-300 py-2"
                            >
                                {experience.organization}
                            </h1>
                            <div 
                            className="md:flex justify-between max-md:text-center py-3.5">
                                <div className="md:flex gap-1.5">
                                    <h1
                                        className="font-semibold text-lg"
                                    >
                                        {experience.position}
                                    </h1>
                                    { experience.status && 
                                        <Badge variant="secondary" className="bg-green-950 text-green-300 max-sm:my-1">
                                            <span className="relative flex size-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                                            </span>
                                            Present
                                        </Badge>
                                    }
                                </div>
                                <h1
                                    className="font-semibold text-md"
                                >
                                    {experience.startDate} - {experience.endDate}
                                </h1>
                            </div>

                            <ul
                                className="list-disc pb-6.5"
                            >
                                {experience.description.map((description) => 
                                    <li
                                        className="ml-5 pb-1.5 font-medium italic"
                                    >
                                        {description}
                                    </li>
                                )}
                            </ul>

                            <div className="flex gap-4">
                                {experience.technologies.map((technology) => 
                                    <HoverCard openDelay={10} closeDelay={75}>
                                        <HoverCardTrigger asChild>
                                            <img
                                                className="size-8.5 hover:scale-110 transition"
                                                src={technology.icon}
                                            />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <p className="font-medium text-sm">
                                                {technology.name}
                                            </p>
                                        </HoverCardContent>
                                    </HoverCard>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </RiseUp>
        </div>

        
    )
}