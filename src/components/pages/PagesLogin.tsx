import stls from '@styles/components/pages/PagesLogin.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { SectionsLoginForm } from "@components/sections"


type TypeLoginProps = TypeClassNames

const PagesLogin = ({ classNames }: TypeLoginProps) => {
    return (
        <main className={cn(stls.container, classNames)}>
            <SectionsLoginForm/>
        </main>
    )
}

export default PagesLogin