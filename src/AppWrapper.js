import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login, logout} from "./Actions/userActions";

class AppWrapper extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {};

    componentWillMount() {
        if (localStorage.getItem("isAuthenticated") === "1") {
            this.props.login()
        }
        else {
            this.props.logout();
        }
    }

    render() {
        return this.props.children;
    }
}

export default connect(null, dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
}))(AppWrapper);