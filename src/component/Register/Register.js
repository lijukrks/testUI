import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.props.registerFormChange(event);
    }

    handleSubmit() {
        this.props.registerAction(this.generateRegisterRequestBody())
    }

    generateRegisterRequestBody() {
        return {
            "firstName": this.props.registerPageReducer.firstName,
            "lastName": this.props.registerPageReducer.lastName,
            "username": this.props.registerPageReducer.username,
            "password": this.props.registerPageReducer.password
        }
    }

    render() {

        if (this.props.registerPageReducer.registrationResponse && this.props.registerPageReducer.registrationResponse.code == "userRegistrationSuccess") {
            debugger
            return (
                <Redirect
                    from="/verify"
                    to={`verify?username=${this.props.registerPageReducer.registrationResponse.data.username}`}
                />
            );
        }

        return (
            <div className="register-warpper">
                <div className="register-warpper__content">
                    <h3>Register</h3>
                    <ul className="register-warpper__content--list">
                        <li><input type="text" className="form-control" name="firstName" placeholder="Enter First Name" onChange={this.handleInputChange} /></li>
                        <li><input type="text" className="form-control" placeholder="Enter Last Name" name="lastName" onChange={this.handleInputChange} /></li>
                        <li><input type="email" className="form-control" name="username" placeholder="Enter Username" onChange={this.handleInputChange} /></li>
                        <li><input type="password" className="form-control" name="password" placeholder="Enter Password" onChange={this.handleInputChange} /></li>
                        <li>
                            <span><button className="btn btn-primary" onClick={this.handleSubmit}>Register</button></span>
                            <span><Link to="/login" className="btn btn-link">Login</Link></span></li>
                    </ul>
                </div>
            </div>
        );
    }
}



export default Register;