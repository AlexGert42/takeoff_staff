import stls from '@styles/components/sections/SectionsRegisterForm.module.sass'
import cn from 'classnames'
import { TypeClassNames, TypeRegisterData } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralInput } from '@components/general'
import { useState } from 'react'
import { useActions } from '@utils/index'



type TypeSectionsRegisterFormProps = TypeClassNames



const SectionsRegisterForm = ({ classNames }: TypeSectionsRegisterFormProps) => {
    const { registerUser } = useActions()
    const [data, setData] = useState<TypeRegisterData>({
        username: '',
        phone: '',
        email: '',
        password: ''
    })

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
                    <GeneralInput type={'text'} change={e => setData({ ...data, email: e })} placeholder={'email'} />
                    <GeneralInput type={'password'} change={e => setData({ ...data, password: e })} placeholder={'pass'} />
                    <button type="submit">Send</button>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsRegisterForm