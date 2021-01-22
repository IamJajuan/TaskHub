import { makeStyles } from "@material-ui/core";

export const FooterStyles = makeStyles((theme) => ({

    footer:{
        background:theme.palette.primary.main,
        padding: theme.spacing(3, 0),
        marginTop:'auto',
        color:'#fff'
    
    },
    footerContainer:{

        display:'flex',
        justifyContent:"space-between",
    },

    footerBtn: {
      
        paddingLeft:0,
        paddingRight:0,
        color:"white"
    },

   
   
}))
