import {ADDCOLUMN, REMOVECOLUMNS, UPDATECOLUMN} from '../actions/columns/ColumnTypes'

const initalState = {columns:[]}

export const columnReducer = (state = initalState,{type,payload}) => {

    switch (type) {

        case ADDCOLUMN:

        return  {...state,columns:[...state.columns,payload]}

        case REMOVECOLUMNS:

        const {id,field} = payload
        return {...state,columns:state.columns.filter(item => item[field] !== id )}

        case UPDATECOLUMN:

        return {...state,columns:state.columns.map(item => item.id === payload.id ? payload : item )}
            
            
    
        default:
            return state;
    }
}