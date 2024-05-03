import { HiArrowNarrowRight } from "react-icons/hi"

import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"
import { SectionTitle } from "@/app/components/section-title"
import { HorizontalDivider } from "@/app/components/devider"
import { Link } from "@/app/components/Link"

type ProjectsMadeProps = {
    projects : Project[]
}

export const ProjectsMade = ({ projects } : ProjectsMadeProps) => {
    const sliced_projects = projects.slice(0,3)
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos"/>
            <HorizontalDivider className="mb-16"/>

            <div>
                {sliced_projects.map(project => (
                    <div key={project.slug}>
                        <ProjectCard project={project}/>
                        <HorizontalDivider className="my-16"/>
                    </div>
                ))}
                <p className="flex items-center gap-1.5 ">
                    <span className="text-gray-400">Se interessou ?</span>
                    <Link className="inline-flex mx-1" href={"/projects"}>
                        Ver Todos
                        <HiArrowNarrowRight/>
                    </Link>
                </p>
            </div>
        </section>
    )
}