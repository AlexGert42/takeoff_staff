import stls from '@styles/components/sections/SectionsRegisterForm.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralInput } from '@components/general'
import { useState } from 'react'
import { useActions } from '@utils/index'



type TypeSectionsRegisterFormProps = TypeClassNames

type TypeLoginData = {
    username?: string
    phone?: string
    email?: string
    password?: string

}

const SectionsRegisterForm = ({ classNames }: TypeSectionsRegisterFormProps) => {
    const { registerUser } = useActions()
    const [data, setData] = useState<TypeLoginData>()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerUser(data)
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput type={'text'} change={e => setData({ ...data, username: e })} placeholder={'name'} />
                    <GeneralInput type={'text'} change={e => setData({ ...data, phone: e })} placeholder={'phone'} />
                    <GeneralInput type={'email'} change={e => setData({ ...data, email: e })} placeholder={'email'} />
                    <GeneralInput type={'password'} change={e => setData({ ...data, password: e })} placeholder={'pass'} />
                    <button type="submit">Send</button>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsRegisterForm