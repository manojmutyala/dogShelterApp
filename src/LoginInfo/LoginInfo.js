import React from 'react';

const LoginInfo = (props) => {
    return <span style={{color: "#fff"}}>Hi, {props.username.toUpperCase()}</span>
}

export default LoginInfo;
