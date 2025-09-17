import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx";
import Benefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";
import ERPDashboard from "../../../Components/ServiceComponents/Data&Cloud/ERPPage/ERPDashboard";

export default function ERPPage() {
  return (
    <>
    <div className="bg-black">
      <ERPHero />
      <ERPDashboard />
      <Benefits />
      <ERPAnalytics />
      </div>
    </>
  );
}
