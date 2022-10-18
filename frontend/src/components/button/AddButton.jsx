import React from 'react'
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import {Typography} from '@mui/material';






function AddButton({handleClick ,title}) {
  
  return (

    <Button variant="contained" startIcon={
       
    <PersonAddIcon color="secondary" />
    
  }

size="small"
   onClick={handleClick}>
 

 <span style={{color:"white" ,paddingTop:5 , marginLeft:-8}}>{title}</span>

  
    
  </Button>
  )
}

export default AddButton