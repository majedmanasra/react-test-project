import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {HOME_PATH} from "./Enums/PathNames";
import {Redirect} from "react-router-dom";

class AnonymousWrapper extends Component {
    static defaultProps = {};

    static propTypes = {};
    state = {};

    componentWillReceiveProps(nextProps) {
        console.log("this.props.isAuthenticated", this.props.isAuthenticated);
        console.log("nextProps.isAuthenticated", nextProps.isAuthenticated);
    }

    render() {
        if(!this.props.isAuthenticated) {
            return this.props.children;
        }

        return <Redirect to="/"/>
    }}
export default connect(state => ({
    isAuthenticated: state.user.isAuthenticated
}))(AnonymousWrapper);