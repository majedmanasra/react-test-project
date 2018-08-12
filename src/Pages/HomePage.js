import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Label} from "react-bootstrap";
import {connect} from "react-redux";
import {login} from "../Actions/userActions";
import {addSale, cancelSale} from "../Actions/salesActions";

class HomePage extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {};

    render() {
        return (
            <div id="sales-dashboard">
                <Col md={6}>
                    <Button className="sales-control" onClick={this.props.addSale}>Add Sale</Button>
                    <Button disabled={this.props.sales === 0} className="sales-control" onClick={this.props.cancelSale}>Remove Sale</Button>
                </Col>
                <Col md={6} className="sales-counter">
                    <Label>{this.props.sales}</Label>
                </Col>
            </div>
        );
    }
}

export default connect(state => ({
    sales: state.sales.numberOfSales
}), dispatch => ({
    addSale: () => dispatch(addSale()),
    cancelSale: () => dispatch(cancelSale())
}))(HomePage);