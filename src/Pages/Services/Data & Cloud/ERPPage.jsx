import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx";
import ERPBenefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";
import ERPDashboard from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPDashboard";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

export default function ERPPage() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg speed={0.8} count={20} color="124, 134, 255" />
        <ERPHero />
        <ERPDashboard />
        <ERPBenefits />
        <ERPAnalytics />
      </div>
    </>
  );
}
