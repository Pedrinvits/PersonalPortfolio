import Link from "next/link"
import {usePathname} from "next/navigation"
import { cn } from "@/app/lib/utils"
type NavItemProps = {
    label : string,
    href : string
}
   
export const Navitem = ({label , href} : NavItemProps) => {
    const pathName = usePathname()
    const isActive = pathName == href
    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium relative cursor-pointer transition-all duration-400 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-400 before:bg-light-purple before:from-light-purple before:via-light-purple before:to-light-purple hover:before:w-full hover:before:opacity-100",
            isActive && "text-gray-50",
        )}>
            <span className="text-light-purple">#</span>
            {label}
        </Link>
    )
}