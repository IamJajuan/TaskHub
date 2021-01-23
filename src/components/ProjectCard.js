import { Grid,Card,CardContent,CardActions,Button, Typography,IconButton } from '@material-ui/core'
import { Edit ,Delete} from '@material-ui/icons';
import React, {useState} from 'react'
import { ProjectCardStyles } from '../styles/ProjectCard'
import PropTypes from 'prop-types'
import ProjectForm from './ProjectForm';
import DeleteConfirm from './DeleteConfirm';



const ProjectCard = ({id,name,description}) => {

    const classes = ProjectCardStyles()
    const [openForm, setOpenForm] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const toggleModal = () => setOpenForm(prev => !prev)
    const toggleAlert = () => setOpenAlert(prev => !prev)
    const handleDelete = () => {

      toggleAlert()
    } 

    const editProject = (vals,close) => {
      console.log(vals)
      close()
    }

    return (
            <Grid item key = {id} xs={12} sm={6} md={4}>

              <DeleteConfirm handleDelete = {handleDelete} item = {"Project"} open = {openAlert} toggleAlert = {toggleAlert}/>
              
                <ProjectForm open = {openForm} submit = {editProject} toggleModal = {toggleModal} title = {'Edit'}  id = {id} description = {description}  name = {name}/>

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
                   <IconButton onClick = {toggleAlert} >
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
