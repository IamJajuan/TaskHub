import { TextField,Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {FormStyles} from '../styles/Form'
import { useHistory } from 'react-router-dom'

const ProjectForm = ({id,name,title,toggleModal,submit,open}) => {
    
    const classes = FormStyles()
    const history = useHistory()
    const [values, setValues] = useState({name})

    useEffect(() => {
       
       setValues({name}) 
     
    }, [open,name])


    const handleChange = (event) => {

        const {target} = event
        const {value,name} = target

        setValues(prevState => ({...prevState,[name]:value}))

    }
    
    
    const handleSubmit = (event) => {
       
        event.preventDefault()
       submit({id,...values},!id ? history.push : toggleModal )   
       setValues({name:""})
    }
    return (
       <Dialog fullWidth open = {open} onClose = {toggleModal} >
<DialogTitle className = {classes.title}>{`${title} Project`} </DialogTitle>
<form onSubmit = {handleSubmit}>

<DialogContent>
                <TextField  onChange = {handleChange} required className = {classes.input} label = "Name" id = "name" name = "name" fullWidth  value = {values.name} />
</DialogContent>
<DialogActions>
<Button onClick = {toggleModal}  type = "button" color = "primary" > {`Cancel`} </Button >
<Button  type = "submit" color = "primary" > {`${title} Project`} </Button >


</DialogActions>
</form>

       </Dialog>
    )
}

ProjectForm.propTypes = {

    open: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    title:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    submit:PropTypes.func.isRequired,
}

export default ProjectForm
