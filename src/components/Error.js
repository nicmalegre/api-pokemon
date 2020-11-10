import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = ({isError}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isError);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>Ha ocurrido un error. Por favor vuelva a intentarlo.</Alert>
      </Snackbar>
    </div>
  );
}

export default Error