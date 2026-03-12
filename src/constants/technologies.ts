export const Technology = {
    DOCKER: "Docker",
    EXPRESS: "Express.js",
    NODEJS: "Node.js",
    POSTGRESQL: "PostgreSQL",
    PRISMA: "Prisma",
    PYTHON: "Python",
    REACT: "React",
    TAILWIND: "Tailwind",
    TYPESCRIPT: "Typescript",
} as const

export type TechnologyTypes = typeof Technology[keyof typeof Technology]