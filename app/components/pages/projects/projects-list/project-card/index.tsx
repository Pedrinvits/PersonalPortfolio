import { Project } from "@/app/types/projects"
import Image from "next/image"

type ProjectCardProps = {
  project : Project
}

export const ProjectCard = ( { project } : ProjectCardProps ) => {

  const tecnologies = project.technologies.map(e => e.name).join(" · ")

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-line overflow-hidden border-2 border-gray-line hover:border-light-purple opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
          unoptimized
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-light-purple transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {tecnologies}
        </span>
      </div>
    </div>
  )
}