import { type FC, useState } from 'react';
import { SkillsData } from '@/data/skills.ts';
import { SkillsCard } from '@/components/skills/card.tsx'
import { SkillsNavbar } from '@/components/skills/navbar.tsx';

export const Skills: FC = () => {

    const [sectionIndex, setSectionIndex] = useState<number>(0);

    const {
        title,
        sections
    } = SkillsData;

    return (
        <div className="max-w-2xl mx-auto mt-25">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
            <SkillsNavbar
                sections={sections}
                setSectionIndex={setSectionIndex}
            />
            <SkillsCard
                selectedSection={sections[sectionIndex]}
            />
        </div>
    )
}