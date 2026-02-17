import { type TechnologyTypes, Technology } from '@/constants/technologies.ts';
import { type IconTypes, Icons } from '@/constants/icons.ts';

interface SkillsData {
    title: string,
    sections: Section[]
}

export interface Section {
    title: string,
    technologies: TechnologyData[]
}

interface TechnologyData {
    name: TechnologyTypes,
    icon: IconTypes
}

export const SkillsData: SkillsData = {
    title: "Skills",
    sections: [
        {
            title: "Frontend",
            technologies: [
                { name: Technology.TYPESCRIPT, icon: Icons.TYPESCRIPT },
                { name: Technology.TAILWIND, icon: Icons.TAILWIND },
                { name: Technology.REACT, icon: Icons.REACT }
            ]
        },
        {
            title: "Backend",
            technologies: [
                { name: Technology.NODEJS, icon: Icons.NODEJS },
                { name: Technology.TYPESCRIPT, icon: Icons.TYPESCRIPT },
                { name: Technology.EXPRESS, icon: Icons.EXPRESS },
                { name: Technology.POSTGRESQL, icon: Icons.POSTGRESQL },
                { name: Technology.PRISMA, icon: Icons.PRISMA },
                { name: Technology.PYTHON, icon: Icons.PYTHON }
            ]
        }
    ]
}