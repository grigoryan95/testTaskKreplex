import React from 'react';
import './App.css';
import RegistrationPages from "./components/registrationPage/RegistrationPages";
import {useSelector} from "react-redux";
import LoginPage from "./components/loginPage/LoginPage";
import MainPageProducts from "./components/mainPageUsers/MainPageProducts";


function App() {

    const validRegister = useSelector(data => data.registerAndLogin.validRegistration);
    const validLogin = useSelector(data => data.registerAndLogin.validLogin);
    const newPage = useSelector(data => data.registerAndLogin.newPage);

    return (
            <div>
                {validRegister ? <RegistrationPages/>: null}
                {validLogin ? <LoginPage/> : null}
                {newPage ? <MainPageProducts/> : null}
            </div>
    );
}

export default App;
