import ContactForm from "/src/Components/ContactComponents/ContactForm";
import Map from "/src/Components/ContactComponents/Map";
import ContactHero from "/src/Components/ContactComponents/ContactHero.jsx"

const ContactPage = () => {
  return (
    <>
    <div className="bg-black">
     <ContactHero />
      <ContactForm />
      <Map />
      </div>
    </>
  );
};

export default ContactPage;
