interface EducationListData {
    title: string
    educations: EducationData[];
}

interface EducationData {
    school: string
    course: string
    startDate: string
    endDate: string
    status: boolean
}

export const EducationData: EducationListData = {
    title: "Education",
    educations: [
        {
            school: "Nanyang Technological University (NTU)",
            course: "Bachelor of Computing (Hons) in Computer Science",
            startDate: "July 2026",
            endDate: "Present",
            status: true
        }
    ]
}