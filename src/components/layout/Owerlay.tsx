import stls from '@styles/components/layout/Owerlay.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import icon from '../../assets/loader.gif'
import { useSelector } from 'react-redux'

type TypeOwerlayProps = TypeClassNames 

const Owerlay = ({classNames}: TypeOwerlayProps) => {
    const {owerlay} = useSelector(state => state.app)
    
    if (owerlay) {
        return (
            <div className={cn(stls.container, classNames)}>
              <div className={stls.loader}>
                    <img src={icon} alt=" " />
              </div>
            </div>
        )
    }
    return <></>
}

export default Owerlay