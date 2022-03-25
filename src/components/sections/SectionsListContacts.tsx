import stls from '@styles/components/sections/SectionsListContacts.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames, TypeContactData } from "@types/index"
import { Wrapper } from '@components/layout'
import { useActions, useTypeSelector } from '@utils/index'
import { IconCross, IconEditor } from '@components/icons'
import { GeneralInputText } from '@components/general'



interface TypeEditData {
    phone: string
    name: string
    organization: string
}

type TypeSectionsListContactsProps = TypeClassNames

const SectionsListContacts = ({ classNames }: TypeSectionsListContactsProps) => {
    const { removeContact, editContact } = useActions()
    const { contacts } = useTypeSelector(state => state.contacts)
    const [editor, setEditor] = useState<boolean>(false)
    const [id, setId] = useState<number>()
    const [data, setData] = useState<TypeEditData>({
        phone: '',
        name: '',
        organization: ''
    })

    const clickHandlerRemove = (id: number) => {
        removeContact(id)
    }

    const clickHandlerEditor = (id: number) => {
        setId(id)
        setEditor(true)
    }

    const clickHandlerSuccess = (item: TypeContactData) => {
        editContact({ ...item, ...data })
        setEditor(false)
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <h1 className={stls.title}>Contacts</h1>
                <ul className={stls.list}>
                    {
                        contacts && contacts.map((item, idx) => (
                            <li key={item.id} className={stls.item}>
                                <div className={stls.description}>
                                    <p className={stls.name}>
                                        <GeneralInputText change={e => setData({ ...data, name: e })} type='text' editor={id === item.id && editor} text={item.name} />
                                    </p>
                                    {
                                        id === item.id && editor ?
                                            <GeneralInputText change={e => setData({ ...data, phone: e })} type='text' editor={id === item.id && editor} text={item.phone} />
                                            :
                                            <a className={stls.phone} href={`tel:${item.phone}`}>{item.phone}</a>
                                    }

                                </div>
                                <div className={stls.details}>
                                    <p className={stls.organization}>Work
                                        <GeneralInputText change={e => setData({ ...data, organization: e })} type='text' editor={id === item.id && editor} text={item.organization} />
                                    </p>
                                    <div className={stls.editor}>
                                        {
                                            id === item.id && editor ?
                                                <button className={stls.btn} onClick={() => clickHandlerSuccess(item)}>success</button>
                                                :
                                                <>
                                                    <button className={stls.btn} onClick={() => clickHandlerRemove(item.id)}>
                                                        <IconCross classNames={[stls.icon]} />
                                                    </button>
                                                    <button className={stls.btn} onClick={() => clickHandlerEditor(item.id)}>
                                                        <IconEditor classNames={[stls.icon]} />
                                                    </button>
                                                </>
                                        }
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionsListContacts