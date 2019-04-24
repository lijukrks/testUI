import React from 'react';
import { Link,Redirect } from 'react-router-dom';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.props.resetPasswordFormChange(event);
    }

    handleSubmit() {
        if (this.props.location.search) {
            this.props.resetPasswordAction(this.generateRequestBody())
        }
    }

    generateRequestBody(){
        return {   
            "verificationCode": this.props.resetPasswordPageReducer.verificationCode,
            "newPassword": this.props.resetPasswordPageReducer.newPassword,
            "username":this.props.location.search.split("?username=")[1],
        }
    }

    render() {

        if(this.props.resetPasswordPageReducer.resetPasswordResponse&&resetPasswordPageReducer.resetPasswordResponse.code == "userVerificationSuccess"){
            return (
                <Redirect
                  to="/login"
                />
              );
        }
      
        return (
            <div>
                <h2>Reset Password</h2>
                    <div>
                        <input type="text"  name="verificationCode" placeholder="enter code"  onChange={this.handleInputChange} />
                        
                    </div>
                    <div>
                        <input type="password"  name="newPassword" placeholder="Password"  onChange={this.handleInputChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Confirm</button>
                    </div>
            </div>
        );
    }
}



export default ResetPassword;