import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { TextField,Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core'
import { FormStyles } from '../styles/Form'

const ColumnForm = ({open,toggleModal,name,title,submit,id}) => {

    const [values, setValues] = useState({name})

    const handleChange = (event) => {

        const {target} = event
        const {value} = target

        setValues({name:value})
    }
  
    const handleSubmit = (event) => {
       
       event.preventDefault()
       submit({id,...values},toggleModal) 
       setValues({name:""})
    }

    const classes = FormStyles()
    return (
        <Dialog fullWidth open = {open} onClose = {toggleModal} >
        <DialogTitle className = {classes.title}>{`${title} Column`} </DialogTitle>
        <form onSubmit = {handleSubmit}>
        
        <DialogContent >
                        <TextField onChange = {handleChange} required className = {classes.input} label = "Name" id = "name" name = "name" fullWidth  value = {values.name} />        
        </DialogContent>
        <DialogActions>
        <Button onClick = {toggleModal}  type = "button" color = "primary" > {`Cancel`} </Button >
        <Button  type = "submit" color = "primary" > {`${title} Column`} </Button >
        
        
        </DialogActions>
        </form>
        
               </Dialog>
    )
}

ColumnForm.propTypes = {

    open:PropTypes.bool.isRequired,
    toggleModal:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
    id:PropTypes.string,
    title:PropTypes.string.isRequired,
    submit:PropTypes.func.isRequired
}

export default ColumnForm

