import stls from '@styles/components/general/GeneralInput.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@types/index"
import { useMask } from 'react-mask-field'


type TypeGeneralInputProps = TypeClassNames & TypeChildren & {
    placeholder?: string
    change?: (e: string) => void
    type: 'text' | 'password' | 'email' | 'tel'
    autoComplete?: 'new-password' | 'off'
}

const GeneralInput = ({ classNames, children,  placeholder, change, type, autoComplete }: TypeGeneralInputProps) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        autoComplete={autoComplete}
                    />
                </div>
        } </>
    )
}

export default GeneralInput