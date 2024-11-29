import React from "react";
import Image from "next/image";
// import HeadingWebsite from "@/assets/images/jpg/home/Headingwebsite.jpg";
// import IIITNR from "@/assets/images/jpg/home/iiitnrBuilding.jpg";

const About = () => {
  return (
    <div>
      {/* Main Content Section */}
      <div className="w-full px-8 py-6">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Why You'll Love IIIT Naya Raipur
        </h2>

        {/* Academics Section */}
        <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Dynamic Academics</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Experience hands-on engineering from day one at IIIT NR.</li>
          <li>A unique skill-first approach with practical projects embedded in every semester.</li>
          <li>Cutting-edge modular courses tailored for future technologies.</li>
          <li>
            An innovative 'T'-Education model ensures a blend of depth and breadth in knowledge.
          </li>
          <li>
            Gain expertise in both hardware and software using diverse tools and technologies.
          </li>
          <li>Engage in multiple mini-projects leading up to a final major project in the 8th semester.</li>
          <li>
            Choose from interdisciplinary electives for an all-rounded academic journey.
          </li>
          <li>
            Strong industry connections provide unmatched internship and elective opportunities.
          </li>
        </ul>

        {/* Research Section */}
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Advanced Research Labs</h3>
        <p className="text-gray-700">
          Discover the future at IIIT NR with state-of-the-art labs in Data Science, AI, IoT, and more.
        </p>

        {/* Semester Abroad Section */}
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Semester Abroad Experiences
        </h3>
        <p className="text-gray-700">
          Love the global exposure IIIT NR offers, with financial support of up to ₹5 Lakhs for international projects.
        </p>

        {/* Research & Innovation */}
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Fueling Research & Innovation
        </h3>
        <p className="text-gray-700">
          IIIT NR nurtures innovation with grants for research publications, conferences, and prototype development.
        </p>

        {/* Personality Development */}
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Holistic Personality Growth
        </h3>
        <p className="text-gray-700">
          Become a leader at IIIT NR through workshops, club activities, and teamwork-focused events.
        </p>

        {/* Extracurricular Activities */}
        <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          Unmatched Extracurriculars
        </h3>
        <p className="text-gray-700">
          From sports to cultural events, IIIT NR supports your passions with financial aid and state-of-the-art facilities.
        </p>
      </div>
    </div>
  );
};

export default About;
