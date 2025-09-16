import React from "react";
import WebStack from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebStack";
import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import WebDesignScroll from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebDesignScroll.jsx";

export default function WebsitePage() {
  return (
    <main>
      <section className="snap-section">
        <WebHero />
      </section>

      <section className="snap-section">
        <WebDesignScroll />
      </section>

      <section className="snap-section bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
            The technologies we love...
          </p>
        </div>
        <div className="w-full">
          <WebStack />
        </div>
      </section>

      <section className="snap-section">
        <WebProjects />
      </section>
    </main>
  );
}
