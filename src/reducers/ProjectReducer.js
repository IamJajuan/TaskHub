import { ADDPROJECT } from "../actions/projects/ProjectTypes"

const intialState = {
    projects:[]
}

export const projectReducer = (state = intialState,{type,payload}) => {


    switch (type) {

        case ADDPROJECT:

        return {...state,projects:[payload,...state.projects]}
    
        default:
            return state
    }
}