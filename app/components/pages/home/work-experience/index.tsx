
import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperiences } from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences : IWorkExperiences[]
}

export const WorkExperience = ( { experiences } : WorkExperienceProps ) => { 
    const sortedExperiences = experiences?.reverse();
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiencias"title="Experiencias"/>
                <p className="text-gray-400 mt-2">Sou apaixonado por criar soluções tecnológicas inovadoras, automotivado e rápido em aprender novas habilidades</p>
            </div>
            <div className="flex flex-col gap-4">
                
                {sortedExperiences?.map(experience=>(
                    <ExperienceItem 
                        key={experience.companyName}
                        experience={experience}
                    />
                ))}     
            </div>
        </section>
    )
}