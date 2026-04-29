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
    status: boolean
}

export const EducationData: EducationListData = {
    title: "Education",
    educations: [
        {
            school: "National University of Singapore (NTU)",
            icon: Icons.NUS,
            course: "Bachelor of Computing, Computer Science",
            startDate: "July 2026",
            endDate: "July 2030",
            status: false
        }
    ]
}