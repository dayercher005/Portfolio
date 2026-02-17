import type { FC } from 'react';
import { EducationData } from '@/data/education.ts';
import { Separator } from '@/components/ui/separator.tsx';

export const Education: FC = () => {

    const {
        title,
        educations
    } = EducationData

    return(
        <div className="max-w-2xl mx-auto mt-25 mb-15">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>

            <div
                className="py-10"
            >
                {educations.map((education, index) => 
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <img 
                            src={education.icon}
                            className="w-45 h-16"
                        />

                        <div>
                            <p
                                className="font-medium text-md max-w-75 mb-1"
                            >
                                {education.course}
                            </p>
                            <p
                                className="font-semibold text-md"
                            >
                                {education.startDate} - {education.endDate}
                            </p>
                        </div>
                    </div>
                )}
                
            </div>

            <Separator />

        </div>
    )
}