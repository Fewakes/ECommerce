import { Box, Slider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",

      contrastText: "#242105",
    },
  },
});

function MySlider() {
  const [value, setValue] = useState([50, 80]);
  // @ts-expect-error-error
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 className="font-bold text-white">Price Range</h2>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: 150 }}>
          <Slider
            color="primary"
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MySlider;
