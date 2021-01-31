import { Box,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'
import {selectProject,selectProjectColumns} from '../selectors/projectSelectors'
import PropTypes from 'prop-types'
import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import {reorderTasks} from '../actions/tasks/TaskActions'
import {reorderColumns} from '../actions/columns/ColumnActions'
import { COLUMN, TASK } from '../CONSTANTS'

const Project = ({project,match,columns,reorderTasks,reorderColumns}) => {

    
    const {name} = project
    const [openForm, setOpenForm] = useState(false)
    const toggleModal = () => setOpenForm(prev => !prev)
    const {params} = match
    const {id} = params
    /**
     * Reorder item depending on the given object type
     * @param obj  The given object
     */
    const handleDrag = (obj) => {

      const {destination,source} = obj
      if (destination) {

        
        if (!(destination.droppableId === source.droppableId && destination.index === source.index)) {
          
          obj.type === TASK ? reorderTasks(obj) : reorderColumns(obj)

        }
        
      }


  

    }
    

    return (
       <Box  >
          <Box  display = "flex" justifyContent = "space-between" >
          <Typography  variant = "h4" >
              {name}
           </Typography>
          </Box>

       
        <Box >
        <Box marginTop = "1em" display ="flex" width = "fit-content" >
<DragDropContext onDragEnd = {handleDrag} >

<Droppable droppableId = "all-columns" type = {COLUMN} direction = "horizontal" >
{ (provided) => (<Box display = "flex" ref={provided.innerRef} {...provided.droppableProps}>  


{ 
  columns && columns.map((item,index) => <Column index = {index}  projectID = {id} key = {item.id} {...item} />)  
}
{provided.placeholder}

</Box>) }

</Droppable>
</DragDropContext>
          <NewColumn open = {openForm} toggleModal = {toggleModal}/>
          </Box>
 
        </Box>
       </Box>
    )
}
const mapStateToProps = (state,ownProps) => ({

  project:selectProject(state,ownProps),
  columns:selectProjectColumns(state,ownProps)

})

const mapDispatchToProps = {
    
  reorderTasks,
  reorderColumns,

}
Project.propTypes = {
  project:PropTypes.object.isRequired,
  columns:PropTypes.arrayOf(PropTypes.object),
  reorderTasks:PropTypes.func.isRequired,
  reorderColumns:PropTypes.func.isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps) (Project)
