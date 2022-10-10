import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Videos from "./components/Videos";
import VideoDetails from "./components/VideoPage";
import ScrollToTop from "./utils/ScrollToTop";

export const config = {
  //Mock server api
  // endpoint: 'https://937eb2d1-2b0f-42e1-af80-2c776b32bcc1.mock.pstmn.io/v1/videos'
  endpoint: "https://xflixbackendapp.herokuapp.com/v1/videos",
};
//<Route path="/" element={<Home />}></Route>
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box sx={{ backgroundColor: "#181818" }}>
      <Routes>
          <Route path="/" exact element={<Videos />}></Route>
          <Route path="/video/:id" element={<VideoDetails />}></Route>
      </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
