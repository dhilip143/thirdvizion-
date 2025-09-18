import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMChallenges.jsx";
import CrmHero from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMHero.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"

const CRMPage = () => {
  return (
    <>
      <div className="bg-black">
        <SparkleBg />
        <CrmHero />
        <CRMChallenges />
      </div>
    </>
  );
};

export default CRMPage;
