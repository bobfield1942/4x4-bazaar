import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout, selectUser } from './userSlice'


function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


    return (
        <div>
            <h4>Login</h4>
            {user ? <h4>The user is {user}</h4> : <h4>NOBODY is signed in</h4>}
            <button onClick={() => dispatch(setUser({user:"Brett Dalldorf"}))}>Log Me in</button>
            <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
}

export default Login
