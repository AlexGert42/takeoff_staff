import stls from '@styles/components/layout/Owerlay.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import icon from '../../assets/loader.gif'
import { useTypeSelector } from '@utils/index'

type TypeOwerlayProps = TypeClassNames 

const Owerlay = ({classNames}: TypeOwerlayProps) => {
    const {owerlay} = useTypeSelector(state => state.app)
    
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