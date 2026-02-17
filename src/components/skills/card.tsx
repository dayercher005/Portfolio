import type { FC } from 'react';
import type { Section } from '@/data/skills.ts';

interface SkillsCardProps {
    selectedSection: Section
}

export const SkillsCard: FC<SkillsCardProps> = ({
    selectedSection
}) => {

    return(
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mx-2.5">
            {selectedSection.technologies.map((technology, index) => 
                <div
                    key={index}
                    className="bg-skillCard rounded-2xl items-center gap-1.5 flex sm:p-4 p-2.5"
                >
                    <img 
                        src={technology.icon}
                        className="size-8"
                    />
                    <h1
                        className="font-semibold md:text-base text-xs"
                    >{technology.name}</h1>
                </div>
            )}
        </div>
    )
}