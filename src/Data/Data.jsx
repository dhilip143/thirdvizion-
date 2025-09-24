
import image1 from "/src/assets/Blog1/BlogImage1.jpeg";
import BlogImage1 from "/src/assets/Blog1/BlogImage1.jpeg";
import BlogImage2 from "/src/assets/Blog1/BlogImage2.jpeg";
import BlogImage3 from "/src/assets/Blog1/BlogImage3.jpeg";
import BlogImage4 from "/src/assets/Blog1/BlogImage4.jpeg";
import BlogImage5 from "/src/assets/Blog1/BlogImage5.jpeg";
import BlogImage6 from "/src/assets/Blog1/BlogImage6.jpeg";

const BlogsData = [
  {
    id: "1",
    title: "Immersive Tech",
    description: "How immersive technologies are shaping the future.",
    HeroImage: image1,
    innerContent: [
      `Spreadsheets. emails. tracking forms by hand.
Teams were being slowed down, and each week it cost hours.

At Thirdvizion Labs, we use intelligent, 𝙣𝙤-𝙘𝙤𝙙𝙚 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙤𝙣 to help businesses get One customer had trouble with a not smooth procedure
Forms are manually checked, emails are sent, data is logged into Airtable, and Slack is used to notify teams.

Each week, it took almost seven hours.

We intervened with a quick, customised automation utilising n8n:
→ Submission of the form → Automatic email sent → Airtable updated → A Slack ping was initiated.

We constructed it within three days.
𝙉𝙤𝙩 𝙖 𝙘𝙤𝙙𝙚. 𝙉𝙤𝙩 𝙘𝙤𝙢𝙥𝙡𝙞𝙘𝙖𝙩𝙚𝙙. 𝙊𝙣𝙡𝙮 𝙤𝙪𝙩𝙘𝙤𝙢𝙚𝙨.

The entire process now operates in the background without making any noise.
No work. No mistakes.

The outcome?
"Smarter work. Smoother flow."

"The best invisible hire we ever made," stated their COO.`
    ],
    sectionImages: [BlogImage1, BlogImage2, BlogImage3, BlogImage4, BlogImage5, BlogImage6],
  },
  {
    id: "2",
    title: "Virtual Reality",
    description: "Explore VR applications and business use cases.",
    HeroImage: image1,
    innerContent: [
      "Virtual Reality allows users to step inside computer-generated environments using VR headsets. It creates lifelike simulations for industries ranging from gaming to education.",
      "Healthcare, real estate, and retail are using VR to enhance training, improve customer experiences, and provide immersive product demonstrations."
    ],
    sectionImages: [image1, image1, image1, image1, image1, image1],
  },
  {
    id: "3",
    title: "Augmented Reality",
    description: "AR is revolutionizing shopping and interactive media.",
    HeroImage: image1,
    innerContent: [
      "Augmented Reality overlays digital information onto the physical world. Apps like Pokémon Go and Snapchat filters brought AR into everyday life.",
      "Retail, manufacturing, and healthcare industries use AR for virtual try-ons, assembly guidance, and advanced medical visualization."
    ],
    sectionImages: [image1, image1, image1, image1, image1, image1],
  },
  {
    id: "4",
    title: "Server Management",
    description: "Best practices for server monitoring and maintenance.",
    HeroImage: image1,
    innerContent: [
      "Server management ensures that systems are secure, efficient, and reliable. It includes monitoring server performance and applying security patches.",
      "Modern server management integrates AI tools and cloud automation to prevent downtime and balance workloads effectively."
    ],
    sectionImages: [image1, image1, image1, image1, image1, image1],
  },
  {
    id: "5",
    title: "Web Development",
    description: "Building responsive and scalable websites.",
    HeroImage: image1,
    innerContent: [
      "Web development uses HTML, CSS, JavaScript, and frameworks like React and Angular to create user-friendly websites.",
      "With mobile-first design becoming the standard, modern websites must be responsive, scalable, and optimized for performance."
    ],
    sectionImages: [image1, image1, image1, image1, image1, image1],
  },
];

export default BlogsData;


// Services => Immersive Tech => Vr
const VrData = [
  {
    id: "enterpriseVR",
    title: "Enterprise VR Solutions",
    description:
      "Transform your business operations with our cutting-edge virtual reality solutions designed for enterprise applications.",
    icon: "🏢",
    features: [
      "Virtual training simulations",
      "3D product visualizations",
      "Remote collaboration spaces",
      "Data visualization in VR",
    ],
  },
  {
    id: "immersiveExperiences",
    title: "Immersive Experiences",
    description:
      "Create unforgettable virtual experiences that engage customers and elevate your brand presence.",
    icon: "🌌",
    features: [
      "Brand activation experiences",
      "Virtual showrooms",
      "Interactive product demos",
      "360° marketing content",
    ],
  },
  {
    id: "vrDevelopment",
    title: "VR Development",
    description:
      "From concept to deployment, our team builds custom VR applications tailored to your specific needs.",
    icon: "🛠️",
    features: [
      "Custom VR application development",
      "Multi-platform compatibility",
      "Performance optimization",
      "Ongoing support & maintenance",
    ],
  },
];
export { VrData };

const StatsData = [
  { value: "8+", label: "Years Experience" },
  { value: "285+", label: "VR Projects" },
  { value: "97%", label: "Client Satisfaction" },
  { value: "42+", label: "VR Experts" },
];
export { StatsData };