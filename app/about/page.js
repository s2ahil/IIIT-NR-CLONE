import React from "react";
import Image from "next/image";
// import HeadingWebsite from "@/assets/images/jpg/home/Headingwebsite.jpg";
// import IIITNR from "@/assets/images/jpg/home/iiitnrBuilding.jpg";

const About = () => {
  return (
    <div>


    
        {/* Main Content Section */}
        <div className="bg-green-100 w-full px-8 py-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Why One Should Join IIIT-NR</h2>

          {/* Academics Section */}
          <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Innovative Academics</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Core engineering courses from the first semester.</li>
            <li>Skill-first, theory-later approach with integrated projects.</li>
            <li>Fractal academics with modular courses for modern technologies.</li>
            <li>
              'T'-Education model for balanced breadth and depth of knowledge.
            </li>
            <li>
              Balanced exposure to hardware and software with diverse tools.
            </li>
            <li>Four mini-projects (4th–7th semesters) and one major project (8th semester).</li>
            <li>
              Elective subjects and interdisciplinary projects for holistic learning.
            </li>
            <li>
              Strong industry linkages for internships and industry electives.
            </li>
          </ul>

          {/* Research Section */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">State-of-the-Art Research Labs</h3>
          <p className="text-gray-700">
            IIIT-NR has cutting-edge labs such as Data Science, VLSI & Embedded Systems, AI & Deep Learning, IoT & Sensors, and more.
          </p>

          {/* Semester Abroad Section */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Semester Abroad Opportunities
          </h3>
          <p className="text-gray-700">
            Offers financial grants up to ₹5 Lakhs for 20 students per batch to pursue final semester projects at reputed foreign institutions.
          </p>

          {/* Research & Innovation */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Research & Innovation
          </h3>
          <p className="text-gray-700">
            Provides financial support for publishing research, participating in conferences, and creating prototypes.
          </p>

          {/* Personality Development */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Overall Personality Development
          </h3>
          <p className="text-gray-700">
            Focused on leadership, teamwork, and communication skills through workshops, clubs, and events.
          </p>

          {/* Extracurricular Activities */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Extracurricular Activities
          </h3>
          <p className="text-gray-700">
            Financial support up to ₹10,000 for participating in extracurricular competitions. State-of-the-art facilities for sports and cultural events.
          </p>
        </div>

       
    
      
    </div>
  );
};

export default About;
