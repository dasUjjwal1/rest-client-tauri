import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { type SyntheticEvent, useState } from "react";
import Body from "./Body";

const DataComponent = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box display={"flex"} flexDirection={"column"} flex={1}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Params" value="1" />
            <Tab label="Authorization" value="2" />
            <Tab label="Headers" value="3" />
            <Tab label="Body" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel sx={{ flex: 1, display: "flex" }} value="4">
          <Body />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DataComponent;
