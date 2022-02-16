import React from 'react';
import {useSelector} from "react-redux";
import './UserName.css';

const UserName = () => {
    const userFullName = useSelector(data => data.registerAndLogin.userDataObj.fullName);
    return (
        <>
            <p className='userNameJSX'>User Name : {userFullName}</p>
        </>
    );
};

export default UserName;