import VRHeroSection from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VRHeroSection.jsx";
import Vrbike from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrbike";
import Vrsol from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrsol";
import Vrtwo from "/src/Components/ServiceComponents/ImmersiveTech/vrtwo";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"

function VirtualReality() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} speed={0.8} color="194, 122, 255" />
        <VRHeroSection />
        <Vrtwo />
        <Vrbike />
        <Vrsol />
      </div>
    </>
  )
}
export default VirtualReality;