import stls from '@styles/components/pages/PagesLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { SectionsLoginForm, SectionsRegisterForm } from "@components/sections"
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


type TypeLoginProps = TypeClassNames

const PagesLogin = ({ classNames }: TypeLoginProps) => {
    const auth = useSelector(state => state.auth.auth)

    if (auth) {
        return <Navigate
            to={"/"}
        />
    }
    return (
        <main className={cn(stls.container, classNames)}>
            <SectionsLoginForm/>
            <SectionsRegisterForm/>
        </main>
    )
}

export default PagesLogin