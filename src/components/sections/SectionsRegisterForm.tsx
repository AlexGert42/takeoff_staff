import stls from '@styles/components/sections/SectionsRegisterForm.module.sass'
import cn from 'classnames'
import { TypeClassNames, TypeRegisterData } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralButton, GeneralInput } from '@components/general'
import { useState } from 'react'
import { useActions, useTypeSelector, valid } from '@utils/index'
import { IconName, IconEmail, IconPassword, IconPhone } from '@components/icons'



type TypeSectionsRegisterFormProps = TypeClassNames & {
    setRegister: (value: boolean) => void
}

const SectionsRegisterForm = ({ classNames, setRegister }: TypeSectionsRegisterFormProps) => {
    const { errorReg } = useTypeSelector(state => state.auth)
    const [error, setError] = useState<string>(errorReg)
    const { registerUser } = useActions()
    const [data, setData] = useState<TypeRegisterData & { resetPassword: string }>({
        username: '',
        phone: '',
        email: '',
        password: '',
        resetPassword: ''
    })

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (valid(data)) {
            registerUser({
                username: data.username,
                phone: data.phone,
                email: data.email,
                password: data.password
            })
        } else {
            setError('Uncorrect data')
        }
    }

    const clickHandler = () => {
        setRegister(false)
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput classNames={stls.input} autoComplete={'off'} type={'text'} change={e => setData({ ...data, username: e })} placeholder={'Name'}>
                        <IconName classNames={stls.icon} />
                    </GeneralInput>
                    <GeneralInput classNames={stls.input} autoComplete={'off'} type={'tel'} change={e => setData({ ...data, phone: e })} placeholder={'+7 (___) ___ - __ - __'}>
                        <IconPhone classNames={stls.icon}/>
                    </GeneralInput>
                    <GeneralInput classNames={stls.input} autoComplete={'off'} type={'email'} change={e => setData({ ...data, email: e })} placeholder={'Email'}>
                        <IconEmail classNames={stls.icon}/>
                    </GeneralInput>
                    <GeneralInput classNames={stls.input} autoComplete={'new-password'} type={'password'} change={e => setData({ ...data, password: e })} placeholder={'Password'}>
                        <IconPassword classNames={stls.icon}/>
                    </GeneralInput>
                    <GeneralInput classNames={stls.input} autoComplete={'new-password'} type={'password'} change={e => setData({ ...data, resetPassword: e })} placeholder={'Reset Password'}>
                        <IconPassword classNames={stls.icon}/>
                    </GeneralInput>
                    <GeneralButton classNames={stls.btnCreate} type={"submit"}>Create an account</GeneralButton>
                    {error && <p className={stls.error}>{error}</p>}
                    <span className={stls.decorLine}>Or</span>
                    <GeneralButton classNames={stls.btnLogin} onClick={clickHandler} type={"button"}>To login</GeneralButton>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsRegisterForm