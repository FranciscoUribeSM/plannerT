import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import PlanContent from './PlanContent'
import './PanelList.css';

const ListasAux=[
    {
        'Name':'Universidad',
        'Task':['Tarea1', 'Trabajo 2', 'Ejemplo 3']
    },    
    {
        'Name':'Trabajo',
        'Task':['Tarea1', 'Trabajo 2', 'Ejemplo 3']
    }
]

class PanelPlans extends Component {
    constructor(){
        super(); 

        this.state={
            ListSelect:'Universidad'
        }
    }

    OpenList = (name) =>{
        if(!this.state.isOpen){
            this.setState({
                ListSelect: name,
                isOpen:true
               })
        }else{
            this.setState({
                ListSelect: name,
                isOpen:false
               })
        }

    }

    renderList(ListasAux){
        const RenderListas = ListasAux.map((nameList,index) => {
            if(this.state.ListSelect===nameList.Name){
               return <PlanContent Tasks={nameList.Task} OpenList={this.OpenList} stateClass={'Plan-Active'} ListName={nameList.Name} key={index}/>
            }
            return <PlanContent Tasks={nameList.Task} OpenList={this.OpenList} stateClass={'Plan-In-Active'}  ListName={nameList.Name} key={index}/>
         
        })
  
        return RenderListas; 
    }

    render() {
        return (
            <div>
                <div className="List-Head">
                <i className="List-Head-Icon material-icons">add_circle_outline</i>
                
                </div>
                <div className="List-Body">
                    {this.renderList(ListasAux)}

                </div>
                <div className="List-Footer">
                    GroupTask
                </div>
            </div>
        );
    }
}

// PanelPlans.propTypes = {

// };

export default PanelPlans;