import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HOME_PATH, LOGIN_PATH} from "./Enums/PathNames";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import AnonymousWrapper from "./AnonymousWrapper";
import AuthenticatedWrapper from "./AuthenticatedWrapper";

class AppRouter extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {};

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={LOGIN_PATH}>
                        <AnonymousWrapper>
                            <Layout>
                                <LoginPage/>
                            </Layout>
                        </AnonymousWrapper>
                    </Route>
                    <Route exact path={HOME_PATH}>
                        <AuthenticatedWrapper>
                            <Layout showLogoutButton>
                                <HomePage/>
                            </Layout>
                        </AuthenticatedWrapper>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
