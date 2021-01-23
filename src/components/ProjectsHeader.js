import { Button, Divider, Typography } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import React from 'react'
import { ProjectsHeaderStyles } from '../styles/ProjectsHeader';

const ProjectsHeader = () => {

    const classes = ProjectsHeaderStyles()
    
    return (
        <div>
            <div className = {classes.projectsHeader}>
           <Typography variant = "h6">
               Projects
               </Typography> <Button  startIcon = {<AddCircle />} > Add Project </Button> 
        </div>
        <Divider className ={classes.projectDivider} />
        </div>
    )
}

export default ProjectsHeader
