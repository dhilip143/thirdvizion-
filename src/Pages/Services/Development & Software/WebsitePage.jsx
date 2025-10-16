import WebStack from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebStack";
import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import WebDesignScroll from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebDesignScroll.jsx";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import WebCTA from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebCTA";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"

const WebsitePage = () => {

  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} color="0, 211, 243" speed={0.8} />
        <WebHero />
        <WebDesignScroll />

        <section className="mt-20 lg:mt-0 lg:min-h-screen w-full flex flex-col items-center justify-center px-6 font-inter-tight">
          {/* Tech Stack Section */}
          
          <div className="w-full">
            <WebStack />
          </div>
        </section>

        <WebProjects />
        <WebCTA />
      </div>
    </>
  );
};

export default WebsitePage;
