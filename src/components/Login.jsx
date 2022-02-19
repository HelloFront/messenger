import { Container, Grid, Button } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../index';
import firebase from 'firebase/compat/app';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);

    console.log(user);
  }
  return ( 
    <Container>
      <Grid container
        style={{height: window.innerHeight - 80}}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid 
          style={{border: '1px solid', borderRadius: '3px', height: '300px', width: '500px', backgroundColor: 'rgb(245 254 255)'}}
          container
          justifyContent={"center"}
          alignItems={"center"}
        > 
           <Button onClick={login} variant='outlined'> Enter with Google </Button>
        </Grid>
      </Grid>
    </Container>
   );
}
 
export default Login;