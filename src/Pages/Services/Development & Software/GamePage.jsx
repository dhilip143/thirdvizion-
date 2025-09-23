import GameHero from "/src/Components/ServiceComponents/Development&Software/GamePage/GameHero.jsx";
import CommingSoon from "/src/Components/ServiceComponents/Development&Software/GamePage/CommingSoon.jsx";
import KeyboardGame from "/src/Components/ServiceComponents/Development&Software/GamePage/KeyboardGame.jsx"
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
function GamePage() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} speed={0.8} />
        <GameHero />
        <div className="hidden md:block">
          <KeyboardGame />
        </div>

        <CommingSoon />
      </div>
    </>
  );
}
export default GamePage;
