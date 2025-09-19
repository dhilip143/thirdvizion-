import WebStack from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebStack";
import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import WebDesignScroll from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebDesignScroll.jsx";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import WebCTA from "../../../Components/ServiceComponents/Development&Software/WebsitePage/WebCTA";
const WebsitePage = () => {

  return (
    <>
      <div className="bg-black">
       
        <WebHero />

        <WebDesignScroll />

        <section className="h-screen w-full flex flex-col items-center justify-center px-6">
          {/* Tech Stack Section */}
          <div className="text-center max-w-3xl mb-16">
            <TextReveal>
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
              >
                Our Tech Stack
              </motion.h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0 }}
                className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
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
