import React from 'react';

import {Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';


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
    [theme.breakpoints.down('sm')]:{
      textoFormularios: {display:'none'}
    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
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
                <div className={classes.avatar}>
                    <Avatar alt="Nicolas Alegre" src="https://drive.google.com/drive/u/1/folders/1ykdd-zPzemDhsDhxq00NGl5U2dDUBC0E" />
                </div>
                <div>
                    <p><u>Author:</u> Nicolás Alegre</p>
                    <p>See more in : <a href='https://github.com/nicmalegre/api-pokemon' style={{color: 'white !important'}}> Repo</a></p>
                </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div> 
      </>
  )
}

export default(Title);
