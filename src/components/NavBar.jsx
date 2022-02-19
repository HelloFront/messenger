import { AppBar, Box, Toolbar, Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export const NavBar = () => {
  const { auth } = useContext(Context);
  const [ user ] = useAuthState(auth);

  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent={"flex-end"}>
            {user 
            ? <NavLink to={LOGIN_ROUTE}>
                <Grid container alignItems={'center'}>
                  <Box p={1} style={{marginRight: '30px'}}>
                    <img src={user.photoURL} style={{width: '30px'}}/>
                    <p>{user.displayName}</p>
                  </Box>
                  <Button onClick={() => auth.signOut()} variant='outlined' color="inherit">Log out</Button>
                </Grid>
              </NavLink>
            : <NavLink to={CHAT_ROUTE}>
                <Button variant='outlined' color="inherit">Login</Button>
              </NavLink>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;