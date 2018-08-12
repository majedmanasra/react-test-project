import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";

class Layout extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className="container">
                <Header showLogoutButton={this.props.showLogoutButton}/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
