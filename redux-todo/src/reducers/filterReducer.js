import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from "../constants";

let initialState = {
    showAll : true,
    active: false,
    inActive: false
}

export default function filterReducer(state = initialState, action){
    switch(action.type){
        case SHOW_ALL:
            return {showAll : true, active: false, inActive: false};
        case SHOW_ACTIVE:
            return {showAll : false, active: true, inActive: false};
        case SHOW_COMPLETED:
        return {showAll : false, active: false, inActive: true};
        default:
            return state;
    }
} 