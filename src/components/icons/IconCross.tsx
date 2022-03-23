import cn from 'classnames'
import { TypeClassNames } from "@types/index"

type TypeIconCrossProps = TypeClassNames

const IconCross = ({ classNames }: TypeIconCrossProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.12 59.88L59.88 6.12" stroke="#464646" strokeWidth="15.36" strokeMiterlimit="10" />
                <path d="M59.88 59.88L6.12 6.12" stroke="#464646" strokeWidth="15.36" strokeMiterlimit="10" />
            </svg>
        </div>
    )
}

export default IconCross



