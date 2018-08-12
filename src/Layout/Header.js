import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar} from "react-bootstrap";
import {connect} from "react-redux";
import {login, logout} from "../Actions/userActions";

class Header extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    logout = () => {
        localStorage.removeItem("isAuthenticated");
        this.props.logout();
    }

    render() {
        return (
            <Navbar id="top-nav-bar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Awesome Sales Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                {this.props.showLogoutButton && <Navbar.Collapse>
                    <Navbar.Text pullRight>
                        <Navbar.Text>
                            <Navbar.Link href="" onClick={this.logout}
                                         className={'logout-btn'}>Logout</Navbar.Link>
                        </Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>}

            </Navbar>
        );
    }
}


export default connect(null, dispatch => ({
    logout: () => dispatch(logout())
}))(Header);
