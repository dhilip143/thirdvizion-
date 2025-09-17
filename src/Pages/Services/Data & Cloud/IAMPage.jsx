import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMChooseUs";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMBenefit";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMHero";

const IAMLanding3D = () => {

  return (
    <>
        <IAMHero />
      <WhyChoose />
      <IAMBenefits />
    </>
  );
};

export default IAMLanding3D;
