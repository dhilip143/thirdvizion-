// import React from "react";

// const salesforceFeatures = [
//   {
//     title: "Centralized Data Management",
//     description:
//       "Salesforce consolidates all customer and business data in one place, making it easily accessible for teams and ensuring consistent, accurate information across the organization.",
//   },
//   {
//     title: "Enhanced Customer Insights",
//     description:
//       "Salesforce’s built-in analytics and reporting tools provide deeper insights into customer behavior, preferences, and trends, enabling more targeted marketing and sales strategies.",
//   },
//   {
//     title: "Automated Workflows",
//     description:
//       "Salesforce automates repetitive tasks such as lead assignments, follow-up reminders, and approvals, freeing up time for teams to focus on higher-value activities.",
//   },
//   {
//     title: "Improved Collaboration",
//     description:
//       "Salesforce's collaborative tools, like Chatter, enable seamless communication across departments, ensuring that sales, marketing, and service teams work together efficiently.",
//   },
//   {
//     title: "Scalability for Growth",
//     description:
//       "Salesforce scales with your business, adapting to more users, new products, and expanding markets, with customizable features to meet evolving needs.",
//   },
//   {
//     title: "Improved Customer Retention",
//     description:
//       "With Salesforce's service cloud, teams can provide faster, more personalized support, improving customer satisfaction and increasing retention rates.",
//   },
// ];

// const SalesforceCards = () => {
//   return (
//     <section className="min-h-screen bg-black px-8 py-16">
//         <h2 className="text-4xl font-bold text-center text-teal-500 mb-12">BENIFITS OF CRM</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {salesforceFeatures.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-black border border-teal-400 rounded-2xl p-6 shadow-lg hover:shadow-teal-400/50 transition duration-300"
//           >
//             <h3 className="text-xl font-bold text-teal-400 mb-3">
//               {feature.title}
//             </h3>
//             <p className="text-gray-300">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SalesforceCards;
import React from "react";
import { FaDatabase, FaChartLine, FaRobot, FaUsers, FaExpand, FaHandshake } from "react-icons/fa";

const salesforceFeatures = [
  {
    title: "Centralized Data Management",
    description:
      "All customer and business data in one place—easily accessible, consistent, and accurate across your organization.",
    icon: <FaDatabase className="text-4xl text-teal-400" />,
  },
  {
    title: "Enhanced Customer Insights",
    description:
      "Gain deeper insights into customer behavior, preferences, and trends with built-in analytics and reports.",
    icon: <FaChartLine className="text-4xl text-teal-400" />,
  },
  {
    title: "Automated Workflows",
    description:
      "Automate repetitive tasks like lead assignments and approvals so your team can focus on high-value work.",
    icon: <FaRobot className="text-4xl text-teal-400" />,
  },
  {
    title: "Improved Collaboration",
    description:
      "With tools like Chatter, your sales, marketing, and service teams collaborate seamlessly across departments.",
    icon: <FaUsers className="text-4xl text-teal-400" />,
  },
  {
    title: "Scalability for Growth",
    description:
      "Easily scale with more users, products, and markets—customizable features adapt to your evolving needs.",
    icon: <FaExpand className="text-4xl text-teal-400" />,
  },
  {
    title: "Improved Customer Retention",
    description:
      "Deliver faster, personalized support with Service Cloud—boosting satisfaction and loyalty.",
    icon: <FaHandshake className="text-4xl text-teal-400" />,
  },
];

const SalesforceCards = () => {
  return (
    <section className="min-h-screen bg-black px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-500 mb-12">
        BENEFITS OF CRM
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {salesforceFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg hover:shadow-teal-500/40 transition duration-300"
          >
            {/* Icon */}
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-teal-900/30 group-hover:bg-teal-700/30 transition">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalesforceCards;

