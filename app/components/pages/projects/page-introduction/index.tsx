"use client"
import { Link } from "@/app/components/Link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { motion } from "framer-motion"

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
      <SectionTitle subtitle="projetos" title="Meus Projetos" 
      classname="text-center items-center [&>h3]:text-xl"
      />
      <motion.div 
      initial={{opacity:0 , y: 100 }}
      whileInView={{opacity:1 , y: 0}}
      exit={{opacity:0 , y: 100}}
      transition={{duration:0.6}}
      className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Você encontrará aqui alguns projetos que desenvolvi.
        </p>
       <Link href="/">
        <HiArrowNarrowLeft size={20} /> 
        Voltar para Home
       </Link>
      </motion.div>
    </section>
  )
}