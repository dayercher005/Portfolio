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
        "My first exposure to software development was with The Odin Project(TOP) curriculum which eventually got me started with Web Development. This sparked my passion in building applications with open source",
        "Currently I'm a prospective Y1 Computer Science Major set to matriculate on July 2026!",
        "When I'm not coding, you may find me either bouldering or playing chess."
    ],
    linkedin: "https://www.linkedin.com/in/dayer-cher-9a9a14231/",
    github: "https://github.com/dayercher005",
    resume: "",
    professions: [
        "Computer Science Undergraduate",
        "Software Developer"
    ]
}