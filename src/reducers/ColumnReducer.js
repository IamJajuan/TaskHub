import {ADDCOLUMN, REMOVECOLUMNS, UPDATECOLUMN,REORDERCOLUMNS} from '../actions/columns/ColumnTypes'

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

        case REORDERCOLUMNS:

   const {draggableId,destination} = payload


   let columns = [...state.columns]
   let column = columns.findIndex(col => col.id === draggableId)
   column =columns.splice(column,1)[0]
   columns = columns.filter(col => col.projectID === column.projectID)
   columns.splice(destination.index, 0, column)
   return {...state,columns:[...state.columns.filter(col => col.projectID !== column.projectID ),...columns]}
            
            
    
        default:
            return state;
    }
}