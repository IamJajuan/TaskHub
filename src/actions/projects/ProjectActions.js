import {ADDPROJECT, DELETEPROJECT, GETPROJECT, UPDATEPROJECT} from './ProjectTypes'
import { v4 as uuidv4 } from 'uuid';

/**
 * Add the given project to the reducer, then navigate to the project detail page when added successfully with the given function
 * @param proj The given project
 * @param func The give function
 * 
 */
 export const addProject =  (proj,func) => dispatch => {

    proj['id'] = uuidv4()
    dispatch({ type:ADDPROJECT,payload:proj})
    func(`project/${proj.id}`)
 } 

 /**
  * Delete the project with the given id, close modal when deleted successfully with the given function
  * @param {String} id The given id
  * @param  func  The given function
  */
 export const deleteProject = (id,func) => dispatch => {

    dispatch({type:DELETEPROJECT,payload:id})
    func()
 }

/**
 * Update the project with the given data
 * When the update is successful, it goes back to the project detail page with the given function
 * @param data The given data
 * @param func The given function
 */

 export const updateProject = (data,func) => dispatch => {

      dispatch({type:UPDATEPROJECT,payload:data})
      func(`project/${data.id}`)

 }

 /**
  * Get the project with the given id
  * @param {String} id the given id
  */

  export const getProject = (id) => dispatch => {


   dispatch({type:GETPROJECT,payload:id})

  }