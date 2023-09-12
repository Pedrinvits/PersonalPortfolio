"use client"
import {motion} from "framer-motion"
import { ComponentProps } from "react"

type TechBadgeProps = ComponentProps<typeof motion.span> & {
    name : string
}
export const TechBadge = ( { name , ...props } : TechBadgeProps) => {

    return (
        <motion.span 
            className="text-light-purple bg-button border-gray-line border-[1px] text-sm py-1 px-3 rounded-lg"
            {...props}
        >
            {name}
        </motion.span>
    )


}