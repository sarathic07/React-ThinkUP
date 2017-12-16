import expect from "expect";
import todoReducer from "../../src/reducers/todoReducer"
import {LOAD_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO, CLEAR_ALL} from "../../src/constants";

describe("todo reducer test", () => {
    it("inital reducer result", ()=>{
        expect(
            todoReducer([],{type: "LOAD_TODO", payload: [{text: "my Redux", completed: false, id: 0}]})
                ).toEqual([{
                    text: "my Redux",
                    completed: false,
                    id: 0
                }])
    })
    it("add todo reducer result", () => {
        expect(
            todoReducer([],{type: "ADD_TODO", payload: {text: "my Redux", completed: false, id: 0}})
        ).toEqual(
            [{
                    text: "my Redux",
                    completed: false,
                    id: 0
                }]
        )
    })
    it("add next todo reducer result", () => {
        expect(
            todoReducer([{text: "my Redux", completed: false, id: 0}],{type: "ADD_TODO", payload: {text: "my Redux1", completed: false, id: 1}})
        ).toEqual(
            [{
                    text: "my Redux1",
                    completed: false,
                    id: 1
                },{
                    text: "my Redux",
                    completed: false,
                    id: 0
                }]
        )
    })
    it("complete todo reducer result", ()=>{
        expect(
            todoReducer([{text: "my Redux", completed: false, id: 0}],{type: "COMPLETE_TODO", payload:0})
        ).toEqual([{text: "my Redux", completed: true, id: 0}])
    })
    it("delete todo reducer result", () => {
        expect(
            todoReducer([{
                    text: "my Redux1",
                    completed: false,
                    id: 1
                },{
                    text: "my Redux",
                    completed: false,
                    id: 0
                }], {type: "DELETE_TODO", payload:0})
        ).toEqual([{
            text: "my Redux1",
            completed: false,
            id: 1
        }])
    })
    it("clearall reducer result", () => {
        expect(
            todoReducer([{
                    text: "my Redux1",
                    completed: false,
                    id: 1
                },{
                    text: "my Redux",
                    completed: false,
                    id: 0
                }], {type: "CLEAR_ALL"})
        ).toEqual([])
    })
})