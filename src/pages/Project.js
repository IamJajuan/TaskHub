import { Box,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'
import {selectProject,selectProjectColumns} from '../selectors/projectSelectors'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-beautiful-dnd';
import {reorderTasks} from '../actions/tasks/TaskActions'

const Project = ({project,match,columns,reorderTasks}) => {

    
    const {sections,name} = project
    const [openForm, setOpenForm] = useState(false)
    const toggleModal = () => setOpenForm(prev => !prev)
    const {params} = match
    const {id} = params
    const handleDrag = (val) => console.log(val)

    return (
       <Box  >
          <Box  display = "flex" justifyContent = "space-between" >
          <Typography  variant = "h4" >
              {name}
           </Typography>
          </Box>

       
        <Box >
        <Box marginTop = "1em" display ="flex" width = "fit-content" >
<DragDropContext onDragEnd = {reorderTasks}>
{columns && columns.slice(0,3) .map((item,index) => <Column index = {index}  projectID = {id} key = {item.id} {...item} />) }

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
}
Project.propTypes = {
  project:PropTypes.object.isRequired,
  columns:PropTypes.arrayOf(PropTypes.object),
  reorderTasks:PropTypes.func.isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps) (Project)
