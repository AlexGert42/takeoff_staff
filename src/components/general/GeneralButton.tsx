import stls from '@styles/components/general/GeneralButton.module.sass'
import cn from 'classnames'
import { TypeChildren, TypeClassNames } from "@type/index"


type TypeGeneralInputProps = TypeClassNames & TypeChildren & React.ComponentPropsWithoutRef<"button">

const GeneralButton = ({ classNames, ...restProps }: TypeGeneralInputProps) => {
   
    return <>
      <button 
      className={cn([stls.container], classNames)} 
      onClick={restProps.onClick}
      type={restProps.type}
      >
        {restProps.children}
      </button>
    </>
}

export default GeneralButton