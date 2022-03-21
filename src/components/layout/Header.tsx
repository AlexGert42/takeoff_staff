import stls from '@styles/components/layout/Header.module.sass'
import { Link } from "react-router-dom"
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { IconLogo } from '@components/icons'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
    return (
        <header className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <Link className={stls.logo} to='/'>
                   <IconLogo classNames={[stls.icon]}/>
                   <p className={stls.text}>Logo</p>
                </Link>
                <nav className={stls.nav}>
                    <Link className={stls.link} to='/'>
                        Profile
                    </Link>
                    <Link className={stls.link} to='/login'>
                        Login
                    </Link>
                </nav>
            </Wrapper>

        </header>
    )
}

export default Header