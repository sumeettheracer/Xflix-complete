import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UploadVideo from "./UploadVideo";

const Header = ({ handleSearch, videoDetails, children }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        backgroundColor: "#202020",
        top: 0,
        overflowX: "hidden",
        // justifyContent: "space-between",
      }}
    >
      <Stack
        p={2}
        alignItems="center"
        sx={{
          position: "sticky",
          backgroundColor: "#202020",
          top: 0,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/">
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h4" color="red">X</Typography>
            <Typography variant="h4" color="white">Flix</Typography>
          </Box>
        </Link>
        {!videoDetails && (
          <Box className="search-bar-desktop">
            <input
              className="search-input"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </Box>
        )}
        <Box>
          <UploadVideo />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
