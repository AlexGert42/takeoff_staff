import stls from '@styles/components/sections/SectionsListContacts.module.sass'
import { useState } from 'react'
import cn from 'classnames'
import { TypeClassNames, TypeContactData } from "@types/index"
import { Wrapper } from '@components/layout'
import { useActions, useTypeSelector } from '@utils/index'
import { IconCross, IconEditor, IconName, IconOrganization, IconPhone, IconSuccess } from '@components/icons'
import { GeneralAvatar, GeneralInput, GeneralSetContact } from '@components/general'

type TypeSectionsListContactsProps = TypeClassNames

const SectionsListContacts = ({ classNames }: TypeSectionsListContactsProps) => {
    const { removeContact, editContact } = useActions()
    const { contacts } = useTypeSelector(state => state.contacts)
    const [editor, setEditor] = useState<boolean>(false)
    const [id, setId] = useState<number>()
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [organization, setOrganization] = useState<string>('')

    const clickHandlerRemove = (id: number) => {
        removeContact(id)
    }

    const clickHandlerEditor = (id: number) => {
        setId(id)
        setEditor(true)
    }

    const clickHandlerSuccess = (item: TypeContactData) => {
        editContact({
            ...item,
            name: name.trim().length === 0 ? item.name : name,
            phone: phone.trim().length === 0 ? item.phone : phone,
            organization: organization.trim().length === 0 ? item.organization : organization
        })
        setEditor(false)
    }

    const clickBack = () => {
        setEditor(false)
    }

    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper>
                <GeneralSetContact />
                <ul>
                    {
                        contacts && contacts.map((item, idx) => (
                            <li key={item.id} className={stls.item}>
                                {
                                    id === item.id && editor ?
                                        <GeneralInput
                                            classNames={stls.input}
                                            placeholder={'Name'}
                                            type={'text'}
                                            change={e => setName(e)}
                                            value={item.name}
                                        >
                                            <IconName classNames={stls.icon} />
                                        </GeneralInput>
                                        :
                                        <GeneralAvatar classNames={stls.username} username={item.name} />
                                }
                                <div className={stls.details}>
                                    {
                                        id === item.id && editor ?
                                            <>
                                                <GeneralInput
                                                    classNames={stls.input}
                                                    type={'tel'}
                                                    placeholder={'Phone'}
                                                    change={e => setPhone(e)}
                                                    value={item.phone}
                                                >
                                                    <IconPhone classNames={stls.icon} />
                                                </GeneralInput>
                                                <GeneralInput
                                                    classNames={stls.input}
                                                    type={'text'}
                                                    placeholder={'Organization'}
                                                    change={e => setOrganization(e)}
                                                    value={item.organization}
                                                >
                                                    <IconOrganization classNames={stls.icon} />
                                                </GeneralInput>
                                            </>
                                            :
                                            <>
                                                <a className={stls.textBlock} href={`tel:${item.phone}`}><IconPhone classNames={stls.icon} />{item.phone}</a>
                                                <div className={stls.textBlock}><IconOrganization classNames={stls.icon} />{item.organization}</div>
                                            </>
                                    }
                                    <div className={stls.editor}>
                                        {
                                            id === item.id && editor ?
                                                <>
                                                    <button className={stls.btn} onClick={() => clickHandlerSuccess(item)}>
                                                        <IconSuccess classNames={stls.icon} />
                                                    </button>
                                                    <button className={stls.btn} onClick={() => clickBack()}>
                                                        <IconCross classNames={stls.icon} />
                                                    </button>
                                                </>
                                                :
                                                <>
                                                    <button className={stls.btn} onClick={() => clickHandlerRemove(item.id)}>
                                                        <IconCross classNames={stls.icon} />
                                                    </button>
                                                    <button className={stls.btn} onClick={() => clickHandlerEditor(item.id)}>
                                                        <IconEditor classNames={stls.icon} />
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