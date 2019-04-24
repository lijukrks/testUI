import React from 'react'
import {Component} from 'react'
import { LoginApi } from '../../services/LoginApi';
import { Link } from 'react-router-dom';


class Login extends Component{

constructor(props){
    super(props);
    this.state={
        loginData:{
            values:{
                username:'',
                password:''
            },
            redirect:false
        }
    }
    this.onSuccessLogin=this.onSuccessLogin.bind(this);
     this.handleLogin=this.handleLogin.bind(this);
}

onSuccessLogin(e){
    //alert("insde succeelogin--");
    console.log("data",this.state);
    let loginData=this.state.loginData
    let value = e.target.value;
    let name = e.target.name;
    loginData.values[name] = value;
    this.setState(
      {
        loginData
      });
}

handleLogin(e) {
    e.preventDefault();
    console.log("gfhjk",this.state.loginData);
     LoginApi(this.state.loginData.values).then((result)=>{
      let responseJson=result;
      console.log("responseJson",responseJson);
      if(responseJson.accessToken){
          alert("token");
          sessionStorage.setItem("userData",responseJson);
          let loginData=this.state.loginData
           loginData.redirect=true;
        this.setState({loginData});
        
      }

      console.log("result",responseJson);
     })

  }


render(){
    console.log("routw",this.state.loginData.redirect);
    if(this.state.loginData.redirect){
        console.log("success roure");
       return(  <Link to="/login" className="btn btn-link">Login</Link>)
    }

return(
      
      <div name="login_form" className="col-md-6 col-md-offset-3">
      <h3>Login</h3>
      <form onSubmit={this.handleLogin}>
        <div className="input_field">
        <input className="form_control"
       name="username" type="email" placeholder="enter username" onChange={this.onSuccessLogin}>
       </input> <br/> <br/>
        </div>
        <div className="input_field">
        <input className="form_control"
       name="password" type="password" placeholder="Enter Password" onChange={this.onSuccessLogin}>
       </input><br/><br/>
        </div>
        <button className="btn-btn-primary"
       name="login" >Login</button>
                               <Link to="/register" className="btn btn-link">register</Link>

      </form>
          
</div>
    
  
)
}

}

export default Login;