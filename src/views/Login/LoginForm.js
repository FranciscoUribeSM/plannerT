import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css'; 
class LoginForm extends Component {
    render() {
       
        return (
            <div className="Login-Form-Container">
                 <div className="Login-Form-Content" >
                    <label>Correo</label>
                    <input className="Login-input" type="text"/>
                    <label>Password</label>
                    <input className="Login-input" type="password"/>
                </div> 
                <div className="Login-Content-Button">
                  <button className="Login-Button">Entrar</button>
                </div>
            
            </div>


        );
    }
}

// LoginForm.propTypes = {

// };

export default LoginForm;