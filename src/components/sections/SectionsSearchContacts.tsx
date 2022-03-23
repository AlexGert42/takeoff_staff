import stls from '@styles/components/sections/SectionsSearchContacts.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@types/index"
import { Wrapper } from '@components/layout'
import { GeneralInput } from '@components/general'
import React, { useState } from 'react'
import { useActions } from '@utils/index'


type TypeSectionsSearchContactsProps = TypeClassNames


const SectionsSearchContacts = ({ classNames }: TypeSectionsSearchContactsProps) => {
    const { searchContact } = useActions()
    const [data, setData] = useState<string>('')
    const [currentSelect, setCurrentSelect] = useState<string>('Name')

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentSelect(e.target.value)
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchContact({data, currentSelect: currentSelect.toLowerCase()})
    }


    return (
        <section className={cn(stls.container, classNames)}>
            <Wrapper classNames={[stls.wrapper]}>
                <form className={stls.form} action="POST" onSubmit={submitHandler}>
                    <GeneralInput type={'text'} change={e => setData(e)} placeholder={currentSelect} />
                    <select defaultValue={"Name"} size={1} onChange={changeHandler}>
                        <option value={"Name"}>Name</option>
                        <option value={"Phone"}>Phone</option>
                        <option value={"Organization"}>Organization</option>
                    </select>
                    <button>Send</button>
                </form>
            </Wrapper>
        </section>
    )
}

export default SectionsSearchContacts