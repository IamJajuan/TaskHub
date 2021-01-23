import { Container, Modal } from '@material-ui/core'
import React,{useState} from 'react'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectCards from '../components/ProjectCards'
import Pagination from '@material-ui/lab/Pagination';
import ProjectForm from '../components/ProjectForm';

const Home = () => {

    let projects = [{name:"Hello",description:'Description',id:'1'},{name:"Hello",description:'Description',id:'2'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'4'},{name:"Hello",description:'Description',id:'5'},{name:"Hello",description:'Description',id:'6'},{name:"Hello",description:'Description',id:'7'},{name:"Hello",description:'Description',id:'8'},{name:"Hello",description:'Description',id:'9'},{name:"Hello",description:'Description',id:'10'},{name:"Hello",description:'Description',id:'11'},{name:"Hello",description:'Description',id:'12'}]

    const [open, setOpen] = useState(false)
    const toggleModal = () => setOpen(prev => !prev)

    
    const addProject = (vals,close) => {

        console.log(vals)
        close()

    }

    return (
        <Container component = "main" maxWidth="md">
            <Modal open = {open} onClose = {toggleModal}>
                <div>
                <ProjectForm submit = {addProject} name = {""} description = {""} toggleModal = {toggleModal} title = {"Add"} />

                    </div>
            </Modal>
<div>
<ProjectsHeader toggleModal = {toggleModal} />
<ProjectCards projects = {projects} />
{projects.length > 12 && <Pagination style = {{marginTop:'2em'}} count={10} variant="outlined" shape="rounded" />}

</div>

        </Container>
    )
}

export default Home
