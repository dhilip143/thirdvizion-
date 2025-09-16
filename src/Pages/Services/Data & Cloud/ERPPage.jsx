import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx";
import Benefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";

export default function ERPPage() {
  return (
    <>
      <ERPHero />
      <Benefits />
      <ERPAnalytics />
    </>
  );
}
