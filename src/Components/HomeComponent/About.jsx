import { motion } from 'framer-motion';
import img from "/src/assets/home/about1.png";
import img2 from "/src/assets/HomeImages/about2.png";

function About() {
  const text1 = `At ThirdVizion, we're more than just a technology company—we're innovators shaping the future. Our mission is to deliver cutting-edge solutions that not only solve challenges but also create new opportunities across industries. With a dedicated team of experts, we bring ideas to life with seamless technology that transforms businesses.`;

  const text2 = `We pride ourselves on being a dynamic team of forward-thinkers, dedicated to addressing complex challenges with innovative, tailor-made solutions. Our mission is not just to keep up with technological advancements but to drive them, creating opportunities for businesses to thrive in a fast-paced, digital-first world.`;

  return (
    <div className='px-5 2xl:mt-28 bg-black min-h-screen w-full'>
      {/* Title */}
     <h2 
  className='font-outfit text-[32px] lg:text-[60px] text-center font-bold  text-[#FFD700] '
  style={{
    background: "linear-gradient(157deg, rgba(130,203,246,1) 0%, rgba(236,154,150,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "flex",
    justifyContent: "center",
    color: "#FFD700",
    
  }}>
  WHO ARE WE
</h2>

      {/* First Section */}
      <div className='lg:text-[24px] font-worksans md:flex md:gap-12 lg:gap-5 2xl:mt-20 text-white md:items-center md:justify-around 2xl:justify-center 2xl:gap-32 leading-relaxed w-full'>
        {/* Animated Text */}
        <motion.p 
          className="text-[18px] md:text-[24px] 2xl:text-2xl lg:w-[550px] text-center md:text-start font-normal"
          style={{
            color: "#ffffff"
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {text1}
        </motion.p>
        
        {/* Animated Image (Comes from Right) */}
        <motion.img 
          src={img} 
          alt="animatedimg" 
          className='lg:mr-20 md:mr-0 mt-5 md:w-[350px] md:h-[400px] lg:w-[500px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[550px] w-full max-w-[500px] mx-auto md:mx-0 floating-image'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Second Section */}
      <div className='lg:mt-16 mt-6 lg:text-[24px] font-worksans flex flex-col-reverse md:flex-row md:gap-3 text-white md:items-center lg:justify-around 2xl:justify-center 2xl:gap-32 leading-relaxed w-full'>
        {/* Animated Image (Comes from Left) */}
        <motion.img 
          src={img2} 
          alt="animatedimg" 
          className='md:mr-0 md:w-[380px] md:h-[400px] mt-5 lg:w-[500px] lg:h-[450px] 2xl:w-[600px] 2xl:h-[550px] w-full max-w-[500px] mx-auto md:mx-0 floating-image'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Animated Text */}
        <motion.p 
          className="text-[18px] md:text-[24px] 2xl:text-2xl lg:w-[550px] text-center md:text-end font-normal"
          style={{
            color: "#ffffff"
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {text2}
        </motion.p>
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        .floating-image {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Global Styles for Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        
        .font-worksans {
          font-family: 'Work Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default About;