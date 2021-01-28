import { ADDPROJECT, DELETEPROJECT, GETPROJECT, UPDATEPROJECT } from "../actions/projects/ProjectTypes"

const intialState = {
    projects:[],
    project:{}
}

export const projectReducer = (state = intialState,{type,payload}) => {


    switch (type) {

        case ADDPROJECT:

        return {...state,projects:[payload,...state.projects]}

        case UPDATEPROJECT:

        return {...state,projects:state.projects.map(item => item.id === payload.id ? payload : item )}

        case DELETEPROJECT:

         return {...state,projects:state.projects.filter(item => item.id !== payload)}

         case GETPROJECT:

         return {...state,project:state.projects.filter(item => item.id !== payload )[0]}
    
        default:
            return state
    }
}