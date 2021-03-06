import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('auth_token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/site-login', state: { from: props.location } }} />
    )} />
)
