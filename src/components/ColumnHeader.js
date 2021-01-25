import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Typography } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import DeleteConfirm from './DeleteConfirm'

const ColumnHeader = ({name,count}) => {


    const [openAlert, setOpenAlert] = useState(false)
    const toggleAlert = () => setOpenAlert(prev => !prev)
    const handleDelete = () => {

        toggleAlert()
      } 
  

    return (
        <Box     display="flex"
        alignItems="center"
        justifyContent="space-between">
            <DeleteConfirm open = {openAlert} handleDelete = {handleDelete} toggleAlert = {toggleAlert} item = {"Column"}  />
<Typography style = {{overflow:'hidden',textOverflow:"ellipsis"}} variant ="h6"> {name}  </Typography>


<Box display="flex" alignItems="center">
    <IconButton onClick = {toggleAlert}  >
        <Delete />
    </IconButton>
    <IconButton>
        <Edit />
    </IconButton>
</Box>
        </Box>
    )
}

ColumnHeader.propTypes = {

    name:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    count:PropTypes.string.isRequired,
}

export default ColumnHeader
