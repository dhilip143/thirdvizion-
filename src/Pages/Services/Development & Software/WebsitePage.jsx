import WebStack from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebStack";
import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import { motion } from "framer-motion";

const WebsitePage = () => {
  return (
    <>
      <div className="bg-black">
        <WebHero />

        {/* WebStack Wrapper */}
        <section className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-6">
          {/* Title Section */}
          <div className="text-center max-w-3xl mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Our Tech Stack
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
              The technologies we love and use to build lightning-fast,
              scalable, and beautiful experiences.
            </p>
          </div>

          {/* Slider Section */}
          <div className="w-full">
            <WebStack />
          </div>
        </section>

        <WebProjects />
      </div>
    </>
  );
};

export default WebsitePage;
