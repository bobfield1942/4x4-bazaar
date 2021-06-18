import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout, selectUser } from './userSlice'


function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


    return (
        <div>
            {user ? <h4>{user}</h4> : <h4>Please Sign In</h4>}
            <button onClick={() => dispatch(setUser({user:"Brett Dalldorf"}))}>Log Me in</button>
            <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
}

export default Login
