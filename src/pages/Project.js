import { Box,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import Column from '../components/Column'
import NewColumn from '../components/NewColumn'
import {selectProject,selectProjectColumns} from '../selectors/projectSelectors'
import PropTypes from 'prop-types'

const Project = ({project,match,columns}) => {

    
    const {sections,name} = project
    const [openForm, setOpenForm] = useState(false)
    const toggleModal = () => setOpenForm(prev => !prev)
    const {params} = match
    const {id} = params

    return (
       <Box  >
          <Box  display = "flex" justifyContent = "space-between" >
          <Typography  variant = "h4" >
              {name}
           </Typography>
          </Box>

       
        <Box >
        <Box marginTop = "1em" display ="flex" width = "fit-content" >
          {columns && columns.slice(0,3) .map(item => <Column projectID = {id} key = {item.id} {...item} />)}
          <NewColumn open = {openForm} toggleModal = {toggleModal}/>
          </Box>
 
        </Box>
       </Box>
    )
}
const mapStateToProps = (state,ownProps) => ({

  project:selectProject(state,ownProps),
  columns:selectProjectColumns(state,ownProps)

})
Project.prototype = {
  project:PropTypes.object.isRequired,
  columns:PropTypes.arrayOf(PropTypes.object),
}
export default connect(mapStateToProps,) (Project)
