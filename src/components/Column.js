import React from 'react'
import PropTypes from 'prop-types'
import ColumnHeader from './ColumnHeader'
import { Box, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import TaskCard from './TaskCard'
const Column = ({name,id,tasks}) => {
    return (
        <Box width = "280px" marginRight= ".5em" >
            <ColumnHeader id = {id} name = {name} />
            <Button variant = "outlined" size = "small" fullWidth startIcon = {<Add/>}> Add Task </Button>
            {tasks && tasks.map(item => <TaskCard {...item} />)}
        </Box>
    )
}

Column.propTypes = {
name:PropTypes.string.isRequired,
id:PropTypes.string.isRequired,
tasks:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Column
