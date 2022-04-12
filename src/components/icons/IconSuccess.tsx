import cn from 'classnames'
import { TypeClassNames } from "@type/index"


type TypeIconSuccessProps = TypeClassNames

const IconSuccess = ({ classNames }: TypeIconSuccessProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 32.414L12 23.414L13.414 22L21 29.585L34.586 16L36 17.414L21 32.414Z" fill="#2A2B4E" fillOpacity="0.8" />
                <circle cx="24" cy="24" r="23.5" stroke="#2A2B4E" strokeOpacity="0.8" />
            </svg>
        </div>
    )
}

export default IconSuccess