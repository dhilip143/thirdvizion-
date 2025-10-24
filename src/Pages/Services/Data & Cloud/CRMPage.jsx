import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMChallenges.jsx";
import CrmHero from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMHero.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"
import CrmVideo from "../../../Components/ServiceComponents/Data&Cloud/CRMPage/Crmvideo";

const CRMPage = () => {
  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} speed={0.8} color="255, 100, 103" />
        <CrmHero />
        <CRMChallenges />
        <CrmVideo/>
      </div>
    </>
  );
};

export default CRMPage;
