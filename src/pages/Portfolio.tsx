import { Background } from "@/components/background.tsx";
import { Hero } from "@/components/hero/hero.tsx";
import { Skills } from '@/components/skills/skills.tsx';
import { Education } from '@/components/education/education.tsx'

function Portfolio() {

  return (
    <>
      <Background />
      <Hero />
      <Education />
      <Skills />
    </>
  )
}

export default Portfolio
