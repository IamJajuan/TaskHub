import { ADDTASK } from "./TaskTypes"
import { v4 as uuidv4 } from 'uuid';


/**
 * Add the given task to the reducer
 * @param task the given task
 * @param func the given function
 */
export const addTask = (task,func) => dispatch => {

    task['id'] = uuidv4()
    dispatch({type:ADDTASK,payload:task})
    func()
}