import {ADDCOLUMN, REMOVECOLUMNS} from '../actions/columns/ColumnTypes'

const initalState = {columns:[]}

export const columnReducer = (state = initalState,{type,payload}) => {

    switch (type) {

        case ADDCOLUMN:

        return  {...state,columns:[...state.columns,payload]}

        case REMOVECOLUMNS:

        const {id,field} = payload
        return {...state,columns:state.columns.filter(item => item[field] !== id )}
            
            
    
        default:
            return state;
    }
}