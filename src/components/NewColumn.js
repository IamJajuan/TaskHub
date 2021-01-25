import { Box, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React,{useState} from 'react'
import ColumnForm from './ColumnForm'

const NewColumn = ({open,toggleModal}) => {

    const addColumn = (val,close) => {

        console.log(val)
        close()
    }
    return (
        <Box width = "280px" marginRight= ".5em" marginTop = ".3em"> 
        <ColumnForm  open = {open} toggleModal = {toggleModal} name = "" title = "Add" submit = {addColumn} />

        <Button onClick = {toggleModal} startIcon = {<Add />}> Add Section </Button>

        </Box>
    )
}

export default NewColumn
