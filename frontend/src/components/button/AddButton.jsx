import React from 'react'
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import {Typography} from '@mui/material';






function AddButton() {
  
  return (

    <Button variant="contained" startIcon={
      <IconButton  color="secondary">
    <PersonAddIcon />
    </IconButton>}

size="small"
  >
 

 <span style={{color:"white" ,paddingTop:5 , marginLeft:-8}}>Add Youth</span>

  
    
  </Button>
  )
}

export default AddButton