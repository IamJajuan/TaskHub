import { Container } from '@material-ui/core'
import React,{useState} from 'react'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectCards from '../components/ProjectCards'
import Pagination from '@material-ui/lab/Pagination';
import ProjectForm from '../components/ProjectForm';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addProject} from '../actions/projects/ProjectActions'

const Home = ({projects,addProject}) => {


    const [open, setOpen] = useState(false)
    const toggleModal = () => setOpen(prev => !prev)

    
    

    return (
        <Container component = "main" maxWidth="md">
                <div>
                <ProjectForm id = "" open = {open} submit = {addProject} name = {""} description = {""} toggleModal = {toggleModal} title = {"Add"} />

                    </div>
<div>
<ProjectsHeader toggleModal = {toggleModal} />
<ProjectCards projects = {projects} />
{projects.length > 12 && <Pagination style = {{marginTop:'2em'}} count={10} variant="outlined" shape="rounded" />}

</div>

        </Container>
    )
}
const mapDispatchToProps = {
    addProject
}
const mapStateToProps = (state) => ({

    projects:state.projects.projects,
  })
Home.propTypes = {
    projects:PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    addProject:PropTypes.func.isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps) (Home)
