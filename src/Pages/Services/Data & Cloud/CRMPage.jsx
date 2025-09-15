import React from "react";
import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMChallenges.jsx";
import CRMBenefits from "/src/Components/ServiceComponents/Data&Cloud/CRMBenefits.jsx";
import CrmHero from "../../../Components/ServiceComponents/Data&Cloud/CRMHero";
import Crmdash from "../../../Components/ServiceComponents/Data&Cloud/crmdash";


const CRMPage = () => {
  return (
    <>
      <CrmHero/>
      <CRMChallenges />
      <CRMBenefits />
      <Crmdash/>
    </>
  );
};

export default CRMPage;
