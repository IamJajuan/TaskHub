import { Container } from '@material-ui/core'
import React from 'react'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectCards from '../components/ProjectCards'
import Pagination from '@material-ui/lab/Pagination';

const Home = () => {

    let projects = [{name:"Hello",description:'Description',id:'1'},{name:"Hello",description:'Description',id:'2'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'1'},{name:"Hello",description:'Description',id:'2'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'1'},{name:"Hello",description:'Description',id:'2'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'3'},{name:"Hello",description:'Description',id:'3'}]

    return (
        <Container component = "main" maxWidth="md">
<div>
<ProjectsHeader />
<ProjectCards projects = {projects} />
{projects.length > 12 && <Pagination style = {{marginTop:'2em'}} count={10} variant="outlined" shape="rounded" />}

</div>

        </Container>
    )
}

export default Home
