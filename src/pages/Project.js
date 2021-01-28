import { Box,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'
import selectProject from '../selectors/projectSelectors'
import PropTypes from 'prop-types'

const Project = ({project,match}) => {

    
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
          {sections && sections.slice(0,3) .map(item => <Column  key = {item.id} {...item} />)}
          <NewColumn open = {openForm} toggleModal = {toggleModal}/>
          </Box>
 
        </Box>
       </Box>
    )
}
const mapStateToProps = (state,ownProps) => ({

  project:selectProject(state,ownProps),
})
Project.prototype = {
  project:PropTypes.object.isRequired,
}
export default connect(mapStateToProps,) (Project)
