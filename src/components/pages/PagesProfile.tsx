import stls from '@styles/components/pages/PagesProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Navigate } from 'react-router-dom'
import { useActions, useTypeSelector } from '@utils/index'
import { SectionsListContacts } from '@components/sections'
import { useEffect } from 'react'


type TypePagesProfileProps = TypeClassNames

const PagesProfile = ({ classNames }: TypePagesProfileProps) => {
    const { auth, userData } = useTypeSelector(state => state.auth)
    const { getContacts } = useActions()

    useEffect(() => {
        if (userData) {
            getContacts(userData.id)
        } 
    }, [])


    if (!auth) {
        return <Navigate
            to={"/login"}
        />
    }

    return (
        <main className={cn(stls.container, classNames)}>
            <SectionsListContacts/>
        </main>
    )
}

export default PagesProfile