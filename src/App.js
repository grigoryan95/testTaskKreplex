import React from 'react'
import './App.css';
import RegistrationPages from "./components/registrationPage/RegistrationPages";
import {useSelector} from "react-redux";
import LoginPage from "./components/loginPage/LoginPage";
import MainPageUsers from "./components/mainPageUsers/MainPageUsers";


function App() {

    const validRegister = useSelector(data => data.registerAndLogin.validRegistration)
    const validLogin = useSelector(data => data.registerAndLogin.validLogin)
    const newPage = useSelector(data => data.registerAndLogin.newPage)

    return (
            <div>
                {validRegister ? <RegistrationPages/>: null}
                {validLogin ? <LoginPage/> : null}
                {newPage ? <MainPageUsers/> : null}
                {/*<MainPageUsers/>*/}
            </div>
    );
}

export default App;
