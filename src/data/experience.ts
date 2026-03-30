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
    description: string[]
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
                    "Working on integrating 3D geospatial visualization using CesiumJS with Google Maps API.",
                ],
                technologies: [
                    { name: Technology.REACT, icon: Icons.REACT },
                    { name: Technology.MUI, icon: Icons.MUI}
            ]
        }
    ]
    
}