import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {  Card, Typography,CardContent,Box} from '@material-ui/core'
import TaskForm from './TaskForm'

const TaskCard = ({name,description,id}) => {
    
  const [open, setOpen] = useState(false)

  const editTask = ({vals},close) => {
      console.log(vals)
      close()
  }
    const toggleModal = () => setOpen(prev => !prev)
    return (
        <Box  marginTop = {"1em"}>
            
            <TaskForm submit = {editTask}  open = {open} title = "Edit" toggleModal = {toggleModal} name = {name}  id ={id} description ={description} />
           
                  <Card className ="clickable" onClick = {toggleModal} >
       
                <CardContent  >
            <Box  display = 'flex'>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </Box>
            <Typography variant="body2" component="p">
            
              {description}
            </Typography>
         
          </CardContent>
    
                </Card>           
                        
        </Box>
    )
}

TaskCard.propTypes = {

    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    id:PropTypes.string.isRequired,


}

export default TaskCard
