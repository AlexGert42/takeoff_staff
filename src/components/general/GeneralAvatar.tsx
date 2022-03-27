import stls from '@styles/components/general/GeneralAvatar.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"



type TypeAvatarProps = TypeClassNames & {
    username: string
}

const GeneralAvatar = ({ classNames, username }: TypeAvatarProps) => {

    return (<div className={cn(stls.container, classNames)}>
        <span className={stls.circle}>
            <p className={stls.letter}>{username[0]}</p>
        </span>
        <span className={stls.text}>{username}</span>
    </div>

    )
}
export default GeneralAvatar