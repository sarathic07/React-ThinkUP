import chai from 'chai'
import React from 'react'
import {shallow} from 'enzyme'
let expect = chai.expect

import AddTodo from "../../src/components/AddTodo";

let props = {
    addTodos: () => {}
}

describe("<AddTodo /> component test", () => {
    it('component render properly', ()=>{
        const wrapper = shallow(<AddTodo {...props}/>);
        expect(wrapper.length).to.equal(1)
    });
    it('check for input tag', ()=>{
        const wrapper = shallow(<AddTodo {...props}/>);
        expect(wrapper.find('input')).to.have.length(1)
    });
    it('check for button tag', ()=>{
        const wrapper = shallow(<AddTodo {...props}/>);
        expect(wrapper.find('button')).to.have.length(1)
    });
    it('check for classname', ()=>{
        const wrapper = shallow(<AddTodo {...props}/>);
        expect(wrapper.find('.form-control')).to.have.length(1)
    });
    it('check for input element', ()=>{
        const wrapper = shallow(<AddTodo {...props}/>);
        expect(wrapper.contains(<input ref="todoText" type="text" className="form-control" style={{width: "70%", display: "inline-block"}}/>)).to.equal(true);
    });
})