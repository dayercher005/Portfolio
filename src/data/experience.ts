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
                position: "Software Engineer Intern",
                organization: "Military startup unit focusing on digital transformation and innovation",
                logo: Icons.RAID,
                startDate: "March 2026",
                endDate: "July 2026",
                description: [
                    "Working on third-party API Integration into web application",
                    ""
                ],
                technologies: [
                    { name: Technology.REACT, icon: Icons.REACT },
                    { name: Technology.REACT_QUERY, icon: Icons.REACT_QUERY }
            ]
        }
    ]
    
}