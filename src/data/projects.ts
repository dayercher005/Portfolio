import { Technology } from '@/constants/technologies.ts';
import { type TechnologyData } from '@/data/skills';
import { Icons, type IconTypes } from '@/constants/icons.ts';

interface ProjectData {
    projectName: string,
    description: string,
    image: string,
    technologies: TechnologyData[],
    references: ReferenceData[]
};

interface ReferenceData {
    link: string,
    icon: IconTypes
}

interface ProjectsData {
    title: string
    projects: ProjectData[]
};

export const ProjectsData = {
    title: "Projects",
    projects: [
        {
            projectName: "Sprout",
            description: "Light-weight web application for Cryptocurrency Analysis.",
            image: "../../../src/assets/images/sprout_preview.png",
            technologies: [
                { name: Technology.REACT, icon: Icons.REACT },
                { name: Technology.NEXTJS, icon: Icons.NEXTJS },
                { name: Technology.NEXTAUTH, icon: Icons.NEXTAUTH },
                { name: Technology.POSTGRESQL, icon: Icons.POSTGRESQL },
                { name: Technology.MUI, icon: Icons.MUI },
            ],
            references: [
                { link: "https://github.com/dayercher005/Sprout", icon: Icons.GITHUB },
                { link: "https://sprout-jade.vercel.app", icon: Icons.EXTERNAL_LINK }
            ],
            status: "In Progress"
        }
    ]
};