import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx"
import Benifits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx"

/* ========================= ERP Hero ========================= */
export default function ERPPage() {
  return (
    <>
    <ERPHero />
      <Benifits />
      <ERPAnalytics/>
    </>
  );
}
