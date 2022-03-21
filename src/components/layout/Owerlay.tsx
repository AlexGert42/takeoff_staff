import stls from '@styles/components/layout/Owerlay.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@types/index"


type TypeOwerlayProps = TypeClassNames & TypeChildren

const Owerlay = ({classNames, children}: TypeOwerlayProps) => {
    return (
        <div className={cn(stls.container, classNames)}>
           {children}
        </div>
    )
}

export default Owerlay