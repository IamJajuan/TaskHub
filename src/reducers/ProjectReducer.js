import { ADDPROJECT, DELETEPROJECT } from "../actions/projects/ProjectTypes"

const intialState = {
    projects:[]
}

export const projectReducer = (state = intialState,{type,payload}) => {


    switch (type) {

        case ADDPROJECT:

        return {...state,projects:[payload,...state.projects]}

        case DELETEPROJECT:

         return {...state,projects:state.projects.filter(item => item.id !== payload)}
    
        default:
            return state
    }
}