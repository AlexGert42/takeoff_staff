import stls from '@styles/components/layout/App.module.sass'
import { Route, Routes } from "react-router-dom";
import { PagesLogin, PagesProfile } from "@components/pages"
import { Header, Owerlay } from "@components/layout";
import { useEffect } from 'react';
import { useActions, useTypeSelector } from '@utils/index';
import Cookies from 'js-cookie';



const getToken = () => {
    if (Cookies.get('jwt')) {
        return Cookies.get('jwt')
    } else {
        console.log('error get token');
        return ''
    }
}


const App = () => {
    const { auth, userData } = useTypeSelector(state => state.auth)
    const { contacts } = useTypeSelector(state => state.contacts)
    const { authUser, getContacts } = useActions()

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            authUser(data)
            getContacts(data)
        } 
    }, [])
  

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