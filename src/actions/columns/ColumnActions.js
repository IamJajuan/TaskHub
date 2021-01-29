import { v4 as uuidv4 } from 'uuid';
import {ADDCOLUMN} from './ColumnTypes'
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