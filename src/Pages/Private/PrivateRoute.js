import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
const {users, isLoad} = useAuth();

if(isLoad) {
    return <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
}
    return (
        <Route
        {...rest}
        render = {({ location }) => users.displayName ? children : <Redirect
        
        to = {{
            pathname : "/login",
            state : {from : location}

        }}
        
        ></Redirect>} 
        >
            
        </Route>
    );
};

export default PrivateRoute;