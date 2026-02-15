import { type TechnologyTypes, Technology } from '@/constants/technologies.ts';

interface SkillsData {
    title: string,
    sections: Section[]
}

interface Section {
    title: string,
    technologies: TechnologyTypes[]
}

export const SkillsData: SkillsData = {
    title: "Skills",
    sections: [
        {
            title: "Frontend Development",
            technologies: [
                Technology.TYPESCRIPT,
                Technology.TAILWIND,
                Technology.REACT
            ]
        },
        {
            title: "Backend Development",
            technologies: [
                Technology.NODEJS,
                Technology.TYPESCRIPT,
                Technology.EXPRESS,
                Technology.POSTGRESQL,
                Technology.PRISMA,
                Technology.PYTHON
            ]
        }
    ]
}