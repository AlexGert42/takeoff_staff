import stls from '@styles/components/layout/App.module.sass'
import { Route, Routes } from "react-router-dom";
import { PagesLogin, PagesProfile } from "@components/pages"
import { Footer, Header, Owerlay } from "@components/layout";
import { useEffect } from 'react';
import { useActions, useTypeSelector } from '@utils/index';


const App = () => {
    const { auth } = useTypeSelector(state => state.auth)
    const { authUser } = useActions()

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            authUser(data)
        } 
    }, [auth])
  

    return (
        <div className={stls.container}>
            <Owerlay />
            <Header />
            <Routes>
                <Route path="/" element={<PagesProfile classNames={[stls.fonePicture]} />} />
                <Route path="/login" element={<PagesLogin classNames={[stls.fonePicture]} />} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App