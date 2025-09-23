import ChooseUs from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerChoose";
import Details from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerDetail";
import ServerHero from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerHero";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import ServerService from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerService";

function ServerPage() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} color="5, 223, 114" speed={0.8} />
        <ServerHero />
        <ServerService />
        <ChooseUs />
        <Details />
      </div>
    </>
  );
}

export default ServerPage;
