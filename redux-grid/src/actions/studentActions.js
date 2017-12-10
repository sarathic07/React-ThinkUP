import request from "superagent";

import {
    ADD_STUD,
    GET_STUD,
    EDIT_STUD,
    DELETE_STUD,
    ERROR
} from "../constants"

export function GetStudent(){
    return function(dispatch){
        request.get("/getstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send()
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:GET_STUD, payload: res.body});
                    }else{
                        dispatch({type:ERROR, payload: err});
                    }
                })
    }

}
export function AddStudent(data){
    return function(dispatch){
        request.post("/addstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send(data)
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:ADD_STUD, payload: res.body[0]});
                    }else{
                        dispatch({type:ERROR, payload: err});
                    }
                })
    }
}
export function EditStudent(data){
    return function(dispatch){
        request.put("/editstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send(data)
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:EDIT_STUD, payload: res.body});
                    }else{
                        dispatch({type:ERROR, payload: err});
                    }
                })
    }
}
export function DeleteStudent(data){
    return function(dispatch){
        request.delete("/deletestudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send({sid: data})
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        dispatch({type:DELETE_STUD, payload: data});
                    }else{
                        dispatch({type:ERROR, payload: err});
                    }
                })
    }
}