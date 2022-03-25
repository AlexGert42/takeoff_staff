import cn from 'classnames'
import { TypeClassNames } from "@types/index"

type TypeIconPasswordProps = TypeClassNames

const IconPassword = ({ classNames }: TypeIconPasswordProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 22L14 16H10V13.32C12.42 12.18 14 9.72 14 7C14 3.14 10.86 0 7 0C3.14 0 0 3.14 0 7C0 9.72 1.58 12.17 4 13.32L4 24L10 24V22H14ZM12 18V20L8 20V22H6L6 11.94L5.33 11.71C3.34 11.01 2 9.11 2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 9.11 10.66 11.01 8.67 11.71L8 11.94L8 18L12 18ZM10 7C10 5.35 8.65 4 7 4C5.35 4 4 5.35 4 7C4 8.65 5.35 10 7 10C8.65 10 10 8.65 10 7ZM6 7C6 6.45 6.45 6 7 6C7.55 6 8 6.45 8 7C8 7.55 7.55 8 7 8C6.45 8 6 7.55 6 7Z" fill="#837E8A" />
            </svg>
        </div>
    )
}

export default IconPassword