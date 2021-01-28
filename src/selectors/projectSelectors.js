import { createSelector } from 'reselect'

/**
 * Retrive projects from the give state
 * @param state the given state
 * @return an array of objects
 */
const getProjects = (state) => {
    
   return state.projects.projects 
}

/**
 * 
 * @param state The given state
 * @param obj the given object 
 * @return The id of the given object
 * It does not use the given state
 */
const getID = (state,obj) => {
     
    const {match} = obj
    const {params} = match
    const {id} = params
    return id
}

const selectProject =  createSelector(

        [getProjects,getID], (projects,id) => {

            return projects.find(item => item.id === id)
        }
    )


export default selectProject

