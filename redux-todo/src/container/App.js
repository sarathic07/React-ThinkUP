import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoAction from "../actions/todoAction";
import * as filterAction from "../actions/filterActions";
import AddTodo from "../components/AddTodo"
import ListTodo from "../components/ListTodo"
import FilterTodo from "../components/FilterTodo"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.todoAction.loadAllTodos();
    }
    
    render() {
        let todo = [];
        if(this.props.filter.active){
            todo = this.props.todo.filter((data) => !data.completed)
        }else if(this.props.filter.inActive){
            todo = this.props.todo.filter((data) => data.completed)
        }else{
            todo = this.props.todo;
        }
        return (
            <div className="container" style={{width :"70%", marginTop: "10em", padding: "20px", border: "1px solid gainsboro", boxShadow: "5px 10px 18px #888888"}}>
                <AddTodo addTodos={this.props.todoAction.addTodos}/>
                <ListTodo todos={todo} completeTodo={this.props.todoAction.completeTodo} deleteTodo={this.props.todoAction.deleteTodo}/>
                <FilterTodo filter={this.props.filter} todos={todo} filterAction={this.props.filterAction} clearAll={this.props.todoAction.clearAll}/>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo,
        filter: state.filter
    };
}


function mapDispatchToProps(dispatch) {
    return {
        todoAction: bindActionCreators(todoAction, dispatch),
        filterAction: bindActionCreators(filterAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);