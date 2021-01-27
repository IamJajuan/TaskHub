import React,{useState} from 'react'
import PropTypes from 'prop-types'
import ColumnHeader from './ColumnHeader'
import { Box, Button,Card,CardContent } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'

const Column = ({name,id,tasks}) => {
       
    const [openTask, setOpenTask] = useState(false)
    const toggleTaskModal = () => setOpenTask(prev => !prev)

    const addTask = (vals,close) => {
        console.log(vals)
        close()
    }

    return (
        <Box width = "280px"  marginRight= ".5em" >
           <Card>
<CardContent>
<TaskForm  name = "" id = "" submit = {addTask} toggleModal = {toggleTaskModal} open={openTask} description = "" cost = "" title ="Add" stage = "" priority = ""   />
            <ColumnHeader  id = {id} name = {name} />
            <Button style = {{marginBottom:'1em',marginTop:'1em'}} onClick = {toggleTaskModal} variant = "outlined" size = "small" fullWidth startIcon = {<Add/>}> Add Task </Button>
           
                <Box>
                {(tasks && tasks.map(item => (<TaskCard key = {item.id} {...item} />)  ))}
                </Box>

</CardContent>
           </Card>


        </Box>
    )
}

Column.propTypes = {
name:PropTypes.string.isRequired,
id:PropTypes.string.isRequired,
tasks:PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default Column
