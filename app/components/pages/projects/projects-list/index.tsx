"use client"
import { Project } from "@/app/types/projects"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animations"
type ProjectListProps = {
  projects : Project[]
}

export const ProjectList = ( { projects } : ProjectListProps) => {
  return(
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
     {projects?.map((project,index) => (
      <motion.div 
      {...fadeUpAnimation}
      transition={{duration: 0.5, delay: index * 0.1}}
      key={project.title} 
      >
        <Link href={`projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      </motion.div>
     ))}
    </section>
  )
}