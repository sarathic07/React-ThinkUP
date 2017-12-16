import {LOAD_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_ALL} from "../constants";

export function loadAllTodos(){
    return({type: LOAD_TODO});
}

export function addTodos(text){
    return({type: ADD_TODO, payload: text});
}

export function completeTodo(id){
    return({type: COMPLETE_TODO, payload: id})
}

export function deleteTodo(id){
    return({type:DELETE_TODO, payload: id});
}

export function clearAll(){
    return({type:CLEAR_ALL});
}