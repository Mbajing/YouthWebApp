import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

function NavigationTab() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
  return (
    <div>
   <Box sx={{ width: '50%', typography: 'body1'  }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="Youths" value="2" />
            <Tab label="Registered Youths" value="3" />
            <Tab label="Executives" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Dashboard</TabPanel>
        <TabPanel value="2">Youths</TabPanel>
        <TabPanel value="3">Registered Youths</TabPanel>
        <TabPanel value="4">Exceutives</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default NavigationTab