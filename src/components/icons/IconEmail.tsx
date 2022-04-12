import cn from 'classnames'
import { TypeClassNames } from "@type/index"

type TypeIconEmailProps = TypeClassNames

const IconEmail = ({ classNames }: TypeIconEmailProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H10.5V14H2.5V4L10.5 9L18.5 4V9H20.5V2C20.5 0.9 19.6 0 18.5 0ZM10.5 7L2.5 2H18.5L10.5 7ZM15.84 18L12.3 14.46L13.71 13.05L15.83 15.17L20.07 10.93L21.5 12.34L15.84 18Z" fill="#837E8A" />
            </svg>
        </div>
    )
}

export default IconEmail