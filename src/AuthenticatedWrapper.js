import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {LOGIN_PATH} from "./Enums/PathNames";
import {Redirect, Route} from "react-router-dom";

class AuthenticatedWrapper extends Component {
    static defaultProps = {};

    static propTypes = {};
    state = {};

    render() {
        if(this.props.isAuthenticated) {
            return this.props.children;
        }

        return <Redirect to="/login"/>
    }
}
export default connect(state => ({
    isAuthenticated: state.user.isAuthenticated
}))(AuthenticatedWrapper);