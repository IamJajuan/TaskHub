import React,{useState} from 'react'
import PropTypes from 'prop-types'
import ColumnHeader from './ColumnHeader'
import { Box, Button,Card,CardContent } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import {addTask} from '../actions/tasks/TaskActions'
import { connect } from 'react-redux'
import {selectColumnTasks} from '../selectors'
import { Droppable,Draggable } from 'react-beautiful-dnd';
import {TASK} from '../CONSTANTS'
const Column = ({name,id,tasks,projectID,addTask,index}) => {
       
    const [openTask, setOpenTask] = useState(false)
    const toggleTaskModal = () => setOpenTask(prev => !prev)


    return (
      <Draggable draggableId = {id} index = {index}>
        {(provided) => (

<Box height = "fit-content" ref ={provided.innerRef}     {...provided.draggableProps}
          {...provided.dragHandleProps} width = "280px"  marginRight= ".5em" >
<Card>
<CardContent>
<TaskForm projectID = {projectID} columnID = {id}  name = "" id = "" submit = {addTask} toggleModal = {toggleTaskModal} open={openTask} description = "" title ="Add"   />
 <ColumnHeader projectID = {projectID} id = {id} name = {name} />
 <Button style = {{marginBottom:'1em',marginTop:'1em'}} onClick = {toggleTaskModal} variant = "outlined" size = "small" fullWidth startIcon = {<Add/>}> Add Task </Button>
 <Droppable type = {TASK} droppableId = {id} index = {index} > 
{(provided) => (
     <Box ref={provided.innerRef} {...provided.droppableProps}>
     {(tasks && tasks.map((item,index) => (<TaskCard index = {index} columnID = {id} projectID = {projectID} key = {item.id} {...item} />)  ))}
     {provided.placeholder}

     </Box>
)}
     </Droppable>
     

</CardContent>
</Card>


</Box>
        )}
      </Draggable>
      )
}

Column.propTypes = {
name:PropTypes.string.isRequired,
id:PropTypes.string.isRequired,
tasks:PropTypes.arrayOf(PropTypes.object.isRequired),
projectID:PropTypes.string.isRequired,
addTask:PropTypes.func,
}

const mapStateToProps = (state,ownProps) => ({

    tasks:selectColumnTasks(state,ownProps)
  })
const mapDispatchToProps = {
    
    addTask,
  }
export default connect(mapStateToProps,mapDispatchToProps)(Column)
