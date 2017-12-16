import React from "react";

export default class FilterTodo extends React.Component{
    render(){
        return(
            <div>
                <span style={{margin: "5px"}}>Show:</span>
                <button style={{margin: "5px", pointerEvents: !this.props.filter.showAll? "auto": "none"}} onClick={() => this.props.filterAction.showAll()} className={this.props.filter.showAll? "btn btn-default disabled": "btn btn-default"}>All</button>
                <button style={{margin: "5px", pointerEvents: !this.props.filter.active? "auto": "none"}} onClick={() => this.props.filterAction.showActive()} className={this.props.filter.active? "btn btn-default disabled": "btn btn-default"}>Active</button>
                <button style={{margin: "5px", pointerEvents: !this.props.filter.inActive? "auto": "none"}} onClick={() => this.props.filterAction.showCompleted()} className={this.props.filter.inActive? "btn btn-default disabled": "btn btn-default"}>Completed</button>
                <button style={{margin: "5px", float: "right", pointerEvents: this.props.todos.length? "auto": "none"}} onClick={() => this.props.clearAll()} className={!this.props.todos.length? "btn btn-default disabled": "btn btn-default"}>Clear All</button>                
            </div>
        )
    }
}