import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogContentText, DialogTitle,Button,DialogContent } from '@material-ui/core'

const DeleteConfirm = ({handleDelete,open,item, toggleAlert}) => {
    return (
       
            <Dialog open = {open} onClose = {toggleAlert}>
                <DialogTitle>{`Delete ${item}`} </DialogTitle>
                <DialogContent> <DialogContentText>{`Are you sure you want to delete this ${item.toLowerCase()}?`}</DialogContentText> </DialogContent>
                <DialogActions>
                    <Button onClick = {handleDelete} color = "primary" > Yes</Button>
                    <Button onClick = {toggleAlert} color = "primary" > No</Button>

                </DialogActions>
            </Dialog>
            
        
    )
}

DeleteConfirm.propTypes = {

    handleDelete:PropTypes.func.isRequired,
    open:PropTypes.bool.isRequired,
    item:PropTypes.string.isRequired,
    toggleAlert:PropTypes.func.isRequired,

}

export default DeleteConfirm
