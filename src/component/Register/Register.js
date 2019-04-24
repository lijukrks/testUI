import React from 'react';
import { Link,Redirect } from 'react-router-dom';

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

    generateRegisterRequestBody(){
        return {   
            "firstName": this.props.registerPageReducer.firstName,
            "lastName" : this.props.registerPageReducer.lastName,
            "username":this.props.registerPageReducer.username,
            "password" :this.props.registerPageReducer.password
        }
    }

    render() {

        if(this.props.registerPageReducer.registrationResponse&&this.props.registerPageReducer.registrationResponse.code == "userRegistrationSuccess"){
            debugger
            return (
                <Redirect
                  from="/verify"
                  to={`verify?username=${this.props.registerPageReducer.registrationResponse.data.username}`}
                />
              );
        }
      
        return (
            <div>
                <h2>Register</h2>
                    <div>
                        <input type="text"  name="firstName" placeholder="Enter First Name"  onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div>
                        <input type="text"  placeholder="Enter Last Name" name="lastName"  onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div>
                        <input type="email" className="form-control" name="username" placeholder="Enter Username" onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                
                    <div>
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" onChange={this.handleInputChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                       
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
            </div>
        );
    }
}



export default Register;