import cn from 'classnames'
import { TypeClassNames } from "@types/index"

type TypeIconArrowProps = TypeClassNames

const IconArrow = ({ classNames }: TypeIconArrowProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.8232 12.0824L0.219708 0.788929L17.54 0.876151L8.8232 12.0824Z" fill="white" />
            </svg>
        </div>
    )
}

export default IconArrow