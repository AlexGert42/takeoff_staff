import stls from '@styles/components/layout/Wrapper.module.sass'
// import stls from '@styles/components/layout/Wrapper.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@type/index"


type TypeWrapperProps = TypeClassNames & TypeChildren

const Wrapper = ({classNames, children}: TypeWrapperProps) => {
    return (
        <div className={cn(stls.container, classNames)}>
           {children}
        </div>
    )
}

export default Wrapper