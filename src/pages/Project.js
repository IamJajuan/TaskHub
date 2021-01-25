import { Box,Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'


const Project = () => {

    const {id} = useParams()
    const project = {
        id,name:"Project",sections:[{id:"2" , name:"Doing", tasks:[{name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"}]}, 
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"},
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"},
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"},
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"},
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"},
        {name:"Do this" ,description:"Lighting Style",cost:"10",priority:"medium",stage:"Spec need"}
    ] 
    }
    const {sections,name} = project
    return (
       <Box  >
          <Box  display = "flex" justifyContent = "space-between" >
          <Typography  variant = "h4" >
              {name}
           </Typography>
          </Box>

         
        <Box >
        <Box  display ="flex" width = "fit-content" >
          {sections.slice(0,1) .map(item => <Column {...item} />)}
          <NewColumn />
          </Box>
 
        </Box>
       </Box>
    )
}

export default Project
