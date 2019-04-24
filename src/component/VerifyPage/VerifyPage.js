import React from 'react';
import { Link,Redirect } from 'react-router-dom';

class VerifyPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.props.verifyFormChange(event);
    }

    handleSubmit() {
        if (this.props.location.search) {
            this.props.verifyAction(this.generateRequestBody())
        }
    }

    generateRequestBody(){
        return {   
            "code": this.props.verifyPageReducer.code,
            "username":this.props.location.search.split("?username=")[1],
        }
    }

    render() {

        if(this.props.verifyPageReducer.verificationResponse&&this.props.verifyPageReducer.verificationResponse.code == "userVerificationSuccess"){
            return (
                <Redirect
                  to="/login"
                />
              );
        }
      
        return (
            <div>
                <h2>Register</h2>
                    <div>
                        <input type="text"  name="code" placeholder="enter code"  onChange={this.handleInputChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                    </div>
            </div>
        );
    }
}



export default VerifyPage;