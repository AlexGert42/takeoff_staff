import stls from '@styles/components/sections/SectionsWelcome.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'


type TypeSectionsLoginFormProps = TypeClassNames

const SectionsWelcome = ({ classNames }: TypeSectionsLoginFormProps) => {


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
               <h2 className={stls.title}>Hi, there!</h2>
               <h1 className={stls.subtitle}>Let’s get started!</h1>
            </Wrapper>
        </section>
    )
}

export default SectionsWelcome