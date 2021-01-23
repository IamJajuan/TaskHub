import { Grid } from '@material-ui/core'
import React from 'react'
import ProjectCard from './ProjectCard'
import PropTypes from 'prop-types';


const ProjectCards = ({projects}) => {

    

    return (
        <div>
            <Grid container spacing = {2}>

            {projects.map(item => <ProjectCard {...item} />)}

            </Grid>
        </div>
    )
}

ProjectCards.propTypes = {
    projects:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ProjectCards
