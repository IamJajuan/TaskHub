import { ADDTASK, REMOVETASKS, UPDATETASK } from "../actions/tasks/TaskTypes";

const initialState = {tasks:[]}

export const taskReducer = (state = initialState,{payload,type}) => {

switch (type) {

    case ADDTASK:
        
        return {...state,tasks:[...state.tasks,payload]};

    case UPDATETASK:

    return {...state,tasks:state.tasks.map(task => task.id === payload.id ? payload : task)}
    
    case REMOVETASKS:

    const {id,field} = payload
    return {...state,tasks:state.tasks.filter(task =>  task[field] !== id ) }

    default:
        return state;
}
}