// import stls from '@styles/components/general/GeneralInput.module.sass'
import stls from '@styles/components/general/GeneralInput.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@type/index"
import { useMask } from 'react-mask-field'
import { useState } from 'react'


type TypeGeneralInputProps = TypeClassNames & TypeChildren & {
    placeholder?: string
    change?: (e: string) => void
    type: 'text' | 'password' | 'email' | 'tel'
    autoComplete?: 'new-password' | 'off'
    value?: string
}

const GeneralInput = ({ classNames, children,  placeholder, change, type, autoComplete, value = '' }: TypeGeneralInputProps) => {
    const [str, setStr] = useState<string>(value)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStr(e.target.value)
        change && change(e.target.value)
    }
    const ref = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } })

    return (
        <> {
            type === 'tel' ?
                <div className={cn([stls.container], classNames)}>
                    {children}
                    <input
                        className={stls.input}
                        onChange={e => changeHandler(e)}
                        placeholder={placeholder}
                        type={type}
                        value={str}
                        autoComplete={autoComplete}
                        ref={ref}
                    />
                </div>
                :
                <div className={cn([stls.container], classNames)}>
                    {children}
                    <input
                        className={stls.input}
                        onChange={e => changeHandler(e)}
                        placeholder={placeholder}
                        type={type}
                        value={str}
                        autoComplete={autoComplete}
                    />
                </div>
        } </>
    )
}

export default GeneralInput