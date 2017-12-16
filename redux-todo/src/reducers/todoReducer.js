import {LOAD_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_ALL} from "../constants";

let initialState = [];

export default function todoReducer(state=initialState, action){
    switch(action.type){
        case LOAD_TODO:
            return action.payload;
        case ADD_TODO:
            let data = {
                text: action.payload.text,
                completed: action.payload.completed,
                id: action.payload.id
            }
            return [data, ...state];
        case COMPLETE_TODO:
            return state.map((todo)=>{
                if(todo.id == action.payload){
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: true
                    }
                }else{
                    return todo;
                }
            })
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload)
        case CLEAR_ALL:
            return [];
        default:
            return state;
    }
}