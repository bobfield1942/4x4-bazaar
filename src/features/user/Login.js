import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout, selectUser } from './userSlice'


function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

const loginToApp = () => 
{
    dispatch(setUser({user:"Brett Dalldorf"}))
}

    return (
        <div>
            <h2>I am the login component</h2>
            {user ? <h2>The user is {user}</h2> : <h2>NOBODY is signed in</h2>}
            <button onClick={loginToApp}>Log Me in</button>
            <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
}

export default Login
