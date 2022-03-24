import stls from '@styles/components/layout/App.module.sass'
import { Route, Routes } from "react-router-dom";
import { PagesLogin, PagesProfile } from "@components/pages"
import { Header, Owerlay } from "@components/layout";
import { useEffect, useMemo } from 'react';
import { useActions, useTypeSelector } from '@utils/index';
import React from 'react';


const App = () => {
    const { auth } = useTypeSelector(state => state.auth)
    const { contacts } = useTypeSelector(state => state.contacts)
    const { authUser, getContacts } = useActions()

    useEffect(() => {
        const data: string = localStorage.getItem('user')
        if (data) {
            authUser(data)
            getContacts(data)
        } 
    }, [auth])

    return (
        <>
            <Owerlay />
            <Header />
            <Routes>
                <Route path="/" element={<PagesProfile />} />
                <Route path="/login" element={<PagesLogin />} />
            </Routes>
        </>
    )
}

export default App