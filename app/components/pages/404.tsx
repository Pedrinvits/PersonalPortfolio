"use client"
import React from "react";
import { Link } from "../Link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionTitle } from "../section-title";
import {motion } from 'framer-motion'
import { TbMoodSad } from "react-icons/tb";
const NotFoundPage = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2 ">
    <SectionTitle subtitle="404" title="Página 404" 
    classname="text-center items-center [&>h3]:text-xl"
    />
    <motion.div 
    initial={{opacity:0 , y: 100 }}
    whileInView={{opacity:1 , y: 0}}
    exit={{opacity:0 , y: 100}}
    transition={{duration:0.6}}
    className="flex flex-col items-center">
      <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base flex items-center gap-2">
        Nenhuma página foi encontrada. <TbMoodSad/>
      </p>
     <Link href="/">
      <HiArrowNarrowLeft size={20} /> 
      Voltar para Home
     </Link>
    </motion.div>
  </section>
  );
};

export default NotFoundPage;