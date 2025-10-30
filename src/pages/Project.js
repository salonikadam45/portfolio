import React from "react";
import profilePic from "../assets/saloni.jpg";
// Import all your project images
import amazonImg from "../assets/amazon.jpg";
import weatherImg from "../assets/weather.jpg";
import fireImg from "../assets/fire.jpg";
import obstacleImg from "../assets/obscale.jpg"; // Using your filename "obscale.jpg"
import hotelImg from "../assets/hotel.jpg";
import qrsImg    from "../assets/qrs.png";
import myntraImg    from "../assets/myntra.jpg";

const project = [
  {
    title: "Amazon Clone", // Corrected spelling
    description:
      "A clone of the Amazon e-commerce website, focusing on product display and cart functionality.",
    image: amazonImg, // Use the imported variable here
    link: "https://github.com/salonikadam45",
  },
  {
    title: "Myntra Clone", // Corrected spelling
    description:
      "A clone of the Myntra shopping website, focusing on various sections of the website.",
    image: myntraImg, // Use the imported variable here
    link: "https://github.com/salonikadam45",
  },
  {
    title: "Weather App",
    description:
      "A web-based weather application built with HTML, CSS, and a third-party weather API to fetch real-time data.",
    image: weatherImg, // Use the imported variable here
    link: "https://github.com/salonikadam45", // Add your GitHub link here
  },
  {
    title: "Fire Detection System",
    description:
      "An IoT-based fire detection and alert system using an ESP32 and a flame sensor to send real-time alerts.",
    image: fireImg, // Use the imported variable here
    link: "https://github.com/salonikadam45", // Add your GitHub link here
  },
  {
    title: "Obstacle Detection Robot",
    description:
      "An autonomous robot using Arduino Uno, an ultrasonic sensor, and a buzzer for obstacle avoidance.",
    image: obstacleImg, // Use the imported variable here
    link: "https://github.com/salonikadam45", // Add your GitHub link here
  },
  {
    title: "Hotel Management System",
    description:
      "A desktop application for managing hotel bookings, guest check-ins, and room service, built with a SQL database.",
    image: hotelImg, // Use the imported variable here
    link: "https://github.com/salonikadam45", // Add your GitHub link here
  },
  {
    title: "Personal Portfolio Website",
    description:
      "The portfolio you are currently viewing, built with React.js and Tailwind CSS to showcase my skills and projects.",
    image: profilePic, // Use the imported variable here
    link: "https://github.com/salonikadam45/portfolio", // Add your GitHub link here
  },
  {
    title: "Qr Code Generator",
    description:
      "A web application for generating QR codes from text or URLs, built with python.",
    image: qrsImg, // Use the imported variable here
    link: "https://github.com/salonikadam45/portfolio", // Add your GitHub link here
  },
];

export default function Project() {
  return (
    <section className="pt-24 bg-cream dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {project.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 border-t-4 border-orange-400 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 object-cover"
                onError={(e) => {
                  // Fallback in case picsum image fails
                  e.target.onerror = null; 
                  e.target.src="https://placehold.co/300x180/374151/E5E7EB?text=Project+Image";
                }}
              />
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1">
                {project.description}
              </p>
              <span className="mt-4 inline-block text-teal-500 font-semibold hover:underline">
                View on GitHub
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
