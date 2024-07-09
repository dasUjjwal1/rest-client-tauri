import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
type FormType = {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};
const UrlHandlerComponent = () => {
  const form = useForm<FormType>();
  const handleFormSUbmit = (val: FormType) => {
    console.log(val);
  };
  return (
    <form onSubmit={form.handleSubmit(handleFormSUbmit)}>
      <Box p={4} display={"flex"} gap={1}>
        <Controller
          name="method"
          control={form.control}
          render={({ field }) => (
            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">Select </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select"
                {...field}
              >
                <MenuItem value={"GET"}>GET</MenuItem>
                <MenuItem value={"POST"}>POST</MenuItem>
                <MenuItem value={"PUT"}>PUT</MenuItem>
                <MenuItem value={"PATCH"}>PATCH</MenuItem>
                <MenuItem value={"DELETE"}>DELETE</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="url"
          control={form.control}
          render={({ field }) => (
            <TextField
              size="small"
              label="URL"
              fullWidth
              placeholder="http://localhost:8080"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Button
          size="small"
          sx={{ width: 150 }}
          variant="contained"
          type="submit"
        >
          send
        </Button>
      </Box>
    </form>
  );
};

export default UrlHandlerComponent;
