"use client"
import { fadeUpAnimation } from "@/app/lib/animations"
import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion"

type SectionTitleProps = {
    title  : string,
    subtitle : string,
    classname ?: string
}

export const SectionTitle = ({title,subtitle,classname} : SectionTitleProps) => {
    return (
        <div className={cn("flex flex-col gap-4",classname)}>
            <motion.span 
            {...fadeUpAnimation}
            transition={{ duration : 0.5 }}
            className="font-mono text-sm text-light-purple">{`../${subtitle}`}  
            </motion.span>
            <motion.h3 
            {...fadeUpAnimation}
            transition={{ duration : 0.5 , delay : 0.2 }}
            className="text-3xl font-medium">{title}
            </motion.h3>
        </div>
    )
}