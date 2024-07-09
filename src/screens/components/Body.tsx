import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { type ChangeEvent, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import CodeMirror from "@uiw/react-codemirror";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Typography } from "@mui/material";

const Body = () => {
  const [currentData, setCurrentData] = useState("none");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentData((event.target as HTMLInputElement).value);
  };
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"} flex={1}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={currentData}
          onChange={handleChange}
        >
          <FormControlLabel value="none" control={<Radio />} label="none" />
          <FormControlLabel
            value="Authorization"
            control={<Radio />}
            label="Authorization"
          />
          <FormControlLabel value="raw" control={<Radio />} label="raw" />
          <FormControlLabel value="binary" control={<Radio />} label="binary" />
          <FormControlLabel value="JSON" control={<Radio />} label="JSON" />
        </RadioGroup>
      </FormControl>
      <Box flex={1} display={"flex"}>
        <PanelGroup
          style={{ flex: 1, display: "flex" }}
          autoSaveId="example"
          direction="vertical"
        >
          <Panel defaultSize={300}>
            <Box border={"1px solid #ccc"} height={"100%"}>
              <CodeMirror
                value={value}
                height="300px"
                width="100%"
                onChange={onChange}
              />
            </Box>
          </Panel>
          <PanelResizeHandle style={{ height: "3px", background: "green" }} />
          <Panel style={{ flex: 1, display: "flex" }}>
            <Box></Box>
          </Panel>
        </PanelGroup>
      </Box>
    </Box>
  );
};

export default Body;
