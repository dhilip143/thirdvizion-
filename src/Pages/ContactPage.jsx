import { useEffect } from "react";


import ContactHero from "/src/Components/ContactComponents/ContactHero.jsx";
import ContactForm from "/src/Components/ContactComponents/ContactForm.jsx";
import Map from "/src/Components/ContactComponents/Map.jsx";

const ContactPage = () => {


  return (
    <div className="bg-black">
      <ContactHero />
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPage;
