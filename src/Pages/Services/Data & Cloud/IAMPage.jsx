import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMChooseUs";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMBenefit";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMHero";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import IAMDashboard from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMDashboard";

const IAMPage = () => {

  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} speed={0.8} color="253, 199, 0" />
        <IAMHero />
        <IAMDashboard />
        <WhyChoose />
        <IAMBenefits />
      </div>
    </>
  );
};

export default IAMPage;
