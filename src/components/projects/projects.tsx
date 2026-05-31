import type { FC } from 'react';
import { ProjectsData } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

export const Projects: FC = () => {

    const { title, projects } = ProjectsData

    return(
        <>
            <div className="md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15">
                <h1 className="text-3xl md:text-4xl max-md:text-center font-bold mb-10 ">{title}</h1>
            </div>
             <div className="max-lg:grid-cols-3">
                {projects.map(project => 
                    <Card className="relative mx-auto w-full max-w-sm px-1 py-2.5 bg-zinc-700 border-none">
                        <img
                            src={project.image}
                            alt="Sprout Preview Image"
                            className="relative p-2 rounded-xl z-20 aspect-video w-full object-cover"
                        />
                        <CardHeader className="">
                            <CardAction className="gap-5">
                                <Badge variant="secondary" className="bg-amber-900 text-amber-300 max-sm:my-1">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-amber-500"></span>
                                    </span>
                                    {project.status}
                                </Badge>
                            </CardAction>
                            <CardTitle className="font-bold text-neutral-200 text-2xl max-lg:text-xl">{project.projectName}</CardTitle>
                            <CardDescription className="text-neutral-400">
                                {project.description}
                            </CardDescription>
                            <div className="flex gap-3 pt-4.5 pb-3">
                                {project.technologies.map(technology => 
                                    <HoverCard openDelay={10} closeDelay={75}>
                                        <HoverCardTrigger asChild>
                                            <img
                                                className="size-7 hover:scale-110 transition"
                                                src={technology.icon}
                                            />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            <p className="font-medium text-xs">
                                                {technology.name}
                                            </p>
                                        </HoverCardContent>
                                    </HoverCard>
                                )}
                            </div>
                            <div className="flex justify-end gap-1 items-center pt-4">
                                {project.references.map(reference => 
                                    <HoverCard openDelay={10} closeDelay={75}>
                                        <HoverCardTrigger asChild>
                                            <a href={reference.link}>
                                            <img
                                                className="size-8 hover:scale-110 transition"
                                                src={reference.icon}
                                            />
                                            </a>
                                        </HoverCardTrigger>
                                    </HoverCard>
                                )}
                            </div>
                        </CardHeader>
                    </Card>
                )}
            </div>
        </>
    )
}