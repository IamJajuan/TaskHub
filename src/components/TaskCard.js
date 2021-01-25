import React from 'react'
import PropTypes from 'prop-types'
import {  Card, Typography,CardContent,Box } from '@material-ui/core'

const TaskCard = ({name,description,stage,priority,cost}) => {
    
    const toggleModal = () => console.log('hrll')
    return (
        <Box  marginTop = {"1em"}>
            
            <Card onClick = {toggleModal}>
           
            <CardContent  className ="clickable">
        
            <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        <Typography variant="body2" component="p">
        
          {description}
        </Typography>
        <Box  marginTop =".8em" display ="flex">
<Box lineHeight = "1.5" bgcolor = {"#ff7511"} color = {"black"} borderRadius ={".8em"} padding = {"0 .5em"} marginRight = {".5em"}>{priority}</Box>
<Box marginRight = {".5em"}>{stage}</Box>
<Box lineHeight = "1.5" bgcolor = {"#cbd4db"} color = {"black"} borderRadius ={".8em"} padding = {"0 .5em"} marginRight = {".5em"}>{cost}</Box>


        </Box>
      </CardContent>

            </Card>
        
            
            
            
        </Box>
    )
}

TaskCard.propTypes = {

    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    priority:PropTypes.string,
    cost:PropTypes.string,
    stage:PropTypes.string,

}

export default TaskCard
