import VRHeroSection from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VRHeroSection.jsx";
import Vrbike from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrbike";
import Vrsol from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrsol";
import Vrtwo from "/src/Components/ServiceComponents/ImmersiveTech/vrtwo";

function VirtualReality() {
  return (
    <>
      <div className="bg-black">
        <VRHeroSection />
        <Vrtwo />
        <Vrbike />
        <Vrsol />
      </div>
    </>
  )
}
export default VirtualReality;