import React from 'react'
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography'

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static" className='h-20 bg-[#fff] shadow-md'>
        <Typography variant="h5" className='text-3xl text-black p-5 font-bold'>dashboard</Typography>
      </AppBar>
    </div>
  );
}

export default NavBar
