import stls from '@styles/components/general/GeneralInput.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@types/index"
import { useState } from 'react'


type TypeGeneralInputTextProps = TypeClassNames & {
    change: (e: string) => void
    type: 'text' | 'password' | 'email' | 'tel'
    editor: boolean
    text: string
}

const GeneralInputText = ({ classNames,  type, editor, text, change }: TypeGeneralInputTextProps) => {
    const [str, setStr] = useState<string>(text)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStr(e.target.value)
        change(e.target.value)
    }
    return <>
    {
        editor ? 
        <input 
        type={type}
        onChange={changeHandler}
        value={str}
         />
        :
        <span>{text}</span>
    } 
    </>
}

export default GeneralInputText

