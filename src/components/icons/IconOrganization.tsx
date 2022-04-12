import cn from 'classnames'
import { TypeClassNames } from "@type/index"

type TypeIconOrganizationProps = TypeClassNames

const IconOrganization = ({ classNames }: TypeIconOrganizationProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3847 4.5V2.5H8.56051V4.5H12.3847ZM2.82421 6.5V17.5H18.121V6.5H2.82421ZM18.121 4.5C19.1822 4.5 20.0331 5.39 20.0331 6.5V17.5C20.0331 18.61 19.1822 19.5 18.121 19.5H2.82421C1.76299 19.5 0.912109 18.61 0.912109 17.5L0.92167 6.5C0.92167 5.39 1.76299 4.5 2.82421 4.5H6.64841V2.5C6.64841 1.39 7.49929 0.5 8.56051 0.5H12.3847C13.4459 0.5 14.2968 1.39 14.2968 2.5V4.5H18.121Z" fill="#2A2B4E" fillOpacity="0.8" />
            </svg>
        </div>
    )
}

export default IconOrganization