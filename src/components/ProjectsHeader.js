import { Button, Divider, Typography } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React from 'react'
import { ProjectsHeaderStyles } from '../styles/ProjectsHeader';
import PropTypes from 'prop-types'

const ProjectsHeader = ({toggleModal}) => {

    const classes = ProjectsHeaderStyles()
    
    return (
        <div>
            <div className = {classes.projectsHeader}>
           <Typography variant = "h6">
               Projects
               </Typography> <Button onClick = {toggleModal}  startIcon = {<AddCircle />} > Add Project </Button> 
        </div>
        <Divider className ={classes.projectDivider} />
        </div>
    )
}

ProjectsHeader.propTypes = {
    toggleModal:PropTypes.func.isRequired
}
export default ProjectsHeader
