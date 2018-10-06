import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

class HeaderWork extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="Header-Content">
                    <div className='Header-Right-Title' >
                        <button className="btn-work">Social</button>
                    </div>
                    <div className='Header-Central-Title'>
                        <i className="Header-Title-Icon material-icons">dashboard</i>
                        <span className="Header-Title-Text">My WorkSpace</span>
                    </div>
                    <div className='Header-Left-Title'> 
                    <i className=" material-icons">settings</i>
                    <i className="material-icons">notifications</i>
                        <img onClick={this.props.Logout} className="Header-Avatar-Img" src={this.props.profileImage} atl="Perfil" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

HeaderWork.propTypes = {

};

export default HeaderWork;