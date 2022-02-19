import { Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
  return ( 
    <Grid container 
      style={{height: window.innerHeight - 70}}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid container 
        alignItems={'center'}
        direction={'column'}
      >
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </Grid>

    </Grid>
   );
}
 
export default Loader;