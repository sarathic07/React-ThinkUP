import expect from "expect";
import * as actions from '../../src/actions';

describe('todo actions', () => {

    it("loadAllTodos action",() => {
        expect(actions.loadAllTodos()).toEqual({
            type: "LOAD_TODO"
        })
    })
    it("addTodos action", () => {
        expect(actions.addTodos("my Task1")).toEqual(
            {
                type: "ADD_TODO", payload: "my Task1"
            }
        )
    })
    it("completeTodo action", () => {
        expect(actions.completeTodo(123)).toEqual({
            type: "COMPLETE_TODO", payload: 123
        })
    })
    it("deleteTodo action", ()=> {
        expect(actions.deleteTodo(234)).toEqual(
            {
                type: "DELETE_TODO",
                payload: 234
            }
        )
    })
    it("clearAll action", ()=> {
        expect(actions.clearAll()).toEqual({
            type: "CLEAR_ALL"
        })
    })
})