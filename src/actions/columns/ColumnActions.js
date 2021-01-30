import { v4 as uuidv4 } from 'uuid';
import {ADDCOLUMN, REMOVECOLUMNS, REORDERCOLUMNS, UPDATECOLUMN} from './ColumnTypes'

/**
 * Add the given column object to the reducer, then close modal when added successfully with the given function
 * @param col the given column object
 * @param func the given function  
 */
export const addColumn = (col,func) => dispatch => {

    col['id'] = uuidv4()
    dispatch({type:ADDCOLUMN,payload:col})
    func()
}

/**
 *Remove the columns from reducer with the given field with the given id, then close modal when removed successfully with the given function

 *@param {String} id the given id
 *@param {String} field the given field
 *@param func the given function
 */

export const removeColumns = (id,field,func) => dispatch => {


    dispatch({type:REMOVECOLUMNS,payload:{id,field}})
    func()
}

/**
 * Update column from reducer with the given data, then close modal when updated successfully with the given function
 * @param data the given data
 * @param func the given function
 */
 
 export const updateColumn = (data,func) => dispatch => {

    dispatch({type:UPDATECOLUMN,payload:data})
    func()
 }

  /**
  * Reorder columns with the given data
  * @param data The given data
  */

 export const reorderColumns  = data => dispatch => {

  
    dispatch({type:REORDERCOLUMNS,payload:data})
 }