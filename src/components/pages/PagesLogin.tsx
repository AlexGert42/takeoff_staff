import stls from '@styles/components/pages/PagesLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@type/index"
import { SectionsLoginForm, SectionsRegisterForm, SectionsWelcome } from "@components/sections"
import { Navigate } from 'react-router-dom'
import { useTypeSelector } from '@utils/index'
import { useState } from 'react'


type TypeLoginProps = TypeClassNames

const PagesLogin = ({ classNames }: TypeLoginProps) => {
    const { auth } = useTypeSelector(state => state.auth)
    const [register, setRegister] = useState<boolean>(false)


    if (auth) {
        return <Navigate to={"/"} />
    }
    return (
        <main className={cn(stls.container, classNames)}>
            <SectionsWelcome classNames={register ? [stls.registerTop] : [stls.loginTop]}/>
            {
                register ?
                    <SectionsRegisterForm setRegister={setRegister}/>
                    :
                    <SectionsLoginForm setRegister={setRegister}/>
            }
        </main>
    )
}

export default PagesLogin