import { ADDTASK } from "../actions/tasks/TaskTypes";

const initialState = {tasks:[]}

export const taskReducer = (state = initialState,{payload,type}) => {

switch (type) {

    case ADDTASK:
        
        return {...state,tasks:[...state.tasks,payload]};

    default:
        return state;
}
}