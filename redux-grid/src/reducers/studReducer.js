import {
    ADD_STUD,
    GET_STUD,
    EDIT_STUD,
    DELETE_STUD,
    ERROR
} from "../constants"

let initialState = {
    students: [],
    fetching: false,
    fetched: false,
    err: false
}
export default function studReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STUD:
            return action.payload;
        case ADD_STUD:
            return [action.payload, ...state];
        case EDIT_STUD:
            let newStudents = state.map((stud) => {
                if(stud.sid === action.payload.sid){
                    return {
                        sid: action.payload.sid,
                        fname: action.payload.fname,
                        lname: action.payload.lname,
                        email: action.payload.email,
                        mobile: action.payload.mobile
                    }
                }else{
                    return stud;
                }
            })
            return newStudents;
        case DELETE_STUD:
            return state.filter((stud) => stud.sid !== action.payload);
        case ERROR:
            return action.payload;
        default:
            return state.students;
    }
}