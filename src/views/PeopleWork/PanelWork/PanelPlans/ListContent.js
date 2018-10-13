import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './PanelList.css'; 
class Listcontent extends Component {
    // constructor(props){
    //     super(props); 
    // }
    render() {
        return (
            <div>
                <div className="List-Content">
                    <span className="List-Text">{this.props.ListTitle}</span>
                    <i className="List-Option material-icons">more_vert</i>
                </div>
            </div>
        );
    }
}

// Listcontent.propTypes = {

// };

export default Listcontent;