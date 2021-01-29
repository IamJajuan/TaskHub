import { v4 as uuidv4 } from 'uuid';
import {ADDCOLUMN, REMOVECOLUMNS} from './ColumnTypes'

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
 *Remove the given columns from reducers with the given field with the given id, then close modal when removed successfully with the given function

 *@param {String} id the given id
 *@param {String} field the given field
 *@param func the given function
 */

export const removeColumns = (id,field,func) => dispatch => {


    dispatch({type:REMOVECOLUMNS,payload:{id,field}})
    func()
}