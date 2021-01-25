import React from 'react'
import PropTypes from 'prop-types'
import ColumnHeader from './ColumnHeader'
import { Box, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import TaskCard from './TaskCard'
const Column = ({name,id,tasks,toggleModal,open}) => {
    return (
        <Box width = "280px" marginRight= ".5em" >
            <ColumnHeader toggleModal = {toggleModal} openForm = {open} id = {id} name = {name} />
            <Button variant = "outlined" size = "small" fullWidth startIcon = {<Add/>}> Add Task </Button>
            {tasks && tasks.map(item => <TaskCard {...item} />)}
        </Box>
    )
}

Column.propTypes = {
name:PropTypes.string.isRequired,
id:PropTypes.string.isRequired,
tasks:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
open:PropTypes.bool.isRequired,
toggleModal:PropTypes.func.isRequired,
}

export default Column
