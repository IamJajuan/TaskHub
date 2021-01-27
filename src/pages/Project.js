import { Box,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'


const Project = () => {

    const {id} = useParams()
    const project = {
        id,name:"Project",sections:[{id:"1" , name:"Doing", tasks:[{name:"Do this" ,description:"Lighting Style",id:"1"},{name:"Backlog",id:"2"}]}, 
        {name:"Planned" ,description:"Lighting Style",id:"2"},
        {name:"Complete" ,description:"Fire Style", id:"3"},
        {name:"Testing" ,description:"Earth Style", id:"4"},

    ] 
    }
    const {sections,name} = project
    const [openForm, setOpenForm] = useState(false)
    const toggleModal = () => setOpenForm(prev => !prev)

    return (
       <Box  >
          <Box  display = "flex" justifyContent = "space-between" >
          <Typography  variant = "h4" >
              {name}
           </Typography>
          </Box>

         
        <Box >
        <Box marginTop = "1em" display ="flex" width = "fit-content" >
          {sections.slice(0,3) .map(item => <Column  key = {item.id} {...item} />)}
          <NewColumn open = {openForm} toggleModal = {toggleModal}/>
          </Box>
 
        </Box>
       </Box>
    )
}

export default Project
