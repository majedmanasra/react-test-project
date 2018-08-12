import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../Forms/LoginForm";
import {SubmissionError} from "redux-form";
import {LOGIN_EMAIL, LOGIN_PASS} from "../utils/loginInfo";
import {connect} from "react-redux";
import {login} from "../Actions/userActions";

class LoginPage extends Component {
    static defaultProps = {};
    static propTypes = {};

    login = (values) => {
        if(values.email === LOGIN_EMAIL && values.password === LOGIN_PASS) {
            localStorage.setItem("isAuthenticated", 1)
            this.props.login();
        }
        else {
            throw new SubmissionError({
                _error: "Wrong email and/or password!"
            })
        }
    }

    render() {
        return (
            <div id="login-page">
                <h4>Please login with your Email and Password</h4>
                <LoginForm onSubmit={this.login}/>
            </div>
        );
    }
}

export default connect(null, dispatch => ({
    login: () => dispatch(login())
}))(LoginPage);