import { cn } from "@/app/lib/utils"
type HorizontDividerProps = {
    className ?: string,
}
export const HorizontalDivider = ({className} : HorizontDividerProps ) => {
    return (
        <div className={cn(
            "w-full my-8 border-b border-b-gray-line",className
        )}></div>
    )
}