import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { TextField,Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core'
import { FormStyles } from '../styles/Form'

const TaskForm = ({open,toggleModal,title,submit,id,name,description,columnID}) => {

    const [values, setValues] = useState({name,description})


    const handleChange = (event) => {

        const {target} = event
        const {value,name} = target
   

        setValues(prevState => ({...prevState,[name]:value}))
    }
  
    const handleSubmit = (event) => {
       
       event.preventDefault()
       submit({id,...values,columnID},toggleModal) 
       id && setValues({name:"",description:"",cost:"",stage:"",priority:""})
    }

    const classes = FormStyles()
    return (
        <Dialog fullWidth open = {open} onClose = {toggleModal} >
        <DialogTitle className = {classes.title}>{`${title} Task`} </DialogTitle>
        <form onSubmit = {handleSubmit}>
        
        <DialogContent >
                        <TextField onChange = {handleChange} required className = {classes.input} label = "Name" id = "name" name = "name" fullWidth  value = {values.name} /> 
                        <TextField onChange = {handleChange}  className = {classes.input} label = "Description" id = "description" name = "description" fullWidth  value = {values.description} /> 
                       
        </DialogContent>
        <DialogActions>
        <Button onClick = {toggleModal}  type = "button" color = "primary" > {`Cancel`} </Button >
        <Button  type = "submit" color = "primary" > {`${title} Task`} </Button >
        
        {title === "Edit" && <Button onClick = {toggleModal}  type = "button" color = "primary" >Delete Task</Button>}

        </DialogActions>
        </form>
        
               </Dialog>
    )
}

TaskForm.propTypes = {

    open:PropTypes.bool.isRequired,
    toggleModal:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    priority:PropTypes.string,
    cost:PropTypes.string,
    stage:PropTypes.string,
    id:PropTypes.string,
    columnID:PropTypes.string,
    title:PropTypes.string.isRequired,
    submit:PropTypes.func.isRequired
}

export default TaskForm
