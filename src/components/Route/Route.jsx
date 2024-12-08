import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '~/store/reducers/store';

const Route = ({ layout: Layout, component: Component, authRequired, ...rest }) => {
    const isAuthenticated = store.getState().auth.isAuthenicated;

    return (
        <Route
            {...rest}
            render={(props) =>
                authRequired && !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            }
        />
    );
};

export default Route;
