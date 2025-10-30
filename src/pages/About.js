import React, { useState } from "react";

const educationHistory = [
  {
    degree: "Bachelor of Technology (B.Tech) in Internet of Things (IoT)",
    university: "Thakur college of engineering and technology, Kandivali East",
    years: "2023 - 2027",
    percentage: "Pursuing/9.5 CGPA",
    details: [
      "Artificial Intelligence and Machine Learning",
      "Internet of Things (IoT)",
      "Blockchain technology",
    ],
    color: "border-pink-400",
  },
  {
    degree: "HSC",
    university: "PACE Science Junior College, Dadar",
    years: "2021 - 2022",
    percentage: "76.50%",
    details: ["MHT-CET", "JEE Mains"],
    color: "border-teal-400",
  },
  {
    degree: "SSC",
    university: "Abhyudaya Education Society's High School",
    years: "2011 - 2021",
    percentage: "92.40%",
    details: ["Primary & Secondary Education", "Mathematics Olympiad"],
    color: "border-orange-400",
  },
];

export default function About() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- About Me Section --- */}
        <h2 className="text-4xl font-bold text-textDark dark:text-gray-100 mb-4 text-center">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 text-lg text-center leading-relaxed px-8 sm:px-16 lg:px-32">
  Exploring the synergy of{" "}
  <span className="text-teal-500 font-semibold">Artificial Intelligence (AI)</span>{" "}
  and{" "}
  <span className="text-teal-500 font-semibold">Web Development</span>{" "}
  to design intelligent, data-driven, and user-centric solutions that empower the future of technology. 
  Passionate about learning, building, and innovating to transform creative ideas into impactful 
  real-world applications that enhance user experience and drive digital evolution.
</p>



        {/* --- My Education Section --- */}
        <div className="container mx-auto px-4 mt-12 mb-20">
          <h2 className="text-4xl font-bold text-textDark dark:text-gray-100 mb-10 text-center">
            My Education
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            {educationHistory.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-t-4 ${item.color} transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-textDark dark:text-gray-100">
                    {item.degree}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {item.years}
                  </span>
                </div>
                <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">
                  {item.university}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Percentage: {item.percentage}
                </p>
                <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
                  {item.details.map((detail, detailIdx) => (
                    <li key={detailIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Contact Form Section --- */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 mx-auto border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-3xl font-bold text-teal-600 text-center mb-4">
            Get in Touch
          </h3>

          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full">
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(+91) 98765-43210"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message */}
          <div className="w-full">
            <label className="block text-sm font-medium text-textDark dark:text-gray-100 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
