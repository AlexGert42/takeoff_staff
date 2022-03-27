import cn from 'classnames'
import { TypeClassNames } from "@types/index"

type TypeIconEditorProps = TypeClassNames

const IconEditor = ({ classNames }: TypeIconEditorProps) => {
    return (
        <div className={cn(classNames)}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" stroke="#2A2B4E" strokeOpacity="0.8" />
                <path d="M14.59 27.1955L19.8942 30.258L26.0192 19.6495L20.7167 16.587L14.5917 27.1973L14.59 27.1955ZM13.9372 28.8405L14.8367 32.8953L18.7987 31.6458L13.9372 28.8405ZM21.59 15.0715L26.8925 18.134L28.443 15.4513L23.1387 12.3888L21.59 15.0715ZM12 28.1843L22.5 10L30.8335 14.8108L20.3352 32.9968H20.337L13.5435 35.1388L12 28.1843ZM22.5 35.137V33.387H34.75V35.137H22.5Z" fill="#2A2B4E" fillOpacity="0.8" />
            </svg>
        </div>
    )
}

export default IconEditor



