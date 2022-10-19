import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import colors from '../../../constants/colors';
import Dashboard  from "../dashboard/Dashboard"
import OfferingPage from '../offerings/OfferingPage';
import IncomePage from '../income/IncomePage';

function NavigationTab() {

    const [value, setValue] = useState('1');

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
        <Box sx={{ width: '80%', typography: 'body1'  }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="Offerings" value="2" />
            <Tab label="Income" value="3" />
            <Tab label="Register a Youth" value="4" />
            <Tab label="Expenses" value="5" />

          </TabList>
        </Box>
        <TabPanel value="1"><Dashboard/></TabPanel>
        <TabPanel value="2"><OfferingPage/></TabPanel>
        <TabPanel value="3"><IncomePage/></TabPanel>
        <TabPanel value="4">Register a Youth</TabPanel>
        <TabPanel value="5">Expenses</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default NavigationTab