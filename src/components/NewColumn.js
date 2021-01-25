import { Box, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'

const NewColumn = () => {
    return (
        <Box width = "280px" marginRight= ".5em" marginTop = ".3em"> 
        <Button startIcon = {<Add />}> Add Section </Button>

        </Box>
    )
}

export default NewColumn
