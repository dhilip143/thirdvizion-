import { useEffect } from "react";


import ARone from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARone";
import ARtwo from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARtwo";
import ARthree from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARthree";

function VirtualReality() {
 

  return (
    <div className="bg-black">
      <ARone />
      <ARtwo />
      <ARthree />
    </div>
  );
}

export default VirtualReality;
