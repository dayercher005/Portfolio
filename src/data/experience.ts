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
                    "Developed reusable custom components for frontend using React and Material UI (MUI).",
                    "Enhancing application security through shifting third party API integrations into server-side logic."
                ],
                technologies: [
                    { name: Technology.REACT, icon: Icons.REACT },
                    { name: Technology.MUI, icon: Icons.MUI },
                    { name: Technology.EXPRESS, icon: Icons.EXPRESS },
                ],
                status: true
        }
    ]
    
}