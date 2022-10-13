import React from 'react'
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import colors from '../../constants/colors';



function NavigationTab() {
  const [value, setValue] = useState('one');

  console.log(colors.PRIMARY_COLOR)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
  <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='primary'
        indicatorColor= 'primary'
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
    </div>
  )
}

export default NavigationTab