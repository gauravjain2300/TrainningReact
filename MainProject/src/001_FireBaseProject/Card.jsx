import React from "react";

export default function Card() {
  return (
    <Box class="Main-container">
      <Box class="wrapper">
        <Box class="banner-image"> </Box>
        <h1> Toyota Supra</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </Box>
      <Box class="button-wrapper">
        <button class="btn outline">DETAILS</button>
        <button class="btn fill">BUY NOW</button>
      </Box>
    </Box>
  );
  // </div>
}
