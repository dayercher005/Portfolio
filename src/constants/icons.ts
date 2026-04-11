import Docker from '@/assets/icons/docker.svg';
import Django from '@/assets/icons/django.svg';
import Electron from '@/assets/icons/electron.svg'
import Express from '@/assets/icons/express.svg';
import FastAPI from '@/assets/icons/fastapi.svg';
import MUI from '@/assets/icons/mui.svg';
import NodeJS from '@/assets/icons/nodejs.svg';
import PostgreSQL from '@/assets/icons/postgresql.svg';
import Prisma from '@/assets/icons/prisma.svg';
import Python from '@/assets/icons/python.svg';
import RAiD from '@/assets/logos/raid.svg';
import React from '@/assets/icons/react.svg';
import ReactQuery from '@/assets/icons/react_query.svg'
import Tailwind from '@/assets/icons/tailwind.svg';
import Typescript from '@/assets/icons/typescript.svg';
import NTU from '@/assets/logos/ntu.webp';
import Linkedin from '@/assets/icons/linkedin.svg';
import Github from '@/assets/icons/github.svg';


export const Icons = {
    DOCKER: Docker,
    DJANGO: Django,
    ELECTRON: Electron,
    EXPRESS: Express,
    FASTAPI: FastAPI,
    MUI: MUI,
    NODEJS: NodeJS,
    POSTGRESQL: PostgreSQL,
    PRISMA: Prisma,
    PYTHON: Python,
    RAID: RAiD,
    REACT: React,
    REACT_QUERY: ReactQuery,
    TAILWIND: Tailwind,
    TYPESCRIPT: Typescript,
    NTU: NTU,
    LINKEDIN: Linkedin,
    GITHUB: Github
} as const

export type IconTypes = typeof Icons[keyof typeof Icons]