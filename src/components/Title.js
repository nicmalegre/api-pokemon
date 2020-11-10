import React from 'react';

import {Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

import src from '../assets/img/nicolasalegre.jpg'



//ESTO SE UTILIZA PARA DARLE ESTILO A LA NAVBAR
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    [theme.breakpoints.down('sm')]:{
      avatar: {display:'none'}
    },
  }));

const Title = () => {
  const classes = useStyles();  

  return ( 
      <>
    <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"#3f51b5"}}>
          <Container justify='center'>
            <Toolbar style={{padding:0}}>
                <h1 style={{fontSize: '40px'}}>Pokemon Finder</h1>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                
                <div>
                    <label><b>Author:</b></label><br/>
                    <label id='a-name'>Nicolás Alegre</label><br/>
                    <a id='a-href' href='https://github.com/nicmalegre/api-pokemon'>Link to GitHub</a>
                </div>
                <div className={classes.avatar}>
                    <Avatar id="avatar" style={{height: '70px', width: '70px'}} alt="Nicolas Alegre" src={src} />
                </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div> 
      </>
  )
}

export default(Title);
