import React from 'react';
//import {ReactComponent as Logo} from '../images/electric-vehicle-charging.webp';
import MyImage from '../images/ev-2.jpg';
import './login.css';
class Login extends React.Component { 
    state={
        email:'', 
        pwd:''
    }
    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    render() { 

        return (
            <div className="div-login">
                <div className='div-login-logo' >
                    <img src={MyImage} alt="Logo" style={{width:250, height:200}} />
                </div>
                <div>
                <form onSubmit={this.handleSubmit}>
                    Username or Email: <input type = "email" name = "email" placeholder = "email..." required/>
                    <br/>
                    Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type = "password" name = "pwd" placeholder = "password..." required/>
                    <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;