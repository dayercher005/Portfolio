export const Technology = {
    DOCKER: "Docker",
    DJANGO: "Django",
    ELECTRON: "Electron",
    EXPRESS: "Express.js",
    MUI: "Material UI",
    NODEJS: "Node.js",
    POSTGRESQL: "PostgreSQL",
    PRISMA: "Prisma",
    PYTHON: "Python",
    REACT: "React",
    REACT_QUERY: "React Query",
    TAILWIND: "Tailwind",
    TYPESCRIPT: "Typescript",
} as const

export type TechnologyTypes = typeof Technology[keyof typeof Technology]