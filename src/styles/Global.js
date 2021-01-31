import { makeStyles } from "@material-ui/core";

export const GlobalStyles = makeStyles((theme) => ({

    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
   
      btn: {
        margin: theme.spacing(3, 0, 2),
      },

      title:{
          margin:theme.spacing(2,0)
      },

      toolbar: theme.mixins.toolbar,
   
}))