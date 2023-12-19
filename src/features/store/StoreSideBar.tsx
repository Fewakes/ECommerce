import React, { useState } from "react";
import Select from "react-select";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import Button from "../../ui/Button";

export default function StoreSideBar() {
  const [style, setStyle] = useState(null);
  const [price, setPrice] = useState([0, 100]);
  const [sort, setSort] = useState(null);
  const [discountOnly, setDiscountOnly] = useState(false);

  const styleOptions = [
    { value: "style1", label: "Style 1" },
    { value: "style2", label: "Style 2" },
  ];

  const sortOptions = [
    { value: "lowToHigh", label: "Low to High" },
    { value: "highToLow", label: "High to Low" },
    { value: "alphabetical", label: "Alphabetical" },
  ];

  const handleSliderChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div className="space-y-4 p-4">
      <label className="block text-lg text-white">Style</label>
      <Select
        className="w-full"
        value={style}
        onChange={setStyle}
        options={styleOptions}
        placeholder="Select style"
      />

      <label className="block text-lg text-white">Sort</label>
      <Select
        className="w-full"
        value={sort}
        onChange={setSort}
        options={sortOptions}
        placeholder="Sort"
      />

      <label className="block text-lg text-white">Price Range</label>
      <Box sx={{ width: "100%" }}>
        <Slider
          value={price}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => `$${value}`}
          min={0}
          max={100}
          sx={{
            color: "white",
            "& .MuiSlider-thumb": {
              backgroundColor: "white",
            },
            "& .MuiSlider-track": {
              backgroundColor: "white",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "gray",
            },
          }}
        />
      </Box>

      <label className=" flex items-center text-lg text-white">
        <input
          type="checkbox"
          className="mr-2"
          checked={discountOnly}
          onChange={() => setDiscountOnly(!discountOnly)}
        />
        Discount only
      </label>
      <Button type="primary">Apply</Button>
      <Button type="secondary">Apply</Button>
      <Button type="danger">Apply</Button>
    </div>
  );
}
