import { ADDTASK, REMOVETASKS, REORDERTASKS, UPDATETASK } from "../actions/tasks/TaskTypes";

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

    case REORDERTASKS:

   const {draggableId,destination} = payload


   let tasks = [...state.tasks]
   let task = tasks.findIndex(task => task.id === draggableId)
   task =tasks.splice(task,1)[0]
   task.columnID = destination.droppableId
   tasks.splice(destination.index, 0, task)

   return {...state,tasks}

    default:
        return state;
}
}