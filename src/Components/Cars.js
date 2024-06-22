import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
// import Autobiography from "../utils/Autobiography.webp";
// import Sport from "../utils/Sport.webp";
// import Defender from "../utils/Defender.jpg";
// import Discovery from "../utils/Discovery.jpg";
// import Evoque from "../utils/Evoque.webp";

const Cars = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  console.log(name)
  return (
    <Box m="20px">
      <Header title={`Ranger Rover ${name}`} subTitle="Land Rover" />
      <Box>
        <img src={require(`../utils/${name}.jpg`)}
         alt={name}
          height="500px"
          />
      </Box>
    </Box>
  );
};

export default Cars;
