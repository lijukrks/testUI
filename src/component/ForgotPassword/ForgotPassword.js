import React from 'react';
import { Link,Redirect } from 'react-router-dom';

class VerifyPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        console.log("input",event);
        this.props.forgotPasswordFormChange(event);
    }

    handleSubmit() {
        debugger
            this.props.forgotPasswordAction(this.generateRequestBody());    
        
    }

    generateRequestBody(){
        return {  

            "username": this.props.forgotPasswordPageReducer.username,
        }
    }

    render() {

        if(this.props.forgotPasswordPageReducer.forgotPasswordResponse&&this.props.forgotPasswordPageReducer.forgotPasswordResponse.code == "sendResetCodeSuccess"){
           debugger
            return (
                <Redirect
                  from="/resetPassword"
                  to={`resetPassword?username=${this.props.forgotPasswordPageReducer.username}`}
                />
              );
        }
      
        return (
            <div>
                <h2>Register</h2>
                    <div>
                        <input type="email"  name="username" placeholder="Username"  onChange={this.handleInputChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Reset Password</button>
                    </div>
            </div>
        );
    }
}



export default VerifyPage;