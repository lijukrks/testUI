import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onInputChange(event) {
        this.props.loginFormChange(event)
    }

    handleLogin(e) {
        this.props.loginAction(this.generateLoginRequestBody())
    }

    generateLoginRequestBody() {
        return {
            username: this.props.loginPageReducer.username,
            password: this.props.loginPageReducer.password
        }
    }

    render() {
        let token = localStorage.getItem("idToken");
        if (token) {
            window.location.href = "/home"
        }

        return (
            <div name="login_form" className="login-warpper">
                <div className="login-warpper__content">
                    <h3>Login</h3>
                    <ul className="login-warpper__content--list">
                        <li>
                            <input
                                className="form-control"
                                name="username"
                                type="email"
                                placeholder="Username"
                                onChange={this.onInputChange} />
                        </li>
                        <li>
                            <input
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.onInputChange} />
                        </li>
                        <li>
                            <span>
                                <button
                                    className="btn btn-primary"
                                    name="login"
                                    onClick={this.handleLogin}>
                                    Login
                </button></span>
                            <span> <Link to="/register" className="btn btn-link">register</Link></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Login;