"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"

const Skills = () => {

  const allSkills = [
    
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    
    // Frontend
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    
    // Backend
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Hono", logo: "https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title.png" },
    { name: "tRPC", logo: "https://trpc.io/img/logo.svg" },
    { name: "REST", logo: "https://img.icons8.com/color/48/000000/api-settings.png" },
    { name: "Bun", logo: "https://bun.sh/logo.svg" },
    
    // Databases
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Prisma", logo: "https://www.prisma.io/images/favicon-32x32.png" },
    
    // DevOps & Cloud
    { name: "AWS", logo: "/aws-svgrepo-com.svg" },
    { name: "Cloudflare", logo: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl text-[#64FFDA] font-bold mb-4 decoration-double underline underline-offset-8">Skills</h2>
      
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 py-1.5 px-2.5 bg-[#1F1F1F] rounded-md border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors"
          >
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              className="w-4 h-4 object-contain"
            />
            <span className="text-[#E1E3E5] text-xs font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 