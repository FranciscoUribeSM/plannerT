import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ListContent from './ListContent'; 
import './PanelList.css'; 


class PlanContent extends Component {
    
    renderList = (List) => {
        var ListRender= List.map((lista, index) =>{
            console.log(lista)
            return <ListContent key={index} ListTitle={lista} />
    
        })
        if(List.length === 0){
            ListRender =<p>Without List</p>; 
        }
        console.log(List)
        return ListRender; 
    }
    render() {
        const {ListName, OpenList, stateClass, Tasks} = this.props; 
        return (
            <div>
                <div onClick={() => OpenList(ListName)} className="Plan-Content">
                    <div className="Plan-Title">
                        <i className={`Plan-Icon-Arrow material-icons ${stateClass}`}>play_arrow</i>
                        <span className="asd ">{ListName}</span>
                    </div>  
                    
                </div>
                {stateClass==='Plan-Active' ?
                    <div className="Panel-One-Plan">{this.renderList(Tasks)}</div>:
                    <div></div>
                }

            </div>
        );
    }
}

// PlanContent.propTypes = {

// };

export default PlanContent;