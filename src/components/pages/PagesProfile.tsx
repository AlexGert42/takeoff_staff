import stls from '@styles/components/pages/PagesProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


type TypePagesProfileProps = TypeClassNames

const PagesProfile = ({ classNames }: TypePagesProfileProps) => {
    const auth = useSelector(state => state.auth.auth)

    if (!auth) {
        return <Navigate
            to={"/login"}
        />
    }

    return (
        <main className={cn(stls.container, classNames)}>
            Profile
        </main>
    )
}

export default PagesProfile