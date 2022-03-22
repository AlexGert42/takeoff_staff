import stls from '@styles/components/layout/App.module.sass'
import { Route, Routes } from "react-router-dom";
import { PagesLogin, PagesProfile } from "@components/pages"
import { Header, Owerlay } from "@components/layout";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '@context/login/authReducer';



const App = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.auth)


    useEffect(() => {
        const data: string = localStorage.getItem('user')
        dispatch(authUser(data)) 
    }, [])

   
    return (
        <>
            <Owerlay/>
            <Header />
            <Routes>
                <Route path="/" element={<PagesProfile />} />
                <Route path="/login" element={<PagesLogin />} />
            </Routes>
        </>
    )
}

export default App