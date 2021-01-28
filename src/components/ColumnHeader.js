import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Typography } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import DeleteConfirm from './DeleteConfirm'
import ColumnForm from './ColumnForm'
const ColumnHeader = ({name}) => {


    const [openAlert, setOpenAlert] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const toggleAlert = () => setOpenAlert(prev => !prev)
    const toggleModal = () => setOpenForm(prev => !prev)
    const editColumn = (val,close) => {

        console.log(val)
        close()
    }
    const handleDelete = () => {

        toggleAlert()
      } 
  

    return (
        <Box     display="flex"
        alignItems="center"
        justifyContent="space-between">
            <ColumnForm  open = {openForm} toggleModal = {toggleModal} name = {name} title = "Edit" submit = {editColumn} />
            <DeleteConfirm open = {openAlert} handleDelete = {handleDelete} toggleAlert = {toggleAlert} item = {"Column"}  />
<Typography style = {{overflow:'hidden',textOverflow:"ellipsis"}} variant ="h6"> {name}  </Typography>


<Box display="flex" alignItems="center">
    <IconButton onClick = {toggleAlert}  >
        <Delete />
    </IconButton>
    <IconButton onClick = {toggleModal}>
        <Edit />
    </IconButton>
</Box>
        </Box>
    )
}

ColumnHeader.propTypes = {

    name:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
}

export default ColumnHeader