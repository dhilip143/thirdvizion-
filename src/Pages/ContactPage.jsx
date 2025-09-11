import ContactForm from "/src/Components/ContactComponents/ContactForm";
import Map from "/src/Components/ContactComponents/Map";
import ContactHero from "/src/Components/ContactComponents/ContactHero.jsx"

const ContactPage = () => {
  return (
    <>
     <ContactHero />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactPage;
