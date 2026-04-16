import { Icons } from '@/constants/icons.ts';
import { Technology } from '@/constants/technologies.ts'

interface ExperienceData {
    title: string, 
    experience: ExperienceListData
}

interface ExperienceListData {
    position: string, 
    organization: string,
    startDate: string,
    endDate: string,
    description: string[],
    status: boolean
}

export const ExperienceData = {
    title: "Experience",
    experiences: [
            {
                position: "Software Developer Intern",
                organization: "Military startup unit focusing on digital transformation and innovation",
                logo: Icons.RAID,
                startDate: "March 2026",
                endDate: "July 2026",
                description: [
                    "Working on integrating 3D geospatial visualization into frontend using CesiumJS.",
                    "Developing reusable custom components for frontend using React and Material UI (MUI)."
                ],
                technologies: [
                    { name: Technology.REACT, icon: Icons.REACT },
                    { name: Technology.MUI, icon: Icons.MUI}
                ],
                status: true
        }
    ]
    
}