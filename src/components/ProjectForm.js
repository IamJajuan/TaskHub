import { TextField,Button } from '@material-ui/core'
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {ProjectFormStyles} from '../styles/ProjectForm'

const ProjectForm = ({id,name,description,title,toggleModal,submit}) => {
    
    const classes = ProjectFormStyles()
    
    const [values, setValues] = useState({name , description})

    const handleChange = (event) => {

        const {target} = event
        const {value,name} = target

        setValues(prevState => ({...prevState,[name]:value}))

    }
  
    const handleSubmit = () => {

       submit({id,...values},toggleModal) 
       setValues({name:"",description:""})
    }
    return (
        <div  className = {classes.projectForm}>
            <h2 className = {classes.projectTitle}> {`${title} Project`} </h2>
            <form onSubmit = {handleSubmit}>
                <TextField onChange = {handleChange} required className = {classes.projectInput} label = "Name" id = "name" name = "name" fullWidth  value = {values.name} />
                <TextField onChange = {handleChange} className = {classes.projectInput}  label = "Description" id = "description" name = "description" fullWidth value = {values.description} />
                <Button fullWidth type = "submit" color = "primary" variant = "contained"> {`${title} Project`} </Button >

            </form>
        </div>
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
