import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl text-[#64FFDA] font-bold mb-4 decoration-double underline underline-offset-8">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Cineverse"
          description="A platform for discovering and exploring movies and TV shows."
          href="https://cineverse-rho.vercel.app/"
          link="https://cineverse-rho.vercel.app/"
          repoUrl="https://github.com/abhinavkale-dev/Cineverse"
          tags={[
            "Next.js 15",
            "TypeScript",
            "TanStack Query",
            "Tailwind CSS",
            "Shadcn UI",
            "NextAuth.js"
          ]}
          image="/banner.png"
        />

      </div>
    </div>
  )
}

export default Projects