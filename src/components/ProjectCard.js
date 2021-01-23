import { Grid,Card,CardContent,CardActions,Button, Typography,IconButton, Modal } from '@material-ui/core'
import { Edit ,Delete} from '@material-ui/icons';
import React, {useState} from 'react'
import { ProjectCardStyles } from '../styles/ProjectCard'
import PropTypes from 'prop-types'
import ProjectForm from './ProjectForm';



const ProjectCard = ({id,name,description}) => {

    const classes = ProjectCardStyles()
    const [open, setOpen] = useState(false)
    const toggleModal = () => setOpen(prev => !prev)

    const editProject = (vals,close) => {
      console.log(vals)
      close()
    }

    return (
            <Grid item key = {id} xs={12} sm={6} md={4}>
              <Modal open = {open} onClose = {toggleModal}>
                <div>
                <ProjectForm submit = {editProject} toggleModal = {toggleModal} title = {'Edit'}  id = {id} description = {description}  name = {name}/>

                </div>
              </Modal>
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
                   <IconButton onClick = {toggleModal} >
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
