import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx";
import Benefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";
import ERPDashboard from "../../../Components/ServiceComponents/Data&Cloud/ERPPage/ERPDashboard";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

export default function ERPPage() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg />
        <ERPHero />
        <ERPDashboard />
        <Benefits />
        <ERPAnalytics />
      </div>
    </>
  );
}
