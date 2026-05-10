interface HeroData {
    firstName: string,
    lastName: string,
    description: string[],
    linkedin: string,
    github: string,
    resume: string,
    professions: string[]
}

export const HeroData: HeroData = {
    firstName: "Dayer",
    lastName: "Cher",
    description: [
        "Hi, I'm Dayer. I'm a Computer Science undergraduate at studying at National University of Singapore (NUS).",
        "Currently I'm honing my skills as a Software Development Intern at RSAF Agile Innovation Digital (RAiD) where I'm working on full stack development.",
        "During my free time, I'm enjoy spending my weekends climbing in a bouldering gym!."
    ],
    linkedin: "https://www.linkedin.com/in/dayer-cher-9a9a14231/",
    github: "https://github.com/dayercher005",
    resume: "",
    professions: [
        "Undergraduate",
        "Software Developer",
    ]
}