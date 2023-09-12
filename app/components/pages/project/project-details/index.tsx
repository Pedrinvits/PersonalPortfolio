"use client"
import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe} from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "@/app/components/Link"
import { Project } from "@/app/types/projects"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations"
import { motion } from "framer-motion"
type ProjectDetailsProps ={
  project : Project
}

export const ProjectDetails = ( { project } : ProjectDetailsProps ) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <motion.div 
        initial={{opacity:0 , scale: 0.3 }}
        animate={{opacity:1 , scale: 1}}
        transition={{duration:0.5}}
        className="absolute inset-0 z-[-1]"
          style = {{background : `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`}}
        />
       <SectionTitle subtitle="projetos" title={project.title} classname="text-center items-center sm[&>h3]:text-4xl"/>
       <motion.div 
       {...fadeUpAnimation}
       className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base ">
         <RichText content={project.description.raw}/>
        </motion.div>
       <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
         {project.technologies.map((tech,index) => (
          <TechBadge 
            key={tech.name}
            name={tech.name}  
            {...techBadgeAnimation}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
         ))}
       </div>
       <motion.div 
       {...fadeUpAnimation}
       className="my-6 sm-my-12 flex items-center gap-2 sm:gap4 flex-col sm:flex-row">
        {project?.githubUrl && (
          <a target="_blank"  href={project.githubUrl}>
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20}/>
              Repositorio
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a target="_blank"  href={project.liveProjectUrl}>
            <Button className="min-w-[180px]">
              <FiGlobe size={20}/>
              Projeto Online
            </Button>
          </a>
        )}
       </motion.div>
       <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}