import type { FC } from 'react';
import { EducationData } from '@/data/education.ts';
import { Separator } from '@/components/ui/separator.tsx';
import { RiseUp } from '@/components/animations/riseUp.tsx';

export const Education: FC = () => {

    const {
        title,
        educations
    } = EducationData

    const delay = 150

    return(
        <div className="md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15">
            <h1 className="text-2xl md:text-4xl max-md:text-center font-bold ">{title}</h1>

            <RiseUp
                delay={delay}
            >
                <div
                    className="py-10 mx-1.5"
                >
                    {educations.map((education, index) => 
                        <div
                            key={index}
                            className="md:flex items-center justify-between"
                        >
                            <img 
                                src={education.icon}
                                className="w-45 h-16 max-md:mx-auto"
                            />

                            <div className="text-center">
                                <p
                                    className="font-medium text-md md:max-w-75 max-md:mx-auto my-1.5"
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

            </RiseUp>

            <Separator />

        </div>
    )
}