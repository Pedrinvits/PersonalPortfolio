"use client"
import Image from "next/image"

import { WorkExperience } from "@/app/types/work-experience"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { differenceInMonths , differenceInYears , format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { motion } from "framer-motion"
import { techBadgeAnimation } from "@/app/lib/animations"
import { TechBadge } from "@/app/components/tech-badge"
type ExperienceItemProps = {
    experience : WorkExperience
}

export const ExperienceItem = ( { experience } : ExperienceItemProps)=> {
    // desestruturando a palavra experience
    const {
        endDate,
        companyName,
        companyLogo,
        companyUrl,
        description,
        role,
        technologies
    } = experience

    const startDate = new Date(experience.startDate)

    const formattedStartDate = format(startDate, "MMM yyyy", {locale : ptBR})

    const formattedEndDate = endDate ? format(new Date(endDate), "MMM yyyy", {locale : ptBR}) : "o momento"

    const end = endDate ?  new Date(endDate) : new Date()

    const months = differenceInMonths(end, startDate)

    const years = differenceInYears(end, startDate)

    const monthsRemaining = months % 12

    const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

    return (
        <motion.div 
        initial={{ opacity:0 , y:50 }}
        whileInView={{opacity:1 , y:0}}
        exit={{opacity:0 , y:50}}
        transition={{duration:0.5}}
        className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border-gray-700 p-0.5">
                    <Image
                        src={companyLogo.url}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt={`Logo da empresa ${companyName}`}
                    />  
                </div>
                <div className="h-full w-[1px] bg-gray-line"/>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href={`https://www.instagram.com/${companyUrl}/`} target="_blank" className="text-gray-500 hover:text-light-purple transition-colors">
                        @{companyUrl}
                    </a>
                    <h4 className="text-gray-300">{role}</h4>
                    <span className="text-gray-500">{formattedStartDate} · {formattedEndDate} · {formattedDuration}</span>
                </div>
                <div className="text-gray-400 text-sm mb-3 mt-6 font-semibold"><RichText content={description.raw}/></div>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[300px] mb-8">
                    {technologies.map((tech,index) => (
                        <TechBadge 
                        key={`experience-${companyName}-tech-${tech.name}`} 
                        name={tech.name} 
                        {...techBadgeAnimation}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}