import stls from '@styles/components/general/GeneralSetContact.module.sass'
import cn from 'classnames'
import { TypeSetDataContact } from "@types/index"
import { useState } from 'react'
import { useActions } from '@utils/index'
import { IconName, IconOrganization, IconPhone } from '@components/icons'
import { GeneralButton, GeneralInput } from '@components/general'


const GeneralSetContact = () => {
    const { setContact } = useActions()
    const [hide, setHide] = useState<boolean>(true)
    const [data, setData] = useState<TypeSetDataContact>({
        name: '',
        phone: '',
        organization: ''
    })

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setContact(data)
        setHide(true)
    }

    const clickHandler = () => {
        setHide(!hide)
    }

    return (
        <>
            <button className={cn(stls.btn, {[stls.active]: !hide})} onClick={clickHandler} type={'button'}/>
            <form className={cn(stls.form, { [stls.hide]: hide })} action="POST" onSubmit={submitHandler}>
                <GeneralInput classNames={stls.input} type={'text'} change={e => setData({ ...data, name: e })} placeholder={'Name'}>
                    <IconName classNames={stls.icon} />
                </GeneralInput>
                <GeneralInput classNames={stls.input} type={'tel'} change={e => setData({ ...data, phone: e })} placeholder={'Phone'}>
                    <IconPhone classNames={stls.icon} />
                </GeneralInput>
                <GeneralInput classNames={stls.input} type={'text'} change={e => setData({ ...data, organization: e })} placeholder={'Organization'}>
                    <IconOrganization classNames={stls.icon} />
                </GeneralInput>
                <GeneralButton classNames={stls.sendBtn} type="submit">Send</GeneralButton>
            </form>

        </>
    )
}

export default GeneralSetContact

