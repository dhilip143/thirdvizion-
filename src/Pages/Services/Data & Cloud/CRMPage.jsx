import React from "react";
import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMChallenges.jsx";
import CRMBenefits from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMBenefits.jsx";
import CrmHero from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/CRMHero";
import Crmdash from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/crmdash";


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
