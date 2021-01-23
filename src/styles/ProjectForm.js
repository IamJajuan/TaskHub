import { makeStyles } from "@material-ui/core";

export const ProjectFormStyles = makeStyles((theme) => ({
    
    
    projectForm:{
        position: 'absolute',
        maxWidth: 400,
        width:'70%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        left:'50%',
        top:'50%',
        transform:`translate(-${50}%, -${50}%)`,
    },


    projectInput:{
        marginBottom:'1em'
    },

    projectTitle:{

        textAlign:'center'
    }

}))