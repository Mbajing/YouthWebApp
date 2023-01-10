import React from "react";
import AddYouthForm from "../../components/addYouthForm/AddYouthForm";
import AddButton from "../../components/button/AddButton";
import ListTable from "../../components/listTable/ListTable";
import NavigationTab from "../../components/navigationTab/NavigationTab";
import Search from "../../components/search/Search";
import Widget from "../../components/widget/Widget";
import YouthsAndNumber from "../../components/youthsAndNumber/YouthsAndNumber";
import "./youth.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import colors from "../../constants/colors";
import Dashboard from "../../modules/Youth/dashboard/Dashboard";
import YouthPage from "../../modules/Youth/Youths/YouthPage";

export const Youth = () => {
  const [value, setValue] = useState("1");

  console.log(colors.PRIMARY_COLOR);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <Box sx={{ width: "50%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Dashboard" value="1" />
              <Tab label="Youths" value="2" />
              <Tab label="Registered Youths" value="3" />
              <Tab label="Executives" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Dashboard />
          </TabPanel>
          <TabPanel value="2">
            <YouthPage />
          </TabPanel>
          <TabPanel value="3">Registered Youths</TabPanel>
          <TabPanel value="4">Exceutives</TabPanel>
        </TabContext>
      </Box>

      {/* <AddYouthForm/> a littile adjustment*/}
    </div>
  );
};
