import React from "react";
import ServerImage from "/src/assets/HeroImages/ServerImage.jpg"; // make sure path is correct
import ChooseUs from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerChoose";
import Details from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerDetail";
import ServerHero from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerHero";

function ServerPage() {
  return (
    <>
      <ServerHero />
      <ChooseUs />
      <Details />
    </>
  );
}

export default ServerPage;
