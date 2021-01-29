import { Box, Button,Card,CardContent } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import ColumnForm from './ColumnForm'
import PropTypes from 'prop-types'
import {addColumn} from '../actions/columns/ColumnActions'
import { connect } from 'react-redux'


const NewColumn = ({open,toggleModal,addColumn}) => {

   
    return (
        <Box width = "280px" marginRight= ".5em" > 
        <ColumnForm  open = {open} toggleModal = {toggleModal} name = "" title = "Add" submit = {addColumn} />

<Card >
    <CardContent>
    <Button style = {{marginTop:".4em"}} onClick = {toggleModal} startIcon = {<Add />}> Add Section </Button>
    </CardContent>
</Card>
        </Box>
    )
}

const mapDispatchToProps = {
    
    addColumn,
  }
NewColumn.propTypes = {

    addColumn:PropTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(NewColumn)
