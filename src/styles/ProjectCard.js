import { makeStyles } from "@material-ui/core";

export const ProjectCardStyles = makeStyles((theme) => ({

   projectCardActions:{

    display:'flex',
    justifyContent:"space-between"
   },

  
    projectCard: {
      display: 'flex',
      flexDirection: 'column',
    },

    projectCardContent: {
      flexGrow: 1,
    },
  
}))
