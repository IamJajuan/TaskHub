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
const getProjectID = (state,obj) => {
     
    const {match} = obj
    const {params} = match
    const {id} = params
    return id
}

/**
 * 
 * @param state The given state
 * @returns An array of columns with the given state
 */
const getColumns = (state) => state.columns.columns
export const selectProjectColumns = createSelector(
    [getColumns,getProjectID],(cols,id) => cols.filter(col => col.projectID === id )
)
export const selectProject =  createSelector(

        [getProjects,getProjectID], (projects,id) => {

            console.log(id)
            return projects.find(item => item.id === id) || {name:"",sections:[]}
        }
    )




