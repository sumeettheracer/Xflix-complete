import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, AppBar, Toolbar, styled, TextField, InputAdornment, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UploadVideo from "./UploadVideo";
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'Gray',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


const Header = ({ handleSearch, videoDetails, children }) => {
  const matches = useMediaQuery('(min-width:750px)');
  return (
    <React.Fragment>
      <AppBar sx={{ bgcolor: "#202020" }}>
        <Toolbar sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/">
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4" color="red">X</Typography>
              <Typography variant="h4" color="white">Flix</Typography>
            </Box>
          </Link>
          {!videoDetails && (
              <>{matches&&(<CssTextField  onChange={(e) => { handleSearch(e) }} inputProps={{ style: { color: "white" } }} sx={{ width: "20rem" ,color:"white",}} label="Search" id="custom-css-outlined-input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="white" />
                  </InputAdornment>
                )
              }} />)}
              </>
          )}
          <Box>
            <UploadVideo />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
