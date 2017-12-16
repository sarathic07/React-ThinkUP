import React from "react";

export default class AddTodo extends React.Component {
    constructor(props){
        super(props);
    }
    onAdd(){
        let text = this.refs.todoText.value;
        this.props.addTodos(text);
        this.refs.todoText.value = "";
    }
    render(){
        return(
            <div>
                <input ref="todoText" type="text" className="form-control" style={{width: "70%", display: "inline-block"}}/>
                <button onClick={this.onAdd.bind(this)} className="btn btn-primary" style={{float: "right", padding: "7px 28px"}}> Add </button>
            </div>
        )
    }
}