import stls from '@styles/components/layout/Footer.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { IconLogo } from '@components/icons'


type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {
   

    return (
        <footer className={cn(stls.container, classNames)}>
            <Wrapper classNames={stls.wrapper}>
                <p className={stls.copyright}>
                {'LoGo.com'} {new Date().getFullYear()} &copy; 
                </p>
                <a className={stls.icon} href={'/'}>
                    <IconLogo />
                </a>
                <ul className={stls.list}>

                </ul>
            </Wrapper>
        </footer>
    )
}

export default Footer
