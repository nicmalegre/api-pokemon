import React from 'react';

import {Container, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


//ESTO SE UTILIZA PARA DARLE ESTILO A LA NAVBAR
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Title = () => {
  const classes = useStyles();  

  return ( 
    <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"#5B91F5"}}>
          <Container justify='center'>
            <Toolbar style={{padding:0}}>
                    <h1 style={{fontSize: '40px'}}>Pokemon Finder</h1>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
  )
}

export default(Title);
