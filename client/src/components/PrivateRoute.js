import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const userIsAuthenticated = () => {
    return localStorage.getItem('token') !== null;
}

const PrivateRoute = ({component: Component, ...props}) => {
    return (
        <Route 
            {...props} 
            render={() => {
                if (userIsAuthenticated()) {
                    return <Component />;
                } 
                return <Redirect to='/' />}
            }
        />
    )
}

export default PrivateRoute;