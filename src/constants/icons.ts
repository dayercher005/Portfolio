import Express from '@/assets/express.svg';
import NodeJS from '@/assets/nodejs.svg';
import PostgreSQL from '@/assets/postgresql.svg';
import Prisma from '@/assets/prisma.svg';
import Python from '@/assets/python.svg';
import React from '@/assets/react.svg';
import Tailwind from '@/assets/tailwind.svg';
import Typescript from '@/assets/typescript.svg';
import NTU from '@/assets/ntu.webp';

export const Icons = {
    EXPRESS: Express,
    NODEJS: NodeJS,
    POSTGRESQL: PostgreSQL,
    PRISMA: Prisma,
    PYTHON: Python,
    REACT: React,
    TAILWIND: Tailwind,
    TYPESCRIPT: Typescript,
    NTU: NTU
} as const

export type IconTypes = typeof Icons[keyof typeof Icons]