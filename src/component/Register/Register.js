import React from 'react';
import { Link } from 'react-router-dom';
import {RegisterApi} from '../../services/RegisterApi'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registerData: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { registerData } = this.state;
        this.setState({
            registerData: {
                ...registerData,
                [name]: value
            }
        });
    }

    handleSubmit(event) {

        console.log(this.props);
        event.preventDefault();
        this.props.registerUser(this.state.registerData);
    console.log("gfhjk",this.state.registerData);
     
    
     
    

       
    }

    render() {

      
        return (
            <div>
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"  name="firstName" placeholder="Enter First Name"  onChange={this.handleChange} />
                        
                    </div>
                    <br/>
                    <div>
                        <input type="text"  placeholder="Enter Last Name" name="lastName"  onChange={this.handleChange} />
                        
                    </div>
                    <br/>
                    <div>
                        <input type="email" className="form-control" name="username" placeholder="Enter Username" onChange={this.handleChange} />
                        
                    </div>
                    <br/>
                
                    <div>
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                       
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}



export default Register;