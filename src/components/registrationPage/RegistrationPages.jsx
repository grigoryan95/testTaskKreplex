import React, {useState} from 'react';
import './RegistrationPages.css';
import {useDispatch} from "react-redux";
import {setUserData} from "../../redux/actions/setUserData/setUserData";
import {setValidRegister} from "../../redux/actions/setValidRegister/setValidRegister";

const RegistrationPages = () => {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validFullName, setValidFullName] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setUserData({
            fullName,
            email,
            password
        }));
        dispatch(setValidRegister());
        setFullName('');
        setEmail('');
        setPassword('');
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,2})+$/;
        setValidEmail(emailRegex.test(email));
    };

    const handleFullName = e => {
        setFullName(e.target.value);
        const fullNameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        setValidFullName(fullNameRegex.test(fullName));
    };

    const handlePassword = e => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setValidPassword(passwordRegex.test(password));
    };

    return (
        <div className='registrationPages'>
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>

                <label htmlFor="name"><b>Full Name</b></label> <br/>
                {validFullName ? null : <p className='errorColor'>Write Valid Full Name </p>}
                <input
                    onChange={handleFullName}
                    value={fullName}
                    type="text"
                    placeholder="Enter Full Name"
                    id="name"
                /><br/>

                <label htmlFor="email"><b>Email</b></label><br/>
                {validEmail ? null : <p className='errorColor'>Write Valid Email </p>}
                <input
                    onChange={handleEmailChange}
                    value={email} type="email"
                    placeholder="Enter Email"
                    id="email"
                /><br/>

                <label htmlFor="psw"><b>Password</b></label> <br/>
                {validPassword ? null : <p className='errorColor'>Write Valid Password </p>}
                <input
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    id="psw"
                /><br/>

                <button
                    className="registerBtn"
                    disabled={!(validFullName && validPassword && setValidEmail &&  email && password && fullName) }
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationPages;