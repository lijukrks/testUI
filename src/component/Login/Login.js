import React from 'react'
import {Component} from 'react'
import { Link } from 'react-router-dom';


class Login extends Component{

constructor(props){
    super(props);
    this.onInputChange=this.onInputChange.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
}

onInputChange(event){
    this.props.loginFormChange(event)
}

handleLogin(e) {
     this.props.loginAction(this.generateLoginRequestBody())
}

generateLoginRequestBody(){
    return {
        username:this.props.loginPageReducer.username,
        password:this.props.loginPageReducer.password
    }
}

render(){
    let token = localStorage.getItem("idToken");
    if (token) {
      window.location.href = "/home"
    }

    return(
            <div name="login_form" className="col-md-6 col-md-offset-3">
                <h3>Login</h3>
                <div className="input_field">
                    <input 
                        className="form_control"
                        name="username" 
                        type="email" 
                        placeholder="Username" 
                        onChange={this.onInputChange}/>
                    <br/> <br/>
                </div>
                <div className="input_field">
                    <input 
                        className="form_control"
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.onInputChange}/>
                    <br/><br/>
                </div>
                <button 
                    className="btn-btn-primary"
                    name="login" 
                    onClick={this.handleLogin}>
                        Login
                </button>
                <Link to="/register" className="btn btn-link">register</Link>
                <Link to="/forgot" className="btn btn-link">Forgot Password</Link>

            </div>
        )
    }

}

export default Login;