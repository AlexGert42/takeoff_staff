import stls from '@styles/components/pages/PagesProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Navigate } from 'react-router-dom'
import { useTypeSelector } from '@utils/index'
import { SectionsListContacts, SectionsSearchContacts, SectionsSetFormContact } from '@components/sections'


type TypePagesProfileProps = TypeClassNames

const PagesProfile = ({ classNames }: TypePagesProfileProps) => {
    const { auth } = useTypeSelector(state => state.auth)

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