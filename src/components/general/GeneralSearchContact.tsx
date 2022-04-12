import stls from '@styles/components/general/GeneralSearchContact.module.sass'
import cn from 'classnames'
import React, { useState } from 'react'
import { TypeClassNames } from "@type/index"
import { useActions } from '@utils/index'
import { IconArrow, IconSearch } from '@components/icons'


type TypeGeneralSearchContactProps = TypeClassNames


const GeneralSearchContact = ({ classNames }: TypeGeneralSearchContactProps) => {
    const { searchContact } = useActions()
    const [data, setData] = useState<string>('')
    const [currentSelect, setCurrentSelect] = useState<string>('Name')
    const [hideSelect, setHideSelect] = useState<boolean>(true)

    const clickHandler = () => {
        setHideSelect(!hideSelect)
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchContact({ data, currentSelect: currentSelect.toLowerCase() })
    }

    const clickHandlerOption = (value: string) => {
        switch (value) {
            case 'Name': setCurrentSelect('Name')
                break
            case 'Phone': setCurrentSelect('Phone')
                break
            case 'Organization': setCurrentSelect('Organization')
                break
        }
        setHideSelect(true)
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <form className={stls.form} action="POST" onSubmit={submitHandler}>
                <ul className={cn(stls.select, { [stls.hide]: hideSelect })}>
                    <li className={stls.option} onClick={() => clickHandlerOption('Name')}>Name</li>
                    <li className={stls.option} onClick={() => clickHandlerOption('Phone')}>Phone</li>
                    <li className={stls.option} onClick={() => clickHandlerOption('Organization')}>Organization</li>
                </ul>
                <IconSearch classNames={[stls.iconSerach]} />
                <input className={stls.input} type={'text'} onChange={e => setData(e.target.value)} placeholder={currentSelect} />
                <button className={stls.btn} type={'button'} onClick={clickHandler}><IconArrow classNames={[stls.iconArrow]} /></button>
            </form>
        </section>
    )
}

export default GeneralSearchContact