import type { FC } from 'react';
import { HeroData } from '@/data/hero.ts';
import FlipUp from "@/components/animations/flipUp.tsx";

export const Hero: FC = () => {

    const { 
        firstName,
        lastName,
        description,
        professions
    } = HeroData;

    return(
        <div>
            <div className="max-w-2xl mx-auto md:flex justify-between items-center mt-20">
                <h1 className="text-2xl md:text-4xl font-bold">{firstName} {lastName}</h1>
                <FlipUp 
                    className="text-xl md:text-2xl font-semibold text-indigo-400"
                    words={professions}
                />
            </div>

            <div className="mt-7 mx-auto max-w-2xl">
                {description.map((text, index) =>
                    <p
                     className="font-medium text-md py-2"
                     key={index}
                    >{text}</p> 
                )}
            </div>
            
        </div>
    )
}