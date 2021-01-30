import { ADDTASK,REMOVETASKS, REORDERTASKS, UPDATETASK } from "./TaskTypes"
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

/**
 * Remove the tasks from reducer with the given field with the given id, then close modal when removed successfully with the given function
 * @param {String} id the given id
 * @param {String} field the given field
 */
export const removeTasks = (id,field,func) => dispatch => {

    dispatch({type:REMOVETASKS,payload:{id,field}})
    func()
}


/**
 * Update task from reducer with the given data, then close modal when updated successfully with the given function
 * @param data the given data
 * @param func the given function
 */
 
 export const updateTask = (data,func) => dispatch => {

    dispatch({type:UPDATETASK,payload:data})
    func()
 }

 /**
  * Reorder task list with the given data
  * @param data The given data
  */

 export const reorderTasks  = data => dispatch => {

  
    dispatch({type:REORDERTASKS,payload:data})
 }