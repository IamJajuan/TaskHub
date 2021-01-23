import { Grid,Card,CardContent,CardActions,Button, Typography,IconButton } from '@material-ui/core'
import { Edit ,Delete} from '@material-ui/icons';
import React from 'react'
import { ProjectCardStyles } from '../styles/ProjectCard'
import PropTypes from 'prop-types'



const ProjectCard = ({id,name,description}) => {

    const classes = ProjectCardStyles()

    return (
            <Grid item key = {id} xs={12} sm={6} md={4}>
              <Card className={classes.projectCard}>
              
                  <CardContent className={classes.projectCardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                  </CardContent>
                  <CardActions className = {classes.projectCardActions}>
                   <div>
                   <IconButton >
                       <Edit />
                   </IconButton>
                   <IconButton >
                       <Delete />
                   </IconButton>
                   </div>

                   <Button size="small" >
                       View
                   </Button>

                  </CardActions>
                </Card>
        </Grid>
    )
}

ProjectCard.prototype = {

  id:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
}
export default ProjectCard
