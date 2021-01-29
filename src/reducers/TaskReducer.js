import { ADDTASK, REMOVETASKS } from "../actions/tasks/TaskTypes";

const initialState = {tasks:[]}

export const taskReducer = (state = initialState,{payload,type}) => {

switch (type) {

    case ADDTASK:
        
        return {...state,tasks:[...state.tasks,payload]};
    
    case REMOVETASKS:

    const {id,field} = payload
    return {...state,tasks:state.tasks.filter(task =>  task[field] !== id ) }

    default:
        return state;
}
}