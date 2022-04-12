import stls from '@styles/components/sections/SectionsLoginForm.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { Wrapper } from '@components/layout'
import { GeneralButton, GeneralInput } from '@components/general'
import { useState } from 'react'
import { useActions, useTypeSelector } from '@utils/index'
import { IconEmail, IconPassword } from '@components/icons'


type TypeSectionsLoginFormProps = TypeClassNames & {
    setRegister: (value: boolean) => void
}

interface TypeLoginData {
    email: string
    password: string
}

const SectionsLoginForm = ({ classNames, setRegister }: TypeSectionsLoginFormProps) => {
    const { errorLogin } = useTypeSelector(state => state.auth)
    const { loginUser } = useActions()
    const [data, setData] = useState<TypeLoginData>({
        email: '',
        password: ''
    })

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(data)
    }

    const clickHandler = () => {
        setRegister(true)
    }
    

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput classNames={[stls.input]} type={'email'} change={e => setData({...data, email: e})}>
                        <IconEmail classNames={[stls.icon]}/>
                    </GeneralInput>
                    <GeneralInput classNames={[stls.input]} type={'password'} change={e => setData({...data, password: e})}>
                        <IconPassword classNames={[stls.icon]}/>
                    </GeneralInput>
                    <GeneralButton classNames={[stls.btnSing]} type="submit">Sign in</GeneralButton> 
                    {errorLogin && <p className={stls.error}>{errorLogin}</p>}
                    <span className={stls.decorLine}>Or</span>
                    <GeneralButton classNames={[stls.btnCreate]} type="button" onClick={clickHandler}>Create an Account</GeneralButton>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsLoginForm