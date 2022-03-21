import stls from '@styles/components/pages/PagesProfile.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"


type TypePagesProfileProps = TypeClassNames

const PagesProfile = ({ classNames }: TypePagesProfileProps) => {
    return (
        <main className={cn(stls.container, classNames)}>
            Profile
        </main>
    )
}

export default PagesProfile