import React from "react";
import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMChallenges.jsx";
import CRMBenefits from "/src/Components/ServiceComponents/Data&Cloud/CRMBenefits.jsx";
import CRMHero from "/src/Components/ServiceComponents/Data&Cloud/CRMHero.jsx";

const CRMPage = () => {
  return (
    <>
      <CRMHero />
      <CRMChallenges />
      <CRMBenefits />
    </>
  );
};

export default CRMPage;
