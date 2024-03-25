import React, { useState } from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const SearchBar = ({ text }) => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handleSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };

  return (
    <Box display="flex">
      {openSearchBar ? (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleSearch}
                sx={{
                  textTransform: "capitalize",
                }}>
                <CloseIcon color="black" />
              </IconButton>
            ),
            sx: { bgcolor: "white", borderRadius: "5px" },
          }}
        />
      ) : null}
      <IconButton
        onClick={handleSearch}
        sx={{
          color: "white",
          textTransform: "capitalize",
        }}>
        <SearchIcon sx={{ color: { xs: "black", lg: "white" } }} />
        <Typography component={"div"} sx={{ lg: "block", xs: "none" }}>
          {text}
        </Typography>
      </IconButton>
    </Box>
  );
};

export default SearchBar;
