import {LOAD_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_ALL} from "../constants";
import request from "superagent";

export function loadAllTodos(){
    return function(dispatch){
        request
            .get("gettodo")
            .set('accept-language', 'en-US,en;q=0.8')
            .set('accept', 'application/json')
            .send()
            .end((err, res) => {
                if(!err){
                    dispatch({type: LOAD_TODO, payload: res.body});
                }
            })

    }
}

export function addTodos(text){
    return function(dispatch){
        request
            .post("addtodo")
            .set('accept-language', 'en-US,en;q=0.8')
            .set('accept', 'application/json')
            .send({text: text, completed: false, id: Math.random()})
            .end((err, res) => {
                if(!err){
                    dispatch({type: ADD_TODO, payload: res.body[0]});
                }
            })
    }
}

export function completeTodo(id){
    return function(dispatch){
        request
            .put("completetodo")
            .set('accept-language', 'en-US,en;q=0.8')
            .set('accept', 'application/json')
            .send({completed: true, id: id})
            .end((err, res) => {
                if(!err){
                    dispatch({type: COMPLETE_TODO, payload: id})
                }
            })
    }
}

export function deleteTodo(id){
    return function(dispatch){
        request.delete("deletetodo")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send({id})
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:DELETE_TODO, payload: id});
                    }
                })
    }
}

export function clearAll(){
    return function(dispatch){
        request.delete("deletetodo")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send({})
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:CLEAR_ALL});
                    }
                })
    }
}