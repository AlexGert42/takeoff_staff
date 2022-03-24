import stls from '@styles/components/pages/PagesProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Navigate } from 'react-router-dom'
import { useActions, useTypeSelector } from '@utils/index'
import { SectionsListContacts, SectionsSearchContacts, SectionsSetFormContact } from '@components/sections'
import { useEffect } from 'react'


type TypePagesProfileProps = TypeClassNames

const PagesProfile = ({ classNames }: TypePagesProfileProps) => {
    const { auth, userData } = useTypeSelector(state => state.auth)
    const { contacts } = useTypeSelector(state => state.contacts)
    const { authUser, getContacts } = useActions()

    useEffect(() => {
        const data: string = localStorage.getItem('user')

        if (data) {
            // getContacts(data)
        } 
    }, [])


    if (!auth) {
        return <Navigate
            to={"/login"}
        />
    }

    return (
        <main className={cn(stls.container, classNames)}>
            <SectionsSearchContacts/>
            <SectionsSetFormContact/>
            <SectionsListContacts/>
        </main>
    )
}

export default PagesProfile