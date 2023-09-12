import { CMSIcon } from "@/app/components/cms-icon"
import { KnowTech as IKnowTech} from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"


type KnowTechProps = {
    tech : IKnowTech
}

export const KnowTech = ({tech} : KnowTechProps) => {
    const  relativeTime = getRelativeTimeString(new Date(tech.startDate),"pt-br").replace("há ","")
    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-light-purple hover:bg-gray-600/30 transition-all border-light-purple ">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <CMSIcon icon={tech.iconSvg}/>
            </div>
            <span>{relativeTime} de experiência</span>
        </div>
    )
}