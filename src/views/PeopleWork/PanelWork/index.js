import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './styles.css'; 
import PanelPlans from './PanelPlans'; 
import PanelSocial from './PanelSocial'

class PanelWork extends Component {
    constructor(){
        super();
        this.state={
            ClassList: 'Panel-Switch-Option Panel-Option-Active',
            ClassFriend: 'Panel-Switch-Option',
            OptionMark:'List' 
        }
    }

    handlerSwitch(OptionPress){
        if(OptionPress ==='List'){
            this.setState({
                ClassList: 'Panel-Switch-Option Panel-Option-Active',
                ClassFriend: 'Panel-Switch-Option',
                OptionMark:'List'
            })
        }else{
            this.setState({
                ClassList: 'Panel-Switch-Option ',
                ClassFriend: 'Panel-Switch-Option Panel-Option-Active',
                OptionMark:'Friend'
            })
        }
    }
    render() {
        return (
            <div>
                <div className="Panel-Content">
                    <div className="Panel-Switch">
                         <div className={this.state.ClassList} onClick={() => this.handlerSwitch('List')}>
                            Plans
                         </div>
                         <div className={this.state.ClassFriend} onClick={() =>this.handlerSwitch('Friend')}>
                            Friends                
                           <i className=" icon-notific-friends material-icons">notifications</i>
                         </div>
                    </div>
                    <div className="Panel-Body">
                    {
                        this.state.OptionMark=== 'Friend'?
                            <PanelSocial/>: 
                            <PanelPlans/>
                    }
                  
                    </div>
                </div>
            </div>
        );
    }
}

// PanelWork.propTypes = {

// };

export default PanelWork;