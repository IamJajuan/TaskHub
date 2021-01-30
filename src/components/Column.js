import React,{useState} from 'react'
import PropTypes from 'prop-types'
import ColumnHeader from './ColumnHeader'
import { Box, Button,Card,CardContent } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import {addTask} from '../actions/tasks/TaskActions'
import { connect } from 'react-redux'
import {selectTasks} from '../selectors/projectSelectors'
import { Droppable } from 'react-beautiful-dnd';

const Column = ({name,id,tasks,projectID,addTask,index}) => {
       
    const [openTask, setOpenTask] = useState(false)
    const toggleTaskModal = () => setOpenTask(prev => !prev)


    return (
    <Droppable droppableId = {id} index = {index} > 
      {(provided) => (  <Box ref={provided.innerRef} {...provided.droppableProps} width = "280px"  marginRight= ".5em" >
      <Card>
<CardContent>
<TaskForm projectID = {projectID} columnID = {id}  name = "" id = "" submit = {addTask} toggleModal = {toggleTaskModal} open={openTask} description = "" cost = "" title ="Add" stage = "" priority = ""   />
       <ColumnHeader projectID = {projectID} id = {id} name = {name} />
       <Button style = {{marginBottom:'1em',marginTop:'1em'}} onClick = {toggleTaskModal} variant = "outlined" size = "small" fullWidth startIcon = {<Add/>}> Add Task </Button>
      
           <Box>
           {(tasks && tasks.map((item,index) => (<TaskCard index = {index} columnID = {id} projectID = {projectID} key = {item.id} {...item} />)  ))}
           {provided.placeholder}

           </Box>

</CardContent>
      </Card>


   </Box>)}
    </Droppable>
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

    tasks:selectTasks(state,ownProps)
  })
const mapDispatchToProps = {
    
    addTask,
  }
export default connect(mapStateToProps,mapDispatchToProps)(Column)
