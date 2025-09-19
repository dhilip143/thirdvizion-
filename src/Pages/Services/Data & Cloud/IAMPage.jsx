import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMChooseUs";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMBenefit";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMHero";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

const IAMLanding3D = () => {

  return (
    <>
      <div className="bg-black">
        <SparkleBg />
        <IAMHero />
        <WhyChoose />
        <IAMBenefits />
      </div>
    </>
  );
};

export default IAMLanding3D;
