import { Icons } from '@/constants/icons.ts';

interface EducationListData {
    title: string
    educations: EducationData[];
}

interface EducationData {
    school: string
    icon: string
    course: string
    startDate: string
    endDate: string
    status?: string
}

export const EducationData: EducationListData = {
    title: "Education",
    educations: [
        {
            school: "Nanyang Technological University (NTU)",
            icon: Icons.NTU,
            course: "Bachelor of Computing (Hons) in Computer Science",
            startDate: "July 2026",
            endDate: "Present",
            status: "Current"
        }
    ]
}