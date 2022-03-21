import stls from '@styles/components/general/GeneralInput.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"


type TypeGeneralInputProps = TypeClassNames & {
    placeholder?: string
    change: (e: string) => void
    type: 'text' | 'password' | 'email'
}

const GeneralInput = ({ classNames, placeholder, change, type }: TypeGeneralInputProps) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(e.target.value)
    }
    return <input
        className={cn([stls.container], classNames)}
        onChange={e => changeHandler(e)}
        placeholder={placeholder}
        type={type}
    />
}

export default GeneralInput