import stls from '@styles/components/sections/SectionsLoginForm.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralInput } from '@components/general'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '@context/login/authReducer'


type TypeSectionsLoginFormProps = TypeClassNames

type TypeLoginData = {
    email?: string
    password?: string
}

const SectionsLoginForm = ({ classNames }: TypeSectionsLoginFormProps) => {
    const dispatch = useDispatch()
    const [data, setData] = useState<TypeLoginData>()

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser(data))
        
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput type={'email'} change={e => setData({...data, email: e})}/>
                    <GeneralInput type={'password'} change={e => setData({...data, password: e})}/>
                    <button type="submit">Send</button>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsLoginForm