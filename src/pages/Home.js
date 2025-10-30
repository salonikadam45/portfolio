import React from "react";
import { FaLaptopCode, FaRobot, FaServer, FaDatabase, FaPython, FaJs, FaReact } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import profilePic from "../assets/saloni.jpg";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    skills: ["HTML", "CSS", "Java"],
    color: "bg-blue-500",
  },
  {
    title: "SQL",
    icon: <FaDatabase />,
    skills: ["Database Management", "Querying", "Optimization"],
    color: "bg-green-500",
  },
  {
    title: "Python",
    icon: <FaPython />,
    skills: ["Backend Development", "Data Science", "Automation"],
    color: "bg-yellow-400",
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    skills: ["Dynamic Web Apps", "Interactive UIs"],
    color: "bg-orange-400",
  },
  {
    title: "AI & ML",
    icon: <FaRobot />,
    skills: ["LLMs", "RAG", "Chatbots", "NLP", "TensorFlow"],
    color: "bg-teal-500",
  },
  {
    title: "React.js",
    icon: <FaReact />,
    skills: ["Component-Based UIs", "State Management", "Hooks"],
    color: "bg-purple-400",
  },
];

const toolkitCategories = [
  {
    title: "Networking & Analysis",
    tools: ["Wireshark", "Cisco Packet Tracer"],
    borderColor: "border-cyan-400",
  },
  {
    title: "Automation & IoT",
    tools: ["UiPath", "ThingSpeak"],
    borderColor: "border-lime-400",
  },
  {
    title: "Engineering & Data",
    tools: ["MATLAB"],
    borderColor: "border-amber-400",
  },
  {
    title: "Creative & Design",
    tools: ["Spline", "Canva"],
    borderColor: "border-fuchsia-400",
  },
];

export default function Home() {
  return (
    <section className="pt-20 sm:pt-16 md:pt-24 bg-cream dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-textDark fark:text-gray-100">
              Hey There, I'm {" "}
              <span className="text-teal-500"> Saloni Kadam</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
              Exploring the synergy of{" "}
              <span className="text-orange-500 font-semibold">AI</span> and web
              development to design{" "}
              <span className="text-orange-500 font-semibold">intelligent solutions</span>{" "}
              that empower the future of technology.
            </p>

            <p className="text-sm sm:text-basae font-medium text-gray-700 dark:text-gray-200 mb-6 ">
              salonikdm0305@gmail.com
            </p>
            
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative flex justify-center py-4 md:py-8">
              <img
                src={profilePic}
                alt="Porfolio"
                className="mx-auto rounded-full border-4 border-teal-400 shadow-lg object-cover w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56"
                style={{ objectPosition: 'center 20%' }} // Adjust '20%' as needed
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-textdark dark:text-gray-100 mb-8 text-center">
          Core Skill Areas
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div
                  className={`${category.color} p-4 rounded-full text-white text-2xl`}>
                  {category.icons}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-textDark dark:text-gray-100 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {category.skills.join(",")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-textdark dark:text-gray-100 mb-8 text-center">
          Tools & Technologies I Work With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {toolkitCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-t-4 ${category.borderColor}`}
            >
              <h3 className="text-lg font-bold text-textDark dark:text-gray-100 mb-3">
                {category.title}
              </h3>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
                {category.tools.map((tool, toolIdx) => (
                  <li key={toolIdx}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}