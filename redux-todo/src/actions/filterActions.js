import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from "../constants";

export function showAll(){
    return({type: SHOW_ALL})
}

export function showActive(text){
    return({type: SHOW_ACTIVE})
}

export function showCompleted(id){
    return({type: SHOW_COMPLETED})
}