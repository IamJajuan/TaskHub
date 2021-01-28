import {ADDPROJECT} from './ProjectTypes'
import { v4 as uuidv4 } from 'uuid';

/**
 * Add the given project to the reducer, then navigate to the project detail page when successful with the given function
 * @param proj The given project
 * @param func The give function
 * 
 */
 export const addProject =  (proj,func) => dispatch => {

    proj['id'] = uuidv4()
    dispatch({ type:ADDPROJECT,payload:proj})
    func(`project/${proj.id}`)
 } 

