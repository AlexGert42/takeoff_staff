import stls from '@styles/components/sections/SectionsSetFormContact.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralInput } from '@components/general'
import { useState } from 'react'
import { useActions } from '@utils/index'

interface TypeDataContact {
    name: string
    phone: string,
    organization: string
}

type TypeSectionsSetFormContactProps = TypeClassNames


const SectionsSetFormContact = ({ classNames }: TypeSectionsSetFormContactProps) => {
    const { setContact } = useActions()
    const [data, setData] = useState<TypeDataContact>({
        name: '',
        phone: '',
        organization: ''
    })
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setContact(data)
    }

  


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput type={'text'} change={e => setData({...data, name: e})} placeholder={'Name'}/>
                    <GeneralInput type={'text'} change={e => setData({...data, phone: e})} placeholder={'Phone'}/>
                    <GeneralInput type={'text'} change={e => setData({...data, organization: e})} placeholder={'Organization'}/>
                    <button type="submit">Send</button>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsSetFormContact