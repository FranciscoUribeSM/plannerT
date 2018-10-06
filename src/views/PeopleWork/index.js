import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderWork from './HeaderWork'; 
import BodyWork from './BodyWork'; 
import PanelWork from './PanelWork/'; 
import {Redirect} from 'react-router-dom'
import './styles.css'

class PeopleWork extends Component {
    constructor(){
        super(); 

        this.state ={
            profileImage: '',
            fullName: '',
            isLogout: false
          }
      
          this.onLogout = this.onLogout.bind(this); 

    }
    componentDidMount(){
 
        let fbData = JSON.parse(localStorage.getItem('fbData')); 
        let googleData = JSON.parse(localStorage.getItem('googleData')); 
  
        if(!fbData && !googleData){
          this.setState({
            isLogout: true
          })
        }
        if(fbData){
          this.setState({
            profileImage: fbData.picture, 
            fullName: fbData.name
          })
        }else if(googleData){
          this.setState({
            profileImage: googleData.picture, 
            fullName: googleData.name
          })
        }
  
    }

    onLogout(e){
        localStorage.clear(); 
        this.setState({
          isLogout: true
        })
      }


    render() {
        if(this.state.isLogout){
            return (<Redirect to="/" />); 
        }
    

        return (
            <div>
                <HeaderWork Logout={this.onLogout} profileImage={this.state.profileImage}/>
                <div className='Content-Panel-Body'>
                    <PanelWork/>
                    <BodyWork/>
                </div>
            </div>
        );
    }
}

PeopleWork.PeopleWork = {

};

export default PeopleWork;