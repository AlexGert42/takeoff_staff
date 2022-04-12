import cn from 'classnames'
import { TypeClassNames } from "@type/index"


type TypeIconSearchProps = TypeClassNames

const IconSearch = ({ classNames }: TypeIconSearchProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.245 11.255H6.035L6.31499 10.985C5.335 9.845 4.745 8.365 4.745 6.755C4.745 3.165 7.65499 0.255005 11.245 0.255005C14.835 0.255005 17.745 3.165 17.745 6.755C17.745 10.345 14.835 13.255 11.245 13.255C9.635 13.255 8.155 12.665 7.015 11.685L6.745 11.965V12.755L1.745 17.745L0.254995 16.255L5.245 11.255ZM11.245 11.255C13.735 11.255 15.745 9.245 15.745 6.755C15.745 4.26501 13.735 2.255 11.245 2.255C8.755 2.255 6.745 4.26501 6.745 6.755C6.745 9.245 8.755 11.255 11.245 11.255Z" fill="white" />
            </svg>
        </div>
    )
}

export default IconSearch