import React from "react";

export default class ListTodo extends React.Component{
    render(){
        return(
            <div>
                <ul className="list-group" style={{marginTop: "20px"}}>
                {this.props.todos.map((todo) => {
                    return (
                        <li key={todo.id} className="list-group-item">
                            <span style={{display: "inline-block", width: "80%", textDecoration: todo.completed?"line-through":"none"}}>{todo.text}</span>
                            <span onClick={this.props.completeTodo.bind(this, todo.id)} style={{width: "9%", color: "green", cursor: "pointer"}} className="glyphicon glyphicon-ok"></span>
                            <span onClick={this.props.deleteTodo.bind(this, todo.id)} style={{width: "9%", color: "red", cursor: "pointer"}} className="glyphicon glyphicon-remove"></span>
                        </li>)
                })}
                </ul>
            </div>
        )
    }
}
