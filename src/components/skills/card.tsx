import type { FC } from 'react';
import type { Section } from '@/data/skills.ts';

interface SkillsCardProps {
    selectedSection: Section
}

export const SkillsCard: FC<SkillsCardProps> = ({
    selectedSection
}) => {

    return(
        <div className="grid min-h-xl md:grid-cols-3 grid-cols-2 gap-5">
            {selectedSection.technologies.map((technology, index) => 
                <div
                    key={index}
                    className="bg-skillCard rounded-2xl items-center gap-5 flex p-4"
                >
                    <img 
                        src={technology.icon}
                        className="size-8"
                    />
                    <h1
                        className="font-semibold text-md"
                    >{technology.name}</h1>
                </div>
            )}
        </div>
    )
}