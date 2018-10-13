import React, { Component } from 'react';
import HeaderWork from './HeaderWork'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';  
import BodyWork from './BodyWork'; 
import PanelWork from './PanelWork/'; 
import {getUser} from './../../actions'
import {Redirect} from 'react-router-dom'; 
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
      this.props.getUser(); 
      console.log(this.props)
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

// PeopleWork.PeopleWork = {

// };
const mapStateToProps = (state)=> {
  console.log(state)
  return {
  //    router: state.routes,
     lists: state.getUser
  }
}
 
const mapDispatchToProps= (dispatch) => {
     return bindActionCreators({
      getUser
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleWork)

