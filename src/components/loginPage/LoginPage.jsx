import React, {useState} from 'react';
import './LoginPage.css';
import {useDispatch, useSelector} from "react-redux";
import {setValidLogin} from "../../redux/actions/setValidLogin/setValidLogin";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userDataObj = useSelector(data => data.registerAndLogin.userDataObj);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userDataObj.email === email && userDataObj.password === password) {
            dispatch(setValidLogin());
        } else {
            setErrorMessage(true);
        }
    };

    return (
        <div className='loginPage'>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <label htmlFor="email"><b>Email</b></label><br/>
                {errorMessage ? <p className='errorColor'>Please enter correct data</p> : null}
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                /><br/>

                <label htmlFor="psw"><b>Password</b></label> <br/>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password"
                    id="psw"
                /><br/>

                <button
                    className="loginBtn"
                    disabled={!(email && password)}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;