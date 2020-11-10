import React from 'react'

//Import from Material-UI
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


/* STYLE FOR BACKDROP */
const useStyles = makeStyles((theme) => ({
    backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    },
}));


export const Loading = ({loading}) => {
    const classes = useStyles(); //This is for the material-ui styles 

    return(
        <>
        {/* This component will display when the API is loading */}
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        {/* End Backdrop */}
        </>
    )


}

