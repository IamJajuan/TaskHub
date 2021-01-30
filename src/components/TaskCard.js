import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {  Card, Typography,CardContent,Box} from '@material-ui/core'
import TaskForm from './TaskForm'
import {updateTask} from '../actions/tasks/TaskActions'
import { connect } from 'react-redux'
import {  Draggable } from "react-beautiful-dnd";

const TaskCard = ({name,description,id,projectID,updateTask,columnID,index}) => {
    
  const [open, setOpen] = useState(false)

  const editTask = (vals,close) => {
      console.log(vals)
      close()
  }
    const toggleModal = () => setOpen(prev => !prev)
    return (
        
      <Draggable index = {index} key ={id} draggableId = {id}>
        {(provided) => (<Box ref ={provided.innerRef}     {...provided.draggableProps}
          {...provided.dragHandleProps} marginTop = {"1em"}>
            
            <TaskForm columnID = {columnID} projectID = {projectID} submit = {updateTask}  open = {open} title = "Edit" toggleModal = {toggleModal} name = {name}  id ={id} description ={description} />
           
                  <Card variant="outlined" className ="clickable" onClick = {toggleModal} >
       
                <CardContent  >
            <Box  display = 'flex'>
            <Typography gutterBottom variant="body1" style = {{fontWeight:"600"}} >
                {name}
              </Typography>
            </Box>
            <Typography gutterBottom variant="body2" >
            
              {description}
            </Typography>
         
          </CardContent>
    
                </Card>           
                        
        </Box>
        )}
      </Draggable>
    )
}

TaskCard.propTypes = {

    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    id:PropTypes.string.isRequired,
    projectID:PropTypes.string.isRequired,
    updateTask:PropTypes.func.isRequired,
    columnID:PropTypes.string.isRequired,
    


}

const mapDispatchToProps = {
    
  updateTask,
}
export default connect(null,mapDispatchToProps)(TaskCard)
