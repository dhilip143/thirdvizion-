import WebStack from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebStack";
import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import WebDesignScroll from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebDesignScroll.jsx";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import WebCTA from "../../../Components/ServiceComponents/Development&Software/WebsitePage/WebCTA";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"

const WebsitePage = () => {

  return (
    <>
      <div className="bg-black">
        <SparkleBg />
        <WebHero />
        <WebDesignScroll />

        <section className="mt-20 lg:mt-0 lg:min-h-screen w-full flex flex-col items-center justify-center px-6 font-inter-tight">
          {/* Tech Stack Section */}
          <div className="text-center max-w-5xl mb-16">
            <TextReveal>
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0 }}
                className="w-full text-4xl md:text-5xl xl:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg"
              >
                How We Power Your <span className="text-[#00d3f3]">Digital Experience</span>
              </motion.h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0 }}
                className="mt-4 text-md md:text-xl text-gray-300 leading-relaxed"
              >
                The technologies we love and use to build lightning-fast,
                scalable, and beautiful experiences.
              </motion.p>
            </TextReveal>
          </div>

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
