import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import LoginForm from './LoginForm'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';  
import {login} from './../../actions'
import 'materialize-css/dist/css/materialize.min.css'; 
import './index.css'; 
// 242978434148-kccls9ln8mhmquur37d0ra7p5pd9nl53.apps.googleusercontent.com
class Login extends Component {
    constructor(){
        super(); 

        this.state={
            isLogged: false,

        }

        this.responseFacebook = this.responseFacebook.bind(this); 
        this.onFailure = this.onFailure.bind(this); 
        this.responseGoogle = this.responseGoogle.bind(this); 
    }

    responseFacebook(response){
       localStorage.setItem("fbData", JSON.stringify({
           token: response.accessToken,
           email: response.email,
           name: response.name,
           picture: response.picture.data.url,
           social: 'fb'
       })); 

       this.setState({
           isLogged: true,
       })
        let usuario={
            nombre:response.name,
            email:response.email,
            password:'123'
        }
        this.props.login(usuario); 
    }
    onFailure(err){
        console.log(err);
    }
    responseGoogle(response){
        localStorage.setItem("googleData", JSON.stringify({
            token: response.accessToken,
            email: response.profileObj.email,
            name: response.profileObj.name,
            picture: response.profileObj.imageUrl,
            social: 'google'
        }))
        this.setState({isLogged: true})
        let usuario={
            nombre:response.profileObj.name,
            correo:response.profileObj.email,
            password:'123'
        }
        this.props.login(usuario); 
        // console.log(response)
    }

    componentWillMount(){
        if(localStorage.getItem("fbData") || localStorage.getItem("googleData")){
            this.setState({
                isLogged:true
            })
        }
    }

    render() {
        if(this.state.isLogged){
            return(<Redirect to="/working"/>); 
        }
        return (
            <div className="Login">
                <div className="Login-box">
                    <div className="card">
                        <div className="card-content">
                        <FacebookLogin
                            appId="697406327288401"
                            autoload={ false }
                            fields= "name, email, picture.width(120)"
                            callback={this.responseFacebook }
                            onFailure= {this.onFailure}
                            textButton="Facebook"
                            cssClass=" Login-Button-Social waves-effect waves-light btn blue darken-3"
                            icon="fab fa-facebook-f"
                        />
                        ó
                            <br/>
                            
                            <GoogleLogin 
                                clientId="242978434148-1pgbntqcqa7d3qa819dbsfmsu215fdfu.apps.googleusercontent.com"
                                autoload={ false }
                                onSuccess= { this.responseGoogle }
                                onFailure= { this.onFailure }
                                className=" Login-Button-Social waves-effect waves-light btn red darken-1"
                            >  
                             <i className="fab fa-google"></i>
                             <span>Google</span>
                            </GoogleLogin>
                            <LoginForm/>
                          
                        </div>
                    </div>
                </div>
                <a className="Login-Menu btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>

            </div>
            
        );
    }
}

// Login.propTypes = {

// };

const mapStateToProps = (state)=> {
  
    return {
    //    router: state.routes,
    //    songs: state.login
    }
}
   
const mapDispatchToProps= (dispatch) => {
       return bindActionCreators({
        login
       }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);