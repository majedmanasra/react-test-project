import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Alert, Button, Col, ControlLabel, FormControl, FormGroup, Row} from "react-bootstrap";
import {required, validEmail} from "../utils/validators";


const RenderTextField = ({required, input, matchError, label, validationid, placeholder, className, type, name, meta: {touched, error}}) => (
    <FormGroup>
        <Col md={1}>{label}</Col>
        <Col md={4}>
            <FormControl className={className} type={type} placeholder={placeholder} {...input}/>
            {touched && error && <span className="error-field">{error}</span>}
        </Col>
    </FormGroup>
)

const LoginForm = props => {
    const {handleSubmit, error} = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <Row>
                <Col md={12}>
                    {error && <Alert bsStyle="danger">
                        {error}
                    </Alert>}
                </Col>
            </Row>
            <div>
                <Field name="email" component={RenderTextField}
                       placeholder="Email"
                       label="Email"
                       validate={[required, validEmail]}/>
                <Field name="password" component={RenderTextField} type="password"
                       placeholder="Password"
                       label="Password"
                       validate={[required]}/>
                <Row>
                    <Col md={4}>
                        <Button type="submit">Login</Button>
                    </Col>
                </Row>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'login'
})(LoginForm)