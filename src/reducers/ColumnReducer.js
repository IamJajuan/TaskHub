import {ADDCOLUMN} from '../actions/columns/ColumnTypes'

const initalState = {columns:[]}

export const columnReducer = (state = initalState,{type,payload}) => {

    switch (type) {

        case ADDCOLUMN:

        return  {...state,columns:[...state.columns,payload]}
            
            
    
        default:
            return state;
    }
}