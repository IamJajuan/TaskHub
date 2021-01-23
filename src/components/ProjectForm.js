import { TextField,Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core'
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {ProjectFormStyles} from '../styles/ProjectForm'

const ProjectForm = ({id,name,description,title,toggleModal,submit,open}) => {
    
    const classes = ProjectFormStyles()
    
    const [values, setValues] = useState({name , description})

    const handleChange = (event) => {

        const {target} = event
        const {value,name} = target

        setValues(prevState => ({...prevState,[name]:value}))

    }
  
    const handleSubmit = (event) => {
       
        event.preventDefault()
       submit({id,...values},toggleModal) 
       setValues({name:"",description:""})
    }
    return (
       <Dialog open = {open} onClose = {toggleModal} >
<DialogTitle className = {classes.projectTitle}>{`${title} Project`} </DialogTitle>
<form onSubmit = {handleSubmit}>

<DialogContent>
                <TextField onChange = {handleChange} required className = {classes.projectInput} label = "Name" id = "name" name = "name" fullWidth  value = {values.name} />
                <TextField onChange = {handleChange} className = {classes.projectInput}  label = "Description" id = "description" name = "description" fullWidth value = {values.description} />

</DialogContent>
<DialogActions>
<Button onClick = {toggleModal}  type = "button" color = "primary" > {`Cancel`} </Button >
<Button  type = "submit" color = "primary" > {`${title} Project`} </Button >


</DialogActions>
</form>

       </Dialog>
    )
}

ProjectForm.prototype = {

    open: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    title:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    submit:PropTypes.func.isRequired,
}

export default ProjectForm
